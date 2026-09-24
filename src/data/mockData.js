// Enterprise Mock Data for EcomIQ Command Center

export const MOCK_WORKSPACE = {
  id: "ws_apex_global",
  name: "Apex Brands Global",
  tier: "Enterprise Tier 1",
  storesCount: 4,
  activeCouriers: 5,
  systemStatus: "OPTIMAL",
  uptime: "99.98%",
  lastSync: "32s ago",
  apiLatency: "14ms",
  stores: [
    { id: "st_shopify_main", name: "Apex Athletics (Shopify)", platform: "shopify", status: "active", orders24h: 842 },
    { id: "st_shopify_beauty", name: "Kavya Organics (Shopify)", platform: "shopify", status: "active", orders24h: 512 },
    { id: "st_amazon", name: "Apex Storefront (Amazon IN)", platform: "amazon", status: "active", orders24h: 389 },
    { id: "st_woo", name: "Urban Threads (WooCommerce)", platform: "woocommerce", status: "active", orders24h: 186 }
  ]
};

export const MOCK_KPIS = {
  business: {
    revenue: "₹2.48 Cr",
    revenueNum: 24824500,
    revenueChange: "+18.4%",
    revenueChangeType: "positive",
    targetRevenue: "₹2.80 Cr",
    targetProgress: 88.6,
    orders: "18,429",
    ordersNum: 18429,
    ordersChange: "+14.2%",
    aov: "₹1,346",
    aovNum: 1346,
    aovChange: "+3.7%",
    deliverySuccess: "91.7%",
    deliveryChange: "+1.8%",
    rtoRate: "3.1%",
    rtoChange: "-0.8%",
    rtoChangeType: "positive"
  },
  operations: {
    totalShipments: "18,142",
    delivered: "16,636",
    inTransit: "1,142",
    outForDelivery: "364",
    ndrQueue: "342",
    ndrRate: "5.2%",
    ndrActionRequired: "184",
    rtoQueue: "284",
    pickupSuccess: "98.4%",
    avgDeliveryTime: "2.3 Days",
    slaAdherence: "94.8%"
  },
  finance: {
    walletBalance: "₹14,82,500",
    walletThreshold: "₹2,00,000",
    codOutstanding: "₹42,65,400",
    codRemittanceDue: "₹18,40,000",
    shippingSpend: "₹18,24,600",
    refundsProcessed: "₹3,41,200",
    netLogisticsCostRatio: "11.4%",
    previousLogisticsCostRatio: "12.8%"
  },
  marketing: {
    adSpend: "₹32,84,000",
    attributedRevenue: "₹1.58 Cr",
    blendedRoas: "4.82x",
    blendedCac: "₹218",
    paidOrders: "12,410",
    newCustomerPct: "72.4%"
  }
};

export const MOCK_REVENUE_CHART = {
  "30d": [
    { date: "01 Sep", revenue: 642000, prevRevenue: 580000, orders: 482, aov: 1332 },
    { date: "03 Sep", revenue: 712000, prevRevenue: 610000, orders: 531, aov: 1340 },
    { date: "05 Sep", revenue: 845000, prevRevenue: 690000, orders: 620, aov: 1362 },
    { date: "07 Sep", revenue: 790000, prevRevenue: 720000, orders: 588, aov: 1343 },
    { date: "09 Sep", revenue: 890000, prevRevenue: 740000, orders: 654, aov: 1360 },
    { date: "11 Sep", revenue: 940000, prevRevenue: 810000, orders: 689, aov: 1364 },
    { date: "13 Sep", revenue: 880000, prevRevenue: 805000, orders: 645, aov: 1364 },
    { date: "15 Sep", revenue: 1040000, prevRevenue: 870000, orders: 760, aov: 1368 },
    { date: "17 Sep", revenue: 990000, prevRevenue: 890000, orders: 721, aov: 1373 },
    { date: "19 Sep", revenue: 1120000, prevRevenue: 920000, orders: 810, aov: 1382 },
    { date: "21 Sep", revenue: 1180000, prevRevenue: 960000, orders: 855, aov: 1380 },
    { date: "23 Sep", revenue: 1240000, prevRevenue: 990000, orders: 902, aov: 1374 },
    { date: "24 Sep", revenue: 1310000, prevRevenue: 1020000, orders: 965, aov: 1357 }
  ],
  "7d": [
    { date: "18 Sep", revenue: 960000, prevRevenue: 840000, orders: 708, aov: 1355 },
    { date: "19 Sep", revenue: 1120000, prevRevenue: 920000, orders: 810, aov: 1382 },
    { date: "20 Sep", revenue: 1080000, prevRevenue: 940000, orders: 795, aov: 1358 },
    { date: "21 Sep", revenue: 1180000, prevRevenue: 960000, orders: 855, aov: 1380 },
    { date: "22 Sep", revenue: 1150000, prevRevenue: 980000, orders: 840, aov: 1369 },
    { date: "23 Sep", revenue: 1240000, prevRevenue: 990000, orders: 902, aov: 1374 },
    { date: "24 Sep (Today)", revenue: 1310000, prevRevenue: 1020000, orders: 965, aov: 1357 }
  ],
  "today": [
    { date: "00:00", revenue: 42000, prevRevenue: 35000, orders: 31, aov: 1354 },
    { date: "04:00", revenue: 18000, prevRevenue: 15000, orders: 13, aov: 1384 },
    { date: "08:00", revenue: 86000, prevRevenue: 68000, orders: 64, aov: 1343 },
    { date: "12:00", revenue: 294000, prevRevenue: 245000, orders: 216, aov: 1361 },
    { date: "16:00", revenue: 462000, prevRevenue: 390000, orders: 341, aov: 1354 },
    { date: "20:00", revenue: 408000, prevRevenue: 267000, orders: 300, aov: 1360 }
  ]
};

