// Logistics Finance, COD Remittance & Wallet Reconciliation View

import { MOCK_KPIS } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderFinanceView(container) {
  const f = MOCK_KPIS.finance;

  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>FINANCIAL CONTROLS</span>
            <span>/</span>
            <span>CARRIER REMITTANCE & FREIGHT AUDIT</span>
          </div>
          <h1 class="view-title">
            Logistics Finance & COD Escrow
            <span class="badge badge-success tabular-nums">RECONCILED</span>
          </h1>
          <div class="view-subtitle">Consolidated wallet reserves, carrier remittance cycles, freight auditing and net logistics margin</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="download-remittance-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download COD Remittance Advice
          </button>
          <button class="btn btn-primary btn-sm" id="topup-wallet-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Top-up Shipping Wallet
          </button>
        </div>
      </div>

      <!-- Financial KPI Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:12px;">
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Prepaid Wallet Balance</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">${f.walletBalance}</div>
          <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">Auto-reload threshold: ${f.walletThreshold}</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">COD Outstanding</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">${f.codOutstanding}</div>
          <div style="font-size:10px; color:var(--text-secondary); margin-top:2px;">3,420 uncollected orders</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Remittance Due (48h)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${f.codRemittanceDue}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">Delhivery ₹10.8L + BlueDart ₹7.6L</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Shipping Spend (MTD)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${f.shippingSpend}</div>
          <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">Net freight invoices</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Net Logistics Cost Ratio</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">${f.netLogisticsCostRatio}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">Down from ${f.previousLogisticsCostRatio} of GMV</div>
        </div>
      </div>

      <!-- Cost Breakdown & Remittance Schedule -->
      <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:16px;">
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary); margin-bottom:8px;">Freight Charges Breakdown</div>
          <div style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">Detailed composition of the ₹18.24 Lakhs monthly shipping expenditure</div>

          <div class="finance-breakdown-bar" style="height:14px;">
            <div class="f-bar-segment f-bar-freight" style="width: 68%;"></div>
            <div class="f-bar-segment f-bar-rto" style="width: 14%;"></div>
            <div class="f-bar-segment f-bar-cod" style="width: 11%;"></div>
            <div class="f-bar-segment f-bar-fuel" style="width: 7%;"></div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:14px;">
            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="legend-dot f-bar-freight"></span>
                <span style="font-size:11px; font-weight:600; color:var(--text-primary);">Forward Freight (68%)</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary); margin-top:4px;">₹12,40,328</div>
              <div style="font-size:10px; color:var(--text-tertiary);">Base slab rate across 18,142 pkgs</div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="legend-dot f-bar-rto"></span>
                <span style="font-size:11px; font-weight:600; color:var(--text-primary);">Reverse RTO Penalty (14%)</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-danger); margin-top:4px;">₹2,55,444</div>
              <div style="font-size:10px; color:var(--text-tertiary);">Reverse pickup + processing fees</div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="legend-dot f-bar-cod"></span>
                <span style="font-size:11px; font-weight:600; color:var(--text-primary);">COD Collection Fee (11%)</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-warning); margin-top:4px;">₹2,00,706</div>
              <div style="font-size:10px; color:var(--text-tertiary);">₹35/order or 1.5% carrier handling</div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="legend-dot f-bar-fuel"></span>
                <span style="font-size:11px; font-weight:600; color:var(--text-primary);">Fuel Surcharge & Taxes (7%)</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary); margin-top:4px;">₹1,28,122</div>
              <div style="font-size:10px; color:var(--text-tertiary);">Dynamic aviation fuel index</div>
            </div>
          </div>
        </div>

        <!-- Remittance Schedule -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary); margin-bottom:8px;">Upcoming Remittance Payouts</div>
          <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">
            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-weight:700; color:var(--text-primary); font-size:12px;">Delhivery Logistics Ltd</div>
                <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">Cycle #DEL-REMIT-901</div>
              </div>
              <div style="text-align:right;">
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); font-size:13px;">₹10,80,000</div>
                <span class="badge badge-warning" style="font-size:9px;">Due Tomorrow</span>
              </div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-weight:700; color:var(--text-primary); font-size:12px;">BlueDart Express Ltd</div>
                <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">Cycle #BD-REMIT-884</div>
              </div>
              <div style="text-align:right;">
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--color-success); font-size:13px;">₹7,60,000</div>
                <span class="badge badge-delivered" style="font-size:9px;">Remitted Today</span>
              </div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-weight:700; color:var(--text-primary); font-size:12px;">DTDC Courier Priority</div>
                <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">Cycle #DTDC-REMIT-412</div>
              </div>
              <div style="text-align:right;">
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">₹3,42,000</div>
                <span class="badge badge-neutral" style="font-size:9px;">In 4 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#download-remittance-btn').onclick = () => {
    toast.show({
      title: "Remittance Advice Generated",
      message: "EcomIQ_COD_Bank_Remittance_Advice.pdf ready for download.",
      type: "success"
    });
  };

  container.querySelector('#topup-wallet-btn').onclick = () => {
    toast.show({
      title: "Prepaid Wallet Top-Up",
      message: "Initiated ₹5,00,000 corporate netbanking transfer to freight escrow.",
      type: "success"
    });
  };
}
