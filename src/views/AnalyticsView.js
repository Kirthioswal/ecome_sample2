// Metric & Dimension Analytics Exploration Engine View

import { toast } from '../components/Toast.js';

export function renderAnalyticsView(container) {
  let selectedMetric = 'revenue';
  let selectedDimension = 'state';

  const analyticsData = {
    state: [
      { dim: "Maharashtra", metricVal: "₹84,20,000", share: "33.9%", count: "6,240 orders", rto: "3.4%" },
      { dim: "Karnataka", metricVal: "₹52,10,000", share: "21.0%", count: "3,890 orders", rto: "1.8%" },
      { dim: "Delhi NCR", metricVal: "₹46,40,000", share: "18.7%", count: "3,410 orders", rto: "2.6%" },
      { dim: "Tamil Nadu", metricVal: "₹28,60,000", share: "11.5%", count: "2,120 orders", rto: "2.1%" },
      { dim: "Gujarat", metricVal: "₹21,80,000", share: "8.8%", count: "1,620 orders", rto: "2.9%" },
      { dim: "Others / Rest of India", metricVal: "₹15,14,500", share: "6.1%", count: "1,149 orders", rto: "4.8%" }
    ],
    courier: [
      { dim: "Delhivery Surface & Express", metricVal: "₹1,04,26,000", share: "42.0%", count: "7,618 orders", rto: "2.8%" },
      { dim: "BlueDart Air Apex", metricVal: "₹69,50,000", share: "28.0%", count: "5,080 orders", rto: "1.6%" },
      { dim: "DTDC Priority", metricVal: "₹39,71,000", share: "16.0%", count: "2,902 orders", rto: "4.2%" },
      { dim: "Shadowfax Direct", metricVal: "₹22,34,000", share: "9.0%", count: "1,632 orders", rto: "3.4%" },
      { dim: "Xpressbees Logistics", metricVal: "₹12,43,500", share: "5.0%", count: "910 orders", rto: "4.9%" }
    ],
    payment: [
      { dim: "Prepaid Razorpay (UPI / NetBanking)", metricVal: "₹1,58,87,000", share: "64.0%", count: "11,794 orders", rto: "1.1%" },
      { dim: "Cash on Delivery (COD)", metricVal: "₹89,37,500", share: "36.0%", count: "6,635 orders", rto: "4.8%" }
    ]
  };

  function render() {
    const rows = analyticsData[selectedDimension] || analyticsData.state;

    container.innerHTML = `
      <div class="view-content-wrapper">
        <div class="view-header">
          <div class="view-title-group">
            <div class="view-context-crumb">
              <span>EXPLORATION ENGINE</span>
              <span>/</span>
              <span>MULTI-DIMENSIONAL SLICING</span>
            </div>
            <h1 class="view-title">
              Deep Analytics & Dimension Slicing
            </h1>
            <div class="view-subtitle">Select any commercial metric + operational dimension to dissect business drivers</div>
          </div>

          <div class="view-actions-group">
            <button class="btn btn-outline btn-sm" id="save-report-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              Save Custom Report View
            </button>
            <button class="btn btn-primary btn-sm" id="export-analytics-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export Slice (CSV)
            </button>
          </div>
        </div>

        <!-- Query Builder Strip: Metric + Dimension + Period -->
        <div class="filter-bar" style="background:var(--bg-surface-elevated);">
          <div class="filter-group-left">
            <span style="font-size:11px; font-weight:700; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.06em;">SLICE QUERY:</span>

            <select class="input-control select-control" id="metric-select" style="width:180px; font-weight:600; color:var(--accent-cyan);">
              <option value="revenue" ${selectedMetric === 'revenue' ? 'selected' : ''}>Metric: Gross Revenue (₹)</option>
              <option value="orders" ${selectedMetric === 'orders' ? 'selected' : ''}>Metric: Order Volume</option>
              <option value="rto" ${selectedMetric === 'rto' ? 'selected' : ''}>Metric: RTO Attrition Rate</option>
            </select>

            <span style="color:var(--text-tertiary); font-size:12px;">BY</span>

            <select class="input-control select-control" id="dimension-select" style="width:200px; font-weight:600; color:var(--text-primary);">
              <option value="state" ${selectedDimension === 'state' ? 'selected' : ''}>Dimension: State / Geography</option>
              <option value="courier" ${selectedDimension === 'courier' ? 'selected' : ''}>Dimension: Courier Partner</option>
              <option value="payment" ${selectedDimension === 'payment' ? 'selected' : ''}>Dimension: Payment Mode (COD vs Prepaid)</option>
            </select>

            <span style="color:var(--text-tertiary); font-size:12px;">FOR</span>

            <span class="badge badge-neutral" style="font-family:var(--font-mono); font-size:11px;">Last 30 Days (MTD)</span>
          </div>

          <div class="filter-group-right">
            <span style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">
              Aggregated across 18,429 orders
            </span>
          </div>
        </div>

        <!-- Dimension Slice Breakdown Table -->
        <div class="table-container">
          <div class="table-toolbar">
            <div style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">
              Query Results: ${selectedMetric.toUpperCase()} by ${selectedDimension.toUpperCase()}
            </div>
            <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">
              Benchmark vs previous 30-day baseline
            </div>
          </div>

          <div class="table-responsive-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>${selectedDimension === 'state' ? 'State / Region' : selectedDimension === 'courier' ? 'Courier Carrier' : 'Payment Method'}</th>
                  <th>Revenue Contribution</th>
                  <th>Share of Total</th>
                  <th>Order Volume</th>
                  <th>RTO Rate</th>
                  <th>Visual Share Distribution</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map(r => `
                  <tr>
                    <td>
                      <div style="font-weight:700; color:var(--text-primary); font-size:13px;">${r.dim}</div>
                    </td>
                    <td class="tabular-nums" style="font-weight:700; color:var(--accent-cyan); font-size:14px;">${r.metricVal}</td>
                    <td class="tabular-nums" style="font-weight:600; color:var(--text-primary);">${r.share}</td>
                    <td class="tabular-nums" style="color:var(--text-secondary);">${r.count}</td>
                    <td class="tabular-nums" style="font-weight:600; color:${parseFloat(r.rto) > 3.0 ? 'var(--color-danger)' : 'var(--color-success)'};">${r.rto}</td>
                    <td style="width: 260px;">
                      <div class="ops-mini-bar" style="height:6px;">
                        <div class="ops-mini-bar-fill" style="width: ${r.share}; background:var(--accent-cyan);"></div>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    container.querySelector('#metric-select').onchange = (e) => {
      selectedMetric = e.target.value;
      render();
    };

    container.querySelector('#dimension-select').onchange = (e) => {
      selectedDimension = e.target.value;
      render();
    };

    container.querySelector('#save-report-btn').onclick = () => {
      toast.show({
        title: "Report Saved",
        message: `Saved view "${selectedMetric.toUpperCase()} by ${selectedDimension.toUpperCase()}" to your workspace dashboard.`,
        type: "success"
      });
    };

    container.querySelector('#export-analytics-btn').onclick = () => {
      toast.show({
        title: "Slice Exported",
        message: "EcomIQ_Dimension_Slice_Report.csv downloaded.",
        type: "success"
      });
    };
  }

  render();
}
