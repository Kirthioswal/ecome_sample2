// Orders Operational Management View

import { MOCK_ORDERS } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderOrdersView(container, { onOpenOrder, onAction }) {
  let ordersList = [...MOCK_ORDERS];
  let filterStatus = 'all';
  let filterPayment = 'all';
  let searchQuery = '';
  let selectedOrders = new Set();
  let sortField = 'date';
  let sortAsc = false;

  function getFilteredOrders() {
    return ordersList.filter(o => {
      if (filterStatus !== 'all' && o.status !== filterStatus) return false;
      if (filterPayment !== 'all' && o.payment.type !== filterPayment) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const match = o.id.toLowerCase().includes(q) ||
                      o.customer.name.toLowerCase().includes(q) ||
                      o.customer.city.toLowerCase().includes(q) ||
                      o.shipment.awb.toLowerCase().includes(q) ||
                      o.itemSummary.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    }).sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      if (sortField === 'amount') {
        valA = parseInt(a.amount.replace(/[^0-9]/g, ''), 10);
        valB = parseInt(b.amount.replace(/[^0-9]/g, ''), 10);
      }
      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });
  }

  function render() {
    const displayed = getFilteredOrders();

    container.innerHTML = `
      <div class="view-content-wrapper">
        <!-- View Header -->
        <div class="view-header">
          <div class="view-title-group">
            <div class="view-context-crumb">
              <span>OPERATIONS MODULE</span>
              <span>/</span>
              <span>DISPATCH & FULFILLMENT</span>
            </div>
            <h1 class="view-title">
              Orders Management
              <span class="badge badge-neutral tabular-nums">18,429 TOTAL</span>
            </h1>
            <div class="view-subtitle">High-density dispatch manifest, multi-channel payment verification and exceptions</div>
          </div>

          <div class="view-actions-group">
            <button class="btn btn-outline btn-sm" id="export-orders-csv-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export (CSV)
            </button>
            <button class="btn btn-primary btn-sm" id="bulk-manifest-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              Bulk Print Labels
            </button>
          </div>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="filter-bar">
          <div class="filter-group-left">
            <div class="input-wrapper" style="width: 280px;">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" class="input-control with-icon" id="orders-search-input" value="${searchQuery}" placeholder="Filter by Order ID, customer, AWB..." />
            </div>

            <div class="date-preset-pills" id="orders-status-pills">
              <button class="date-pill ${filterStatus === 'all' ? 'active' : ''}" data-status="all">All (${ordersList.length})</button>
              <button class="date-pill ${filterStatus === 'Out for Delivery' ? 'active' : ''}" data-status="Out for Delivery">Out for Delivery</button>
              <button class="date-pill ${filterStatus === 'In Transit' ? 'active' : ''}" data-status="In Transit">In Transit</button>
              <button class="date-pill ${filterStatus === 'NDR' ? 'active' : ''}" data-status="NDR" style="color:var(--color-warning);">NDR Exceptions</button>
              <button class="date-pill ${filterStatus === 'Delivered' ? 'active' : ''}" data-status="Delivered" style="color:var(--color-success);">Delivered</button>
              <button class="date-pill ${filterStatus === 'RTO' ? 'active' : ''}" data-status="RTO" style="color:var(--color-danger);">RTO</button>
            </div>

            <select class="input-control select-control" id="orders-payment-select" style="width: 140px;">
              <option value="all" ${filterPayment === 'all' ? 'selected' : ''}>Payment: All</option>
              <option value="Prepaid" ${filterPayment === 'Prepaid' ? 'selected' : ''}>Prepaid (UPI/Card)</option>
              <option value="COD" ${filterPayment === 'COD' ? 'selected' : ''}>COD (Cash)</option>
            </select>
          </div>

          <div class="filter-group-right">
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">
              ${selectedOrders.size > 0 ? `<strong style="color:var(--accent-cyan);">${selectedOrders.size} selected</strong>` : `Showing ${displayed.length} orders`}
            </span>
            ${selectedOrders.size > 0 ? `
              <button class="btn btn-secondary btn-sm" id="clear-selection-btn">Clear</button>
              <button class="btn btn-outline btn-sm" id="bulk-reassign-btn">Assign Courier</button>
            ` : ''}
          </div>
        </div>

        <!-- High Density Data Table -->
        <div class="table-container">
          <div class="table-responsive-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th style="width: 36px; text-align:center;">
                    <input type="checkbox" id="select-all-orders" ${selectedOrders.size === displayed.length && displayed.length > 0 ? 'checked' : ''} style="accent-color:var(--accent-cyan);" />
                  </th>
                  <th class="sortable" data-sort="id">Order ID</th>
                  <th class="sortable" data-sort="date">Date & Time</th>
                  <th>Customer & Location</th>
                  <th>Items & SKUs</th>
                  <th class="sortable" data-sort="amount">Amount</th>
                  <th>Payment</th>
                  <th>Store Channel</th>
                  <th>Warehouse Hub</th>
                  <th>AWB / Carrier</th>
                  <th>Status</th>
                  <th style="text-align:right;">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${displayed.length === 0 ? `
                  <tr>
                    <td colspan="12" style="text-align:center; padding:36px; color:var(--text-tertiary);">
                      No matching orders found. Try adjusting your status or search filters.
                    </td>
                  </tr>
                ` : displayed.map(o => {
                  let statusBadgeClass = 'badge-delivered';
                  if (o.status === 'NDR') statusBadgeClass = 'badge-ndr';
                  else if (o.status === 'RTO') statusBadgeClass = 'badge-rto';
                  else if (o.status === 'In Transit') statusBadgeClass = 'badge-in-transit';
                  else if (o.status === 'Out for Delivery') statusBadgeClass = 'badge-out-for-delivery';

                  const isChecked = selectedOrders.has(o.id);

                  return `
                    <tr class="${isChecked ? 'selected' : ''} ${o.isPriority ? 'priority-row' : ''}" data-order-id="${o.id}">
                      <td style="text-align:center;">
                        <input type="checkbox" class="order-checkbox" data-id="${o.id}" ${isChecked ? 'checked' : ''} style="accent-color:var(--accent-cyan);" />
                      </td>
                      <td>
                        <span class="row-action-link view-order-trigger" data-id="${o.id}">${o.id}</span>
                        ${o.isPriority ? '<span style="font-size:9px; background:var(--accent-cyan-subtle); color:var(--accent-cyan); padding:1px 4px; border-radius:3px; margin-left:4px; font-weight:700;">PRIORITY</span>' : ''}
                      </td>
                      <td class="tabular-nums" style="color:var(--text-tertiary);">${o.date}</td>
                      <td>
                        <div style="font-weight:600; color:var(--text-primary);">${o.customer.name}</div>
                        <div style="font-size:10px; color:var(--text-tertiary);">${o.customer.city}, ${o.customer.pincode}</div>
                      </td>
                      <td>
                        <div style="max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:var(--text-primary);" title="${o.itemSummary}">
                          ${o.itemSummary}
                        </div>
                        <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">${o.items.length} item(s)</div>
                      </td>
                      <td class="tabular-nums" style="font-weight:700; color:var(--text-primary); font-size:13px;">${o.amount}</td>
                      <td>
                        <span class="badge ${o.payment.type === 'Prepaid' ? 'badge-paid' : 'badge-warning'}">${o.payment.type}</span>
                        <div style="font-size:9px; font-family:var(--font-mono); color:var(--text-tertiary); margin-top:2px;">${o.payment.gateway.split(' ')[0]}</div>
                      </td>
                      <td style="color:var(--text-secondary);">${o.channel.split(' - ')[0]}</td>
                      <td style="color:var(--text-secondary);">${o.warehouse.split(' ')[0]}</td>
                      <td>
                        <div style="font-family:var(--font-mono); font-weight:600; color:var(--accent-cyan);">${o.shipment.awb}</div>
                        <div style="font-size:10px; color:var(--text-tertiary);">${o.shipment.courier}</div>
                      </td>
                      <td>
                        <span class="badge ${statusBadgeClass}"><span class="badge-dot"></span>${o.status}</span>
                      </td>
                      <td style="text-align:right;">
                        <button class="btn btn-outline btn-sm view-order-trigger" data-id="${o.id}">
                          Inspect →
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

          <!-- Table Pagination Footer -->
          <div class="table-pagination">
            <div>Showing 1 to ${displayed.length} of 18,429 records (Sorted by ${sortField.toUpperCase()})</div>
            <div class="pagination-pages">
              <button class="page-btn active">1</button>
              <button class="page-btn">2</button>
              <button class="page-btn">3</button>
              <button class="page-btn">...</button>
              <button class="page-btn">184</button>
            </div>
          </div>
        </div>
      </div>
    `;

    attachEventHandlers();
  }

  function attachEventHandlers() {
    // Search input
    const searchInp = container.querySelector('#orders-search-input');
    searchInp.oninput = (e) => {
      searchQuery = e.target.value;
      render();
    };

    // Status filter pills
    container.querySelectorAll('#orders-status-pills .date-pill').forEach(btn => {
      btn.onclick = () => {
        filterStatus = btn.getAttribute('data-status');
        render();
      };
    });

    // Payment select
    const paySelect = container.querySelector('#orders-payment-select');
    paySelect.onchange = (e) => {
      filterPayment = e.target.value;
      render();
    };

    // Export button
    container.querySelector('#export-orders-csv-btn').onclick = () => {
      onAction('export-orders');
    };

    // Bulk Manifest button
    container.querySelector('#bulk-manifest-btn').onclick = () => {
      const count = selectedOrders.size || 184;
      toast.show({
        title: "Bulk Printing Triggered",
        message: `Queued thermal printing of ${count} shipping labels and warehouse picklists.`,
        type: "success"
      });
    };

    // Clear selection
    const clearBtn = container.querySelector('#clear-selection-btn');
    if (clearBtn) {
      clearBtn.onclick = () => {
        selectedOrders.clear();
        render();
      };
    }

    // Select all checkbox
    const selectAll = container.querySelector('#select-all-orders');
    if (selectAll) {
      selectAll.onchange = (e) => {
        const displayed = getFilteredOrders();
        if (e.target.checked) {
          displayed.forEach(o => selectedOrders.add(o.id));
        } else {
          selectedOrders.clear();
        }
        render();
      };
    }

    // Individual checkboxes
    container.querySelectorAll('.order-checkbox').forEach(cb => {
      cb.onchange = (e) => {
        const id = cb.getAttribute('data-id');
        if (e.target.checked) {
          selectedOrders.add(id);
        } else {
          selectedOrders.delete(id);
        }
        render();
      };
    });

    // Sorting
    container.querySelectorAll('th.sortable').forEach(th => {
      th.onclick = () => {
        const field = th.getAttribute('data-sort');
        if (sortField === field) {
          sortAsc = !sortAsc;
        } else {
          sortField = field;
          sortAsc = true;
        }
        render();
      };
    });

    // Inspect Order -> open drawer
    container.querySelectorAll('.view-order-trigger').forEach(btn => {
      btn.onclick = () => {
        const ordId = btn.getAttribute('data-id');
        const ord = ordersList.find(o => o.id === ordId);
        if (ord) onOpenOrder(ord);
      };
    });
  }

  render();
}