export const MOCK_AI_INSIGHTS = [
  {
    id: "ai_ins_01",
    severity: "CRITICAL",
    title: "NDR SURGE IN MAHARASHTRA PINCODES",
    subtitle: "+18.4% above 7-day operational baseline",
    timestamp: "14m ago",
    what: "Non-Delivery Reports (NDR) spiked by 18.4% over the last 36 hours across Pune and Thane suburban hubs.",
    why: "High COD volume combined with last-mile van dispatch delays at Delhivery Bhiwandi hub (Pincodes 4110xx and 4006xx). 68% of failures cited 'Customer Unavailable'.",
    impact: {
      affectedShipments: 284,
      revenueAtRisk: "₹3,84,200",
      primaryCourier: "Delhivery",
      paymentMix: "84% COD / 16% Prepaid"
    },
    actionablePlaybook: [
      "Auto-trigger WhatsApp automated delivery re-slotting flow with 10% prepaid conversion discount",
      "Route 112 urgent priority consignments to BlueDart Express transit hub",
      "Send alert to Bhiwandi Operations Liaison"
    ],
    ctaText: "Review NDR & Trigger Playbook",
    actionTarget: "ndr",
    filterState: "Maharashtra"
  },
  {
    id: "ai_ins_02",
    severity: "HIGH",
    title: "SYSTEMIC WEIGHT OVERCHARGING ON DTDC AIR",
    subtitle: "89 packages flagged with >400g volumetric discrepancy",
    timestamp: "1h 12m ago",
    what: "DTDC billed volumetric weight at 1.25kg vs declared dead weight of 0.65kg for standard t-shirt polybags.",
    why: "Optical scanner miscalibration at DTDC Nelamangala sorting belt reading soft polybag bulge as rigid cube volume.",
    impact: {
      affectedShipments: 89,
      extraBilling: "₹41,200",
      primaryCourier: "DTDC Express",
      disputeWindowRemaining: "48 hours"
    },
    actionablePlaybook: [
      "Generate auto-compiled photo proof dispute packet with pre-dispatch weights",
      "Auto-file weight dispute tickets in bulk via DTDC Partner API"
    ],
    ctaText: "Raise Bulk Weight Dispute",
    actionTarget: "weight",
    filterState: "Disputed"
  },
  {
    id: "ai_ins_03",
    severity: "MEDIUM",
    title: "META ADS CAC ADVISORY — CREATIVE FATIGUE",
    subtitle: "C412 'Activewear Drops' CAC rose to ₹384 (+44%)",
    timestamp: "3h ago",
    what: "Campaign 'AW26 Performance Tees' ROAS dropped from 4.8x to 2.85x over 48 hours.",
    why: "Frequency reached 4.2 in tier-1 metro audiences; ad creative exhaustion observed.",
    impact: {
      dailySpend: "₹45,000",
      lostContribution: "₹1,12,000",
      roasDelta: "-1.95x"
    },
    actionablePlaybook: [
      "Reallocate ₹25,000 daily budget to high-performing Google PMax search campaign",
      "Swap top creative variations to UGC customer unboxing reel"
    ],
    ctaText: "Inspect Marketing Allocation",
    actionTarget: "marketing",
    filterState: "Meta"
  }
];

export const MOCK_COURIERS = [
  {
    id: "delhivery",
    name: "Delhivery Surface & Express",
    logoText: "DELHIVERY",
    status: "HEALTHY",
    shipmentShare: "42%",
    totalShipments: 7618,
    pickupSuccess: "98.8%",
    deliveryRate: "92.4%",
    ndrRate: "4.8%",
    rtoRate: "2.8%",
    avgDeliveryDays: "2.1d",
    costPerShipment: "₹84.50",
    disputedWeightCount: 18,
    slaAdherence: "95.6%",
    grade: "A+"
  },
  {
    id: "bluedart",
    name: "BlueDart Air Apex",
    logoText: "BLUEDART",
    status: "OPTIMAL",
    shipmentShare: "28%",
    totalShipments: 5080,
    pickupSuccess: "99.4%",
    deliveryRate: "95.8%",
    ndrRate: "2.6%",
    rtoRate: "1.6%",
    avgDeliveryDays: "1.4d",
    costPerShipment: "₹128.00",
    disputedWeightCount: 3,
    slaAdherence: "98.2%",
    grade: "A++"
  },
  {
    id: "dtdc",
    name: "DTDC Priority",
    logoText: "DTDC",
    status: "WARNING",
    shipmentShare: "16%",
    totalShipments: 2902,
    pickupSuccess: "96.2%",
    deliveryRate: "88.4%",
    ndrRate: "7.9%",
    rtoRate: "4.2%",
    avgDeliveryDays: "3.2d",
    costPerShipment: "₹76.20",
    disputedWeightCount: 89,
    slaAdherence: "87.4%",
    grade: "B"
  },
  {
    id: "shadowfax",
    name: "Shadowfax Hyperlocal & Direct",
    logoText: "SHADOWFAX",
    status: "HEALTHY",
    shipmentShare: "9%",
    totalShipments: 1632,
    pickupSuccess: "97.6%",
    deliveryRate: "91.2%",
    ndrRate: "5.1%",
    rtoRate: "3.4%",
    avgDeliveryDays: "1.8d",
    costPerShipment: "₹82.00",
    disputedWeightCount: 12,
    slaAdherence: "93.1%",
    grade: "A"
  },
  {
    id: "xpressbees",
    name: "Xpressbees Logistics",
    logoText: "XPRESSBEES",
    status: "WATCHLIST",
    shipmentShare: "5%",
    totalShipments: 910,
    pickupSuccess: "95.1%",
    deliveryRate: "86.8%",
    ndrRate: "8.4%",
    rtoRate: "4.9%",
    avgDeliveryDays: "3.4d",
    costPerShipment: "₹74.00",
    disputedWeightCount: 22,
    slaAdherence: "84.9%",
    grade: "C+"
  }
];

