// Executive Command Center Dashboard View

import { MOCK_KPIS, MOCK_AI_INSIGHTS, MOCK_COURIERS, MOCK_MARKETING, MOCK_ORDERS } from '../data/mockData.js';
import { RevenueChart } from '../components/Charts.js';

export function renderDashboardView(container, { onNavigate, onOpenOrder, onAction }) {
  const kpis = MOCK_KPIS;
  const aiFirst = MOCK_AI_INSIGHTS[0];

  container.innerHTML = `
    <div class="view-content-wrapper">
      <!-- View Header with Context & Range Presets -->
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONAL FLIGHT DECK</span>
            <span>/</span>
            <span>ALL CHANNELS & HUBS</span>
          </div>
          <h1 class="view-title">
            Executive Command Center
            <span class="badge badge-cyan" style="font-size:11px; padding:3px 8px;">LIVE FEED</span>
          </h1>
          <div class="view-subtitle">Consolidated operational, logistics, financial and marketing telemetry</div>
        </div>

        <div class="view-actions-group">
          <!-- Time Range Selector -->
          <div class="date-preset-pills" id="dashboard-date-presets">
            <button class="date-pill" data-tf="today">Today</button>
            <button class="date-pill" data-tf="yesterday">Yesterday</button>
            <button class="date-pill" data-tf="7d">7 Days</button>
            <button class="date-pill active" data-tf="30d">30 Days</button>
            <button class="date-pill" data-tf="custom">Custom</button>
          </div>

          <label class="compare-checkbox-label">
            <input type="checkbox" id="compare-period-toggle" checked />
            <span>vs Previous Period</span>
          </label>

          <button class="btn btn-outline btn-sm" id="dashboard-export-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export Brief
          </button>
        </div>
      </div>

      <div class="dashboard-grid">
        <!-- 1. HERO KPI AREA — BUSINESS PERFORMANCE COMMAND BANNER -->
        <section class="hero-kpi-block">
          <div class="hero-header-row">
            <div class="hero-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>
              <span>BUSINESS PERFORMANCE ENGINE • MTD PACING</span>
            </div>
            <div style="font-family:var(--font-mono); font-size:11px; color:var(--text-tertiary);">
              Target: ${kpis.business.targetRevenue} (${kpis.business.targetProgress}% Achieved)
            </div>
          </div>

          <div class="hero-main-stats">
            <!-- Large Primary KPI Block -->
            <div class="primary-stat-col">
              <div class="primary-stat-label">Consolidated Gross Revenue</div>
              <div class="primary-stat-val">
                ${kpis.business.revenue}
                <span class="primary-stat-delta">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
                  ${kpis.business.revenueChange}
                </span>
              </div>
              <div class="target-progress-row">
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${kpis.business.targetProgress}%;"></div>
                </div>
                <div class="target-text">Run-rate: ₹2.84 Cr Projected</div>
              </div>
            </div>

            <!-- Secondary Stat Block: Orders -->
            <div class="secondary-stat-col">
              <div class="secondary-stat-label">Total Orders</div>
              <div class="secondary-stat-val">${kpis.business.orders}</div>
              <div class="secondary-stat-delta positive">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
                ${kpis.business.ordersChange} vs prev
              </div>
            </div>

            <!-- Secondary Stat Block: AOV -->
            <div class="secondary-stat-col">
              <div class="secondary-stat-label">Average Order Value</div>
              <div class="secondary-stat-val">${kpis.business.aov}</div>
              <div class="secondary-stat-delta positive">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
                ${kpis.business.aovChange} vs prev
              </div>
            </div>

            <!-- Secondary Stat Block: Delivery Success -->
            <div class="secondary-stat-col">
              <div class="secondary-stat-label">Delivery Success</div>
              <div class="secondary-stat-val" style="color:var(--color-success);">${kpis.business.deliverySuccess}</div>
              <div class="secondary-stat-delta positive">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
                ${kpis.business.deliveryChange} (Ind. Avg 84%)
              </div>
            </div>

            <!-- Secondary Stat Block: RTO Rate -->
            <div class="secondary-stat-col">
              <div class="secondary-stat-label">Return to Origin (RTO)</div>
              <div class="secondary-stat-val" style="color:#60A5FA;">${kpis.business.rtoRate}</div>
              <div class="secondary-stat-delta positive">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                ${kpis.business.rtoChange} MoM drop
              </div>
            </div>
          </div>
        </section>

        <!-- 2. OPERATIONS PULSE STRIP -->
        <section class="ops-pulse-strip">
          <div class="ops-card">
            <div class="ops-card-header">
              <span>Pickup Success</span>
              <span class="badge badge-success" style="font-size:9px;">SLA MET</span>
            </div>
            <div class="ops-card-val">${kpis.operations.pickupSuccess}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 98.4%; background:var(--color-success);"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>In Transit Pipeline</span>
              <span style="font-family:var(--font-mono); font-size:10px;">${kpis.operations.inTransit} pkgs</span>
            </div>
            <div class="ops-card-val" style="color:var(--accent-cyan);">${kpis.operations.inTransit}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 65%; background:var(--accent-cyan);"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>Out for Delivery</span>
              <span style="font-family:var(--font-mono); font-size:10px;">Today</span>
            </div>
            <div class="ops-card-val">${kpis.operations.outForDelivery}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 82%; background:#60A5FA;"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>NDR Queue</span>
              <span class="badge badge-warning" style="font-size:9px;">${kpis.operations.ndrRate} RATE</span>
            </div>
            <div class="ops-card-val" style="color:var(--color-warning);">${kpis.operations.ndrActionRequired} <span style="font-size:11px; color:var(--text-tertiary); font-weight:normal;">Action Req.</span></div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 48%; background:var(--color-warning);"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>Avg Delivery Transit</span>
              <span style="font-family:var(--font-mono); font-size:10px;">Air + Surface</span>
            </div>
            <div class="ops-card-val">${kpis.operations.avgDeliveryTime}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 92%; background:var(--color-success);"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>Carrier SLA Adherence</span>
              <span style="font-family:var(--font-mono); font-size:10px;">Target 95%</span>
            </div>
            <div class="ops-card-val" style="color:var(--text-primary);">${kpis.operations.slaAdherence}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 94.8%; background:var(--accent-cyan);"></div>
            </div>
          </div>
        </section>

        <!-- 3. REVENUE INTELLIGENCE (INTERACTIVE CHART) + AI INTELLIGENCE PANEL -->
        <section class="two-col-layout">
          <!-- Revenue Interactive Chart -->
          <div class="chart-panel">
            <div class="chart-header">
              <div class="chart-title-group">
                <div style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">Revenue Intelligence Stream</div>
                <div class="chart-legend">
                  <div class="legend-item">
                    <span class="legend-line current"></span>
                    <span>Current Period (₹2.48 Cr)</span>
                  </div>
                  <div class="legend-item">
                    <span class="legend-line previous"></span>
                    <span>Previous Baseline</span>
                  </div>
                </div>
              </div>
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">
                Hover curve for hourly / daily telemetry
              </div>
            </div>

            <div class="chart-canvas-container" id="revenue-chart-mount"></div>
          </div>

          <!-- AI Intelligence Anomaly Detection Panel (Differentiator) -->
          <div class="ai-intel-panel">
            <div class="ai-panel-header">
              <div class="ai-panel-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>AI Operational Intelligence</span>
              </div>
              <span class="badge badge-rto" style="font-size:9px;">${aiFirst.severity}</span>
            </div>

            <div class="ai-intel-card">
              <div class="ai-intel-title">
                <span>${aiFirst.title}</span>
                <span style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">${aiFirst.timestamp}</span>
              </div>

              <div class="ai-intel-field">
                <div class="ai-intel-label">WHAT CHANGED</div>
                <div class="ai-intel-text">${aiFirst.what}</div>
              </div>

              <div class="ai-intel-field">
                <div class="ai-intel-label">ROOT CAUSE (WHY)</div>
                <div class="ai-intel-text">${aiFirst.why}</div>
              </div>

              <div class="ai-intel-field">
                <div class="ai-intel-label">FINANCIAL & OPERATIONAL IMPACT</div>
                <div class="ai-impact-box">
                  <div class="impact-metric">
                    <div class="impact-metric-label">Shipments Trapped:</div>
                    <div class="impact-metric-val" style="color:var(--color-warning);">${aiFirst.impact.affectedShipments} pkgs</div>
                  </div>
                  <div class="impact-metric">
                    <div class="impact-metric-label">Revenue at Risk:</div>
                    <div class="impact-metric-val" style="color:#F87171;">${aiFirst.impact.revenueAtRisk}</div>
                  </div>
                  <div class="impact-metric">
                    <div class="impact-metric-label">Primary Carrier:</div>
                    <div class="impact-metric-val">${aiFirst.impact.primaryCourier}</div>
                  </div>
                  <div class="impact-metric">
                    <div class="impact-metric-label">Payment Mix:</div>
                    <div class="impact-metric-val">${aiFirst.impact.paymentMix}</div>
                  </div>
                </div>
              </div>

              <div class="ai-intel-field">
                <div class="ai-intel-label">RECOMMENDED ACTION PLAYBOOK</div>
                <div class="ai-intel-text" style="color:var(--text-primary);">
                  Trigger automated WhatsApp re-slotting flow & route urgent packages to BlueDart express re-attempt.
                </div>
              </div>

              <button class="btn btn-primary btn-sm" id="hero-ai-cta-btn" style="margin-top:4px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                ${aiFirst.ctaText}
              </button>
            </div>
          </div>
        </section>

        <!-- 4. COURIER BENCHMARK MATRIX & FINANCE / MARKETING OVERVIEW -->
        <section class="multi-panel-row">
          <!-- Courier Matrix -->
          <div class="table-container">
            <div class="table-toolbar">
              <div style="display:flex; align-items:center; gap:8px;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <span style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Carrier Performance & SLA Matrix</span>
              </div>
              <button class="btn btn-outline btn-sm" id="view-couriers-btn">Compare All Couriers →</button>
            </div>
            <div class="table-responsive-wrapper">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Carrier Partner</th>
                    <th>Volume Share</th>
                    <th>Delivery %</th>
                    <th>NDR %</th>
                    <th>RTO %</th>
                    <th>Avg Speed</th>
                    <th>Cost/Order</th>
                    <th>Weight Disputes</th>
                    <th>SLA Score</th>
                  </tr>
                </thead>
                <tbody>
                  ${MOCK_COURIERS.map(c => `
                    <tr>
                      <td>
                        <div style="font-weight:700; color:var(--text-primary);">${c.name}</div>
                        <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">${c.totalShipments} consignments</div>
                      </td>
                      <td class="tabular-nums">${c.shipmentShare}</td>
                      <td class="tabular-nums" style="color:var(--color-success); font-weight:600;">${c.deliveryRate}</td>
                      <td class="tabular-nums" style="color:${parseFloat(c.ndrRate) > 6 ? 'var(--color-warning)' : 'var(--text-secondary)'}; font-weight:600;">${c.ndrRate}</td>
                      <td class="tabular-nums" style="color:${parseFloat(c.rtoRate) > 3.5 ? 'var(--color-danger)' : 'var(--text-secondary)'}; font-weight:600;">${c.rtoRate}</td>
                      <td class="tabular-nums">${c.avgDeliveryDays}</td>
                      <td class="tabular-nums" style="font-weight:600;">${c.costPerShipment}</td>
                      <td>
                        ${c.disputedWeightCount > 20 
                          ? `<span class="badge badge-warning">${c.disputedWeightCount} Disputed</span>` 
                          : `<span style="font-family:var(--font-mono); color:var(--text-tertiary);">${c.disputedWeightCount} cases</span>`}
                      </td>
                      <td>
                        <span class="badge ${c.grade.startsWith('A') ? 'badge-delivered' : 'badge-neutral'}">${c.grade} (${c.slaAdherence})</span>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Finance Snapshot & Marketing Telemetry -->
          <div style="display:flex; flex-direction:column; gap:var(--space-4);">
            <!-- Finance Snapshot -->
            <div class="chart-panel">
              <div class="chart-header">
                <div style="display:flex; align-items:center; gap:8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <span style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Logistics Finance & COD</span>
                </div>
                <button class="btn btn-outline btn-sm" id="view-finance-btn">Details →</button>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:4px;">
                <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Prepaid Wallet Balance</div>
                  <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--color-success); margin-top:2px;">${kpis.finance.walletBalance}</div>
                  <div style="font-size:10px; color:var(--text-tertiary);">Auto-reload at ₹2,00,000</div>
                </div>

                <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">COD Outstanding</div>
                  <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">${kpis.finance.codOutstanding}</div>
                  <div style="font-size:10px; color:var(--text-secondary);">₹18.4L remittance due in 48h</div>
                </div>
              </div>

              <!-- Cost of Logistics Bar -->
              <div style="margin-top:6px;">
                <div style="display:flex; justify-content:space-between; font-size:11px;">
                  <span style="color:var(--text-tertiary);">Net Logistics Cost: <strong style="color:var(--text-primary);">${kpis.finance.netLogisticsCostRatio} of GMV</strong></span>
                  <span style="color:var(--color-success); font-family:var(--font-mono);">-1.4% improvement</span>
                </div>
                <div class="finance-breakdown-bar">
                  <div class="f-bar-segment f-bar-freight" style="width: 68%;" title="Forward Freight: 68%"></div>
                  <div class="f-bar-segment f-bar-rto" style="width: 14%;" title="RTO Reverse Charges: 14%"></div>
                  <div class="f-bar-segment f-bar-cod" style="width: 11%;" title="COD Collection Fees: 11%"></div>
                  <div class="f-bar-segment f-bar-fuel" style="width: 7%;" title="Fuel & Handling Surcharge: 7%"></div>
                </div>
                <div class="finance-legend-grid">
                  <div class="finance-legend-item"><span class="legend-dot f-bar-freight"></span> Freight (68%)</div>
                  <div class="finance-legend-item"><span class="legend-dot f-bar-rto"></span> RTO Penalty (14%)</div>
                  <div class="finance-legend-item"><span class="legend-dot f-bar-cod"></span> COD Handling (11%)</div>
                  <div class="finance-legend-item"><span class="legend-dot f-bar-fuel"></span> Fuel Surcharge (7%)</div>
                </div>
              </div>
            </div>

            <!-- Marketing Performance Snapshot -->
            <div class="chart-panel">
              <div class="chart-header">
                <div style="display:flex; align-items:center; gap:8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  <span style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Marketing Acquisition Efficiency</span>
                </div>
                <button class="btn btn-outline btn-sm" id="view-marketing-btn">Ad Sets →</button>
              </div>

              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-top:2px;">
                <div style="background:var(--bg-base); padding:8px; border-radius:var(--radius-xs); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary);">Blended ROAS</div>
                  <div style="font-family:var(--font-mono); font-size:16px; font-weight:700; color:var(--color-success); margin-top:2px;">${kpis.marketing.blendedRoas}</div>
                </div>
                <div style="background:var(--bg-base); padding:8px; border-radius:var(--radius-xs); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary);">Blended CAC</div>
                  <div style="font-family:var(--font-mono); font-size:16px; font-weight:700; color:var(--text-primary); margin-top:2px;">${kpis.marketing.blendedCac}</div>
                </div>
                <div style="background:var(--bg-base); padding:8px; border-radius:var(--radius-xs); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary);">Paid Orders</div>
                  <div style="font-family:var(--font-mono); font-size:16px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">${kpis.marketing.paidOrders}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;

  // Mount Chart
  const chart = new RevenueChart('revenue-chart-mount');

  // Attach Dashboard Event Listeners
  const datePills = container.querySelectorAll('#dashboard-date-presets .date-pill');
  datePills.forEach(btn => {
    btn.onclick = () => {
      datePills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tf = btn.getAttribute('data-tf');
      chart.setTimeframe(tf);
    };
  });

  const compareToggle = container.querySelector('#compare-period-toggle');
  compareToggle.onchange = (e) => {
    chart.toggleCompare(e.target.checked);
  };

  container.querySelector('#dashboard-export-btn').onclick = () => {
    onAction('export-orders');
  };

  container.querySelector('#hero-ai-cta-btn').onclick = () => {
    onNavigate('ndr');
  };

  container.querySelector('#view-couriers-btn').onclick = () => {
    onNavigate('couriers');
  };

  container.querySelector('#view-finance-btn').onclick = () => {
    onNavigate('finance');
  };

  container.querySelector('#view-marketing-btn').onclick = () => {
    onNavigate('marketing');
  };
}
