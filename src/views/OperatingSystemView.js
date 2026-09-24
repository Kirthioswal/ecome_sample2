import { MOCK_KPIS, MOCK_ORDERS, MOCK_COURIERS, MOCK_MARKETING, MOCK_NDR_QUEUE } from '../data/mockData.js';
import { toast } from '../components/Toast.js';

export function renderOperatingSystemView(container, { onOpenOrder, onAction, onSwitchToWorkspace }) {
  container.innerHTML = `
    <div class="os-experience-container" id="os-showcase-view">
      <!-- Background Particle Canvas -->
      <canvas id="os-background-canvas"></canvas>

      <!-- Ambient Smoky Glows -->
      <div class="os-ambient-glows">
        <div class="ambient-glow-blue"></div>
        <div class="ambient-glow-purple"></div>
        <div class="ambient-glow-lime"></div>
      </div>

      <!-- ==========================================================================
           1. HERO SECTION: THE OPERATING SYSTEM FOR MODERN COMMERCE
           ========================================================================== -->
      <section class="os-section hero-operating-system" id="section-hero">
        <div class="hero-badge-pill">
          <span class="pulse-dot"></span>
          <span>ECOMIQ OPERATING SYSTEM v2.4 • LIVE TELEMETRY</span>
        </div>

        <h1 class="hero-main-title">
          THE OPERATING SYSTEM<br />
          <span class="glow-text">FOR MODERN COMMERCE.</span>
        </h1>

        <div class="hero-subtitle-loop">
          <span>What happened.</span> &nbsp;•&nbsp; <span>Why it happened.</span> &nbsp;•&nbsp; <span>What should happen next.</span>
        </div>

        <p class="hero-description">
          Unifying orders, logistics, NDR recovery, courier SLAs, cash flows, and marketing attribution into an autonomous operational intelligence platform.
        </p>

        <div class="hero-actions-cluster">
          <button class="btn btn-primary btn-lg" id="hero-launch-os-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>Launch Live Operating System</span>
          </button>
          <button class="btn btn-outline btn-lg" id="hero-ask-ai-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><circle cx="12" cy="12" r="6"/></svg>
            <span>Ask EcomIQ Copilot (⌘J)</span>
          </button>
        </div>

        <!-- Floating Product Fragments with 3D Parallax Orbit -->
        <div class="hero-floating-universe" id="hero-floating-mesh">
          <!-- Fragment 1: Finance GMV -->
          <div class="floating-fragment fragment-frag-1" data-target="section-money" title="Explore Money & Cash Flow">
            <div class="fragment-icon-wrap" style="background:rgba(132,204,22,0.15); color:#84CC16;">₹</div>
            <div class="fragment-meta">
              <span class="fragment-label">MERCHANDISE REVENUE</span>
              <span class="fragment-value">₹48.6L</span>
              <span class="fragment-subtext" style="color:#84CC16;">▲ +23.4% YoY • 2,842 Orders</span>
            </div>
          </div>

          <!-- Fragment 2: Delivery SLA -->
          <div class="floating-fragment fragment-frag-2" data-target="section-operate" title="Explore Logistics Operations">
            <div class="fragment-icon-wrap" style="background:rgba(0,229,255,0.15); color:#00E5FF;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div class="fragment-meta">
              <span class="fragment-label">DELIVERY SLA</span>
              <span class="fragment-value">97.4%</span>
              <span class="fragment-subtext" style="color:#00E5FF;">Delhivery • BlueDart • Bluedart</span>
            </div>
          </div>

          <!-- Fragment 3: NDR Action Required -->
          <div class="floating-fragment fragment-frag-3" data-target="section-ndr" title="Explore NDR Recovery Engine">
            <div class="fragment-icon-wrap" style="background:rgba(255,75,75,0.18); color:#FF4B4B;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div class="fragment-meta">
              <span class="fragment-label">NDR ACTION QUEUE</span>
              <span class="fragment-value" style="color:#FF4B4B;">12.8%</span>
              <span class="fragment-subtext">42 Orders Need Customer WhatsApp</span>
            </div>
          </div>

          <!-- Fragment 4: ROAS Scaler -->
          <div class="floating-fragment fragment-frag-4" data-target="section-grow" title="Explore Marketing & ROAS">
            <div class="fragment-icon-wrap" style="background:rgba(249,115,22,0.15); color:#F97316;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <div class="fragment-meta">
              <span class="fragment-label">BLENDED ROAS</span>
              <span class="fragment-value">3.8x</span>
              <span class="fragment-subtext" style="color:#FB923C;">Meta Ads + Google Shopping</span>
            </div>
          </div>

          <!-- Fragment 5: AI Core Anomaly -->
          <div class="floating-fragment fragment-frag-5" data-target="section-intelligence" title="Explore AI Intelligence">
            <div class="fragment-icon-wrap" style="background:rgba(217,70,239,0.18); color:#D946EF;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15 8.5 22 9.5 17 14.5 18.5 21.5 12 18 5.5 21.5 7 14.5 2 9.5 9 8.5 12 2"/></svg>
            </div>
            <div class="fragment-meta">
              <span class="fragment-label">AI DETECTED</span>
              <span class="fragment-value" style="color:#F472B6;">7 Anomalies</span>
              <span class="fragment-subtext">₹84.2K Savings Identified</span>
            </div>
          </div>

          <!-- Fragment 6: Live Telemetry Capsule -->
          <div class="floating-fragment fragment-frag-6" data-target="section-operate" title="Inspect Order Live">
            <div class="fragment-icon-wrap" style="background:rgba(59,130,246,0.15); color:#60A5FA;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div class="fragment-meta">
              <span class="fragment-label">LIVE DISPATCH #DEL882941029</span>
              <span class="fragment-value" style="font-size:1rem;">Out for Delivery • Bandra West</span>
              <span class="fragment-subtext">COD ₹3,840 • Delhivery Express</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           2. FLOATING DATA UNIVERSE (LIVING SYSTEM LOOP)
           ========================================================================== -->
      <section class="os-section" id="section-universe">
        <div class="section-meta-tag meta-tag-blue">
          <span>01 / LIVING ARCHITECTURE</span>
        </div>
        <h2 class="section-headline">The Autonomous Data Universe.</h2>
        <p class="section-subheadline">
          EcomIQ connects every heartbeat of your commerce business into a closed-loop intelligence machine.
        </p>

        <div class="universe-loop-container">
          <!-- The EcomIQ UX North Star: DATA → INSIGHT → DECISION → ACTION → RESULT -->
          <div class="north-star-steps-row">
            <div class="north-star-step-node">
              <span class="node-step-tag">STEP 01</span>
              <h3 class="node-step-title">DATA</h3>
              <p class="node-step-desc">Continuous ingestion across Shopify, Amazon, Delhivery, Razorpay & Meta.</p>
            </div>
            <div class="north-star-step-node">
              <span class="node-step-tag" style="color:#C084FC;">STEP 02</span>
              <h3 class="node-step-title">INSIGHT</h3>
              <p class="node-step-desc">Statistical anomaly detection flags volumetric spikes and pincode delays.</p>
            </div>
            <div class="north-star-step-node">
              <span class="node-step-tag" style="color:#F59E0B;">STEP 03</span>
              <h3 class="node-step-title">DECISION</h3>
              <p class="node-step-desc">Evaluates trade-offs: cost, speed, courier SLA, and margin preservation.</p>
            </div>
            <div class="north-star-step-node">
              <span class="node-step-tag" style="color:#FF4B4B;">STEP 04</span>
              <h3 class="node-step-title">ACTION</h3>
              <p class="node-step-desc">Automated WhatsApp reattempts, dynamic courier switching, auto-disputes.</p>
            </div>
            <div class="north-star-step-node">
              <span class="node-step-tag" style="color:#84CC16;">STEP 05</span>
              <h3 class="node-step-title">RESULT</h3>
              <p class="node-step-desc">Lower RTO (-3.2%), recovered cash flow, and protected operating margins.</p>
            </div>
          </div>

          <!-- Interactive Expandable Metric Tiles -->
          <div class="universe-expandable-grid">
            <!-- Expand Tile 1: NDR Anomaly -->
            <div class="expandable-universe-card" id="card-expand-ndr">
              <div class="card-unexpanded-header">
                <div style="display:flex; align-items:center; gap:12px;">
                  <span style="width:10px; height:10px; border-radius:50%; background:#FF4B4B; box-shadow:0 0 10px #FF4B4B;"></span>
                  <div>
                    <div style="font-family:var(--font-mono); font-size:11px; color:#FF4B4B; font-weight:700;">NDR ALERT • 12.8%</div>
                    <div style="font-family:var(--font-display); font-size:16px; font-weight:700; color:#FFFFFF;">NDR increased 18% this week</div>
                  </div>
                </div>
                <span class="expand-icon" style="color:var(--text-tertiary); font-size:18px;">+</span>
              </div>
              <div class="card-expand-content">
                <div style="font-size:12px; color:var(--text-secondary);">
                  <strong style="color:#FFFFFF;">Primary Cause:</strong> COD customers in Tier-2 cities (Lucknow, Jaipur, Patna) reporting address ambiguity.
                </div>
                <div style="font-size:12px; color:var(--text-secondary);">
                  <strong style="color:#FFFFFF;">Recommended Action:</strong> Prioritize automated WhatsApp location pin confirmation before next delivery attempt.
                </div>
                <div style="margin-top:8px;">
                  <button class="btn btn-ndr btn-sm" id="btn-trigger-whatsapp-ndr">
                    <span>Execute WhatsApp Flow (42 Orders)</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Expand Tile 2: Courier Volumetric Spike -->
            <div class="expandable-universe-card" id="card-expand-weight">
              <div class="card-unexpanded-header">
                <div style="display:flex; align-items:center; gap:12px;">
                  <span style="width:10px; height:10px; border-radius:50%; background:#00E5FF; box-shadow:0 0 10px #00E5FF;"></span>
                  <div>
                    <div style="font-family:var(--font-mono); font-size:11px; color:#00E5FF; font-weight:700;">WEIGHT DISCREPANCY</div>
                    <div style="font-family:var(--font-display); font-size:16px; font-weight:700; color:#FFFFFF;">BlueDart Volumetric Spike (+0.55kg)</div>
                  </div>
                </div>
                <span class="expand-icon" style="color:var(--text-tertiary); font-size:18px;">+</span>
              </div>
              <div class="card-expand-content">
                <div style="font-size:12px; color:var(--text-secondary);">
                  <strong style="color:#FFFFFF;">Primary Cause:</strong> Courier billing 1.20kg on footwear boxes declared at 0.65kg. Total impact: ₹48,200.
                </div>
                <div style="font-size:12px; color:var(--text-secondary);">
                  <strong style="color:#FFFFFF;">Recommended Action:</strong> Auto-route next 200 orders to Delhivery Express and batch-raise 84 disputes.
                </div>
                <div style="margin-top:8px;">
                  <button class="btn btn-ops btn-sm" id="btn-trigger-route-shift">
                    <span>Shift Routing & Dispute ₹48.2K</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Expand Tile 3: Meta Ads Fatigue -->
            <div class="expandable-universe-card" id="card-expand-marketing">
              <div class="card-unexpanded-header">
                <div style="display:flex; align-items:center; gap:12px;">
                  <span style="width:10px; height:10px; border-radius:50%; background:#F97316; box-shadow:0 0 10px #F97316;"></span>
                  <div>
                    <div style="font-family:var(--font-mono); font-size:11px; color:#F97316; font-weight:700;">GROWTH OPTIMIZATION</div>
                    <div style="font-family:var(--font-display); font-size:16px; font-weight:700; color:#FFFFFF;">Meta Lookalike ROAS dropped to 2.1x</div>
                  </div>
                </div>
                <span class="expand-icon" style="color:var(--text-tertiary); font-size:18px;">+</span>
              </div>
              <div class="card-expand-content">
                <div style="font-size:12px; color:var(--text-secondary);">
                  <strong style="color:#FFFFFF;">Primary Cause:</strong> Creative frequency reached 4.8 on "Summer Runner" set. CAC rose from ₹240 to ₹490.
                </div>
                <div style="font-size:12px; color:var(--text-secondary);">
                  <strong style="color:#FFFFFF;">Recommended Action:</strong> Shift ₹40,000 daily budget to Google PMax (5.4x ROAS) and rotate fresh video asset.
                </div>
                <div style="margin-top:8px;">
                  <button class="btn btn-secondary btn-sm" id="btn-trigger-ad-rebalance">
                    <span>Rebalance Budget to 4.8x Asset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           3. OPERATE INTERACTIVE ENVIRONMENT
           ========================================================================== -->
      <section class="os-section" id="section-operate">
        <div class="section-meta-tag meta-tag-blue">
          <span>02 / OPERATE ENVIRONMENT</span>
        </div>
        <h2 class="section-headline">Interconnected Operational Nervous System.</h2>
        <p class="section-subheadline">
          Orders flow into shipments. Shipments route through couriers. Exceptions feed into NDR. Recovery restores delivery SLAs.
        </p>

        <div class="operate-environment-wrapper">
          <!-- Interconnected Systems Pipeline Bar -->
          <div class="operate-pipeline-bar">
            <div class="pipeline-node-box active-pipeline">
              <span style="font-family:var(--font-mono); font-size:11px; color:#60A5FA;">NODE 01</span>
              <div style="font-family:var(--font-display); font-size:16px; font-weight:700; color:#FFFFFF;">Orders Pipeline</div>
              <div style="font-family:var(--font-mono); font-size:1.3rem; font-weight:800; color:#FFFFFF;">2,842 Today</div>
              <span style="font-size:11px; color:#10B981;">● 100% Synced across 4 Stores</span>
            </div>

            <div class="pipeline-node-box">
              <span style="font-family:var(--font-mono); font-size:11px; color:#00E5FF;">NODE 02</span>
              <div style="font-family:var(--font-display); font-size:16px; font-weight:700; color:#FFFFFF;">Shipments Live</div>
              <div style="font-family:var(--font-mono); font-size:1.3rem; font-weight:800; color:#FFFFFF;">1,420 Transit</div>
              <span style="font-size:11px; color:#60A5FA;">812 Out for Delivery Now</span>
            </div>

            <div class="pipeline-node-box">
              <span style="font-family:var(--font-mono); font-size:11px; color:#A855F7;">NODE 03</span>
              <div style="font-family:var(--font-display); font-size:16px; font-weight:700; color:#FFFFFF;">Couriers SLA</div>
              <div style="font-family:var(--font-mono); font-size:1.3rem; font-weight:800; color:#FFFFFF;">94.8% Adherence</div>
              <span style="font-size:11px; color:#C084FC;">Delhivery, BlueDart, Bluedart</span>
            </div>

            <div class="pipeline-node-box">
              <span style="font-family:var(--font-mono); font-size:11px; color:#84CC16;">NODE 04</span>
              <div style="font-family:var(--font-display); font-size:16px; font-weight:700; color:#FFFFFF;">Fulfillment Hubs</div>
              <div style="font-family:var(--font-mono); font-size:1.3rem; font-weight:800; color:#FFFFFF;">98.4% On-Time</div>
              <span style="font-size:11px; color:#84CC16;">Bhiwandi Mega Hub, Bengaluru</span>
            </div>
          </div>

          <!-- Live Operational Orders Stream -->
          <div class="orders-live-telemetry-panel">
            <div class="telemetry-filter-strip">
              <div>
                <h3 style="font-family:var(--font-display); font-size:18px; font-weight:700; color:#FFFFFF; margin-bottom:4px;">
                  Live Operational Stream
                </h3>
                <p style="font-size:12px; color:var(--text-tertiary);">Click any order to inspect full timeline and launch instant actions.</p>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <button class="filter-pill active" data-filter="all">All Orders</button>
                <button class="filter-pill" data-filter="prepaid">Prepaid</button>
                <button class="filter-pill" data-filter="cod">COD</button>
                <button class="filter-pill" data-filter="ndr">NDR Flagged</button>
              </div>
            </div>

            <!-- Orders Table List -->
            <div id="telemetry-orders-list">
              ${MOCK_ORDERS.slice(0, 5).map(ord => `
                <div class="telemetry-order-row" data-order-id="${ord.id}">
                  <div>
                    <div style="font-family:var(--font-mono); font-size:13px; font-weight:700; color:#60A5FA;">${ord.id}</div>
                    <div style="font-size:11px; color:var(--text-tertiary);">${ord.date}</div>
                  </div>
                  <div>
                    <div style="font-weight:600; font-size:13px; color:#FFFFFF;">${ord.customer.name}</div>
                    <div style="font-size:11px; color:var(--text-tertiary);">${ord.customer.city}, ${ord.customer.state}</div>
                  </div>
                  <div>
                    <span class="badge ${ord.status === 'Delivered' ? 'badge-delivered' : ord.status === 'NDR' ? 'badge-ndr' : 'badge-in-transit'}">
                      <span class="badge-dot"></span>
                      ${ord.status}
                    </span>
                  </div>
                  <div>
                    <div style="font-family:var(--font-mono); font-weight:700; color:#FFFFFF;">${ord.amount}</div>
                    <div style="font-size:11px; color:var(--text-tertiary);">${ord.payment.type}</div>
                  </div>
                  <div>
                    <div style="font-size:12px; color:var(--text-secondary);">${ord.shipment.courier}</div>
                    <div style="font-family:var(--font-mono); font-size:11px; color:var(--text-muted);">${ord.shipment.awb}</div>
                  </div>
                  <div>
                    <button class="btn btn-outline btn-sm inspect-order-btn" data-order-id="${ord.id}">Inspect →</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           4. NDR DELIVERY RECOVERY FLOW (VISUAL SHOWPIECE)
           ========================================================================== -->
      <section class="os-section" id="section-ndr">
        <div class="section-meta-tag meta-tag-coral">
          <span>03 / ACTION ENGINE</span>
        </div>
        <h2 class="section-headline">NDR Recovery Engine.</h2>
        <p class="section-subheadline">
          EcomIQ transforms failed deliveries from static logs into an active revenue recovery workflow.
        </p>

        <div class="ndr-recovery-showpiece-container">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
            <div>
              <span class="badge badge-ndr" style="font-size:12px; padding:4px 12px;">ACTIVE WORKFLOW SIMULATION</span>
              <h3 style="font-family:var(--font-display); font-size:22px; font-weight:800; color:#FFFFFF; margin-top:8px;">
                Interactive Delivery Recovery Pipeline
              </h3>
            </div>
            <div style="display:flex; align-items:center; gap:16px;">
              <div style="text-align:right;">
                <div style="font-family:var(--font-mono); font-size:18px; font-weight:800; color:#10B981;">₹2,84,200</div>
                <div style="font-size:11px; color:var(--text-tertiary);">Revenue Protected This Month</div>
              </div>
              <div style="text-align:right;">
                <div style="font-family:var(--font-mono); font-size:18px; font-weight:800; color:#60A5FA;">68.4%</div>
                <div style="font-size:11px; color:var(--text-tertiary);">Resolution Success Rate</div>
              </div>
            </div>
          </div>

          <!-- The Stepper Grid -->
          <div class="ndr-flow-stepper-grid">
            <!-- Step 1: Failed Delivery -->
            <div class="ndr-step-block">
              <span style="font-family:var(--font-mono); font-size:10px; color:#FF4B4B; font-weight:700;">STAGE 01</span>
              <h4 style="font-family:var(--font-display); font-size:16px; font-weight:700; color:#FFFFFF;">FAILED DELIVERY</h4>
              <div style="font-family:var(--font-mono); font-size:2rem; font-weight:800; color:#FF4B4B;">86 Cases</div>
              <p style="font-size:11px; color:var(--text-tertiary);">First & second attempt delivery exceptions across India.</p>
            </div>

            <!-- Arrow 1 -->
            <div class="ndr-flow-arrow">➔</div>

            <!-- Step 2: Why? -->
            <div class="ndr-step-block">
              <span style="font-family:var(--font-mono); font-size:10px; color:#F59E0B; font-weight:700;">STAGE 02 / WHY?</span>
              <h4 style="font-family:var(--font-display); font-size:15px; font-weight:700; color:#FFFFFF;">ROOT CAUSE</h4>
              <div style="display:flex; flex-direction:column; gap:6px; font-size:11px;">
                <div style="display:flex; justify-content:space-between; color:#E2E8F0;">
                  <span>Customer Unavailable</span>
                  <strong style="font-family:var(--font-mono); color:#F59E0B;">42%</strong>
                </div>
                <div style="display:flex; justify-content:space-between; color:#E2E8F0;">
                  <span>Wrong Address / Landmark</span>
                  <strong style="font-family:var(--font-mono); color:#F59E0B;">28%</strong>
                </div>
                <div style="display:flex; justify-content:space-between; color:#E2E8F0;">
                  <span>Cash Not Ready</span>
                  <strong style="font-family:var(--font-mono); color:#F59E0B;">18%</strong>
                </div>
                <div style="display:flex; justify-content:space-between; color:#E2E8F0;">
                  <span>Unreachable</span>
                  <strong style="font-family:var(--font-mono); color:#F59E0B;">12%</strong>
                </div>
              </div>
            </div>

            <!-- Arrow 2 -->
            <div class="ndr-flow-arrow">➔</div>

            <!-- Step 3: What should we do? -->
            <div class="ndr-step-block">
              <span style="font-family:var(--font-mono); font-size:10px; color:#60A5FA; font-weight:700;">STAGE 03 / ACTION</span>
              <h4 style="font-family:var(--font-display); font-size:15px; font-weight:700; color:#FFFFFF;">EXECUTE PROTOCOL</h4>
              <div style="display:flex; flex-direction:column; gap:6px;">
                <div class="ndr-action-btn-pill simulated-active" id="act-whatsapp-trigger" title="Simulate WhatsApp Automation">
                  <span>💬 WhatsApp Bot Flow</span>
                  <span style="font-family:var(--font-mono); font-size:10px; color:#10B981;">AUTO</span>
                </div>
                <div class="ndr-action-btn-pill" id="act-ivr-trigger" title="Simulate IVR Call">
                  <span>📞 AI Voice IVR Call</span>
                  <span style="font-family:var(--font-mono); font-size:10px; color:#60A5FA;">CALL</span>
                </div>
                <div class="ndr-action-btn-pill" id="act-reschedule-trigger" title="Reschedule Slot">
                  <span>⏰ Reschedule Delivery</span>
                  <span style="font-family:var(--font-mono); font-size:10px; color:#F59E0B;">DATE</span>
                </div>
                <div class="ndr-action-btn-pill" id="act-address-trigger" title="Geopin Verification">
                  <span>📍 Request Geo-Pin</span>
                  <span style="font-family:var(--font-mono); font-size:10px; color:#A855F7;">MAP</span>
                </div>
              </div>
            </div>

            <!-- Arrow 3 -->
            <div class="ndr-flow-arrow">➔</div>

            <!-- Step 4: Recovered Order -->
            <div class="ndr-recovered-box" id="ndr-recovered-target">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(16,185,129,0.2); color:#10B981; display:flex; align-items:center; justify-content:center; margin:0 auto; font-size:18px;">
                ✓
              </div>
              <h4 style="font-family:var(--font-display); font-size:15px; font-weight:800; color:#10B981;">RECOVERED ORDER</h4>
              <div style="font-family:var(--font-mono); font-size:1.6rem; font-weight:800; color:#FFFFFF;" id="ndr-recovered-counter">
                38 Orders
              </div>
              <p style="font-size:11px; color:#94A3B8;">Rescheduled & delivered. RTO eliminated.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           5. MONEY INTERACTIVE ENVIRONMENT
           ========================================================================== -->
      <section class="os-section" id="section-money">
        <div class="section-meta-tag meta-tag-lime">
          <span>04 / CAPITAL INTELLIGENCE</span>
        </div>
        <h2 class="section-headline">Capital, COD, & Margin Telemetry.</h2>
        <p class="section-subheadline">
          Commerce finance is not a spreadsheet. Real-time reconciliation between freight charges, COD remittances, and wallet balances.
        </p>

        <div class="money-huge-metrics-grid">
          <!-- Metric 1: Revenue -->
          <div class="money-floating-tile" data-breakdown="revenue">
            <span class="badge badge-success" style="width:fit-content;">GROSS COMMERCE</span>
            <div class="money-metric-val">₹48.6L</div>
            <div class="money-metric-label">Merchandise Revenue (30D)</div>
            <span style="font-size:12px; color:#84CC16; margin-top:8px;">▲ +23.4% vs previous 30 days</span>
            <!-- Sparkline SVG -->
            <svg class="money-sparkline-svg" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d="M0 50 Q 50 10, 100 35 T 200 5" fill="none" stroke="#84CC16" stroke-width="2.5"/>
            </svg>
          </div>

          <!-- Metric 2: Shipping Spend -->
          <div class="money-floating-tile" data-breakdown="shipping">
            <span class="badge badge-ops" style="width:fit-content;">LOGISTICS OUTFLOW</span>
            <div class="money-metric-val">₹6.2L</div>
            <div class="money-metric-label">Shipping Spend (7.8% GMV)</div>
            <span style="font-size:12px; color:#60A5FA; margin-top:8px;">Delhivery: ₹3.4L • BlueDart: ₹1.8L</span>
            <!-- Sparkline SVG -->
            <svg class="money-sparkline-svg" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d="M0 45 Q 60 20, 120 40 T 200 20" fill="none" stroke="#3B82F6" stroke-width="2.5"/>
            </svg>
          </div>

          <!-- Metric 3: COD Outstanding -->
          <div class="money-floating-tile" data-breakdown="cod">
            <span class="badge badge-warning" style="width:fit-content;">COURIER HELD CASH</span>
            <div class="money-metric-val">₹3.8L</div>
            <div class="money-metric-label">COD Remittance Due in 24h</div>
            <span style="font-size:12px; color:#F59E0B; margin-top:8px;">₹2.1L Scheduled for Release Today</span>
            <!-- Sparkline SVG -->
            <svg class="money-sparkline-svg" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d="M0 30 Q 70 50, 130 15 T 200 35" fill="none" stroke="#F59E0B" stroke-width="2.5"/>
            </svg>
          </div>

          <!-- Metric 4: Logistics Cost per Order -->
          <div class="money-floating-tile" data-breakdown="cpo">
            <span class="badge badge-cyan" style="width:fit-content;">UNIT ECONOMICS</span>
            <div class="money-metric-val">₹142</div>
            <div class="money-metric-label">Avg Logistics Cost / Order</div>
            <span style="font-size:12px; color:#00E5FF; margin-top:8px;">▼ -12% MoM (Smart Routing Active)</span>
            <!-- Sparkline SVG -->
            <svg class="money-sparkline-svg" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d="M0 20 Q 50 40, 100 25 T 200 48" fill="none" stroke="#00E5FF" stroke-width="2.5"/>
            </svg>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           6. GROW INTERACTIVE ENVIRONMENT (MARKETING & ROAS)
           ========================================================================== -->
      <section class="os-section" id="section-grow">
        <div class="section-meta-tag meta-tag-orange">
          <span>05 / GROW ENVIRONMENT</span>
        </div>
        <h2 class="section-headline">Acquisition Attribution & Customer LTV.</h2>
        <p class="section-subheadline">
          Connect marketing dollars to actual delivered orders. Identify channel bleed and scale winning ad sets.
        </p>

        <div class="grow-marketing-grid">
          <!-- Left: Growth Numbers -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div class="money-floating-tile">
              <span class="badge badge-warning" style="width:fit-content;">BLENDED ROAS</span>
              <div class="money-metric-val" style="color:#FB923C;">4.82x</div>
              <div class="money-metric-label">₹32.8L Ad Spend → ₹1.58 Cr Revenue</div>
              <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">
                CAC blended across Meta, Google & Amazon sits at ₹218 against ₹1,346 AOV.
              </p>
            </div>

            <!-- Customer Retention 360 RFM Capsule -->
            <div style="background:rgba(17,19,24,0.85); border:1px solid rgba(255,255,255,0.1); border-radius:var(--radius-xl); padding:24px;">
              <h4 style="font-family:var(--font-display); font-size:15px; font-weight:700; color:#FFFFFF; margin-bottom:12px;">
                Customer 360 Segmentation
              </h4>
              <div style="display:flex; flex-direction:column; gap:8px; font-size:12px;">
                <div style="display:flex; justify-content:space-between; padding:8px; background:var(--bg-surface-secondary); border-radius:6px;">
                  <span>👑 Champions (LTV > ₹15K)</span>
                  <strong style="color:#84CC16; font-family:var(--font-mono);">₹18.4L GMV</strong>
                </div>
                <div style="display:flex; justify-content:space-between; padding:8px; background:var(--bg-surface-secondary); border-radius:6px;">
                  <span>⚡ Repeat Loyalists (2+ Orders)</span>
                  <strong style="color:#60A5FA; font-family:var(--font-mono);">41.2% Share</strong>
                </div>
                <div style="display:flex; justify-content:space-between; padding:8px; background:var(--bg-surface-secondary); border-radius:6px;">
                  <span>⚠️ High-Risk COD (RTO Flag)</span>
                  <strong style="color:#FF4B4B; font-family:var(--font-mono);">4.2% Restricted</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Campaign Performance Strip -->
          <div class="campaign-bubble-panel">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <h3 style="font-family:var(--font-display); font-size:18px; font-weight:700; color:#FFFFFF;">
                Channel Performance Matrix
              </h3>
              <span class="badge badge-neutral">LIVE ATTRIBUTION</span>
            </div>

            <div style="display:flex; flex-direction:column; gap:10px;">
              ${MOCK_MARKETING.map(camp => `
                <div class="campaign-row-item">
                  <div>
                    <div style="font-weight:700; font-size:14px; color:#FFFFFF;">${camp.channel}</div>
                    <div style="font-size:11px; color:var(--text-tertiary);">${camp.topCampaign}</div>
                  </div>
                  <div style="text-align:right;">
                    <div style="font-family:var(--font-mono); font-size:14px; font-weight:800; color:#84CC16;">${camp.roas} ROAS</div>
                    <div style="font-size:11px; color:var(--text-tertiary);">${camp.spend} Spend → ${camp.revenue}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           7. AI INTELLIGENCE — THE HERO OF THE PRODUCT
           ========================================================================== -->
      <section class="os-section" id="section-intelligence">
        <div class="section-meta-tag meta-tag-violet">
          <span>06 / INTELLIGENCE LAYER</span>
        </div>
        <h2 class="section-headline">The EcomIQ Intelligence Nucleus.</h2>
        <p class="section-subheadline">
          Autonomous pattern recognition running over orders, logistics, and capital. Not a generic chatbot — an operational co-founder.
        </p>

        <div class="ai-core-showcase-container">
          <!-- Pulsing Nucleus -->
          <div class="ai-nucleus-centerpiece">
            <div class="ai-pulsing-orb">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
            <h3 style="font-family:var(--font-display); font-size:24px; font-weight:800; color:#FFFFFF;">
              ECOMIQ NEURAL DIAGNOSTICS
            </h3>
            <p style="font-size:13px; color:#C084FC; margin-top:4px;">
              Active Observation → Root Cause Explanation → 1-Click Autonomous Action
            </p>
          </div>

          <!-- Real Diagnostic Cards following the Brief -->
          <div class="ai-diagnostic-cards-grid">
            <!-- Diagnostic Card 1: Courier Volumetric Spike -->
            <div class="ai-diagnostic-card">
              <span class="badge badge-ai" style="width:fit-content;">ANOMALY DETECTED</span>
              <div class="diag-step">
                <span class="diag-label" style="color:#C084FC;">OBSERVATION</span>
                <span class="diag-val">Shipping cost increased 14% on 500g–1kg slab this week.</span>
              </div>
              <div class="diag-step">
                <span class="diag-label" style="color:#F59E0B;">ROOT CAUSE</span>
                <span class="diag-val">Courier BlueDart is charging higher volumetric weight on footwear cartons.</span>
              </div>
              <div class="diag-step">
                <span class="diag-label" style="color:#84CC16;">RECOMMENDATION</span>
                <span class="diag-val">Shift 18% of shipments to Delhivery Express & dispute 84 packages.</span>
              </div>
              <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:12px; display:flex; align-items:center; justify-content:space-between;">
                <span style="font-family:var(--font-mono); font-size:12px; color:#84CC16; font-weight:700;">₹84,200 Monthly Savings</span>
                <button class="btn btn-primary btn-sm" id="btn-ai-apply-rule">Apply Rule</button>
              </div>
            </div>

            <!-- Diagnostic Card 2: Tier-2 RTO Spike -->
            <div class="ai-diagnostic-card">
              <span class="badge badge-ndr" style="width:fit-content;">RTO RISK ALERT</span>
              <div class="diag-step">
                <span class="diag-label" style="color:#FF4B4B;">OBSERVATION</span>
                <span class="diag-val">COD RTO in UP & Bihar pincodes reached 8.2% (vs 3.1% national baseline).</span>
              </div>
              <div class="diag-step">
                <span class="diag-label" style="color:#F59E0B;">ROOT CAUSE</span>
                <span class="diag-val">Unverified phone numbers and incomplete street address descriptors.</span>
              </div>
              <div class="diag-step">
                <span class="diag-label" style="color:#84CC16;">RECOMMENDATION</span>
                <span class="diag-val">Require WhatsApp OTP confirmation before shipping COD orders above ₹2,000.</span>
              </div>
              <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:12px; display:flex; align-items:center; justify-content:space-between;">
                <span style="font-family:var(--font-mono); font-size:12px; color:#10B981; font-weight:700;">-4.1% Expected RTO</span>
                <button class="btn btn-ndr btn-sm" id="btn-ai-deploy-otp">Deploy OTP Gate</button>
              </div>
            </div>

            <!-- Diagnostic Card 3: Ad Set Saturation -->
            <div class="ai-diagnostic-card">
              <span class="badge badge-warning" style="width:fit-content;">GROWTH OPPORTUNITY</span>
              <div class="diag-step">
                <span class="diag-label" style="color:#FB923C;">OBSERVATION</span>
                <span class="diag-val">Google PMax campaign delivering 5.6x ROAS with 94% search impression share.</span>
              </div>
              <div class="diag-step">
                <span class="diag-label" style="color:#F59E0B;">ROOT CAUSE</span>
                <span class="diag-val">High buying intent on running shoes category following recent marathon promo.</span>
              </div>
              <div class="diag-step">
                <span class="diag-label" style="color:#84CC16;">RECOMMENDATION</span>
                <span class="diag-val">Scale daily budget by ₹15,000 without cannibalizing Meta retargeting.</span>
              </div>
              <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:12px; display:flex; align-items:center; justify-content:space-between;">
                <span style="font-family:var(--font-mono); font-size:12px; color:#84CC16; font-weight:700;">+₹8.4L Net GMV</span>
                <button class="btn btn-mint btn-sm" id="btn-ai-scale-budget">Scale +₹15K</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           8. ASK ECOMIQ — INTERACTIVE AI COMMAND INTERFACE
           ========================================================================== -->
      <section class="os-section" id="section-ask-ai">
        <div class="section-meta-tag meta-tag-violet">
          <span>07 / NATURAL LANGUAGE COPILOT</span>
        </div>
        <h2 class="section-headline">Ask EcomIQ.</h2>
        <p class="section-subheadline">
          Query your operations, couriers, and finance in plain English. Get instant structured answers with executable actions.
        </p>

        <div class="ask-ecomiq-terminal-card">
          <div class="ask-chips-strip">
            <button class="ask-prompt-chip" data-q="Why did delivery success drop this week?">
              "Why did delivery success drop?"
            </button>
            <button class="ask-prompt-chip" data-q="Which courier is costing us the most?">
              "Which courier is costing us the most?"
            </button>
            <button class="ask-prompt-chip" data-q="Show me today's anomalies.">
              "Show me today's anomalies."
            </button>
            <button class="ask-prompt-chip" data-q="How can I reduce RTO?">
              "How can I reduce RTO?"
            </button>
            <button class="ask-prompt-chip" data-q="Why did CAC increase?">
              "Why did CAC increase?"
            </button>
          </div>

          <div class="ask-input-box-wrapper">
            <span style="font-family:var(--font-mono); color:#C084FC; font-weight:700;">❯</span>
            <input type="text" class="ask-input-field" id="ask-ecomiq-input" placeholder="Ask EcomIQ: e.g. Why did delivery performance drop in Tier-2?..." />
            <button class="btn btn-primary btn-sm" id="ask-ecomiq-send-btn">
              <span>Execute ↵</span>
            </button>
          </div>

          <!-- Answer Simulation Box -->
          <div class="ai-simulated-answer-box" id="ai-answer-viewport">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="badge badge-ai">ANALYSIS SYNTHESIS</span>
              <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-tertiary);">QUERY TRACE: 18,429 SHIPMENTS & 5 COURIERS</span>
            </div>
            <div style="font-size:14px; color:#FFFFFF; line-height:1.6;" id="ai-answer-text">
              Delivery success dropped <strong>1.8%</strong> over the last 72 hours due to heavy rain in Mumbai Bhiwandi hub affecting BlueDart outbound dispatches. Delhivery maintained a <strong>94.8% SLA</strong>.
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; border-top:1px solid rgba(255,255,255,0.08); padding-top:12px;">
              <span style="font-size:12px; color:#10B981;">Recommended: Auto-reroute Western Zone to Delhivery (Save 1.2 delivery days)</span>
              <button class="btn btn-ops btn-sm" id="btn-execute-answer-route">Reroute Western Zone</button>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           9. INTERACTIVE TILE ZOO (SECTION 15)
           ========================================================================== -->
      <section class="os-section" id="section-tiles-zoo">
        <div class="section-meta-tag meta-tag-blue">
          <span>08 / TILE ARCHETYPES</span>
        </div>
        <h2 class="section-headline">Engineered Tile Micro-Interactions.</h2>
        <p class="section-subheadline">
          Every module behaves uniquely. Interactive flip cards, 3D magnetic tiles, live ticks, and connected hover states.
        </p>

        <div class="tiles-zoo-grid">
          <!-- 1. Flip Tile -->
          <div class="zoo-tile zoo-tile-flip" id="tile-flip-demo" title="Click to flip tile">
            <div class="flip-inner">
              <div class="flip-front">
                <span class="badge badge-ops" style="width:fit-content;">FLIP TILE (CLICK)</span>
                <div>
                  <div style="font-family:var(--font-mono); font-size:2rem; font-weight:800; color:#FFFFFF;">97.4%</div>
                  <div style="font-size:12px; color:var(--text-tertiary);">Fulfillment SLA (Front)</div>
                </div>
                <span style="font-size:11px; color:#60A5FA;">Click to reveal root cause ↻</span>
              </div>
              <div class="flip-back">
                <span class="badge badge-warning" style="width:fit-content;">EXPLANATION (BACK)</span>
                <p style="font-size:12px; color:#E2E8F0; line-height:1.5;">
                  Bhiwandi Hub achieved 99.2% dispatch rate. Bengaluru Hub faced a 2.4% packaging bottleneck.
                </p>
                <span style="font-size:11px; color:#10B981;">Click to flip back ↻</span>
              </div>
            </div>
          </div>

          <!-- 2. Magnetic Tile -->
          <div class="zoo-tile zoo-tile-magnetic" id="tile-magnetic-demo" title="Move cursor over to feel 3D tilt">
            <span class="badge badge-cyan" style="width:fit-content;">MAGNETIC TILE (3D TILT)</span>
            <div>
              <div style="font-family:var(--font-mono); font-size:2rem; font-weight:800; color:#00E5FF;">14ms</div>
              <div style="font-size:12px; color:var(--text-tertiary);">Real-Time API Latency</div>
            </div>
            <p style="font-size:11px; color:var(--text-secondary);">Subtly follows cursor coordinates with physics interpolation.</p>
          </div>

          <!-- 3. Live Ticking Tile -->
          <div class="zoo-tile" id="tile-live-tick">
            <span class="badge badge-success" style="width:fit-content;">LIVE STREAM TILE</span>
            <div>
              <div class="ticking-val" id="ticking-orders-count">18,429</div>
              <div style="font-size:12px; color:var(--text-tertiary);">Orders Ingested Today</div>
            </div>
            <span style="font-size:11px; color:#10B981;">● Ticking with real-time websocket packets</span>
          </div>

          <!-- 4. Connected Tile -->
          <div class="zoo-tile" id="tile-connected-demo">
            <span class="badge badge-ai" style="width:fit-content;">CONNECTED TILE</span>
            <div>
              <div style="font-family:var(--font-mono); font-size:2rem; font-weight:800; color:#C084FC;">4 Stores</div>
              <div style="font-size:12px; color:var(--text-tertiary);">Multi-Store Sync</div>
            </div>
            <p style="font-size:11px; color:var(--text-secondary);">Hovering links telemetry across inventory, freight, and finance.</p>
          </div>
        </div>
      </section>

      <!-- ==========================================================================
           10. FULL PRODUCT WORKSPACE LAUNCHPAD & CTA
           ========================================================================== -->
      <footer class="os-footer-cta" id="section-workspace-launch">
        <span class="badge badge-ops" style="margin-bottom:16px;">ENTERPRISE READY</span>
        <h2 style="font-family:var(--font-display); font-size:clamp(2.2rem, 4vw, 3.6rem); font-weight:800; color:#FFFFFF; margin-bottom:16px;">
          Explore the Full Command Center OS.
        </h2>
        <p style="font-size:1.1rem; color:var(--text-secondary); max-width:620px; margin-bottom:36px; line-height:1.6;">
          Switch into the full-screen operational workspace to filter 18,000+ orders, resolve real-time NDR, dispute carrier weights, and analyze ad ROAS.
        </p>

        <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap; justify-content:center;">
          <button class="btn btn-primary btn-lg" id="footer-launch-app-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            <span>Launch Full Operational Workspace</span>
          </button>
          <button class="btn btn-outline btn-lg" id="footer-search-command-btn">
            <span>Global Command Palette (⌘K)</span>
          </button>
        </div>

        <div style="margin-top:60px; font-family:var(--font-mono); font-size:11px; color:var(--text-muted); display:flex; align-items:center; gap:16px; flex-wrap:wrap; justify-content:center;">
          <span>ECOMIQ TECHNOLOGIES INC.</span>
          <span>•</span>
          <span>ENTERPRISE COMMERCE COMMAND CENTER</span>
          <span>•</span>
          <span>ALL SYSTEMS NOMINAL (99.98% UPTIME)</span>
        </div>
      </footer>
    </div>
  `;

  // Attach interactive behaviors
  initCanvasBackground();
  initParallaxFragments();
  initExpandableTiles();
  initNDRSimulation();
  initAskEcomIQ();
  initTileZoo();
  initNavigationActions({ onOpenOrder, onAction, onSwitchToWorkspace });
}

// Background Particle Starfield Canvas
function initCanvasBackground() {
  const canvas = document.getElementById('os-background-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(65, Math.floor(width / 22));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.6 ? '#3B82F6' : Math.random() > 0.5 ? '#A855F7' : '#94A3B8',
      alpha: Math.random() * 0.5 + 0.1
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.12 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    requestAnimationFrame(render);
  }

  render();
}

// Cursor-reactive Parallax Orbit for Hero Fragments
function initParallaxFragments() {
  const mesh = document.getElementById('hero-floating-mesh');
  if (!mesh) return;

  const fragments = mesh.querySelectorAll('.floating-fragment');

  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    fragments.forEach((frag, idx) => {
      const depth = (idx % 3 + 1) * 12;
      const transX = dx * depth;
      const transY = dy * depth;
      frag.style.transform = `translate3d(${transX}px, ${transY}px, 0)`;
    });
  });

  // Clicking fragments glides to target sections
  fragments.forEach(frag => {
    frag.addEventListener('click', () => {
      const targetId = frag.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Expandable Universe Tiles
function initExpandableTiles() {
  const cards = document.querySelectorAll('.expandable-universe-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't toggle if clicking an inner action button
      if (e.target.closest('button')) return;
      card.classList.toggle('expanded');
      const icon = card.querySelector('.expand-icon');
      if (icon) {
        icon.textContent = card.classList.contains('expanded') ? '−' : '+';
      }
    });
  });

  // Actions inside tiles
  const btnWhatsApp = document.getElementById('btn-trigger-whatsapp-ndr');
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', () => {
      toast.show('WhatsApp location verification dispatched to 42 NDR customers.', 'success');
    });
  }

  const btnRouteShift = document.getElementById('btn-trigger-route-shift');
  if (btnRouteShift) {
    btnRouteShift.addEventListener('click', () => {
      toast.show('Smart Routing Rule Applied: Shifted 200 orders to Delhivery. 84 weight disputes queued.', 'success');
    });
  }

  const btnAdRebalance = document.getElementById('btn-trigger-ad-rebalance');
  if (btnAdRebalance) {
    btnAdRebalance.addEventListener('click', () => {
      toast.show('Budget Rebalanced: Shifted ₹40,000 to Google PMax (5.4x ROAS target).', 'info');
    });
  }
}