export const MOCK_ORDERS = [
  {
    id: "ORD-94281",
    date: "2026-09-24 19:42",
    customer: {
      name: "Rohan Singhania",
      email: "rohan.s@gmail.com",
      phone: "+91 98201 44821",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400050",
      address: "Flat 802, Silver Arch Heights, Bandra West",
      totalOrders: 14,
      totalSpend: "₹38,450",
      rtoRisk: "LOW"
    },
    items: [
      { name: "Apex Carbon Elite Running Shoes - Olive", sku: "AC-RN-09-OLV", qty: 1, price: "₹4,299", hsn: "640411", img: "running_shoe" },
      { name: "Pro Aero Seamless Tee - Charcoal", sku: "PA-TEE-02-CHR", qty: 2, price: "₹1,499", hsn: "610910", img: "sport_tee" }
    ],
    itemSummary: "Apex Carbon Elite Running Shoes + 2 items",
    amount: "₹7,297",
    subtotal: "₹7,297",
    discount: "₹0",
    tax: "₹782 (12% GST)",
    shippingFee: "₹0 (Free Express)",
    payment: {
      type: "Prepaid",
      gateway: "Razorpay (UPI / HDFC Bank)",
      transactionId: "pay_Rzp99281741",
      status: "PAID"
    },
    channel: "Shopify - Apex Athletics",
    warehouse: "Mumbai Central Mega Hub (Bhiwandi)",
    shipment: {
      awb: "DEL882941029",
      courier: "Delhivery Express",
      status: "Out for Delivery",
      deadWeight: "0.85 kg",
      volWeight: "1.10 kg",
      edd: "2026-09-24 (Today by 21:00)",
      events: [
        { time: "2026-09-24 16:15", title: "Out for Delivery", desc: "Assigned to delivery agent Vikram Yadav (+91 91234 56789). Van route #MH04-891", status: "active" },
        { time: "2026-09-24 07:30", title: "Arrived at Delivery Facility", desc: "Bandra Delivery Sub-center Hub, Mumbai", status: "done" },
        { time: "2026-09-23 22:45", title: "In Transit", desc: "Departed sorting facility Bhiwandi Linehaul 12", status: "done" },
        { time: "2026-09-23 18:30", title: "Picked Up", desc: "Package scanned and manifested at Warehouse Origin", status: "done" },
        { time: "2026-09-23 15:10", title: "AWB Generated & Label Printed", desc: "AWB #DEL882941029 allocated via Smart Courier Routing", status: "done" },
        { time: "2026-09-23 14:50", title: "Order Confirmed", desc: "Payment verified via Razorpay UPI webhook", status: "done" }
      ]
    },
    status: "Out for Delivery",
    isPriority: true
  },
  {
    id: "ORD-94280",
    date: "2026-09-24 18:15",
    customer: {
      name: "Pooja Deshmukh",
      email: "pooja.d@yahoo.com",
      phone: "+91 97654 88319",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411028",
      address: "House 14B, Marvel Fria, Magarpatta City",
      totalOrders: 2,
      totalSpend: "₹3,998",
      rtoRisk: "HIGH"
    },
    items: [
      { name: "Ultra Ribbed Workout Set - Forest Green", sku: "WS-RB-GRN-M", qty: 1, price: "₹2,499", hsn: "610822", img: "workout_set" },
      { name: "Anti-Slip Studio Grip Socks (Pack of 3)", sku: "SK-GRP-3PK", qty: 1, price: "₹699", hsn: "611595", img: "socks" }
    ],
    itemSummary: "Ultra Ribbed Workout Set + 1 item",
    amount: "₹3,198",
    subtotal: "₹3,198",
    discount: "₹0",
    tax: "₹342",
    shippingFee: "₹0",
    payment: {
      type: "COD",
      gateway: "Cash on Delivery",
      transactionId: "COD-VERIFIED-OTP",
      status: "PENDING_COLLECTION"
    },
    channel: "Shopify - Apex Athletics",
    warehouse: "Mumbai Central Mega Hub (Bhiwandi)",
    shipment: {
      awb: "DEL882939811",
      courier: "Delhivery Surface",
      status: "NDR",
      deadWeight: "0.62 kg",
      volWeight: "0.75 kg",
      edd: "2026-09-24 (Delayed)",
      ndrReason: "Customer Unavailable - Door Locked / Phone Unreachable",
      ndrAttempt: 1,
      ndrAge: "4h 20m",
      events: [
        { time: "2026-09-24 15:40", title: "Delivery Failed - NDR Triggered", desc: "Customer Unavailable at Magarpatta destination. Automated NDR verification required.", status: "alert" },
        { time: "2026-09-24 09:15", title: "Out for Delivery", desc: "Assigned to courier agent Swapnil G.", status: "done" },
        { time: "2026-09-23 20:00", title: "Arrived at Pune Hub", desc: "Pune Hadapsar Regional Facility", status: "done" },
        { time: "2026-09-22 17:30", title: "Dispatched from Bhiwandi", desc: "Linehaul express truck departed", status: "done" }
      ]
    },
    status: "NDR",
    isPriority: true
  },
  {
    id: "ORD-94279",
    date: "2026-09-24 17:02",
    customer: {
      name: "Ananya Mehra",
      email: "ananya.m@outlook.com",
      phone: "+91 99102 33491",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110017",
      address: "C-44, Panchsheel Enclave, Malviya Nagar",
      totalOrders: 9,
      totalSpend: "₹24,800",
      rtoRisk: "LOW"
    },
    items: [
      { name: "Radiance Vitamin C Serum (50ml)", sku: "KO-SER-VITC", qty: 2, price: "₹1,899", hsn: "330499", img: "serum" },
      { name: "Peptide Night Repair Barrier Cream", sku: "KO-CRM-BAR", qty: 1, price: "₹2,150", hsn: "330499", img: "cream" }
    ],
    itemSummary: "Radiance Vitamin C Serum (x2) + 1 item",
    amount: "₹5,948",
    subtotal: "₹5,948",
    discount: "₹0",
    tax: "₹1,070 (18% GST)",
    shippingFee: "₹0 (Complimentary)",
    payment: {
      type: "Prepaid",
      gateway: "Razorpay (Credit Card)",
      transactionId: "pay_Rzp88419202",
      status: "PAID"
    },
    channel: "Shopify - Kavya Organics",
    warehouse: "Delhi NCR Mega Hub (Gurugram)",
    shipment: {
      awb: "BLU773820194",
      courier: "BlueDart Air Apex",
      status: "Delivered",
      deadWeight: "0.45 kg",
      volWeight: "0.50 kg",
      edd: "2026-09-24",
      events: [
        { time: "2026-09-24 16:45", title: "Delivered Successfully", desc: "Delivered to Ananya Mehra (Signature: Verified via OTP 4921)", status: "done" },
        { time: "2026-09-24 11:20", title: "Out for Delivery", desc: "BlueDart Courier Associate Deepak Kumar", status: "done" },
        { time: "2026-09-24 06:10", title: "Arrived at South Delhi Hub", desc: "Okhla Sorting Center", status: "done" }
      ]
    },
    status: "Delivered",
    isPriority: false
  },
  {
    id: "ORD-94278",
    date: "2026-09-24 15:30",
    customer: {
      name: "Karthik Venkataraman",
      email: "karthik.v@techcorp.in",
      phone: "+91 98450 11993",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560103",
      address: "Villa 22, Greenwood Palms, Sarjapur Road",
      totalOrders: 21,
      totalSpend: "₹62,100",
      rtoRisk: "LOW"
    },
    items: [
      { name: "Thermal Tech Zip Jacket - Stealth Black", sku: "TH-JKT-01-BLK", qty: 1, price: "₹3,999", hsn: "620190", img: "jacket" }
    ],
    itemSummary: "Thermal Tech Zip Jacket - Stealth Black",
    amount: "₹3,999",
    subtotal: "₹3,999",
    discount: "₹0",
    tax: "₹428",
    shippingFee: "₹0",
    payment: {
      type: "Prepaid",
      gateway: "PayU (NetBanking - ICICI)",
      transactionId: "payu_TX9982001",
      status: "PAID"
    },
    channel: "Amazon IN - Apex Direct",
    warehouse: "Bengaluru North Fulfillment (Nelamangala)",
    shipment: {
      awb: "BLU773819442",
      courier: "BlueDart Air Apex",
      status: "In Transit",
      deadWeight: "0.78 kg",
      volWeight: "0.85 kg",
      edd: "2026-09-25",
      events: [
        { time: "2026-09-24 17:00", title: "In Transit to Regional Delivery Hub", desc: "Nelamangala Hub to Bellandur Delivery Hub", status: "active" },
        { time: "2026-09-24 15:45", title: "Package Manifested & Handed to BlueDart", desc: "Scanned on loading ramp dock #3", status: "done" }
      ]
    },
    status: "In Transit",
    isPriority: false
  },
  {
    id: "ORD-94277",
    date: "2026-09-24 14:12",
    customer: {
      name: "Siddharth Verma",
      email: "sid.verma@gmail.com",
      phone: "+91 98118 77201",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122002",
      address: "Tower 4, Apt 1104, DLF Phase 5",
      totalOrders: 4,
      totalSpend: "₹9,450",
      rtoRisk: "MEDIUM"
    },
    items: [
      { name: "AeroVent Tech Shorts - Navy", sku: "AV-SHT-04-NVY", qty: 2, price: "₹1,299", hsn: "620343", img: "shorts" },
      { name: "Quick-Dry Compression Crew Socks", sku: "SK-CMP-WHT", qty: 2, price: "₹499", hsn: "611595", img: "socks" }
    ],
    itemSummary: "AeroVent Tech Shorts (x2) + 2 items",
    amount: "₹3,596",
    subtotal: "₹3,596",
    discount: "₹0",
    tax: "₹385",
    shippingFee: "₹0",
    payment: {
      type: "COD",
      gateway: "Cash on Delivery",
      transactionId: "COD-UNPAID",
      status: "PENDING_COLLECTION"
    },
    channel: "Shopify - Apex Athletics",
    warehouse: "Delhi NCR Mega Hub (Gurugram)",
    shipment: {
      awb: "DTD992144019",
      courier: "DTDC Priority",
      status: "Weight Discrepancy",
      deadWeight: "0.55 kg",
      volWeight: "1.25 kg",
      courierChargedWeight: "1.25 kg",
      overcharge: "₹48.00",
      edd: "2026-09-25",
      events: [
        { time: "2026-09-24 16:30", title: "Weight Discrepancy Flagged by EcomIQ Audit", desc: "DTDC recorded 1.25kg vs declared 0.55kg. Dispute eligible.", status: "alert" },
        { time: "2026-09-24 15:00", title: "Scanned at DTDC Hub", desc: "Gurugram Sorting Center", status: "done" }
      ]
    },
    status: "In Transit",
    isPriority: false
  },
  {
    id: "ORD-94276",
    date: "2026-09-24 12:45",
    customer: {
      name: "Tanya Kapoor",
      email: "tanya.k@icloud.com",
      phone: "+91 99300 28410",
      city: "Thane",
      state: "Maharashtra",
      pincode: "400607",
      address: "102 Hiranandani Estate, Ghodbunder Road",
      totalOrders: 1,
      totalSpend: "₹2,199",
      rtoRisk: "HIGH"
    },
    items: [
      { name: "Bakuchiol Retinol-Alternative Night Elixir", sku: "KO-ELX-BAK", qty: 1, price: "₹2,199", hsn: "330499", img: "serum" }
    ],
    itemSummary: "Bakuchiol Retinol-Alternative Night Elixir",
    amount: "₹2,199",
    subtotal: "₹2,199",
    discount: "₹0",
    tax: "₹395",
    shippingFee: "₹0",
    payment: {
      type: "COD",
      gateway: "Cash on Delivery",
      transactionId: "COD-ATTEMPTED",
      status: "PENDING_COLLECTION"
    },
    channel: "Shopify - Kavya Organics",
    warehouse: "Mumbai Central Mega Hub (Bhiwandi)",
    shipment: {
      awb: "DEL882937710",
      courier: "Delhivery Surface",
      status: "NDR",
      deadWeight: "0.38 kg",
      volWeight: "0.45 kg",
      edd: "2026-09-24",
      ndrReason: "Incorrect Address / Pincode Mismatch - Building not found",
      ndrAttempt: 2,
      ndrAge: "7h 15m",
      events: [
        { time: "2026-09-24 13:10", title: "Delivery Failed - NDR 2nd Attempt", desc: "Courier could not locate building number on Ghodbunder Road.", status: "alert" },
        { time: "2026-09-23 14:00", title: "Delivery Failed - NDR 1st Attempt", desc: "Customer requested rescheduled delivery date.", status: "alert" }
      ]
    },
    status: "NDR",
    isPriority: true
  },
  {
    id: "ORD-94275",
    date: "2026-09-24 11:20",
    customer: {
      name: "Aditya Nambiar",
      email: "aditya.n@gmail.com",
      phone: "+91 94471 28490",
      city: "Kochi",
      state: "Kerala",
      pincode: "682025",
      address: "Plot 88, Panampilly Nagar",
      totalOrders: 6,
      totalSpend: "₹14,920",
      rtoRisk: "LOW"
    },
    items: [
      { name: "Urban Linen Oversized Shirt - Ivory", sku: "UT-SH-LIN-IVR", qty: 2, price: "₹1,899", hsn: "620520", img: "linen_shirt" }
    ],
    itemSummary: "Urban Linen Oversized Shirt - Ivory (x2)",
    amount: "₹3,798",
    subtotal: "₹3,798",
    discount: "₹0",
    tax: "₹406",
    shippingFee: "₹0",
    payment: {
      type: "Prepaid",
      gateway: "Razorpay (GPay UPI)",
      transactionId: "pay_Rzp7729104",
      status: "PAID"
    },
    channel: "WooCommerce - Urban Threads",
    warehouse: "Bengaluru North Fulfillment (Nelamangala)",
    shipment: {
      awb: "BLU773812901",
      courier: "BlueDart Air Apex",
      status: "In Transit",
      deadWeight: "0.68 kg",
      volWeight: "0.80 kg",
      edd: "2026-09-26",
      events: [
        { time: "2026-09-24 14:00", title: "Departed Origin Hub", desc: "Bengaluru Airport Hub flight connected to Kochi", status: "active" }
      ]
    },
    status: "In Transit",
    isPriority: false
  },
  {
    id: "ORD-94274",
    date: "2026-09-24 09:40",
    customer: {
      name: "Meera Krishnan",
      email: "meera.k@tcs.com",
      phone: "+91 98840 91823",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600028",
      address: "Flat 4A, Ocean View Apartments, RA Puram",
      totalOrders: 11,
      totalSpend: "₹28,600",
      rtoRisk: "LOW"
    },
    items: [
      { name: "Apex Kinetic Training Duffel Bag (32L)", sku: "AC-BAG-32L-BLK", qty: 1, price: "₹3,499", hsn: "420292", img: "bag" }
    ],
    itemSummary: "Apex Kinetic Training Duffel Bag (32L)",
    amount: "₹3,499",
    subtotal: "₹3,499",
    discount: "₹0",
    tax: "₹630 (18% GST)",
    shippingFee: "₹0",
    payment: {
      type: "Prepaid",
      gateway: "Razorpay (Credit Card)",
      transactionId: "pay_Rzp6620194",
      status: "PAID"
    },
    channel: "Shopify - Apex Athletics",
    warehouse: "Bengaluru North Fulfillment (Nelamangala)",
    shipment: {
      awb: "SHA661902819",
      courier: "Shadowfax Direct",
      status: "Delivered",
      deadWeight: "1.10 kg",
      volWeight: "1.40 kg",
      edd: "2026-09-24",
      events: [
        { time: "2026-09-24 15:15", title: "Delivered to Customer", desc: "Handed over to Meera Krishnan", status: "done" }
      ]
    },
    status: "Delivered",
    isPriority: false
  },
  {
    id: "ORD-94273",
    date: "2026-09-24 08:15",
    customer: {
      name: "Varun Malhotra",
      email: "varun.m@delhivery.com",
      phone: "+91 99991 44552",
      city: "Noida",
      state: "Uttar Pradesh",
      pincode: "201301",
      address: "Plot B-19, Sector 62",
      totalOrders: 3,
      totalSpend: "₹5,100",
      rtoRisk: "MEDIUM"
    },
    items: [
      { name: "Moisture Wicking Tank Top - Slate", sku: "MW-TNK-SLT", qty: 2, price: "₹999", hsn: "610910", img: "tank" }
    ],
    itemSummary: "Moisture Wicking Tank Top - Slate (x2)",
    amount: "₹1,998",
    subtotal: "₹1,998",
    discount: "₹0",
    tax: "₹214",
    shippingFee: "₹0",
    payment: {
      type: "COD",
      gateway: "Cash on Delivery",
      transactionId: "COD-REJECTED",
      status: "RTO_INITIATED"
    },
    channel: "Shopify - Apex Athletics",
    warehouse: "Delhi NCR Mega Hub (Gurugram)",
    shipment: {
      awb: "DEL882928810",
      courier: "Delhivery Surface",
      status: "RTO",
      deadWeight: "0.40 kg",
      volWeight: "0.45 kg",
      edd: "Returned",
      rtoReason: "Customer Refused at Doorstep - Claimed Did Not Order",
      events: [
        { time: "2026-09-24 11:00", title: "RTO In Transit to Warehouse", desc: "Return consignment initiated back to Gurugram Hub", status: "alert" },
        { time: "2026-09-24 09:30", title: "Customer Refusal Documented", desc: "Consignee rejected delivery package", status: "alert" }
      ]
    },
    status: "RTO",
    isPriority: false
  },
  {
    id: "ORD-94272",
    date: "2026-09-23 23:10",
    customer: {
      name: "Sneha Patel",
      email: "sneha.p@ahmedabad.org",
      phone: "+91 98250 33819",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: "380015",
      address: "B-501, Iscon Elegance, Satellite Road",
      totalOrders: 7,
      totalSpend: "₹19,250",
      rtoRisk: "LOW"
    },
    items: [
      { name: "Centella Asiatica Soothing Gel Mask", sku: "KO-MSK-CEN", qty: 3, price: "₹899", hsn: "330499", img: "mask" },
      { name: "Ceramide Moisture Lock Mist", sku: "KO-MST-CER", qty: 1, price: "₹1,150", hsn: "330499", img: "mist" }
    ],
    itemSummary: "Centella Asiatica Soothing Gel Mask (x3) + 1 item",
    amount: "₹3,847",
    subtotal: "₹3,847",
    discount: "₹0",
    tax: "₹692",
    shippingFee: "₹0",
    payment: {
      type: "Prepaid",
      gateway: "Razorpay (Axis Bank NetBanking)",
      transactionId: "pay_Rzp5510294",
      status: "PAID"
    },
    channel: "Shopify - Kavya Organics",
    warehouse: "Mumbai Central Mega Hub (Bhiwandi)",
    shipment: {
      awb: "BLU773809918",
      courier: "BlueDart Air Apex",
      status: "Delivered",
      deadWeight: "0.72 kg",
      volWeight: "0.85 kg",
      edd: "2026-09-24",
      events: [
        { time: "2026-09-24 14:10", title: "Delivered Successfully", desc: "Handed over to Sneha Patel", status: "done" }
      ]
    },
    status: "Delivered",
    isPriority: false
  }
];

