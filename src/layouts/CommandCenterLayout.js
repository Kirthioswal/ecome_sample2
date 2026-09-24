// EcomIQ Command Center OS Layout Shell
// Dedicated operational workspace layout and OS Showcase Coordinator

import { FloatingDock } from '../components/FloatingDock.js';
import { renderSidebar } from '../components/Sidebar.js';
import { renderOperatingSystemView } from '../views/OperatingSystemView.js';
import { renderDashboardView } from '../views/DashboardView.js';
import { renderOrdersView } from '../views/OrdersView.js';
import { renderShipmentsView } from '../views/ShipmentsView.js';
import { renderNDRView } from '../views/NDRView.js';
import { renderWeightView } from '../views/WeightView.js';
import { renderCouriersView } from '../views/CouriersView.js';
import { renderWarehousesView } from '../views/WarehousesView.js';
import { renderCustomersView } from '../views/CustomersView.js';
import { renderFinanceView } from '../views/FinanceView.js';
import { renderMarketingView } from '../views/MarketingView.js';
import { renderAnalyticsView } from '../views/AnalyticsView.js';
import { renderAIInsightsView } from '../views/AIInsightsView.js';
import { renderAIChatView } from '../views/AIChatView.js';
import { renderSettingsView } from '../views/SettingsView.js';

export class CommandCenterLayout {
  constructor({ headerMount, mainMount, onNavigate, onOpenCommandPalette, onOpenOrder, onAction }) {
    this.headerMount = headerMount;
    this.mainMount = mainMount;
    this.onNavigate = onNavigate;
    this.onOpenCommandPalette = onOpenCommandPalette;
    this.onOpenOrder = onOpenOrder;
    this.onAction = onAction;

    this.currentModule = 'os';
    this.isSidebarCollapsed = false;
    this.isMounted = false;

    // Instantiate Floating Dock
    this.floatingDock = new FloatingDock({
      onNavigate: (mod) => this.onNavigate(mod),
      onOpenCommandPalette: () => this.onOpenCommandPalette(),
      onAskAI: () => this.onAction('ask-ai'),
      onToggleWorkspace: (targetMode) => {
        if (targetMode === 'os') {
          this.onNavigate('os');
        } else {
          this.onNavigate('dashboard');
        }
      },
      currentMode: 'os'
    });
  }

  mount(initialModule = 'os') {
    this.currentModule = initialModule;
    document.body.className = 'layout-command-center mode-app';

    // 1. Render Floating Navigation Dock into Header Mount
    this.floatingDock.render(this.headerMount);

    // 2. Render View
    this.renderActiveView();

    this.isMounted = true;
  }

  updateSidebar() {
    if (!this.sidebarMount) return;

    renderSidebar(this.sidebarMount, {
      currentView: this.currentModule,
      onNavigate: (module) => {
        this.onNavigate(module);
      },
      isCollapsed: this.isSidebarCollapsed,
      onToggleCollapse: () => {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
        this.updateSidebar();
      }
    });
  }

  updateModule(newModule) {
    this.currentModule = newModule;
    const mode = newModule === 'os' ? 'os' : 'workspace';
    this.floatingDock.setMode(mode);

    if (!this.isMounted) {
      this.mount(newModule);
      return;
    }

    this.renderActiveView();
  }

  renderActiveView() {
    const handlers = {
      onNavigate: (targetModule) => this.onNavigate(targetModule),
      onOpenOrder: (order) => this.onOpenOrder(order),
      onAction: (action, payload) => this.onAction(action, payload),
      onSwitchToWorkspace: () => this.onNavigate('dashboard')
    };

    if (this.currentModule === 'os') {
      // Clean Mount for OS Experience
      this.mainMount.innerHTML = '';
      this.sidebarMount = null;
      this.viewportMount = null;
      renderOperatingSystemView(this.mainMount, handlers);
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Otherwise, ensure Workspace Shell is mounted
    let shell = document.getElementById('command-center-shell');
    if (!shell) {
      this.mainMount.innerHTML = `
        <div class="app-os-shell" id="command-center-shell">
          <div id="os-sidebar-mount"></div>
          <main class="app-os-viewport" id="os-viewport-mount"></main>
        </div>
      `;
      this.sidebarMount = document.getElementById('os-sidebar-mount');
      this.viewportMount = document.getElementById('os-viewport-mount');
    }

    this.updateSidebar();

    if (!this.viewportMount) return;
    this.viewportMount.innerHTML = '';
    this.viewportMount.scrollTop = 0;

    switch (this.currentModule) {
      case 'dashboard':
        renderDashboardView(this.viewportMount, handlers);
        break;
      case 'orders':
        renderOrdersView(this.viewportMount, handlers);
        break;
      case 'shipments':
        renderShipmentsView(this.viewportMount, handlers);
        break;
      case 'ndr':
        renderNDRView(this.viewportMount, handlers);
        break;
      case 'weight':
        renderWeightView(this.viewportMount, handlers);
        break;
      case 'couriers':
        renderCouriersView(this.viewportMount, handlers);
        break;
      case 'warehouses':
        renderWarehousesView(this.viewportMount, handlers);
        break;
      case 'customers':
        renderCustomersView(this.viewportMount, handlers);
        break;
      case 'finance':
        renderFinanceView(this.viewportMount, handlers);
        break;
      case 'marketing':
        renderMarketingView(this.viewportMount, handlers);
        break;
      case 'analytics':
        renderAnalyticsView(this.viewportMount, handlers);
        break;
      case 'ai-insights':
        renderAIInsightsView(this.viewportMount, handlers);
        break;
      case 'ai-chat':
        renderAIChatView(this.viewportMount, handlers);
        break;
      case 'settings':
        renderSettingsView(this.viewportMount, handlers);
        break;
      default:
        renderDashboardView(this.viewportMount, handlers);
        break;
    }
  }

  destroy() {
    this.isMounted = false;
  }
}
