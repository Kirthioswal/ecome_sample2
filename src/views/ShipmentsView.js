// Shipments Operations & Tracking Pipeline View

import { MOCK_ORDERS } from '../data/mockData.js';

export function renderShipmentsView(container, { onOpenOrder }) {
  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONS MODULE</span>
            <span>/</span>
            <span>LINEHAUL & LAST-MILE LOGISTICS</span>
          </div>
          <h1 class="view-title">
            Shipments & Tracking Pipeline
            <span class="badge badge-delivered tabular-nums">18,142 ACTIVE</span>
          </h1>
          <div class="view-subtitle">Real-time carrier event streaming, delivery estimations and SLA tracking</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
            Sync All Carriers (14ms)
          </button>
        </div>
      </div>

      <!-- Shipment Tracking Flow Pipeline Visualizer -->
      <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
        <div style="font-size:11px; font-family:var(--font-display); font-weight:700; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:12px;">
          CONSOLIDATED CARRIER PIPELINE STAGES
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:12px;">
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid var(--border-strong);">
            <div style="font-size:10px; color:var(--text-tertiary);">1. Order Created</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--text-primary); margin-top:2px;">18,429</div>
            <div style="font-size:10px; color:var(--color-success);">100% captured</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid #6366F1;">
            <div style="font-size:10px; color:var(--text-tertiary);">2. AWB Assigned</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:#818CF8; margin-top:2px;">18,142</div>
            <div style="font-size:10px; color:var(--text-secondary);">Avg 1.2m routing</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid var(--accent-cyan);">
            <div style="font-size:10px; color:var(--text-tertiary);">3. Picked Up</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">17,850</div>
            <div style="font-size:10px; color:var(--color-success);">98.4% pickup SLA</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid var(--color-info);">
            <div style="font-size:10px; color:var(--text-tertiary);">4. In Transit</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:#60A5FA; margin-top:2px;">1,142</div>
            <div style="font-size:10px; color:var(--text-secondary);">Linehaul active</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid #F59E0B;">
            <div style="font-size:10px; color:var(--text-tertiary);">5. Out for Delivery</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:#FBBF24; margin-top:2px;">364</div>
            <div style="font-size:10px; color:var(--color-warning);">Last-mile van</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid var(--color-success);">
            <div style="font-size:10px; color:var(--text-tertiary);">6. Delivered</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--color-success); margin-top:2px;">16,636</div>
            <div style="font-size:10px; color:var(--color-success);">91.7% Delivered</div>
          </div>
        </div>
      </div>

      <!-- Shipments Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Live Carrier Manifest & Tracking Events</div>
          <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">Showing recent consignments across Delhivery, BlueDart, DTDC, Shadowfax</div>
        </div>
        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>AWB Number</th>
                <th>Order Ref</th>
                <th>Courier Partner</th>
                <th>Origin Facility</th>
                <th>Destination City</th>
                <th>Dead / Vol. Weight</th>
                <th>Est. Delivery (EDD)</th>
                <th>Shipping Cost</th>
                <th>Current Status</th>
                <th style="text-align:right;">Timeline Action</th>
              </tr>
            </thead>
            <tbody>
              ${MOCK_ORDERS.map(o => {
                let badgeClass = 'badge-delivered';
                if (o.status === 'NDR') badgeClass = 'badge-ndr';
                else if (o.status === 'RTO') badgeClass = 'badge-rto';
                else if (o.status === 'In Transit') badgeClass = 'badge-in-transit';
                else if (o.status === 'Out for Delivery') badgeClass = 'badge-out-for-delivery';

                return `
                  <tr>
                    <td>
                      <span class="row-action-link shipment-click" data-id="${o.id}">${o.shipment.awb}</span>
                    </td>
                    <td class="tabular-nums" style="color:var(--text-tertiary);">${o.id}</td>
                    <td>
                      <div style="font-weight:600; color:var(--text-primary);">${o.shipment.courier}</div>
                    </td>
                    <td style="color:var(--text-secondary);">${o.warehouse.split(' (')[0]}</td>
                    <td>
                      <div style="font-weight:600; color:var(--text-primary);">${o.customer.city}</div>
                      <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">${o.customer.pincode}</div>
                    </td>
                    <td class="tabular-nums">${o.shipment.deadWeight} / ${o.shipment.volWeight}</td>
                    <td class="tabular-nums" style="color:var(--accent-cyan); font-weight:600;">${o.shipment.edd}</td>
                    <td class="tabular-nums" style="font-weight:600; color:var(--text-primary);">₹88.50</td>
                    <td>
                      <span class="badge ${badgeClass}"><span class="badge-dot"></span>${o.status}</span>
                    </td>
                    <td style="text-align:right;">
                      <button class="btn btn-outline btn-sm shipment-click" data-id="${o.id}">
                        View Timeline →
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.shipment-click').forEach(el => {
    el.onclick = () => {
      const ordId = el.getAttribute('data-id');
      const ord = MOCK_ORDERS.find(o => o.id === ordId);
      if (ord) onOpenOrder(ord);
    };
  });
}