export const MOCK_NDR_QUEUE = [
  {
    awb: "DEL882939811",
    orderId: "ORD-94280",
    customerName: "Pooja Deshmukh",
    phone: "+91 97654 88319",
    city: "Pune",
    state: "Maharashtra",
    courier: "Delhivery Surface",
    ndrReason: "Customer Unavailable - Door Locked / Phone Unreachable",
    attempt: 1,
    ageHours: 4.3,
    status: "ACTION_REQUIRED",
    orderAmount: "₹3,198",
    paymentType: "COD",
    lastActionTaken: "Automated IVR call attempted (No Answer)",
    recommendedAction: "WhatsApp 1-Click Reschedule + Address Verification"
  },
  {
    awb: "DEL882937710",
    orderId: "ORD-94276",
    customerName: "Tanya Kapoor",
    phone: "+91 99300 28410",
    city: "Thane",
    state: "Maharashtra",
    courier: "Delhivery Surface",
    ndrReason: "Incorrect Address / Pincode Mismatch",
    attempt: 2,
    ageHours: 7.2,
    status: "ACTION_REQUIRED",
    orderAmount: "₹2,199",
    paymentType: "COD",
    lastActionTaken: "SMS notification dispatched",
    recommendedAction: "Request Google Maps Pin via WhatsApp or manual phone call"
  },
  {
    awb: "DTD992144883",
    orderId: "ORD-94265",
    customerName: "Harsh Vardhan",
    phone: "+91 98390 12744",
    city: "Lucknow",
    state: "Uttar Pradesh",
    courier: "DTDC Priority",
    ndrReason: "COD Cash Not Ready - Customer requested tomorrow delivery",
    attempt: 1,
    ageHours: 11.5,
    status: "RESCHEDULED",
    orderAmount: "₹4,499",
    paymentType: "COD",
    lastActionTaken: "WhatsApp delivery date re-scheduled to 2026-09-25",
    recommendedAction: "Auto-send reminder morning of reattempt"
  },
  {
    awb: "XPB551928401",
    orderId: "ORD-94258",
    customerName: "Gaurav Sen",
    phone: "+91 98210 99482",
    city: "Jaipur",
    state: "Rajasthan",
    courier: "Xpressbees Logistics",
    ndrReason: "Customer Refused - Delivery delayed beyond customer requirement",
    attempt: 2,
    ageHours: 18.0,
    status: "AT_RISK_RTO",
    orderAmount: "₹1,850",
    paymentType: "COD",
    lastActionTaken: "Escalated to senior retention agent",
    recommendedAction: "Offer ₹200 instant discount coupon or initiate immediate RTO"
  },
  {
    awb: "DEL882910488",
    orderId: "ORD-94251",
    customerName: "Simran Kaur",
    phone: "+91 98140 33812",
    city: "Chandigarh",
    state: "Punjab",
    courier: "Delhivery Express",
    ndrReason: "Office Premises Closed on Weekend / Evening",
    attempt: 1,
    ageHours: 5.8,
    status: "RESOLVED",
    orderAmount: "₹5,200",
    paymentType: "Prepaid",
    lastActionTaken: "Customer rescheduled via WhatsApp bot to Monday morning",
    recommendedAction: "Resolved - queued for Monday 10:00 AM delivery"
  }
];

