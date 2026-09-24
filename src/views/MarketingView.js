// Marketing Attribution & Customer Acquisition Performance View

import { MOCK_MARKETING, MOCK_KPIS } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderMarketingView(container) {
  const mKpis = MOCK_KPIS.marketing;

  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>GROWTH & PERFORMANCE MARKETING</span>
            <span>/</span>
            <span>ATTRIBUTION ENGINE</span>
          </div>
          <h1 class="view-title">
            Marketing Attribution & CAC Efficiency
            <span class="badge badge-success tabular-nums">4.82x BLENDED ROAS</span>
          </h1>
          <div class="view-subtitle">Multi-channel ad spend, revenue attribution, ROAS pacing, and unit CAC across Meta, Google & Amazon</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="sync-pixel-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
            Sync Meta CAPI & Google Conversions
          </button>
        </div>
      </div>

      <!-- Top Summary KPIs -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Total Ad Spend (MTD)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${mKpis.adSpend}</div>
          <div style="font-size:10px; color:var(--text-secondary); margin-top:2px;">Across 3 active ad networks</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Attributed Revenue</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">${mKpis.attributedRevenue}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">63.7% of total brand revenue</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Blended ROAS</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">${mKpis.blendedRoas}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">+0.42x vs target of 4.40x</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Customer Acquisition Cost (CAC)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${mKpis.blendedCac}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">-₹24 improvement MoM</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">New Customer Acquisition</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${mKpis.newCustomerPct}</div>
          <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">8,984 first-time buyers</div>
        </div>
      </div>

      <!-- Channel Breakdown Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:16px;">
        ${MOCK_MARKETING.map(ch => `
          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">${ch.channel}</div>
                <div style="font-size:11px; color:var(--accent-cyan); margin-top:2px;">Top: ${ch.topCampaign}</div>
              </div>
              <span class="badge ${ch.status === 'SCALE' ? 'badge-delivered' : 'badge-warning'}">${ch.status}</span>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:var(--bg-base); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <div>
                <span style="color:var(--text-tertiary);">Ad Spend:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${ch.spend}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Attributed GMV:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--accent-cyan);">${ch.revenue}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Reported ROAS:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-success);">${ch.roas}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Unit CAC:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${ch.cac}</div>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; padding-top:4px;">
              <span style="color:var(--text-tertiary);">Orders Generated: <strong style="color:var(--text-primary); font-family:var(--font-mono);">${ch.orders}</strong></span>
              <span class="badge badge-neutral" style="font-size:9px;">Efficiency: ${ch.efficiencyRating}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelector('#sync-pixel-btn').onclick = () => {
    toast.show({
      title: "CAPI Signal Synced",
      message: "12,410 server-side purchase events reconciled with Meta and Google Ad sets.",
      type: "success"
    });
  };
}
