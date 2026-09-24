// Fulfillment Hubs & Multi-Warehouse Operations View

import { MOCK_WAREHOUSES } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderWarehousesView(container) {
  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>FULFILLMENT INFRASTRUCTURE</span>
            <span>/</span>
            <span>MULTI-NODE INVENTORY</span>
          </div>
          <h1 class="view-title">
            Fulfillment Hubs & Warehouses
            <span class="badge badge-delivered tabular-nums">4 ACTIVE FACILITIES</span>
          </h1>
          <div class="view-subtitle">Real-time facility utilization, linehaul dock dispatch times, and pickup SLAs</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="rebalance-inventory-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            Rebalance Hub Inventory
          </button>
        </div>
      </div>

      <!-- Warehouse Facility Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:16px;">
        ${MOCK_WAREHOUSES.map(wh => `
          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">${wh.name}</div>
                <div style="font-size:11px; color:var(--text-tertiary);">${wh.location}</div>
              </div>
              <span class="badge badge-delivered" style="font-size:10px;">${wh.dispatchHealth}</span>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:var(--bg-base); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <div>
                <span style="color:var(--text-tertiary);">Current Utilization:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--accent-cyan);">${wh.currentUtilization}</div>
                <div style="font-size:10px; color:var(--text-tertiary);">Cap: ${wh.dailyCapacity}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Active Orders in Queue:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${wh.activeOrders} pkgs</div>
                <div style="font-size:10px; color:var(--text-secondary);">Avg Pick: ${wh.avgFulfillmentTime}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Carrier Pickup SLA:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-success);">${wh.pickupSla}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Dock Turnaround:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">28 mins</div>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; padding-top:4px;">
              <span style="color:var(--text-tertiary);">Active Couriers: Delhivery, BlueDart, DTDC</span>
              <a href="javascript:void(0)" style="font-weight:600; color:var(--accent-cyan);">Inspect Manifest →</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelector('#rebalance-inventory-btn').onclick = () => {
    toast.show({
      title: "Inter-Hub Transfer Simulation",
      message: "Proposed transfer: 420 SKUs from Bhiwandi to Nelamangala to reduce south transit latency.",
      type: "success"
    });
  };
}
