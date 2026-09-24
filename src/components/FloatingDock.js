// EcomIQ — Experimental Floating Navigation Dock
// Living, Morphing Dock for OPERATE, MONEY, GROW, INTELLIGENCE

export class FloatingDock {
  constructor({ onNavigate, onOpenCommandPalette, onAskAI, onToggleWorkspace, currentMode = 'os' }) {
    this.onNavigate = onNavigate;
    this.onOpenCommandPalette = onOpenCommandPalette;
    this.onAskAI = onAskAI;
    this.onToggleWorkspace = onToggleWorkspace;
    this.currentMode = currentMode; // 'os' or 'workspace'
    this.activeEnv = 'operate';
    this.isSubdockVisible = false;
  }

  render(container) {
    this.container = container;
    this.update();
  }

  setMode(mode) {
    this.currentMode = mode;
    this.update();
  }

  setActiveEnv(env) {
    this.activeEnv = env;
    this.isSubdockVisible = true;
    this.update();
  }

  update() {
    if (!this.container) return;

    const subitems = {
      operate: [
        { label: "Orders (2,842)", target: "section-operate", module: "orders" },
        { label: "Shipments Flow", target: "section-operate", module: "shipments" },
        { label: "NDR Recovery (42)", target: "section-ndr", module: "ndr" },
        { label: "Couriers SLA", target: "section-operate", module: "couriers" },
        { label: "Warehouses", target: "section-operate", module: "warehouses" }
      ],
      money: [
        { label: "Revenue Flow (₹48.6L)", target: "section-money", module: "finance" },
        { label: "COD Remittance", target: "section-money", module: "finance" },
        { label: "Shipping Cost", target: "section-money", module: "finance" },
        { label: "Weight Disputes", target: "section-universe", module: "weight" },
        { label: "Prepaid Wallet", target: "section-money", module: "finance" }
      ],
      grow: [
        { label: "Meta & Google Ads", target: "section-grow", module: "marketing" },
        { label: "ROAS (4.82x)", target: "section-grow", module: "marketing" },
        { label: "CAC Optimizer", target: "section-grow", module: "marketing" },
        { label: "Customer 360", target: "section-grow", module: "customers" }
      ],
      intelligence: [
        { label: "Neural Nucleus", target: "section-intelligence", module: "ai-insights" },
        { label: "7 Active Anomalies", target: "section-intelligence", module: "ai-insights" },
        { label: "Recommendations", target: "section-intelligence", module: "ai-insights" },
        { label: "Ask EcomIQ Copilot", target: "section-ask-ai", module: "ai-chat" },
        { label: "Analytics Explorer", target: "section-universe", module: "analytics" }
      ]
    };

    const currentSub = subitems[this.activeEnv] || subitems.operate;

    this.container.innerHTML = `
      <div class="floating-dock-outer">
        <!-- Main Floating Obsidian Dock Capsule -->
        <nav class="floating-os-dock" id="main-floating-dock" aria-label="EcomIQ Operating Navigation">
          <!-- Brand Cluster -->
          <div class="dock-brand-cluster" id="dock-brand-btn" title="EcomIQ Home / OS Experience">
            <div class="dock-brand-glyph">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
            <span class="dock-brand-text">Ecom<span>IQ</span></span>
            <span class="dock-status-pulse">LIVE</span>
          </div>

          <!-- The 4 Core Environments -->
          <div class="dock-environments-group">
            <button class="dock-env-btn ${this.activeEnv === 'operate' ? 'active-operate' : ''}" data-env="operate">
              <span>OPERATE</span>
            </button>
            <button class="dock-env-btn ${this.activeEnv === 'money' ? 'active-money' : ''}" data-env="money">
              <span>MONEY</span>
            </button>
            <button class="dock-env-btn ${this.activeEnv === 'grow' ? 'active-grow' : ''}" data-env="grow">
              <span>GROW</span>
            </button>
            <button class="dock-env-btn ${this.activeEnv === 'intelligence' ? 'active-intelligence' : ''}" data-env="intelligence">
              <span>INTELLIGENCE</span>
            </button>
          </div>

          <!-- Utility & Workspace Controls -->
          <div class="dock-controls-group">
            <button class="dock-tool-btn" id="dock-search-btn" title="Command Palette (⌘K)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>⌘K</span>
            </button>

            <button class="dock-tool-btn" id="dock-ask-ai-btn" title="Ask EcomIQ Copilot (⌘J)" style="border-color:rgba(168,85,247,0.3); color:#C084FC;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><circle cx="12" cy="12" r="6"/></svg>
              <span>Ask AI</span>
            </button>

            <button class="dock-tool-btn dock-workspace-toggle" id="dock-workspace-toggle-btn" title="Toggle between OS Showcase & Deep Workspace">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
              <span>${this.currentMode === 'workspace' ? 'Exit to OS View' : 'Workspace Mode'}</span>
            </button>
          </div>
        </nav>

        <!-- Morphing Sub-Navigation Dock -->
        <div class="morphing-subdock ${this.isSubdockVisible ? 'visible' : ''}" id="morphing-subdock-bar">
          ${currentSub.map(item => `
            <div class="subdock-item" data-target="${item.target}" data-module="${item.module}">
              ${item.label}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    // Brand Logo Click
    const brandBtn = this.container.querySelector('#dock-brand-btn');
    if (brandBtn) {
      brandBtn.addEventListener('click', () => {
        if (this.currentMode === 'workspace') {
          if (this.onToggleWorkspace) this.onToggleWorkspace('os');
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    // Core Environment Buttons
    const envBtns = this.container.querySelectorAll('.dock-env-btn');
    envBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const env = btn.getAttribute('data-env');
        this.activeEnv = env;
        this.isSubdockVisible = true;
        this.update();

        // Scroll to the corresponding environment section if in OS mode
        if (this.currentMode === 'os') {
          const targetMap = {
            operate: 'section-operate',
            money: 'section-money',
            grow: 'section-grow',
            intelligence: 'section-intelligence'
          };
          const targetEl = document.getElementById(targetMap[env]);
          if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });

      // Hover expansion
      btn.addEventListener('mouseenter', () => {
        const env = btn.getAttribute('data-env');
        if (this.activeEnv !== env) {
          this.activeEnv = env;
          this.isSubdockVisible = true;
          this.update();
        }
      });
    });

    // Subdock Items
    const subItems = this.container.querySelectorAll('.subdock-item');
    subItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const module = item.getAttribute('data-module');

        if (this.currentMode === 'workspace') {
          if (this.onNavigate) this.onNavigate(module);
        } else {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Search Command Trigger
    const searchBtn = this.container.querySelector('#dock-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        if (this.onOpenCommandPalette) this.onOpenCommandPalette();
      });
    }

    // Ask AI Trigger
    const askAIBtn = this.container.querySelector('#dock-ask-ai-btn');
    if (askAIBtn) {
      askAIBtn.addEventListener('click', () => {
        if (this.currentMode === 'os') {
          const askSec = document.getElementById('section-ask-ai');
          if (askSec) {
            askSec.scrollIntoView({ behavior: 'smooth' });
            const input = document.getElementById('ask-ecomiq-input');
            if (input) setTimeout(() => input.focus(), 500);
          }
        } else {
          if (this.onNavigate) this.onNavigate('ai-chat');
        }
      });
    }

    // Toggle Workspace Mode
    const toggleBtn = this.container.querySelector('#dock-workspace-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const nextMode = this.currentMode === 'workspace' ? 'os' : 'workspace';
        if (this.onToggleWorkspace) this.onToggleWorkspace(nextMode);
      });
    }
  }
}
