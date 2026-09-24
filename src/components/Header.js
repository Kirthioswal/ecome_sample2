// EcomIQ Command Center OS Header Component

export function renderHeader(container, { onNavigate, onOpenCommandPalette, onAction }) {
  container.innerHTML = `
    <header class="site-header">
      <!-- Brand Insignia & Logo -->
      <div class="header-brand-wrap" id="brand-logo-btn" title="EcomIQ Command Center">
        <div class="brand-symbol">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        </div>
        <div class="brand-text-logo">
          ECOM<span>IQ</span>
        </div>
        <span class="header-concept-badge" style="background:rgba(37,99,235,0.1); color:#2563EB; border:1px solid rgba(37,99,235,0.25);">COMMAND CENTER</span>
      </div>

      <!-- Store / Workspace Pill & Live Health -->
      <div style="display:flex; align-items:center; gap:12px;">
        <div class="header-workspace-badge" style="display:flex; align-items:center; gap:8px; font-size:12px; color:var(--text-secondary); background:var(--bg-canvas-subtle); padding:6px 14px; border-radius:var(--radius-full); border:1px solid var(--border-light);">
          <span style="width:7px; height:7px; border-radius:50%; background:var(--color-finance); box-shadow:0 0 6px var(--color-finance);"></span>
          <span>Apex Brands Global (4 Stores)</span>
        </div>
        <div class="header-status-pill" style="display:flex; align-items:center; gap:6px; font-family:var(--font-mono); font-size:11px; color:var(--color-finance-dark); background:rgba(0,208,132,0.08); padding:5px 12px; border-radius:var(--radius-full); border:1px solid rgba(0,208,132,0.2);">
          <span>●</span>
          <span>Live Telemetry • 14ms</span>
        </div>
      </div>

      <!-- Right Header Actions -->
      <div class="header-right-actions">
        <!-- Command Palette Trigger -->
        <button class="header-search-btn" id="header-search-command-btn" title="Open Command Palette (⌘K)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span>Search ⌘K</span>
        </button>

        <!-- New Consignment Action -->
        <button class="btn btn-primary btn-sm" id="header-create-order-btn">
          + Create Consignment
        </button>
      </div>
    </header>
  `;

  // Attach Event Listeners
  const brandBtn = container.querySelector('#brand-logo-btn');
  if (brandBtn && onNavigate) {
    brandBtn.onclick = () => onNavigate('dashboard');
  }

  const searchBtn = container.querySelector('#header-search-command-btn');
  if (searchBtn && onOpenCommandPalette) {
    searchBtn.onclick = () => onOpenCommandPalette();
  }

  const createBtn = container.querySelector('#header-create-order-btn');
  if (createBtn && onAction) {
    createBtn.onclick = () => onAction('create-order');
  }
}