// NDR Recovery Interactive Simulation
function initNDRSimulation() {
  const actPills = document.querySelectorAll('.ndr-action-btn-pill');
  const counterEl = document.getElementById('ndr-recovered-counter');
  let recoveredCount = 38;

  actPills.forEach(pill => {
    pill.addEventListener('click', () => {
      actPills.forEach(p => p.classList.remove('simulated-active'));
      pill.classList.add('simulated-active');

      recoveredCount += Math.floor(Math.random() * 4) + 1;
      if (counterEl) {
        counterEl.textContent = `${recoveredCount} Orders`;
        counterEl.style.color = '#84CC16';
        setTimeout(() => counterEl.style.color = '#FFFFFF', 600);
      }

      toast.show(`Protocol Dispatched: ${pill.textContent.trim()}. Recovered +₹14,200 revenue.`, 'success');
    });
  });
}

// Ask EcomIQ Interactive Copilot
function initAskEcomIQ() {
  const input = document.getElementById('ask-ecomiq-input');
  const sendBtn = document.getElementById('ask-ecomiq-send-btn');
  const answerText = document.getElementById('ai-answer-text');
  const chips = document.querySelectorAll('.ask-prompt-chip');

  const responses = {
    "Why did delivery success drop this week?": "Delivery success dropped 1.8% over the last 72 hours due to heavy rain in Mumbai Bhiwandi hub affecting BlueDart outbound dispatches. Delhivery maintained a 94.8% SLA.",
    "Which courier is costing us the most?": "Courier BlueDart is currently averaging ₹168/order due to volumetric weight adjustments on shoe boxes, compared to ₹124/order with Delhivery Express.",
    "Show me today's anomalies.": "7 active anomalies detected: 1) BlueDart volumetric weight charge (+0.55kg), 2) Lucknow COD NDR spike (+18%), 3) Meta Runner Ad Set creative fatigue (ROAS 2.1x).",
    "How can I reduce RTO?": "Activating WhatsApp pre-dispatch location verification on COD orders above ₹2,000 can reduce your RTO rate from 3.1% to 1.9%, protecting ₹1.8L in weekly revenue.",
    "Why did CAC increase?": "Meta blended CAC increased to ₹294 because the primary lookalike audience reached a frequency of 4.8. Shifting budget to Google PMax will restore your target 4.2x ROAS."
  };

  function executeQuery(query) {
    if (!query) return;
    if (answerText) {
      answerText.innerHTML = `<span style="color:#C084FC;">Analyzing 18,429 shipments and historical telemetry...</span>`;
      setTimeout(() => {
        const resp = responses[query] || `Synthesized analysis for "${query}": Operational health index is 94.2%. Identified 3 optimization levers across couriers and COD remittance.`;
        answerText.innerHTML = resp;
      }, 400);
    }
  }

  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => {
      executeQuery(input.value);
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') executeQuery(input.value);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-q');
      if (input) input.value = q;
      executeQuery(q);
    });
  });

  const rerouteBtn = document.getElementById('btn-execute-answer-route');
  if (rerouteBtn) {
    rerouteBtn.addEventListener('click', () => {
      toast.show('Autonomous Rule Deployed: Western Zone dispatches redirected to Delhivery Express.', 'success');
    });
  }
}

