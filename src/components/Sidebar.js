// Operating System Sidebar Component for Enterprise Workspace Mode

export function renderSidebar(container, { currentView, onNavigate, isCollapsed, onToggleCollapse }) {
  const navSections = [
    {
      title: "MODE",
      items: [
        {
          id: "os",
          label: "✦ OS Experience",
          specialClass: "nav-item-os-portal",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
        }
      ]
    },
    {
      title: "EXECUTIVE",
      items: [
        {
          id: "dashboard",
          label: "Command Center",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>`
        }
      ]
    },
    {
      title: "OPERATIONS",
      items: [
        {
          id: "orders",
          label: "Orders",
          counter: "18.4k",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`
        },
        {
          id: "shipments",
          label: "Shipments",
          counter: "1.1k",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`
        },
        {
          id: "ndr",
          label: "NDR Cockpit",
          counter: "184",
          counterClass: "alert-danger",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
        },
        {
          id: "weight",
          label: "Weight Disputes",
          counter: "89",
          counterClass: "alert-warning",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.9 1.4l-2.4 7.4A2 2 0 0 0 4.1 19h15.8a2 2 0 0 0 1.9-2.2l-2.4-7.4A2 2 0 0 0 17.5 8h-11Z"/></svg>`
        },
        {
          id: "couriers",
          label: "Couriers",
          counter: "5",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`
        },
        {
          id: "warehouses",
          label: "Warehouses",
          counter: "4",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M3 7v14"/><path d="M21 7v14"/><path d="M19 7 12 3 5 7"/></svg>`
        }
      ]
    },
    {
      title: "COMMERCIAL",
      items: [
        {
          id: "customers",
          label: "Customers (360)",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
          id: "finance",
          label: "Finance & COD",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
        },
        {
          id: "marketing",
          label: "Marketing (ROAS)",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
        }
      ]
    },
    {
      title: "INTELLIGENCE",
      items: [
        {
          id: "analytics",
          label: "Analytics",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
        },
        {
          id: "ai-insights",
          label: "AI Insights",
          counter: "7",
          counterClass: "alert-ai",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
        },
        {
          id: "ai-chat",
          label: "AI Chat Copilot",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
        }
      ]
    },
    {
      title: "SYSTEM",
      items: [
        {
          id: "settings",
          label: "Settings",
          icon: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
        }
      ]
    }
  ];

  let navHtml = '';
  navSections.forEach(sec => {
    navHtml += `
      <div class="nav-section">
        <div class="nav-section-title">${sec.title}</div>
        ${sec.items.map(item => `
          <div class="nav-item ${currentView === item.id ? 'active' : ''} ${item.specialClass || ''}" data-view="${item.id}" title="${item.label}">
            <div class="nav-item-content">
              ${item.icon}
              <span class="nav-label">${item.label}</span>
            </div>
            ${item.counter ? `<span class="nav-counter ${item.counterClass || ''}">${item.counter}</span>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  });

  container.innerHTML = `
    <aside class="app-sidebar ${isCollapsed ? 'collapsed' : ''}" id="app-sidebar">
      <div class="sidebar-nav-container">
        ${navHtml}
      </div>
      <div class="sidebar-footer">
        <button class="collapse-btn" id="sidebar-toggle-btn" title="Toggle Sidebar (⌘B)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${isCollapsed 
              ? '<polyline points="9 18 15 12 9 6"/>' 
              : '<polyline points="15 18 9 12 15 6"/>'}
          </svg>
          <span>${isCollapsed ? '' : 'Collapse Menu'}</span>
        </button>
      </div>
    </aside>
  `;

  // Attach nav click handlers
  container.querySelectorAll('.nav-item').forEach(el => {
    el.onclick = () => {
      const view = el.getAttribute('data-view');
      onNavigate(view);
    };
  });

  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  if (toggleBtn) toggleBtn.onclick = onToggleCollapse;
}
