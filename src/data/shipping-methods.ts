// Shipping methods — canonical definitions for FCL/LCL/DDP etc.
// These are standard industry definitions (verifiable, not rate data).

import type { ShippingMethod } from "./types";

export const shippingMethods: ShippingMethod[] = [
  {
    slug: "fcl",
    name: "FCL (Full Container Load)",
    category: "sea",
    shortDefinition:
      "You rent the exclusive use of a full container (20GP, 40GP, 40HQ).",
    useCase:
      "Best when cargo fills most of a container, needs less handling, or is fragile/high-value.",
    confidence: "HIGH",
  },
  {
    slug: "lcl",
    name: "LCL (Less than Container Load)",
    category: "sea",
    shortDefinition:
      "Your cargo shares a container with other shippers; you pay for the volume (CBM) you use.",
    useCase:
      "Best for small shipments (typically under ~15 CBM) where a full container is not economical.",
    confidence: "HIGH",
  },
  {
    slug: "ddp",
    name: "DDP (Delivered Duty Paid)",
    category: "service",
    shortDefinition:
      "The seller bears all costs and risk — including import duty and clearance — until delivery to the named destination.",
    useCase:
      "Common for e-commerce and buyers who want an all-in landed cost with no import surprises.",
    confidence: "HIGH",
  },
  {
    slug: "dap",
    name: "DAP (Delivered at Place)",
    category: "service",
    shortDefinition:
      "The seller delivers goods ready for unloading at destination, but the buyer handles import clearance and duty.",
    useCase: "Buyer prefers to control customs and import formalities themselves.",
    confidence: "HIGH",
  },
  {
    slug: "air-freight",
    name: "Air Freight",
    category: "air",
    shortDefinition:
      "Goods moved by aircraft; charged by chargeable weight (actual vs volumetric, whichever is higher).",
    useCase: "Best for urgent, high-value, or lightweight time-sensitive cargo.",
    confidence: "HIGH",
  },
  {
    slug: "rail-freight",
    name: "Rail Freight (China–Europe / Landbridge)",
    category: "rail",
    shortDefinition:
      "Goods moved by rail corridors; for China→GCC this is typically a China–Europe landbridge or multimodal leg.",
    useCase:
      "Middle ground between sea (slow, cheap) and air (fast, expensive); currently limited direct rail to GCC.",
    confidence: "MEDIUM",
  },
];