export const MOCK_WEIGHT_DISPUTES = [
  {
    id: "WD-8819",
    awb: "DTD992144019",
    orderId: "ORD-94277",
    courier: "DTDC Express",
    declaredWeight: "0.55 kg",
    courierWeight: "1.25 kg",
    difference: "+0.70 kg",
    additionalCharge: "₹48.00",
    status: "FLAGGED_DISPUTE",
    proofAvailable: true,
    boxDims: "24 x 18 x 6 cm",
    courierDims: "38 x 26 x 14 cm",
    deadlineHours: 42
  },
  {
    id: "WD-8818",
    awb: "DTD992143990",
    orderId: "ORD-94269",
    courier: "DTDC Express",
    declaredWeight: "0.45 kg",
    courierWeight: "1.10 kg",
    difference: "+0.65 kg",
    additionalCharge: "₹44.00",
    status: "DISPUTE_SUBMITTED",
    proofAvailable: true,
    boxDims: "22 x 15 x 5 cm",
    courierDims: "34 x 24 x 12 cm",
    deadlineHours: 72
  },
  {
    id: "WD-8817",
    awb: "XPB551928399",
    orderId: "ORD-94262",
    courier: "Xpressbees",
    declaredWeight: "1.20 kg",
    courierWeight: "2.10 kg",
    difference: "+0.90 kg",
    additionalCharge: "₹72.00",
    status: "DISPUTE_WON",
    proofAvailable: true,
    boxDims: "30 x 25 x 12 cm",
    courierDims: "35 x 30 x 18 cm",
    creditAmount: "₹72.00 Credited"
  },
  {
    id: "WD-8816",
    awb: "DEL882909412",
    orderId: "ORD-94248",
    courier: "Delhivery Surface",
    declaredWeight: "0.80 kg",
    courierWeight: "1.35 kg",
    difference: "+0.55 kg",
    additionalCharge: "₹38.50",
    status: "FLAGGED_DISPUTE",
    proofAvailable: true,
    boxDims: "28 x 20 x 8 cm",
    courierDims: "32 x 24 x 14 cm",
    deadlineHours: 36
  }
];

