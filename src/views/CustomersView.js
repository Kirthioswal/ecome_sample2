// Customer 360 & Logistics Propensity View

import { MOCK_CUSTOMERS } from '../data/mockData.js';

export function renderCustomersView(container) {
  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>COMMERCIAL INTELLIGENCE</span>
            <span>/</span>
            <span>CUSTOMER 360 & RTO PROPENSITY</span>
          </div>
          <h1 class="view-title">
            Customer 360 Directory
            <span class="badge badge-cyan tabular-nums">142,800 PROFILES</span>
          </h1>
          <div class="view-subtitle">Consolidated commercial spend, delivery history, return propensity, and payment preferences</div>
        </div>

        <div class="view-actions-group">
          <div class="input-wrapper" style="width: 240px;">
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" class="input-control with-icon" placeholder="Search customer, phone..." />
          </div>
        </div>
      </div>

      <!-- Customer Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(360px, 1fr)); gap:16px;">
        ${MOCK_CUSTOMERS.map(c => `
          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">${c.name}</div>
                <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">${c.phone} &nbsp;•&nbsp; ${c.email}</div>
                <div style="font-size:11px; color:var(--accent-cyan); margin-top:2px;">${c.city}, ${c.state}</div>
              </div>
              <span class="badge ${c.segment.includes('VIP') ? 'badge-ai' : 'badge-neutral'}">${c.segment}</span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <div>
                <span style="color:var(--text-tertiary); font-size:10px;">Total Orders:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${c.ordersCount}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary); font-size:10px;">Lifetime Value:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); font-size:13px;">${c.lifetimeSpend}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary); font-size:10px;">AOV:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${c.aov}</div>
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:4px; font-size:11px; border-top:1px solid var(--border-subtle); padding-top:8px;">
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--text-tertiary);">RTO Risk Propensity:</span>
                <span style="font-family:var(--font-mono); font-weight:700; color:${c.rtoRisk.includes('HIGH') ? 'var(--color-danger)' : 'var(--color-success)'};">${c.rtoRisk}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--text-tertiary);">Payment Behavior:</span>
                <span style="color:var(--text-secondary);">${c.preferredPayment}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--text-tertiary);">Latest Order:</span>
                <span style="color:var(--text-primary); font-family:var(--font-mono);">${c.lastOrder}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
