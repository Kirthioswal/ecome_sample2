// Enterprise Workspace, Integrations & Security Settings View

import { MOCK_WORKSPACE } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderSettingsView(container) {
  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>PLATFORM CONFIGURATION</span>
            <span>/</span>
            <span>SECURITY & INTEGRATIONS</span>
          </div>
          <h1 class="view-title">
            Settings & Integrations
            <span class="badge badge-delivered">ENTERPRISE TIER 1</span>
          </h1>
          <div class="view-subtitle">Multi-store credentials, carrier API webhooks, role-based access control and system telemetry</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-primary btn-sm" id="save-settings-btn">
            Save Configuration Changes
          </button>
        </div>
      </div>

      <!-- Settings Tabs Container -->
      <div style="display:grid; grid-template-columns:1fr 2fr; gap:20px;">
        <!-- Left Tab List -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:12px; display:flex; flex-direction:column; gap:4px; height:fit-content;">
          <button class="btn btn-secondary btn-sm" style="justify-content:flex-start; background:var(--accent-cyan-subtle); border-color:var(--accent-cyan-border); color:var(--text-primary);">
            Integrated Channels & Stores (4)
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content:flex-start;">
            Courier API Accounts & Credentials (5)
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content:flex-start;">
            Users, Roles & Security Permissions
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content:flex-start;">
            Webhooks & Real-time Event Streams
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content:flex-start;">
            Billing & Escrow Reconciliation
          </button>
        </div>

        <!-- Right Panel Content -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:20px; display:flex; flex-direction:column; gap:16px;">
          <div>
            <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">Connected Stores & E-Commerce Frontends</div>
            <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">EcomIQ continuously synchronizes orders, inventory, and refunds across 4 live storefronts.</div>
          </div>

          <div style="display:flex; flex-direction:column; gap:10px;">
            ${MOCK_WORKSPACE.stores.map(st => `
              <div style="background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:12px; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:10px;">
                  <div style="width:32px; height:32px; border-radius:var(--radius-xs); background:var(--bg-surface-high); border:1px solid var(--border-default); display:flex; align-items:center; justify-content:center; color:var(--accent-cyan); font-weight:700;">
                    ${st.platform === 'shopify' ? 'S' : st.platform === 'amazon' ? 'A' : 'W'}
                  </div>
                  <div>
                    <div style="font-weight:600; color:var(--text-primary); font-size:13px;">${st.name}</div>
                    <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">Last synced 32s ago • ${st.orders24h} orders/24h</div>
                  </div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="badge badge-delivered" style="font-size:10px;">CONNECTED</span>
                  <button class="btn btn-outline btn-sm">Configure</button>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="border-top:1px solid var(--border-subtle); padding-top:16px;">
            <div style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary); margin-bottom:8px;">Real-Time Webhook Endpoint</div>
            <div class="input-wrapper">
              <input type="text" class="input-control" value="https://api.ecomiq.internal/v2/webhooks/apex-global/stream" readonly style="font-family:var(--font-mono); color:var(--accent-cyan);" />
            </div>
            <div style="font-size:10px; color:var(--text-tertiary); margin-top:4px;">Signature Secret: •••••••••••••••••••••••••• (HMAC-SHA256 verified)</div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#save-settings-btn').onclick = () => {
    toast.show({
      title: "Settings Saved",
      message: "API webhook endpoints and store credentials successfully updated.",
      type: "success"
    });
  };
}