export const MOCK_MARKETING = [
  {
    channel: "Meta Ads (Instagram / FB)",
    spend: "₹18,40,000",
    revenue: "₹89,20,000",
    roas: "4.85x",
    cac: "₹204",
    orders: 6940,
    topCampaign: "C401 - Performance Activewear Q3",
    status: "SCALE",
    efficiencyRating: "HIGH"
  },
  {
    channel: "Google Ads (PMax + Search)",
    spend: "₹10,24,000",
    revenue: "₹52,40,000",
    roas: "5.12x",
    cac: "₹196",
    orders: 4120,
    topCampaign: "G-Search - High Intent Footwear",
    status: "SCALE",
    efficiencyRating: "VERY_HIGH"
  },
  {
    channel: "Amazon Ads (Sponsored Products)",
    spend: "₹4,20,000",
    revenue: "₹16,40,000",
    roas: "3.90x",
    cac: "₹298",
    orders: 1350,
    topCampaign: "AMZ-SP - Keyword Dominance Running",
    status: "OPTIMIZE",
    efficiencyRating: "MODERATE"
  }
];

export const MOCK_WAREHOUSES = [
  {
    id: "wh_mum",
    name: "Mumbai Central Mega Hub",
    location: "Bhiwandi, Maharashtra",
    dailyCapacity: "12,000 orders",
    currentUtilization: "78.4%",
    activeOrders: 4210,
    pickupSla: "99.1%",
    dispatchHealth: "HEALTHY",
    avgFulfillmentTime: "4.2 hrs"
  },
  {
    id: "wh_blr",
    name: "Bengaluru North Fulfillment",
    location: "Nelamangala, Karnataka",
    dailyCapacity: "8,500 orders",
    currentUtilization: "64.2%",
    activeOrders: 2840,
    pickupSla: "98.7%",
    dispatchHealth: "HEALTHY",
    avgFulfillmentTime: "3.8 hrs"
  },
  {
    id: "wh_del",
    name: "Delhi NCR Mega Hub",
    location: "Pataudi / Gurugram, Haryana",
    dailyCapacity: "10,000 orders",
    currentUtilization: "71.9%",
    activeOrders: 3120,
    pickupSla: "97.9%",
    dispatchHealth: "HEALTHY",
    avgFulfillmentTime: "4.5 hrs"
  },
  {
    id: "wh_kol",
    name: "Kolkata East Depot",
    location: "Dankuni, West Bengal",
    dailyCapacity: "4,000 orders",
    currentUtilization: "41.5%",
    activeOrders: 890,
    pickupSla: "96.4%",
    dispatchHealth: "HEALTHY",
    avgFulfillmentTime: "5.1 hrs"
  }
];

