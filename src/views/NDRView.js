// Action-Oriented NDR Recovery Cockpit View

import { MOCK_NDR_QUEUE, MOCK_ORDERS } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderNDRView(container, { onOpenOrder, onAction }) {
  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONAL RECOVERY</span>
            <span>/</span>
            <span>EXCEPTION MANAGEMENT</span>
          </div>
          <h1 class="view-title">
            NDR Recovery Cockpit
            <span class="badge badge-warning tabular-nums">184 ACTION REQUIRED</span>
          </h1>
          <div class="view-subtitle">Automated and agent-assisted last-mile delivery failure interventions</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="ndr-trigger-all-wa">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Auto-Run WhatsApp Bot on 184 Cases
          </button>
        </div>
      </div>

      <!-- NDR Telemetry Cockpit Header -->
      <div class="ndr-cockpit-header">
        <div class="ndr-stat-cell">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Total NDR Queue</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">342</div>
          <div style="font-size:10px; color:var(--text-secondary);">5.2% of current deliveries</div>
        </div>

        <div class="ndr-stat-cell">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Action Required Immediately</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-warning); margin-top:2px;">184</div>
          <div style="font-size:10px; color:#FBBF24;">Under 12h resolution SLA</div>
        </div>

        <div class="ndr-stat-cell">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Resolved Today</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">158</div>
          <div style="font-size:10px; color:var(--color-success);">+38 via Automated Bot</div>
        </div>

        <div class="ndr-stat-cell">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">NDR Recovery Rate</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">72.4%</div>
          <div style="font-size:10px; color:var(--text-tertiary);">Industry baseline: 48.0%</div>
        </div>
      </div>

      <!-- Actionable NDR Queue Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">High Priority NDR Exceptions</span>
          </div>
          <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">
            Intervene before carrier triggers automatic Return to Origin (RTO)
          </div>
        </div>

        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>AWB / Order ID</th>
                <th>Consignee</th>
                <th>Location</th>
                <th>Carrier</th>
                <th>NDR Reason & Attempt</th>
                <th>Age</th>
                <th>Order Value & Pay</th>
                <th>Status</th>
                <th style="text-align:right;">Immediate Actions</th>
              </tr>
            </thead>
            <tbody>
              ${MOCK_NDR_QUEUE.map(item => `
                <tr>
                  <td>
                    <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); cursor:pointer;" class="open-ndr-order" data-id="${item.orderId}">${item.awb}</div>
                    <div style="font-size:10px; color:var(--text-tertiary); font-family:var(--font-mono);">${item.orderId}</div>
                  </td>
                  <td>
                    <div style="font-weight:600; color:var(--text-primary);">${item.customerName}</div>
                    <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-secondary);">${item.phone}</div>
                  </td>
                  <td>
                    <div style="font-weight:500; color:var(--text-primary);">${item.city}</div>
                    <div style="font-size:10px; color:var(--text-tertiary);">${item.state}</div>
                  </td>
                  <td>
                    <div style="font-weight:600; color:var(--text-secondary);">${item.courier}</div>
                  </td>
                  <td>
                    <div style="color:#FBBF24; font-weight:600; max-width:240px; white-space:normal; line-height:1.3;">
                      ${item.ndrReason}
                    </div>
                    <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary); margin-top:2px;">Attempt ${item.attempt} of 3</div>
                  </td>
                  <td class="tabular-nums" style="color:var(--text-tertiary);">${item.ageHours}h</td>
                  <td>
                    <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary);">${item.orderAmount}</div>
                    <span class="badge ${item.paymentType === 'COD' ? 'badge-warning' : 'badge-paid'}" style="font-size:9px;">${item.paymentType}</span>
                  </td>
                  <td>
                    <span class="badge ${item.status === 'ACTION_REQUIRED' ? 'badge-ndr' : item.status === 'RESOLVED' ? 'badge-delivered' : 'badge-neutral'}">
                      ${item.status}
                    </span>
                  </td>
                  <td style="text-align:right;">
                    <div style="display:flex; justify-content:flex-end; gap:6px;">
                      <button class="btn btn-primary btn-sm action-wa-btn" data-order-id="${item.orderId}" title="Send Automated WhatsApp Verification">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                        WhatsApp
                      </button>
                      <button class="btn btn-secondary btn-sm action-call-btn" data-order-id="${item.orderId}" title="Dial Consignee directly">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Call
                      </button>
                      <button class="btn btn-outline btn-sm action-reschedule-btn" data-order-id="${item.orderId}">
                        Slot
                      </button>
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

  // Attach action triggers
  container.querySelectorAll('.open-ndr-order').forEach(el => {
    el.onclick = () => {
      const ordId = el.getAttribute('data-id');
      const ord = MOCK_ORDERS.find(o => o.id === ordId) || MOCK_ORDERS[1];
      onOpenOrder(ord);
    };
  });

  container.querySelectorAll('.action-wa-btn').forEach(btn => {
    btn.onclick = () => {
      const ordId = btn.getAttribute('data-order-id');
      const ord = MOCK_ORDERS.find(o => o.id === ordId) || MOCK_ORDERS[1];
      onAction('whatsapp-ndr', ord);
    };
  });

  container.querySelectorAll('.action-call-btn').forEach(btn => {
    btn.onclick = () => {
      const ordId = btn.getAttribute('data-order-id');
      const ord = MOCK_ORDERS.find(o => o.id === ordId) || MOCK_ORDERS[1];
      onAction('call-customer', ord);
    };
  });

  container.querySelectorAll('.action-reschedule-btn').forEach(btn => {
    btn.onclick = () => {
      const ordId = btn.getAttribute('data-order-id');
      toast.show({
        title: "Reattempt Slot Booked",
        message: `Consignment ${ordId} rescheduled for tomorrow morning van delivery.`,
        type: "success"
      });
    };
  });

  container.querySelector('#ndr-trigger-all-wa').onclick = () => {
    toast.show({
      title: "Batch NDR WhatsApp Bot Dispatched",
      message: "Queued automated interactive delivery verification messages to 184 customers.",
      type: "success"
    });
  };
}
