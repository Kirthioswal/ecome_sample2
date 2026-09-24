// AI Copilot Knowledge Base & Query Engine

export const MOCK_AI_QUERIES = [
  {
    id: "q1",
    label: "Which courier has the highest RTO rate?",
    query: "Which courier has the highest RTO rate this week and what is the cost impact?",
    response: {
      type: "metric_table",
      summary: "Xpressbees Logistics has the highest RTO rate at 4.9%, closely followed by DTDC Priority at 4.2%. In contrast, BlueDart maintains an elite 1.6% RTO rate.",
      insights: [
        "Xpressbees RTO is predominantly driven by Tier-2/3 northern regions with high delivery latency (>3.4 days).",
        "DTDC RTO spike correlates with 89 weight dispute flags where deliveries were held up for optical re-measurement.",
        "Financial Impact: ₹92,400 in reverse logistics and packaging loss incurred across these two carriers in the last 7 days."
      ],
      table: {
        headers: ["Courier Partner", "Delivery %", "NDR %", "RTO %", "Avg Transit", "Estimated RTO Cost"],
        rows: [
          ["Xpressbees Logistics", "86.8%", "8.4%", "4.9%", "3.4 Days", "₹38,200"],
          ["DTDC Priority", "88.4%", "7.9%", "4.2%", "3.2 Days", "₹54,200"],
          ["Shadowfax Direct", "91.2%", "5.1%", "3.4%", "1.8 Days", "₹22,100"],
          ["Delhivery Surface", "92.4%", "4.8%", "2.8%", "2.1 Days", "₹36,400"],
          ["BlueDart Air Apex", "95.8%", "2.6%", "1.6%", "1.4 Days", "₹14,800"]
        ]
      },
      recommendation: {
        actionText: "Apply Smart Routing Cap: Limit Xpressbees allocation to max 2% and divert Tier-1 COD to BlueDart/Delhivery.",
        targetView: "couriers"
      }
    }
  },
  {
    id: "q2",
    label: "Why did delivery performance drop this week?",
    query: "Why did delivery performance drop this week in West India?",
    response: {
      type: "root_cause",
      summary: "West India delivery success dipped from 94.2% to 89.1% over the past 48 hours, localized to Mumbai Metro and Pune clusters.",
      insights: [
        "Observation: Delhivery Bhiwandi hub experienced a 36-hour linehaul sorting bottleneck following heavy rainfall and dock maintenance.",
        "Affected Pincodes: 4110xx (Pune City), 4006xx (Thane), 400050-400099 (Western Suburbs).",
        "Carrier Impact: 284 shipments delayed into NDR status, with 'Customer Unavailable / Door Locked' recorded erroneously due to driver shift timeouts."
      ],
      kpiBlock: {
        title: "Incident Telemetry",
        metrics: [
          { label: "Delayed Shipments", value: "284 Orders" },
          { label: "Revenue at Risk", value: "₹3,84,200" },
          { label: "Avg Delivery Delay", value: "+28 Hours" },
          { label: "Hub Clearance ETA", value: "Today 22:00 IST" }
        ]
      },
      recommendation: {
        actionText: "Activate Emergency Courier Rerouting for remaining 112 unpicked orders via BlueDart Air.",
        targetView: "ndr"
      }
    }
  },
  {
    id: "q3",
    label: "Show orders above ₹5,000 currently in NDR",
    query: "Show high-value orders above ₹5,000 currently trapped in NDR queue.",
    response: {
      type: "order_cards",
      summary: "Found 4 high-value orders (≥ ₹5,000) currently in NDR with an aggregate value of ₹27,444. These require immediate manual customer outreach to prevent RTO.",
      orders: [
        {
          orderId: "ORD-94251",
          customer: "Simran Kaur",
          phone: "+91 98140 33812",
          city: "Chandigarh",
          amount: "₹5,200",
          courier: "Delhivery Express",
          ndrReason: "Office Premises Closed on Weekend",
          status: "RESOLVED (Rescheduled to Monday)"
        },
        {
          orderId: "ORD-94281",
          customer: "Rohan Singhania",
          phone: "+91 98201 44821",
          city: "Mumbai",
          amount: "₹7,297",
          courier: "Delhivery Express",
          ndrReason: "Out for Delivery - Agent en-route",
          status: "CRITICAL WATCH"
        },
        {
          orderId: "ORD-94233",
          customer: "Vikramaditya Roy",
          phone: "+91 98300 44910",
          city: "Kolkata",
          amount: "₹8,450",
          courier: "BlueDart Air Apex",
          ndrReason: "Customer requested evening delivery",
          status: "REATTEMPT SCHEDULED"
        },
        {
          orderId: "ORD-94218",
          customer: "Deepika Sen",
          phone: "+91 98401 22938",
          city: "Chennai",
          amount: "₹6,497",
          courier: "Shadowfax Direct",
          ndrReason: "Doorbell unresponsive / Phone busy",
          status: "ACTION REQUIRED"
        }
      ],
      recommendation: {
        actionText: "Trigger Priority WhatsApp IVR Flow to consignees with 1-click delivery authorization.",
        targetView: "ndr"
      }
    }
  },
  {
    id: "q4",
    label: "What is our current COD exposure & remittance?",
    query: "What is our current COD exposure, remittance timeline, and RTO risk?",
    response: {
      type: "financial_breakdown",
      summary: "Current Total COD Outstanding is ₹42,65,400 across 3,420 uncollected orders. ₹18,40,000 has been collected and is due for bank remittance within 48 hours.",
      insights: [
        "Remittance Due: Delhivery ₹10.8L (Due tomorrow), BlueDart ₹7.6L (Remitted today).",
        "RTO Risk Index: High risk on 412 orders (approx ₹6.8L) from first-time shoppers in Tier-3 locations.",
        "Net Profit Impact: Every 1% reduction in COD RTO yields ₹2.48 Lakhs straight to operating EBITDA."
      ],
      kpiBlock: {
        title: "Cash on Delivery Health",
        metrics: [
          { label: "COD Outstanding", value: "₹42,65,400" },
          { label: "Remittance Due (48h)", value: "₹18,40,000" },
          { label: "COD RTO Rate", value: "4.8% vs 1.1% Prepaid" },
          { label: "Wallet Balance", value: "₹14,82,500" }
        ]
      },
      recommendation: {
        actionText: "Enable EcomIQ Prepaid Incentive Engine: offer ₹50 instant cashback to convert high-risk COD orders.",
        targetView: "finance"
      }
    }
  }
];