export const MOCK_CUSTOMERS = [
  {
    id: "CUST-9921",
    name: "Karthik Venkataraman",
    email: "karthik.v@techcorp.in",
    phone: "+91 98450 11993",
    city: "Bengaluru",
    state: "Karnataka",
    ordersCount: 21,
    lifetimeSpend: "₹62,100",
    aov: "₹2,957",
    deliveredOrders: 21,
    rtoOrders: 0,
    ndrOrders: 1,
    segment: "VIP Platinum",
    rtoRisk: "VERY LOW (0.0%)",
    preferredPayment: "Prepaid (NetBanking / UPI 100%)",
    lastOrder: "Today (ORD-94278)"
  },
  {
    id: "CUST-8814",
    name: "Rohan Singhania",
    email: "rohan.s@gmail.com",
    phone: "+91 98201 44821",
    city: "Mumbai",
    state: "Maharashtra",
    ordersCount: 14,
    lifetimeSpend: "₹38,450",
    aov: "₹2,746",
    deliveredOrders: 13,
    rtoOrders: 0,
    ndrOrders: 1,
    segment: "High Value Repeat",
    rtoRisk: "LOW (0.0%)",
    preferredPayment: "Prepaid Razorpay UPI",
    lastOrder: "Today (ORD-94281)"
  },
  {
    id: "CUST-7741",
    name: "Meera Krishnan",
    email: "meera.k@tcs.com",
    phone: "+91 98840 91823",
    city: "Chennai",
    state: "Tamil Nadu",
    ordersCount: 11,
    lifetimeSpend: "₹28,600",
    aov: "₹2,600",
    deliveredOrders: 11,
    rtoOrders: 0,
    ndrOrders: 0,
    segment: "High Value Repeat",
    rtoRisk: "VERY LOW (0.0%)",
    preferredPayment: "Credit Card (HDFC)",
    lastOrder: "Today (ORD-94274)"
  },
  {
    id: "CUST-4412",
    name: "Pooja Deshmukh",
    email: "pooja.d@yahoo.com",
    phone: "+91 97654 88319",
    city: "Pune",
    state: "Maharashtra",
    ordersCount: 2,
    lifetimeSpend: "₹3,998",
    aov: "₹1,999",
    deliveredOrders: 1,
    rtoOrders: 0,
    ndrOrders: 1,
    segment: "New Customer",
    rtoRisk: "HIGH (50% NDR)",
    preferredPayment: "Cash on Delivery (COD)",
    lastOrder: "Today (ORD-94280)"
  }
];

export const MOCK_NOTIFICATIONS = [
  {
    id: "notif_01",
    type: "CRITICAL",
    title: "NDR Anomaly Detected in Pune",
    time: "14m ago",
    body: "284 shipments affected in Maharashtra. Delhivery Bhiwandi hub dispatch backlog.",
    unread: true,
    action: "ndr"
  },
  {
    id: "notif_02",
    type: "WARNING",
    title: "DTDC Weight Discrepancies (89 cases)",
    time: "1h ago",
    body: "Excess charges detected: ₹41,200. Dispute deadline expires in 48 hours.",
    unread: true,
    action: "weight"
  },
  {
    id: "notif_03",
    type: "SUCCESS",
    title: "COD Remittance Credited",
    time: "3h ago",
    body: "₹18,40,000 remitted by BlueDart to HDFC Escrow account #8891.",
    unread: false,
    action: "finance"
  },
  {
    id: "notif_04",
    type: "INFO",
    title: "Shopify Flash Sale Catalog Sync",
    time: "5h ago",
    body: "1,420 SKUs and inventory synced across 4 fulfillment hubs.",
    unread: false,
    action: "warehouses"
  }
];
