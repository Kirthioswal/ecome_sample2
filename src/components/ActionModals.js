// Interactive Action Modals (WhatsApp NDR, Phone Outreach, Weight Dispute, Export)

import { toast } from './Toast.js';

export class ActionModals {
  constructor({ onRefreshData }) {
    this.onRefreshData = onRefreshData;
    this.container = document.createElement('div');
    this.container.id = 'action-modals-mount';
    document.body.appendChild(this.container);
  }

  openWhatsAppNDR(order) {
    const cust = order?.customer || { name: 'Pooja Deshmukh', phone: '+91 97654 88319', city: 'Pune' };
    const ordId = order?.id || 'ORD-94280';
    const amount = order?.amount || '₹3,198';

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop open';
    modal.innerHTML = `
      <div class="command-modal" style="width: 500px;">
        <div class="command-input-container" style="justify-content:space-between; border-bottom:1px solid var(--border-default);">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">WhatsApp NDR Automated Flow</span>
          </div>
          <button class="icon-btn btn-sm" id="close-modal-btn">✕</button>
        </div>
        <div style="padding:16px; display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); display:flex; justify-content:space-between;">
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Recipient:</span>
              <div style="font-weight:600; color:var(--text-primary);">${cust.name} (${cust.phone})</div>
            </div>
            <div style="text-align:right;">
              <span style="color:var(--text-tertiary); font-size:11px;">Order Value:</span>
              <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan);">${amount}</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:4px;">
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Message Template</label>
            <div style="background:rgba(37, 211, 102, 0.05); border:1px solid rgba(37, 211, 102, 0.25); border-radius:var(--radius-sm); padding:12px; color:var(--text-primary); font-size:12px; line-height:1.45;">
              "Hi <strong>${cust.name}</strong>, our courier partner attempted delivery of your order <strong>#${ordId}</strong> today in <strong>${cust.city}</strong>, but was unable to reach you.<br><br>
              Would you like us to reattempt delivery tomorrow? Tap a button below to confirm:
              <div style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">
                <span style="padding:4px 8px; background:rgba(37, 211, 102, 0.2); border-radius:4px; font-size:11px; color:#25D366; font-weight:600;">[1] Reattempt Tomorrow</span>
                <span style="padding:4px 8px; background:rgba(37, 211, 102, 0.2); border-radius:4px; font-size:11px; color:#25D366; font-weight:600;">[2] Update Delivery Address</span>
                <span style="padding:4px 8px; background:rgba(37, 211, 102, 0.2); border-radius:4px; font-size:11px; color:#25D366; font-weight:600;">[3] Pay Online (Save ₹50)</span>
              </div>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" id="add-prepaid-incentive" checked style="accent-color:var(--accent-cyan);" />
            <label for="add-prepaid-incentive" style="font-size:11px; color:var(--text-secondary); cursor:pointer;">
              Attach instant UPI payment link with ₹50 waiver to eliminate COD risk
            </label>
          </div>
        </div>

        <div class="command-footer" style="padding:12px 16px; justify-content:flex-end; gap:8px;">
          <button class="btn btn-secondary btn-sm" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary btn-sm" id="send-whatsapp-btn" style="background:#25D366; color:#000; border-color:#20BA5A;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Dispatch WhatsApp Flow
          </button>
        </div>
      </div>
    `;

    this.container.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector('#close-modal-btn').onclick = close;
    modal.querySelector('#cancel-modal-btn').onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };

