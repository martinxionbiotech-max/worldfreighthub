// China origin ports — primary export gateways for China→GCC freight.
// UN/LOCODE + port names are public, verifiable facts.
// Rate/transit data lives in routes.ts (indicative), NOT here.

import type { Port } from "./types";

export const chinaPorts: Port[] = [
  {
    slug: "shanghai",
    name: "Port of Shanghai",
    country: "china",
    code: "CNSHA",
    city: "Shanghai",
    type: "sea",
    role: "origin",
    summary:
      "World's busiest container port by throughput. Primary gateway for Yangtze River Delta exports to the Middle East.",
    confidence: "HIGH",
    sourceSlugs: ["shanghai-port"],
  },
  {
    slug: "ningbo-zhoushan",
    name: "Port of Ningbo-Zhoushan",
    country: "china",
    code: "CNNGB",
    city: "Ningbo",
    type: "sea",
    role: "origin",
    summary:
      "Among the world's largest ports by cargo tonnage. Major origin for Zhejiang/Fujian exports to the GCC.",
    confidence: "HIGH",
    sourceSlugs: ["ningbo-port"],
  },
  {
    slug: "shenzhen",
    name: "Port of Shenzhen (Yantian/Shekou)",
    country: "china",
    code: "CNSZX",
    city: "Shenzhen",
    type: "sea",
    role: "origin",
    summary:
      "Pearl River Delta hub serving Guangdong manufacturing exports, including electronics and consumer goods to the Middle East.",
    confidence: "HIGH",
    sourceSlugs: ["shenzhen-port"],
  },
  {
    slug: "guangzhou",
    name: "Port of Guangzhou (Nansha)",
    country: "china",
    code: "CNGGZ",
    city: "Guangzhou",
    type: "sea",
    role: "origin",
    summary:
      "South China gateway with strong trade links to Southeast Asia and the Middle East.",
    confidence: "HIGH",
    sourceSlugs: ["guangzhou-port"],
  },
  {
    slug: "qingdao",
    name: "Port of Qingdao",
    country: "china",
    code: "CNQDG",
    city: "Qingdao",
    type: "sea",
    role: "origin",
    summary:
      "Major northern China port serving Shandong industry and bulk exports to the Gulf.",
    confidence: "HIGH",
    sourceSlugs: ["qingdao-port"],
  },
  {
    slug: "tianjin",
    name: "Port of Tianjin (Xingang)",
    country: "china",
    code: "CNTXG",
    city: "Tianjin",
    type: "sea",
    role: "origin",
    summary:
      "Northern gateway serving Beijing-Tianjin-Hebei; significant routes to the Middle East.",
    confidence: "HIGH",
    sourceSlugs: ["tianjin-port"],
  },
];
