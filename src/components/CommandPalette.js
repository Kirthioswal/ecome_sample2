// Command Palette (⌘K) Component

import { MOCK_ORDERS, MOCK_COURIERS } from '../data/mockData.js';

export class CommandPalette {
  constructor({ onNavigate, onOpenOrder, onAction }) {
    this.onNavigate = onNavigate;
    this.onOpenOrder = onOpenOrder;
    this.onAction = onAction;
    this.isOpen = false;
    this.selectedIndex = 0;
    this.results = [];
    this.init();
  }

  init() {
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'modal-backdrop';
    this.backdrop.id = 'command-palette-backdrop';

    this.backdrop.innerHTML = `
      <div class="command-modal" id="command-palette-modal">
        <div class="command-input-container">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="command-input" id="command-search-input" placeholder="Type a command, search orders, AWBs, couriers..." autocomplete="off" />
          <span class="kbd-badge">ESC</span>
        </div>
        <div class="command-results-list" id="command-results"></div>
        <div class="command-footer">
          <div><span class="kbd-badge">↑</span> <span class="kbd-badge">↓</span> to navigate &nbsp;•&nbsp; <span class="kbd-badge">↵</span> to select</div>
          <div style="color:var(--accent-cyan); font-weight:600;">EcomIQ Command Engine</div>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    this.input = this.backdrop.querySelector('#command-search-input');
    this.resultsContainer = this.backdrop.querySelector('#command-results');

    // Global keyboard listener for ⌘K and Ctrl+K
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      } else if (this.isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.moveSelection(1);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.moveSelection(-1);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          this.executeSelection();
        }
      }
    });

    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) {
        this.close();
      }
    });

    this.input.addEventListener('input', () => {
      this.filter(this.input.value);
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.backdrop.classList.add('open');
    this.input.value = '';
    this.selectedIndex = 0;
    this.filter('');
    setTimeout(() => this.input.focus(), 50);
  }

  close() {
    this.isOpen = false;
    this.backdrop.classList.remove('open');
  }

  getDefaultCommands() {
    return [
      { type: 'action', title: 'Trigger WhatsApp NDR Playbook', desc: 'Auto-verify 284 delayed Maharashtra consignments', action: () => this.onAction('whatsapp-ndr') },
      { type: 'action', title: 'Raise Bulk DTDC Weight Dispute', desc: 'File 89 pre-compiled dispute packets to save ₹41,200', action: () => this.onAction('dispute-weight') },
      { type: 'action', title: 'Export Live Orders (CSV / Excel)', desc: 'Generate high-density logistics manifest', action: () => this.onAction('export-orders') },
      { type: 'view', title: 'Dashboard — Command Center', desc: 'Switch to executive operations overview', target: 'dashboard' },
      { type: 'view', title: 'Orders Operational Table', desc: 'Manage 18,429 multi-channel orders', target: 'orders' },
      { type: 'view', title: 'NDR Recovery Cockpit', desc: 'Action 184 active delivery exceptions', target: 'ndr' },
      { type: 'view', title: 'Weight Discrepancy Manager', desc: 'Audit carrier overcharges and optical scans', target: 'weight' },
      { type: 'view', title: 'Courier Benchmark Matrix', desc: 'Compare Delhivery, BlueDart, DTDC SLAs', target: 'couriers' },
      { type: 'view', title: 'Finance & COD Remittance', desc: 'Track ₹42.6L COD and ₹14.8L wallet', target: 'finance' },
      { type: 'view', title: 'AI Copilot BI Terminal', desc: 'Ask natural-language intelligence questions', target: 'ai-chat' }
    ];
  }

  filter(query) {
    const q = query.toLowerCase().trim();
    const defaults = this.getDefaultCommands();

    let matched = [];

    if (!q) {
      matched = defaults;
    } else {
      // Search in commands & views
      defaults.forEach(cmd => {
        if (cmd.title.toLowerCase().includes(q) || cmd.desc.toLowerCase().includes(q)) {
          matched.push(cmd);
        }
      });

      // Search in Mock Orders
      MOCK_ORDERS.forEach(ord => {
        if (
          ord.id.toLowerCase().includes(q) ||
          ord.customer.name.toLowerCase().includes(q) ||
          ord.shipment.awb.toLowerCase().includes(q) ||
          ord.customer.city.toLowerCase().includes(q)
        ) {
          matched.push({
            type: 'order',
            title: `${ord.id} • ${ord.customer.name} (${ord.amount})`,
            desc: `AWB ${ord.shipment.awb} • ${ord.status} • ${ord.customer.city}`,
            order: ord
          });
        }
      });

      // Search in Couriers
      MOCK_COURIERS.forEach(c => {
        if (c.name.toLowerCase().includes(q) || c.logoText.toLowerCase().includes(q)) {
          matched.push({
            type: 'courier',
            title: `Courier: ${c.name}`,
            desc: `Delivery: ${c.deliveryRate} • NDR: ${c.ndrRate} • Cost: ${c.costPerShipment}`,
            target: 'couriers'
          });
        }
      });
    }

    this.results = matched;
    this.selectedIndex = 0;
    this.renderResults();
  }

  renderResults() {
    if (this.results.length === 0) {
      this.resultsContainer.innerHTML = `
        <div style="padding:24px; text-align:center; color:var(--text-tertiary); font-size:12px;">
          No matching operational records or commands found for your query.
        </div>
      `;
      return;
    }

    this.resultsContainer.innerHTML = this.results.map((item, idx) => `
      <div class="command-item ${idx === this.selectedIndex ? 'focused' : ''}" data-index="${idx}">
        <div class="command-item-left">
          ${item.type === 'action' 
            ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
            : item.type === 'order'
            ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-info)" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>'
            : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}
          <div>
            <div style="font-weight:600; font-size:12px; color:var(--text-primary);">${item.title}</div>
            <div style="font-size:11px; color:var(--text-tertiary); margin-top:1px;">${item.desc}</div>
          </div>
        </div>
        <span class="kbd-badge" style="font-size:9px;">${item.type.toUpperCase()}</span>
      </div>
    `).join('');

    // Attach click handlers
    this.resultsContainer.querySelectorAll('.command-item').forEach(el => {
      el.onclick = () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        this.selectedIndex = idx;
        this.executeSelection();
      };
    });
  }

  moveSelection(direction) {
    if (this.results.length === 0) return;
    this.selectedIndex = (this.selectedIndex + direction + this.results.length) % this.results.length;
    this.renderResults();

    const focusedEl = this.resultsContainer.querySelector('.command-item.focused');
    if (focusedEl) {
      focusedEl.scrollIntoView({ block: 'nearest' });
    }
  }

  executeSelection() {
    const item = this.results[this.selectedIndex];
    if (!item) return;

    this.close();

    if (item.action) {
      item.action();
    } else if (item.target) {
      this.onNavigate(item.target);
    } else if (item.order) {
      this.onOpenOrder(item.order);
    }
  }
}
