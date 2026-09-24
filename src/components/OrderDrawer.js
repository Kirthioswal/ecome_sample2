// High-Fidelity Order Detail Drawer Component

import { toast } from './Toast.js';

export class OrderDrawer {
  constructor({ onAction }) {
    this.onAction = onAction;
    this.currentOrder = null;
    this.init();
  }

  init() {
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'drawer-backdrop';
    this.backdrop.id = 'order-detail-drawer';

    this.backdrop.innerHTML = `
      <div class="drawer-panel" id="order-drawer-content">
        <!-- Rendered dynamically -->
      </div>
    `;

    document.body.appendChild(this.backdrop);

    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) {
        this.close();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.backdrop.classList.contains('open')) {
        this.close();
      }
    });
  }

  open(order) {
    this.currentOrder = order;
    this.render();
    this.backdrop.classList.add('open');
  }

  close() {
    this.backdrop.classList.remove('open');
  }

  render() {
    const o = this.currentOrder;
    if (!o) return;

    const panel = this.backdrop.querySelector('#order-drawer-content');

    let statusBadgeClass = 'badge-delivered';
    if (o.status === 'NDR') statusBadgeClass = 'badge-ndr';
    else if (o.status === 'RTO') statusBadgeClass = 'badge-rto';
    else if (o.status === 'In Transit') statusBadgeClass = 'badge-in-transit';
    else if (o.status === 'Out for Delivery') statusBadgeClass = 'badge-out-for-delivery';

    panel.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-header-left">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-family:var(--font-mono); font-size:16px; font-weight:700; color:var(--text-primary);">${o.id}</span>
            <span class="badge ${statusBadgeClass}"><span class="badge-dot"></span>${o.status}</span>
            ${o.isPriority ? '<span class="badge badge-ai" style="font-size:10px;">PRIORITY CONSIGNMENT</span>' : ''}
          </div>
          <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">
            Booked: ${o.date} &nbsp;•&nbsp; Channel: ${o.channel}
          </div>
        </div>
        <button class="icon-btn" id="drawer-close-btn" title="Close Drawer (ESC)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="drawer-body">
        <!-- NDR Action Alert Banner if NDR -->
        ${o.status === 'NDR' ? `
          <div style="background:rgba(245, 158, 11, 0.09); border:1px solid var(--color-warning-border); border-radius:var(--radius-md); padding:14px; display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:6px; color:var(--color-warning); font-weight:700; font-size:12px; font-family:var(--font-display);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                ACTION REQUIRED: NON-DELIVERY REPORT
              </div>
              <span class="badge badge-warning">Attempt ${o.shipment.ndrAttempt || 1} • Age: ${o.shipment.ndrAge || '4h'}</span>
            </div>
            <div style="font-size:12px; color:var(--text-primary); font-weight:500;">
              Reason: <span style="color:#FBBF24;">${o.shipment.ndrReason || 'Customer Unavailable / Door Locked'}</span>
            </div>
            <div style="display:flex; gap:8px; margin-top:4px; flex-wrap:wrap;">
              <button class="btn btn-primary btn-sm" id="drawer-whatsapp-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                WhatsApp Customer
              </button>
              <button class="btn btn-secondary btn-sm" id="drawer-call-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Customer
              </button>
              <button class="btn btn-outline btn-sm" id="drawer-reschedule-btn">Reschedule Date</button>
              <button class="btn btn-danger btn-sm" id="drawer-rto-btn">Force Immediate RTO</button>
            </div>
          </div>
        ` : ''}

        <!-- Customer 360 Information Card -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Customer 360 Information</span>
            <span class="badge ${o.customer.rtoRisk === 'LOW' ? 'badge-delivered' : 'badge-ndr'}" style="font-size:10px;">
              RTO RISK: ${o.customer.rtoRisk}
            </span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:12px;">
            <div>
              <div style="color:var(--text-tertiary); font-size:11px;">Consignee Name</div>
              <div style="font-weight:600; color:var(--text-primary); font-size:13px; margin-top:2px;">${o.customer.name}</div>
              <div style="color:var(--text-secondary); margin-top:2px;">${o.customer.phone}</div>
              <div style="color:var(--text-secondary);">${o.customer.email}</div>
            </div>
            <div>
              <div style="color:var(--text-tertiary); font-size:11px;">Delivery Destination</div>
              <div style="color:var(--text-primary); margin-top:2px; line-height:1.4;">${o.customer.address}</div>
              <div style="color:var(--accent-cyan); font-family:var(--font-mono); font-weight:600; margin-top:3px;">${o.customer.city}, ${o.customer.state} — ${o.customer.pincode}</div>
            </div>
          </div>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-top:6px; padding-top:8px; border-top:1px solid var(--border-subtle); background:var(--bg-surface); padding:8px; border-radius:var(--radius-xs);">
            <div>
              <div style="color:var(--text-tertiary); font-size:10px;">Lifetime Orders</div>
              <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:12px;">${o.customer.totalOrders} Orders</div>
            </div>
            <div>
              <div style="color:var(--text-tertiary); font-size:10px;">Lifetime Spend</div>
              <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:12px;">${o.customer.totalSpend}</div>
            </div>
            <div>
              <div style="color:var(--text-tertiary); font-size:10px;">Customer Persona</div>
              <div style="font-weight:600; color:var(--color-success); font-size:11px;">Verified Buyer</div>
            </div>
          </div>
        </div>

        <!-- Ordered Items -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Ordered Items (${o.items.length})</span>
            <span style="font-family:var(--font-mono); color:var(--text-primary); font-size:11px;">Subtotal: ${o.subtotal}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${o.items.map(item => `
              <div style="display:flex; align-items:center; justify-content:space-between; padding:8px; background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-xs);">
                <div style="display:flex; align-items:center; gap:10px;">
                  <div style="width:36px; height:36px; border-radius:var(--radius-xs); background:var(--bg-surface-high); border:1px solid var(--border-default); display:flex; align-items:center; justify-content:center; color:var(--accent-cyan);">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  </div>
                  <div>
                    <div style="font-size:12px; font-weight:600; color:var(--text-primary);">${item.name}</div>
                    <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">SKU: ${item.sku} &nbsp;•&nbsp; HSN: ${item.hsn}</div>
                  </div>
                </div>
                <div style="text-align:right;">
                  <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${item.price}</div>
                  <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">Qty: ${item.qty}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Shipment & Logistics Information -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Logistics & Carrier Details</span>
            <span style="font-family:var(--font-mono); color:var(--accent-cyan); font-weight:600;">AWB: ${o.shipment.awb}</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px; font-size:11px;">
            <div>
              <span style="color:var(--text-tertiary);">Allocated Courier:</span>
              <div style="color:var(--text-primary); font-weight:600; font-size:12px;">${o.shipment.courier}</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary);">Dispatch Warehouse:</span>
              <div style="color:var(--text-primary); font-weight:600; font-size:12px;">${o.warehouse}</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary);">Dead vs Volumetric Weight:</span>
              <div style="color:var(--text-primary); font-family:var(--font-mono); font-weight:600;">${o.shipment.deadWeight} / ${o.shipment.volWeight}</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary);">Estimated Delivery (EDD):</span>
              <div style="color:var(--accent-cyan); font-family:var(--font-mono); font-weight:600;">${o.shipment.edd}</div>
            </div>
          </div>
        </div>

        <!-- Shipment Timeline -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Shipment Tracking Events</span>
            <span style="font-size:10px; color:var(--text-tertiary); font-family:var(--font-mono);">Live Courier Telemetry</span>
          </div>
          <div class="timeline-list">
            ${(o.shipment.events || []).map(ev => `
              <div class="timeline-item ${ev.status || ''}">
                <div class="timeline-node"></div>
                <div class="timeline-time">${ev.time}</div>
                <div class="timeline-title">${ev.title}</div>
                <div class="timeline-desc">${ev.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Financial & Payment Information -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Financial & Settlement Breakdown</span>
            <span class="badge ${o.payment.status === 'PAID' ? 'badge-paid' : 'badge-warning'}">${o.payment.status}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:12px;">
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Payment Mode:</span>
              <span style="color:var(--text-primary); font-weight:600;">${o.payment.type} (${o.payment.gateway})</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Transaction Ref:</span>
              <span style="font-family:var(--font-mono); color:var(--text-tertiary);">${o.payment.transactionId}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Item Subtotal:</span>
              <span style="font-family:var(--font-mono); color:var(--text-primary);">${o.subtotal}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Tax (GST Breakdown):</span>
              <span style="font-family:var(--font-mono); color:var(--text-secondary);">${o.tax}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Shipping Fee:</span>
              <span style="font-family:var(--font-mono); color:var(--text-secondary);">${o.shippingFee}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-primary); font-weight:700; font-size:13px; border-top:1px solid var(--border-subtle); padding-top:6px; margin-top:2px;">
              <span>Total Invoice Amount:</span>
              <span style="font-family:var(--font-mono); color:var(--accent-cyan);">${o.amount}</span>
            </div>
          </div>
        </div>

        <!-- Audit & Activity Trail -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Activity Trail & Security Audit</span>
            <span style="font-size:10px; color:var(--text-tertiary); font-family:var(--font-mono);">System Log</span>
          </div>
          <div style="font-size:11px; color:var(--text-secondary); display:flex; flex-direction:column; gap:4px; font-family:var(--font-mono);">
            <div>• 2026-09-24 16:40: Automated Smart Routing selected ${o.shipment.courier}</div>
            <div>• 2026-09-24 15:10: Shipping label and packaging manifest generated by system</div>
            <div>• 2026-09-24 14:50: Webhook received from ${o.channel} with signature verified</div>
          </div>
        </div>
      </div>

      <div class="drawer-footer">
        <button class="btn btn-outline btn-sm" id="drawer-print-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Print Shipping Label & Invoice
        </button>
        <button class="btn btn-secondary btn-sm" id="drawer-close-footer-btn">Close (ESC)</button>
      </div>
    `;

    // Attach listeners
    panel.querySelector('#drawer-close-btn').onclick = () => this.close();
    panel.querySelector('#drawer-close-footer-btn').onclick = () => this.close();
    panel.querySelector('#drawer-print-btn').onclick = () => {
      toast.show({
        title: "Shipping Label Dispatched",
        message: `Label for ${o.id} (AWB: ${o.shipment.awb}) sent to thermal printer network.`,
        type: "success"
      });
    };

    if (o.status === 'NDR') {
      const waBtn = panel.querySelector('#drawer-whatsapp-btn');
      if (waBtn) waBtn.onclick = () => this.onAction('whatsapp-ndr', o);

      const callBtn = panel.querySelector('#drawer-call-btn');
      if (callBtn) callBtn.onclick = () => this.onAction('call-customer', o);

      const reschedBtn = panel.querySelector('#drawer-reschedule-btn');
      if (reschedBtn) reschedBtn.onclick = () => {
        toast.show({
          title: "Delivery Rescheduled",
          message: `Reattempt order ${o.id} booked for tomorrow morning slot.`,
          type: "success"
        });
      };

      const rtoBtn = panel.querySelector('#drawer-rto-btn');
      if (rtoBtn) rtoBtn.onclick = () => {
        toast.show({
          title: "Immediate RTO Initiated",
          message: `Consignment marked for return. Reverse logistics AWB generated.`,
          type: "danger"
        });
        this.close();
      };
    }
  }
}