    modal.querySelector('#send-whatsapp-btn').onclick = () => {
      close();
      toast.show({
        title: "WhatsApp NDR Dispatched",
        message: `Interactive prompt sent to ${cust.name} (${cust.phone}). Awaiting response.`,
        type: "success"
      });
    };
  }

  openCallModal(order) {
    const cust = order?.customer || { name: 'Pooja Deshmukh', phone: '+91 97654 88319' };
    const ordId = order?.id || 'ORD-94280';

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop open';
    modal.innerHTML = `
      <div class="command-modal" style="width: 460px;">
        <div class="command-input-container" style="justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">Outbound Customer Outreach</span>
          </div>
          <button class="icon-btn btn-sm" id="close-modal-btn">✕</button>
        </div>
        <div style="padding:16px; display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div style="background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:12px; text-align:center;">
            <div style="font-size:11px; color:var(--text-tertiary); text-transform:uppercase;">Connected Line (Telephony Integration)</div>
            <div style="font-size:18px; font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); margin:4px 0;">${cust.phone}</div>
            <div style="font-size:12px; color:var(--text-secondary);">${cust.name} &nbsp;•&nbsp; ${ordId}</div>
          </div>

          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Log Call Disposition</label>
            <select class="input-control select-control" style="margin-top:4px;">
              <option>Customer Confirmed Reattempt Tomorrow</option>
              <option>Customer Provided New Address / Landmark</option>
              <option>Customer Requested Slot After 6 PM</option>
              <option>Customer Refused Order (Initiate RTO)</option>
              <option>Call Unanswered / Busy</option>
            </select>
          </div>

          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Agent Notes</label>
            <textarea class="input-control" style="height:60px; padding:8px; margin-top:4px; resize:none;" placeholder="Customer requested delivery near Gate 2 security office..."></textarea>
          </div>
        </div>

        <div class="command-footer" style="padding:12px 16px; justify-content:flex-end; gap:8px;">
          <button class="btn btn-secondary btn-sm" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary btn-sm" id="save-call-btn">Save Disposition & Update Ticket</button>
        </div>
      </div>
    `;

    this.container.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector('#close-modal-btn').onclick = close;
    modal.querySelector('#cancel-modal-btn').onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };

    modal.querySelector('#save-call-btn').onclick = () => {
      close();
      toast.show({
        title: "Call Logged Successfully",
        message: `Disposition recorded for ${ordId}. Dispatch driver notified.`,
        type: "success"
      });
    };
  }

  openWeightDisputeModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop open';
    modal.innerHTML = `
      <div class="command-modal" style="width: 540px;">
        <div class="command-input-container" style="justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning)" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.9 1.4l-2.4 7.4A2 2 0 0 0 4.1 19h15.8a2 2 0 0 0 1.9-2.2l-2.4-7.4A2 2 0 0 0 17.5 8h-11Z"/></svg>
            <span style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">Raise Bulk Weight Dispute (89 Shipments)</span>
          </div>
          <button class="icon-btn btn-sm" id="close-modal-btn">✕</button>
        </div>
        <div style="padding:16px; display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div style="background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:12px; display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Carrier Partner:</span>
              <div style="font-weight:700; color:var(--text-primary);">DTDC Express Priority</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Flagged Overcharge:</span>
              <div style="font-family:var(--font-mono); font-weight:700; color:var(--color-warning); font-size:14px;">₹41,200.00</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Origin Facility:</span>
              <div style="color:var(--text-secondary);">Nelamangala Hub Sort-Belt</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Dispute Window:</span>
              <div style="color:var(--accent-cyan); font-weight:600;">48h Remaining</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:4px;">
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Evidence Attached</label>
            <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-default); border-radius:var(--radius-sm); padding:10px; font-size:11px; color:var(--text-secondary); line-height:1.5;">
              ✓ Automated packing station CCTV scale snapshots (89 images)<br>
              ✓ Master SKU Catalog dead-weight audit (0.55kg declared)<br>
              ✓ Optical scanner error log reference #DTDC-OPT-88192
            </div>
          </div>

          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Dispute Reason Category</label>
            <select class="input-control select-control" style="margin-top:4px;">
              <option>Volumetric scanner bulge misread on polybags</option>
              <option>Dead weight entered incorrectly by courier belt operator</option>
              <option>Duplicate weight slab billing</option>
            </select>
          </div>
        </div>

        <div class="command-footer" style="padding:12px 16px; justify-content:flex-end; gap:8px;">
          <button class="btn btn-secondary btn-sm" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary btn-sm" id="submit-dispute-btn">Submit 89 Claims via DTDC API</button>
        </div>
      </div>
    `;

    this.container.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector('#close-modal-btn').onclick = close;
    modal.querySelector('#cancel-modal-btn').onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };

    modal.querySelector('#submit-dispute-btn').onclick = () => {
      close();
      toast.show({
        title: "Dispute Batch Submitted",
        message: `89 claims submitted to DTDC Partner Portal. Case ticket #DTDC-DISP-2026-901 created.`,
        type: "success"
      });
    };
  }

  openExportModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop open';
    modal.innerHTML = `
      <div class="command-modal" style="width: 480px;">
        <div class="command-input-container" style="justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">Export Logistics Manifest</span>
          </div>
          <button class="icon-btn btn-sm" id="close-modal-btn">✕</button>
        </div>
        <div style="padding:16px; display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Format</label>
            <div style="display:flex; gap:10px; margin-top:6px;">
              <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="radio" name="format" checked style="accent-color:var(--accent-cyan);"> CSV (UTF-8)</label>
              <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="radio" name="format" style="accent-color:var(--accent-cyan);"> Microsoft Excel (.xlsx)</label>
              <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="radio" name="format" style="accent-color:var(--accent-cyan);"> JSON Data Stream</label>
            </div>
          </div>

          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Columns to Include</label>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:6px; background:var(--bg-base); padding:8px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Order ID & Date</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Customer Info & Phone</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> AWB & Courier Name</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Order Status & NDR Reason</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Amount & Payment Mode</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Dead & Volumetric Weight</label>
            </div>
          </div>
        </div>

        <div class="command-footer" style="padding:12px 16px; justify-content:flex-end; gap:8px;">
          <button class="btn btn-secondary btn-sm" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary btn-sm" id="download-export-btn">Generate & Download Export</button>
        </div>
      </div>
    `;

    this.container.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector('#close-modal-btn').onclick = close;
    modal.querySelector('#cancel-modal-btn').onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };

    modal.querySelector('#download-export-btn').onclick = () => {
      close();
      toast.show({
        title: "Export Ready",
        message: "EcomIQ_Orders_Logistics_Manifest_2026.csv compiled (18,429 rows).",
        type: "success"
      });
    };
  }

  openCreateOrderModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop open';
    modal.innerHTML = `
      <div class="command-modal" style="width: 580px; max-width: 95vw;">
        <div class="command-input-container" style="justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding: 14px 20px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:32px; height:32px; border-radius:8px; background:rgba(37,99,235,0.1); display:flex; align-items:center; justify-content:center; color:var(--accent-cyan);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
            <div>
              <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">Create Express Consignment</div>
              <div style="font-size:11px; color:var(--text-tertiary);">Instantly route and manifest an outbound B2C shipment</div>
            </div>
          </div>
          <button class="icon-btn btn-sm" id="close-modal-btn">✕</button>
        </div>

        <form id="create-consignment-form" style="padding:18px 20px; display:flex; flex-direction:column; gap:14px; max-height:calc(85vh - 120px); overflow-y:auto;">
          <!-- Channel & Warehouse -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div>
              <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Sales Channel</label>
              <select id="consignment-channel" style="width:100%; margin-top:5px; padding:8px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px;">
                <option value="Shopify - Apex Athletics">Shopify — Apex Athletics</option>
                <option value="Amazon India FBM">Amazon India (FBM Direct)</option>
                <option value="QuickCommerce Direct">QuickCommerce / Instant Hub</option>
                <option value="B2B Wholesale Portal">B2B Wholesale Portal</option>
              </select>
            </div>
            <div>
              <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Origin Warehouse</label>
              <select id="consignment-warehouse" style="width:100%; margin-top:5px; padding:8px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px;">
                <option value="Mumbai Central Mega Hub">Bhiwandi Central Hub (BOM-01)</option>
                <option value="Delhi NCR Fulfillment">Gurugram Sort Facility (DEL-01)</option>
                <option value="Bengaluru Southern Hub">Hosur Road Hub (BLR-01)</option>
                <option value="Kolkata Regional">Dankuni East Depot (CCU-01)</option>
              </select>
            </div>
          </div>

          <!-- Customer Details -->
          <div style="background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:12px;">
            <div style="font-size:11px; font-weight:700; color:var(--text-secondary); text-transform:uppercase; margin-bottom:8px;">Customer & Destination</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
              <input type="text" id="cust-name" placeholder="Customer Full Name" required value="Aditya Malhotra" style="padding:7px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px;" />
              <input type="tel" id="cust-phone" placeholder="Phone Number" required value="+91 98110 52341" style="padding:7px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px;" />
            </div>
            <input type="text" id="cust-address" placeholder="Shipping Street Address" required value="Plot 42, Sector 28, Golf Course Road" style="width:100%; margin-top:8px; padding:7px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px;" />
            <div style="display:grid; grid-template-columns:1.5fr 1fr 1fr; gap:8px; margin-top:8px;">
              <input type="text" id="cust-city" placeholder="City" required value="Gurugram" style="padding:7px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px;" />
              <input type="text" id="cust-state" placeholder="State" required value="Haryana" style="padding:7px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px;" />
              <input type="text" id="cust-pincode" placeholder="Pincode" required value="122002" style="padding:7px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px; font-family:var(--font-mono);" />
            </div>
          </div>

          <!-- Package Specs & Smart Courier Recommendation -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div>
              <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Dead Weight (kg)</label>
              <input type="number" step="0.05" id="pkg-weight" value="0.75" style="width:100%; margin-top:5px; padding:7px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px; font-family:var(--font-mono);" />
            </div>
            <div>
              <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Declared Value (₹)</label>
              <input type="text" id="pkg-value" value="₹3,490" style="width:100%; margin-top:5px; padding:7px 10px; background:var(--bg-card); border:1px solid var(--border-default); border-radius:var(--radius-sm); color:var(--text-primary); font-size:12px; font-family:var(--font-mono);" />
            </div>
          </div>

          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">EcomIQ AI Courier Recommendation</label>
            <div style="margin-top:6px; display:flex; flex-direction:column; gap:6px;">
              <label style="display:flex; align-items:center; justify-content:space-between; padding:10px 12px; background:rgba(37,99,235,0.06); border:1.5px solid var(--accent-cyan); border-radius:var(--radius-sm); cursor:pointer;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <input type="radio" name="courier_choice" value="Delhivery Surface Pro" checked style="accent-color:var(--accent-cyan);">
                  <div>
                    <div style="font-weight:700; color:var(--text-primary); font-size:12px;">Delhivery Surface Pro <span style="font-size:10px; background:var(--color-finance-dark); color:#fff; padding:2px 6px; border-radius:4px; margin-left:4px;">AI Recommended (98.4% SLA)</span></div>
                    <div style="font-size:11px; color:var(--text-tertiary);">Estimated Delivery: Tomorrow by 19:00</div>
                  </div>
                </div>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">₹52.00</div>
              </label>

              <label style="display:flex; align-items:center; justify-content:space-between; padding:10px 12px; background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); cursor:pointer;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <input type="radio" name="courier_choice" value="Blue Dart Apex Express" style="accent-color:var(--accent-cyan);">
                  <div>
                    <div style="font-weight:600; color:var(--text-primary); font-size:12px;">Blue Dart Apex Express</div>
                    <div style="font-size:11px; color:var(--text-tertiary);">Next Day Priority Air</div>
                  </div>
                </div>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">₹88.50</div>
              </label>
            </div>
          </div>

          <div class="command-footer" style="padding:14px 0 0 0; justify-content:flex-end; gap:8px; border-top:1px solid var(--border-subtle);">
            <button type="button" class="btn btn-secondary btn-sm" id="cancel-consignment-btn">Cancel</button>
            <button type="submit" class="btn btn-primary btn-sm" id="submit-consignment-btn">⚡ Generate AWB & Dispatch</button>
          </div>
        </form>
      </div>
    `;

    this.container.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector('#close-modal-btn').onclick = close;
    modal.querySelector('#cancel-consignment-btn').onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };

    modal.querySelector('#create-consignment-form').onsubmit = (e) => {
      e.preventDefault();
      const courier = modal.querySelector('input[name="courier_choice"]:checked')?.value || 'Delhivery Surface Pro';
      const custName = modal.querySelector('#cust-name').value;
      const awb = 'DEL' + Math.floor(100000000 + Math.random() * 900000000);
      close();
      toast.show({
        title: "Consignment Dispatched",
        message: `AWB ${awb} generated via ${courier} for ${custName}. Label ready for print.`,
        type: "success"
      });
      if (this.onRefreshData) {
        this.onRefreshData();
      }
    };
  }
}
