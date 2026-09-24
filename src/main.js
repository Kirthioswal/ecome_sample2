// EcomIQ — Enterprise Operations Command Center OS
// Sole Application Controller & Module Coordinator

import { router } from './router.js';
import { CommandCenterLayout } from './layouts/CommandCenterLayout.js';
import { CommandPalette } from './components/CommandPalette.js';
import { OrderDrawer } from './components/OrderDrawer.js';
import { ActionModals } from './components/ActionModals.js';
import { toast } from './components/Toast.js';

class EcomIQApp {
  constructor() {
    this.headerMount = document.getElementById('header-mount');
    this.mainContainer = document.getElementById('main-content-container');

    // Shared Modals & Drawers
    this.actionModals = new ActionModals({
      onRefreshData: () => this.refresh()
    });

    this.orderDrawer = new OrderDrawer({
      onAction: (action, order) => this.handleAction(action, order)
    });

    this.commandPalette = new CommandPalette({
      onNavigate: (module) => router.navigate(module),
      onOpenOrder: (order) => this.orderDrawer.open(order),
      onAction: (action, payload) => this.handleAction(action, payload)
    });

    // Initialize CommandCenterLayout
    this.layout = new CommandCenterLayout({
      headerMount: this.headerMount,
      mainMount: this.mainContainer,
      onNavigate: (module) => router.navigate(module),
      onOpenCommandPalette: () => this.commandPalette.open(),
      onOpenOrder: (order) => this.orderDrawer.open(order),
      onAction: (action, payload) => this.handleAction(action, payload)
    });

    this.init();
  }

  init() {
    // Subscribe to router state changes
    router.onRoute((route) => {
      this.layout.updateModule(route.module);
      this.checkDeepLinks(route.raw);
    });

    // Global keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      // Cmd/Ctrl + K: Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.commandPalette.toggle();
      }
      // Cmd/Ctrl + J: Ask EcomIQ AI Copilot
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        if (this.layout.currentModule === 'os') {
          const askSec = document.getElementById('section-ask-ai');
          if (askSec) {
            askSec.scrollIntoView({ behavior: 'smooth' });
            const input = document.getElementById('ask-ecomiq-input');
            if (input) setTimeout(() => input.focus(), 400);
          }
        } else {
          router.navigate('ai-chat');
        }
      }
      // Cmd/Ctrl + O: Toggle Mode (OS Showcase <-> Workspace)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'o') {
        e.preventDefault();
        const next = this.layout.currentModule === 'os' ? 'dashboard' : 'os';
        router.navigate(next);
      }
      // Cmd/Ctrl + B: Toggle Sidebar Collapse
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        this.layout.isSidebarCollapsed = !this.layout.isSidebarCollapsed;
        this.layout.updateSidebar();
      }
    });

    // Start router
    router.start();
  }

  checkDeepLinks(rawHash) {
    if (!rawHash) return;

    if (rawHash.includes('inspect=')) {
      const ordId = rawHash.split('inspect=')[1].split('&')[0];
      const ord = {
        id: ordId,
        date: "2026-09-24 19:42",
        customer: {
          name: "Rohan Singhania",
          phone: "+91 98201 44821",
          email: "rohan.s@gmail.com",
          address: "Flat 802, Silver Arch Heights, Bandra West",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400050",
          totalOrders: 14,
          totalSpend: "₹38,450",
          rtoRisk: "LOW"
        },
        items: [
          { name: "Apex Carbon Elite Running Shoes - Olive", sku: "AC-RN-09-OLV", qty: 1, price: "₹4,299", hsn: "640411" }
        ],
        amount: "₹7,297",
        subtotal: "₹7,297",
        tax: "₹782",
        shippingFee: "₹0",
        payment: { type: "Prepaid", gateway: "Razorpay (UPI)", transactionId: "pay_Rzp99281741", status: "PAID" },
        channel: "Shopify - Apex Athletics",
        warehouse: "Mumbai Central Mega Hub (Bhiwandi)",
        status: "Out for Delivery",
        shipment: {
          awb: "DEL882941029",
          courier: "Delhivery Express",
          deadWeight: "0.85 kg",
          volWeight: "1.10 kg",
          edd: "Today by 21:00",
          events: [
            { time: "16:15", title: "Out for Delivery", desc: "Assigned to delivery agent Vikram Yadav" },
            { time: "11:20", title: "Arrived at Delivery Facility", desc: "Mumbai Bandra West Delivery Center" },
            { time: "04:10", title: "In Transit", desc: "Departed Mumbai Mega Hub Bhiwandi" }
          ]
        }
      };
      setTimeout(() => this.orderDrawer.open(ord), 200);
    } else if (rawHash.includes('palette=open')) {
      setTimeout(() => this.commandPalette.open(), 200);
    }
  }

  handleAction(action, payload) {
    if (action === 'create-order') {
      this.actionModals.openCreateOrderModal();
    } else if (action === 'whatsapp-ndr') {
      this.actionModals.openWhatsAppNDR(payload);
    } else if (action === 'call-customer') {
      this.actionModals.openCallModal(payload);
    } else if (action === 'dispute-weight') {
      this.actionModals.openWeightDisputeModal();
    } else if (action === 'export-orders') {
      this.actionModals.openExportModal();
    } else if (action === 'command-palette') {
      this.commandPalette.open();
    } else if (action === 'ask-ai') {
      if (this.layout.currentModule === 'os') {
        const askSec = document.getElementById('section-ask-ai');
        if (askSec) {
          askSec.scrollIntoView({ behavior: 'smooth' });
          const input = document.getElementById('ask-ecomiq-input');
          if (input) setTimeout(() => input.focus(), 400);
        }
      } else {
        router.navigate('ai-chat');
      }
    } else {
      console.log('[EcomIQApp] Unhandled action:', action, payload);
    }
  }

  refresh() {
    this.layout.renderActiveView();
  }
}

// Boot Command Center
document.addEventListener('DOMContentLoaded', () => {
  window.__ECOMIQ__ = new EcomIQApp();
});
