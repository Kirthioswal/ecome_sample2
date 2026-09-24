// Courier Management & SLA Intelligence View

import { MOCK_COURIERS } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderCouriersView(container) {
  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONAL PARTNERS</span>
            <span>/</span>
            <span>CARRIER BENCHMARKING</span>
          </div>
          <h1 class="view-title">
            Carrier Performance & SLA Intelligence
            <span class="badge badge-cyan tabular-nums">5 INTEGRATED CARRIERS</span>
          </h1>
          <div class="view-subtitle">Comparative courier speed, delivery success, RTO attrition, and unit economics</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="adjust-routing-rules-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Smart Routing Rules Engine
          </button>
        </div>
      </div>

      <!-- Carrier Comparison Grid Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px;">
        ${MOCK_COURIERS.map(c => `
          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">${c.name}</div>
                <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">${c.totalShipments} consignments (${c.shipmentShare} volume)</div>
              </div>
              <span class="badge ${c.grade.startsWith('A') ? 'badge-delivered' : 'badge-warning'}" style="font-size:12px;">GRADE ${c.grade}</span>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <div>
                <span style="color:var(--text-tertiary);">Delivery Success:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--color-success); font-size:13px;">${c.deliveryRate}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">RTO Rate:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:${parseFloat(c.rtoRate) > 3.5 ? 'var(--color-danger)' : 'var(--text-primary)'}; font-size:13px;">${c.rtoRate}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Avg Delivery Time:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${c.avgDeliveryDays}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Avg Cost/Shipment:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); font-size:13px;">${c.costPerShipment}</div>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; padding-top:4px;">
              <span style="color:var(--text-tertiary);">SLA Adherence: <strong style="color:var(--text-primary);">${c.slaAdherence}</strong></span>
              <span style="color:var(--text-tertiary);">${c.disputedWeightCount} weight disputes</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelector('#adjust-routing-rules-btn').onclick = () => {
    toast.show({
      title: "Smart Routing Optimizer",
      message: "Priority weights updated: Tier-1 Metros routed to BlueDart; Tier-2/3 routed to Delhivery Surface.",
      type: "success"
    });
  };
}
