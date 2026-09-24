// EcomIQ Command Center OS Router
// Manages routing between the primary OS Experience and deep Workspace modules

export const APP_MODULES = [
  'os',
  'dashboard',
  'orders',
  'shipments',
  'ndr',
  'weight',
  'couriers',
  'warehouses',
  'customers',
  'finance',
  'marketing',
  'analytics',
  'ai-insights',
  'ai-chat',
  'settings'
];

class Router {
  constructor() {
    this.listeners = [];
    this.currentRoute = null;
    this.init();
  }

  init() {
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', () => this.handleRouteChange());
      window.addEventListener('popstate', () => this.handleRouteChange());
    }
  }

  parseLocation() {
    let raw = window.location.hash || '';
    if (raw.startsWith('#')) {
      raw = raw.substring(1);
    }

    if (!raw && window.location.pathname && window.location.pathname !== '/') {
      raw = window.location.pathname;
    }

    const [pathPart, queryPart] = raw.split('?');
    const params = new URLSearchParams(queryPart || '');

    const segments = pathPart.split('/').filter(Boolean);

    if (segments.length === 0) {
      return { module: 'os', params, raw };
    }

    let target = segments[0].toLowerCase();

    // Route aliasing
    if (target === 'home' || target === 'showcase') {
      target = 'os';
    }
    if (target === 'app' || target === 'workspace') {
      target = 'dashboard';
    }

    const module = APP_MODULES.includes(target) ? target : 'os';
    return { module, params, raw };
  }

  handleRouteChange() {
    const route = this.parseLocation();
    this.currentRoute = route;

    const expectedHash = `#/${route.module}`;
    if (window.location.hash !== expectedHash) {
      window.history.replaceState(null, '', expectedHash);
    }

    this.notify(route);
  }

  onRoute(listener) {
    this.listeners.push(listener);
    if (this.currentRoute) {
      listener(this.currentRoute);
    }
  }

  notify(route) {
    this.listeners.forEach(fn => {
      try {
        fn(route);
      } catch (err) {
        console.error('[Router] Error in route listener:', err);
      }
    });
  }

  navigate(module, queryParams = {}) {
    const targetModule = APP_MODULES.includes(module) ? module : 'os';
    const qs = new URLSearchParams(queryParams).toString();
    const hash = `#/${targetModule}${qs ? '?' + qs : ''}`;
    window.location.hash = hash;
  }

  start() {
    this.handleRouteChange();
  }
}

export const router = new Router();
