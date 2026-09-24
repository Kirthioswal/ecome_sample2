// Weight Discrepancies & Courier Overcharge Audit View

import { MOCK_WEIGHT_DISPUTES } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderWeightView(container, { onAction }) {
  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONAL AUDIT</span>
            <span>/</span>
            <span>CARRIER FREIGHT RECONCILIATION</span>
          </div>
          <h1 class="view-title">
            Weight Reconciliation & Disputes
            <span class="badge badge-warning tabular-nums">89 FLAGGED CASES</span>
          </h1>
          <div class="view-subtitle">Automated optical scan reconciliation, volumetric bulge detection and dispute recovery</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-primary btn-sm" id="bulk-dispute-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.9 1.4l-2.4 7.4A2 2 0 0 0 4.1 19h15.8a2 2 0 0 0 1.9-2.2l-2.4-7.4A2 2 0 0 0 17.5 8h-11Z"/></svg>
            File Bulk Dispute (Save ₹41,200)
          </button>
        </div>
      </div>

      <!-- Financial Impact Telemetry Bar -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Flagged Carrier Overcharges</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-warning); margin-top:2px;">₹41,200.00</div>
          <div style="font-size:10px; color:var(--text-secondary);">89 shipments • DTDC & Xpressbees</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Dispute Recovery Rate</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">94.2%</div>
          <div style="font-size:10px; color:var(--color-success);">Backed by Packing Station CCTV Scales</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Recovered This Month (MTD)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">₹72,450.00</div>
          <div style="font-size:10px; color:var(--text-secondary);">Credited to Prepaid Shipping Wallet</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Avg Discrepancy Slab</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">+620 g</div>
          <div style="font-size:10px; color:var(--color-danger);">Billed at higher 1kg slab</div>
        </div>
      </div>

      <!-- Weight Disputes Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Discrepancy Audit Queue</div>
          <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">Disputes must be raised within 7 days of invoice billing</div>
        </div>

        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Dispute ID / AWB</th>
                <th>Order Ref</th>
                <th>Carrier Partner</th>
                <th>Declared Dead Weight</th>
                <th>Carrier Billed Weight</th>
                <th>Discrepancy (Δ)</th>
                <th>Financial Penalty</th>
                <th>Proof Status</th>
                <th>Dispute Status</th>
                <th style="text-align:right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${MOCK_WEIGHT_DISPUTES.map(wd => `
                <tr>
                  <td>
                    <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary);">${wd.id}</div>
                    <div style="font-size:10px; font-family:var(--font-mono); color:var(--accent-cyan);">${wd.awb}</div>
                  </td>
                  <td class="tabular-nums" style="color:var(--text-tertiary);">${wd.orderId}</td>
                  <td>
                    <div style="font-weight:600; color:var(--text-primary);">${wd.courier}</div>
                  </td>
                  <td class="tabular-nums" style="font-weight:600; color:var(--color-success);">${wd.declaredWeight}</td>
                  <td class="tabular-nums" style="font-weight:700; color:var(--color-danger);">${wd.courierWeight}</td>
                  <td>
                    <span class="badge badge-warning" style="font-size:10px;">${wd.difference}</span>
                  </td>
                  <td class="tabular-nums" style="font-weight:700; color:#F87171; font-size:13px;">${wd.additionalCharge}</td>
                  <td>
                    ${wd.proofAvailable ? '<span style="color:var(--color-success); font-size:11px; display:flex; align-items:center; gap:4px;">✓ Photo Scale Proof</span>' : 'Pending'}
                  </td>
                  <td>
                    <span class="badge ${wd.status === 'DISPUTE_WON' ? 'badge-delivered' : wd.status === 'DISPUTE_SUBMITTED' ? 'badge-in-transit' : 'badge-warning'}">
                      ${wd.status}
                    </span>
                  </td>
                  <td style="text-align:right;">
                    ${wd.status === 'FLAGGED_DISPUTE' ? `
                      <button class="btn btn-primary btn-sm raise-dispute-trigger" data-id="${wd.id}">
                        Raise Dispute →
                      </button>
                    ` : `
                      <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">Submitted</span>
                    `}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#bulk-dispute-btn').onclick = () => {
    onAction('dispute-weight');
  };

  container.querySelectorAll('.raise-dispute-trigger').forEach(btn => {
    btn.onclick = () => {
      onAction('dispute-weight');
    };
  });
}
