// AI Operational Insights & Root Cause Detection View

import { MOCK_AI_INSIGHTS } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderAIInsightsView(container, { onNavigate }) {
  container.innerHTML = `
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>SYNTHETIC INTELLIGENCE</span>
            <span>/</span>
            <span>ANOMALY & ROOT CAUSE ENGINE</span>
          </div>
          <h1 class="view-title">
            AI Operational Intelligence Feed
            <span class="badge badge-ai tabular-nums">3 ACTIVE PATTERNS</span>
          </h1>
          <div class="view-subtitle">Automatic pattern recognition, courier anomaly detection, financial leakage alerts, and remediation playbooks</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="rescan-ai-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
            Re-run Pattern Recognition Scanner
          </button>
        </div>
      </div>

      <!-- Feed of Root Cause Cards -->
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${MOCK_AI_INSIGHTS.map(ins => `
          <div class="ai-intel-panel" style="padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span class="badge ${ins.severity === 'CRITICAL' ? 'badge-rto' : ins.severity === 'HIGH' ? 'badge-warning' : 'badge-cyan'}">
                  ${ins.severity} SEVERITY
                </span>
                <span style="font-family:var(--font-display); font-size:16px; font-weight:700; color:var(--text-primary);">${ins.title}</span>
              </div>
              <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">${ins.timestamp}</span>
            </div>

            <div style="display:grid; grid-template-columns:1.8fr 1fr; gap:16px;">
              <div style="display:flex; flex-direction:column; gap:12px;">
                <div class="ai-intel-field">
                  <div class="ai-intel-label">OBSERVATION — WHAT CHANGED</div>
                  <div class="ai-intel-text" style="font-size:13px; color:var(--text-primary);">${ins.what}</div>
                </div>

                <div class="ai-intel-field">
                  <div class="ai-intel-label">ROOT CAUSE — WHY DID IT HAPPEN</div>
                  <div class="ai-intel-text" style="font-size:13px;">${ins.why}</div>
                </div>

                <div class="ai-intel-field">
                  <div class="ai-intel-label">RECOMMENDED INTERVENTION PLAYBOOK</div>
                  <ul style="padding-left:18px; font-size:12px; color:var(--text-secondary); line-height:1.5;">
                    ${ins.actionablePlaybook.map(step => `<li>${step}</li>`).join('')}
                  </ul>
                </div>
              </div>

              <!-- Impact Metrics Box -->
              <div style="background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="font-size:10px; font-weight:700; color:var(--accent-cyan); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px;">
                    DETECTED BUSINESS IMPACT
                  </div>
                  <div style="display:flex; flex-direction:column; gap:8px;">
                    ${Object.entries(ins.impact).map(([key, val]) => `
                      <div style="display:flex; justify-content:space-between; font-size:12px;">
                        <span style="color:var(--text-tertiary); text-transform:capitalize;">${key.replace(/([A-Z])/g, ' $1')}:</span>
                        <strong style="color:var(--text-primary); font-family:var(--font-mono);">${val}</strong>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <button class="btn btn-primary btn-sm trigger-playbook-btn" data-target="${ins.actionTarget}" style="margin-top:16px;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  ${ins.ctaText} →
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelector('#rescan-ai-btn').onclick = () => {
    toast.show({
      title: "Scanner Completed",
      message: "Analyzed 18,429 orders across 4 warehouses. 3 active anomalies confirmed.",
      type: "success"
    });
  };

  container.querySelectorAll('.trigger-playbook-btn').forEach(btn => {
    btn.onclick = () => {
      const target = btn.getAttribute('data-target');
      onNavigate(target);
    };
  });
}
