// AI Chat Copilot & Business Intelligence Terminal View

import { MOCK_AI_QUERIES } from '../data/aiPrompts.js';

export function renderAIChatView(container, { onNavigate, onOpenOrder }) {
  let conversation = [
    {
      role: 'assistant',
      content: {
        summary: "I'm your **EcomIQ Operational Copilot**. I have indexed real-time data across your 4 stores, 5 courier partner APIs, 4 fulfillment hubs, and Meta/Google ad spend. What would you like to investigate today?"
      }
    }
  ];

  function render() {
    container.innerHTML = `
      <div class="view-content-wrapper">
        <div class="view-header">
          <div class="view-title-group">
            <div class="view-context-crumb">
              <span>COPILOT INTELLIGENCE</span>
              <span>/</span>
              <span>NATURAL LANGUAGE BI TERMINAL</span>
            </div>
            <h1 class="view-title">
              EcomIQ AI Copilot
              <span class="badge badge-ai">LIVE MODEL • 14ms LATENCY</span>
            </h1>
            <div class="view-subtitle">Ask questions about couriers, revenue, RTO, NDR recovery, freight reconciliation, and ad spend</div>
          </div>
        </div>

        <div class="ai-chat-container">
          <div class="ai-chat-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <div class="pulse-dot" style="background:#C084FC;"></div>
              <span style="font-family:var(--font-display); font-size:12px; font-weight:700; color:var(--text-primary);">EcomIQ BI Core (Indexed 18,429 orders)</span>
            </div>
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">Zero data leaves your private enterprise perimeter</span>
          </div>

          <div class="ai-chat-messages" id="chat-messages-scroll">
            ${conversation.map(msg => renderMessage(msg)).join('')}
          </div>

          <!-- Suggested Query Chips -->
          <div class="chat-query-chips">
            <span style="font-size:11px; color:var(--text-tertiary); font-weight:600; text-transform:uppercase;">SUGGESTED QUERIES:</span>
            ${MOCK_AI_QUERIES.map(q => `
              <button class="query-chip" data-id="${q.id}">
                ${q.label}
              </button>
            `).join('')}
          </div>

          <!-- Chat Input Bar -->
          <div class="chat-input-bar">
            <input type="text" class="input-control" id="chat-user-input" placeholder="Ask anything about orders, couriers, RTO, or ad spend (e.g., 'Which courier is slowest this week?')..." />
            <button class="btn btn-primary" id="chat-send-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Query
            </button>
          </div>
        </div>
      </div>
    `;

    attachEventHandlers();
  }

  function renderMessage(msg) {
    if (msg.role === 'user') {
      return `
        <div class="chat-bubble user">
          <div style="font-weight:600;">${msg.text}</div>
        </div>
      `;
    }

    const c = msg.content;
    return `
      <div class="chat-bubble assistant">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span style="font-weight:700; font-size:11px; color:var(--accent-cyan); letter-spacing:0.05em; text-transform:uppercase;">ECOMIQ INTELLIGENCE COPILOT</span>
        </div>

        <div style="font-size:13px; color:var(--text-primary); line-height:1.5;">
          ${c.summary.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
        </div>

        ${c.insights ? `
          <ul style="margin-top:8px; padding-left:18px; font-size:12px; color:var(--text-secondary); line-height:1.5;">
            ${c.insights.map(item => `<li>${item}</li>`).join('')}
          </ul>
        ` : ''}

        ${c.table ? `
          <div style="margin-top:12px; border:1px solid var(--border-subtle); border-radius:var(--radius-sm); overflow:hidden;">
            <table class="data-table" style="font-size:11px;">
              <thead>
                <tr>
                  ${c.table.headers.map(h => `<th>${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${c.table.rows.map(row => `
                  <tr>
                    ${row.map((cell, idx) => `<td class="${idx > 0 ? 'tabular-nums' : ''}" style="${idx === 0 ? 'font-weight:600; color:var(--text-primary);' : ''}">${cell}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : ''}

        ${c.kpiBlock ? `
          <div style="margin-top:12px; background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:10px;">
            <div style="font-size:10px; font-weight:700; color:var(--text-tertiary); text-transform:uppercase; margin-bottom:6px;">${c.kpiBlock.title}</div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:8px;">
              ${c.kpiBlock.metrics.map(m => `
                <div>
                  <div style="color:var(--text-tertiary); font-size:10px;">${m.label}</div>
                  <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${m.value}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${c.orders ? `
          <div style="margin-top:12px; display:flex; flex-direction:column; gap:6px;">
            ${c.orders.map(o => `
              <div style="background:var(--bg-base); padding:8px 12px; border-radius:var(--radius-xs); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <span style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); font-size:12px;">${o.orderId}</span>
                  <span style="font-size:12px; color:var(--text-primary); margin-left:8px;">${o.customer} (${o.city})</span>
                  <div style="font-size:10px; color:#FBBF24; margin-top:2px;">Reason: ${o.ndrReason}</div>
                </div>
                <div style="text-align:right;">
                  <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary);">${o.amount}</div>
                  <span class="badge badge-warning" style="font-size:9px;">${o.status}</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${c.recommendation ? `
          <div style="margin-top:12px; padding:10px 12px; background:rgba(0, 229, 255, 0.05); border:1px solid var(--accent-cyan-border); border-radius:var(--radius-sm); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div style="font-size:11px; color:var(--text-primary);">
              <strong>Playbook Action:</strong> ${c.recommendation.actionText}
            </div>
            <button class="btn btn-primary btn-sm chat-action-jump-btn" data-target="${c.recommendation.targetView}">
              Execute in ${c.recommendation.targetView.toUpperCase()} →
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  function attachEventHandlers() {
    // Suggested query chips
    container.querySelectorAll('.query-chip').forEach(chip => {
      chip.onclick = () => {
        const qId = chip.getAttribute('data-id');
        const q = MOCK_AI_QUERIES.find(item => item.id === qId);
        if (q) {
          submitQuery(q.query, q.response);
        }
      };
    });

    // Chat input
    const input = container.querySelector('#chat-user-input');
    const sendBtn = container.querySelector('#chat-send-btn');

    sendBtn.onclick = () => {
      const text = input.value.trim();
      if (!text) return;
      handleCustomQuery(text);
    };

    input.onkeydown = (e) => {
      if (e.key === 'Enter') {
        const text = input.value.trim();
        if (!text) return;
        handleCustomQuery(text);
      }
    };

    // Action Jump Buttons
    container.querySelectorAll('.chat-action-jump-btn').forEach(btn => {
      btn.onclick = () => {
        const target = btn.getAttribute('data-target');
        onNavigate(target);
      };
    });
  }

  function handleCustomQuery(text) {
    // Check if query matches any mock keyword
    const lower = text.toLowerCase();
    let matched = MOCK_AI_QUERIES[0];

    if (lower.includes('why') || lower.includes('drop') || lower.includes('delivery')) {
      matched = MOCK_AI_QUERIES[1];
    } else if (lower.includes('5000') || lower.includes('high') || lower.includes('ndr')) {
      matched = MOCK_AI_QUERIES[2];
    } else if (lower.includes('cod') || lower.includes('finance') || lower.includes('remit')) {
      matched = MOCK_AI_QUERIES[3];
    }

    submitQuery(text, matched.response);
  }

  function submitQuery(queryText, responseContent) {
    conversation.push({ role: 'user', text: queryText });
    conversation.push({ role: 'assistant', content: responseContent });
    render();

    setTimeout(() => {
      const scrollEl = container.querySelector('#chat-messages-scroll');
      if (scrollEl) scrollEl.scrollTop = scrollEl.scrollHeight;
    }, 50);
  }

  render();
}
