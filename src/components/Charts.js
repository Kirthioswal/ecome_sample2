// Custom Interactive SVG Revenue Chart & Data Visualizations

import { MOCK_REVENUE_CHART } from '../data/mockData.js';

export class RevenueChart {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.timeframe = '30d';
    this.showCompare = true;
    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  setTimeframe(tf) {
    this.timeframe = tf;
    this.render();
  }

  toggleCompare(show) {
    this.showCompare = show;
    this.render();
  }

  render() {
    const data = MOCK_REVENUE_CHART[this.timeframe] || MOCK_REVENUE_CHART['30d'];
    const width = 860;
    const height = 240;
    const padding = { top: 20, right: 30, bottom: 35, left: 60 };

    const maxVal = Math.max(...data.map(d => Math.max(d.revenue, d.prevRevenue || 0))) * 1.15;
    const minVal = 0;

    const getX = (idx) => padding.left + (idx / (data.length - 1)) * (width - padding.left - padding.right);
    const getY = (val) => height - padding.bottom - ((val - minVal) / (maxVal - minVal)) * (height - padding.top - padding.bottom);

    // Build Current Period Path (smooth Bezier)
    let currentPathD = '';
    let areaPathD = '';
    let prevPathD = '';

    data.forEach((d, i) => {
      const x = getX(i);
      const y = getY(d.revenue);
      const prevY = getY(d.prevRevenue || d.revenue * 0.85);

      if (i === 0) {
        currentPathD += `M ${x} ${y}`;
        areaPathD += `M ${x} ${height - padding.bottom} L ${x} ${y}`;
        prevPathD += `M ${x} ${prevY}`;
      } else {
        const prevX = getX(i - 1);
        const prevYPoint = getY(data[i - 1].revenue);
        const cx1 = prevX + (x - prevX) / 2;
        const cy1 = prevYPoint;
        const cx2 = prevX + (x - prevX) / 2;
        const cy2 = y;
        currentPathD += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x} ${y}`;
        areaPathD += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x} ${y}`;

        const prevPrevY = getY(data[i - 1].prevRevenue || data[i - 1].revenue * 0.85);
        prevPathD += ` C ${cx1} ${prevPrevY}, ${cx2} ${prevY}, ${x} ${prevY}`;
      }

      if (i === data.length - 1) {
        areaPathD += ` L ${x} ${height - padding.bottom} Z`;
      }
    });

    // Generate Y-axis gridlines
    const yTicks = [0, maxVal * 0.33, maxVal * 0.66, maxVal];
    const gridLinesHtml = yTicks.map(t => {
      const y = getY(t);
      const formatted = (t / 100000).toFixed(1) + 'L';
      return `
        <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="var(--border-subtle)" stroke-dasharray="3 3" />
        <text x="${padding.left - 10}" y="${y + 4}" fill="var(--text-tertiary)" font-size="10" font-family="var(--font-mono)" text-anchor="end">₹${formatted}</text>
      `;
    }).join('');

    // Generate X-axis labels
    const xLabelsHtml = data.map((d, i) => {
      if (data.length > 8 && i % 2 !== 0 && i !== data.length - 1) return '';
      const x = getX(i);
      return `<text x="${x}" y="${height - 10}" fill="var(--text-tertiary)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">${d.date}</text>`;
    }).join('');

    this.container.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" style="width:100%; height:100%; overflow:visible;">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#00E5FF" stop-opacity="0.0"/>
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#00E5FF" flood-opacity="0.5"/>
          </filter>
        </defs>

        <!-- Grid Lines & Y Labels -->
        ${gridLinesHtml}

        <!-- X Labels -->
        ${xLabelsHtml}

        <!-- Area Fill -->
        <path d="${areaPathD}" fill="url(#chartGradient)" />

        <!-- Previous Period Line (Dashed) -->
        ${this.showCompare ? `<path d="${prevPathD}" fill="none" stroke="var(--text-tertiary)" stroke-width="1.8" stroke-dasharray="4 4" opacity="0.6" />` : ''}

        <!-- Current Period Line -->
        <path d="${currentPathD}" fill="none" stroke="var(--accent-cyan)" stroke-width="2.5" filter="url(#glow)" />

        <!-- Crosshair Elements -->
        <line id="chart-crosshair" x1="0" y1="${padding.top}" x2="0" y2="${height - padding.bottom}" stroke="var(--accent-cyan)" stroke-width="1" stroke-dasharray="2 2" style="display:none;" />
        <circle id="chart-hover-dot" r="4.5" fill="var(--bg-deep)" stroke="var(--accent-cyan)" stroke-width="2.5" style="display:none;" />
      </svg>
      <div id="chart-tooltip-box" class="chart-tooltip"></div>
    `;

    this.attachInteractivity(data, width, height, padding, getX, getY);
  }

  attachInteractivity(data, width, height, padding, getX, getY) {
    const svg = this.container.querySelector('svg');
    const crosshair = svg.querySelector('#chart-crosshair');
    const hoverDot = svg.querySelector('#chart-hover-dot');
    const tooltip = this.container.querySelector('#chart-tooltip-box');

    svg.addEventListener('mousemove', (e) => {
      const rect = svg.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * width;

      // Find closest data point
      let closestIdx = 0;
      let minDiff = Infinity;
      data.forEach((d, i) => {
        const x = getX(i);
        const diff = Math.abs(x - mouseX);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      });

      const pt = data[closestIdx];
      const targetX = getX(closestIdx);
      const targetY = getY(pt.revenue);

      crosshair.setAttribute('x1', targetX);
      crosshair.setAttribute('x2', targetX);
      crosshair.style.display = 'block';

      hoverDot.setAttribute('cx', targetX);
      hoverDot.setAttribute('cy', targetY);
      hoverDot.style.display = 'block';

      const prevRev = pt.prevRevenue || Math.round(pt.revenue * 0.85);
      const deltaPct = (((pt.revenue - prevRev) / prevRev) * 100).toFixed(1);

      tooltip.innerHTML = `
        <div class="chart-tooltip-date">${pt.date}</div>
        <div class="chart-tooltip-row">
          <span>Revenue:</span>
          <span class="val" style="color:var(--accent-cyan);">₹${(pt.revenue / 100000).toFixed(2)}L</span>
        </div>
        <div class="chart-tooltip-row">
          <span>Previous:</span>
          <span class="val">₹${(prevRev / 100000).toFixed(2)}L (${deltaPct > 0 ? '+' : ''}${deltaPct}%)</span>
        </div>
        <div class="chart-tooltip-row">
          <span>Orders:</span>
          <span class="val">${pt.orders} orders</span>
        </div>
        <div class="chart-tooltip-row">
          <span>AOV:</span>
          <span class="val">₹${pt.aov}</span>
        </div>
      `;

      tooltip.style.display = 'block';
      const containerRect = this.container.getBoundingClientRect();
      const tooltipX = (targetX / width) * containerRect.width;
      const tooltipY = (targetY / height) * containerRect.height;

      tooltip.style.left = `${Math.min(tooltipX + 15, containerRect.width - 180)}px`;
      tooltip.style.top = `${Math.max(tooltipY - 70, 10)}px`;
    });

    svg.addEventListener('mouseleave', () => {
      crosshair.style.display = 'none';
      hoverDot.style.display = 'none';
      tooltip.style.display = 'none';
    });
  }
}