// Interactive Tile Zoo (Section 15)
function initTileZoo() {
  // Flip Tile
  const flipTile = document.getElementById('tile-flip-demo');
  if (flipTile) {
    flipTile.addEventListener('click', () => {
      flipTile.classList.toggle('is-flipped');
    });
  }

  // Magnetic Tile
  const magTile = document.getElementById('tile-magnetic-demo');
  if (magTile) {
    magTile.addEventListener('mousemove', (e) => {
      const rect = magTile.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      magTile.style.transform = `perspective(600px) rotateX(${-y / 8}deg) rotateY(${x / 8}deg) scale(1.02)`;
    });
    magTile.addEventListener('mouseleave', () => {
      magTile.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }

  // Live Ticking Tile
  const tickEl = document.getElementById('ticking-orders-count');
  if (tickEl) {
    let count = 18429;
    setInterval(() => {
      count += Math.floor(Math.random() * 2) + 1;
      tickEl.textContent = count.toLocaleString('en-IN');
    }, 4500);
  }
}

// Navigation and Workspace Switching
function initNavigationActions({ onOpenOrder, onAction, onSwitchToWorkspace }) {
  // Inspect Order clicks
  const inspectBtns = document.querySelectorAll('.inspect-order-btn');
  inspectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const ordId = btn.getAttribute('data-order-id');
      const order = MOCK_ORDERS.find(o => o.id === ordId) || MOCK_ORDERS[0];
      if (onOpenOrder) onOpenOrder(order);
    });
  });

  const orderRows = document.querySelectorAll('.telemetry-order-row');
  orderRows.forEach(row => {
    row.addEventListener('click', () => {
      const ordId = row.getAttribute('data-order-id');
      const order = MOCK_ORDERS.find(o => o.id === ordId) || MOCK_ORDERS[0];
      if (onOpenOrder) onOpenOrder(order);
    });
  });

  // Launch Live Operating System Workspace Buttons
  const launchBtn1 = document.getElementById('hero-launch-os-btn');
  const launchBtn2 = document.getElementById('footer-launch-app-btn');
  const triggerWorkspace = () => {
    if (onSwitchToWorkspace) onSwitchToWorkspace();
  };

  if (launchBtn1) launchBtn1.addEventListener('click', triggerWorkspace);
  if (launchBtn2) launchBtn2.addEventListener('click', triggerWorkspace);

  // Ask AI shortcut button in hero
  const heroAskAIBtn = document.getElementById('hero-ask-ai-btn');
  if (heroAskAIBtn) {
    heroAskAIBtn.addEventListener('click', () => {
      const askSection = document.getElementById('section-ask-ai');
      if (askSection) {
        askSection.scrollIntoView({ behavior: 'smooth' });
        const input = document.getElementById('ask-ecomiq-input');
        if (input) setTimeout(() => input.focus(), 500);
      }
    });
  }

  // AI Rule buttons
  const btnAiRule = document.getElementById('btn-ai-apply-rule');
  if (btnAiRule) {
    btnAiRule.addEventListener('click', () => {
      toast.show('Smart Routing Rule Deployed: 18% North Zone shifted to Delhivery. 84 disputes submitted.', 'success');
    });
  }

  const btnAiOtp = document.getElementById('btn-ai-deploy-otp');
  if (btnAiOtp) {
    btnAiOtp.addEventListener('click', () => {
      toast.show('OTP Security Gate Enabled on Tier-2 COD orders above ₹2,000.', 'success');
    });
  }

  const btnAiScale = document.getElementById('btn-ai-scale-budget');
  if (btnAiScale) {
    btnAiScale.addEventListener('click', () => {
      toast.show('Google PMax Budget Scaled by +₹15,000/day. Target ROAS 5.2x.', 'success');
    });
  }

  // Footer Command Palette Trigger
  const footerCmdBtn = document.getElementById('footer-search-command-btn');
  if (footerCmdBtn) {
    footerCmdBtn.addEventListener('click', () => {
      if (onAction) onAction('command-palette');
    });
  }
}
