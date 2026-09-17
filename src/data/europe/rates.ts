import type { FreightRate } from './types';

/**
 * WorldFreightHub Freight Index (WHFI) v1 — Europe rail + indices — 2026-09
 *
 * China→Europe rail benchmark rates (station-to-station, 40HQ, excluding
 * local charges at both ends) verified 2026-09-16. Confidence:
 *   MEDIUM = dated forwarder/platform price sheets (goodhope86.com, CRCT, caexp.net)
 *   LOW    = single-value or proxy quotes
 * Sea benchmark for comparison: Drewry WCI Shanghai→Rotterdam $3,997/40ft
 * (2026-09-10); Freightos FBX11 China→N.Europe $4,499/FEU (2026-09-16).
 */

export const rates: FreightRate[] = [
  {
    id: 'rail-001',
    route: 'xian-duisburg-hamburg',
    container: '40HQ Rail',
    amount: 4400, amountLow: 4000, amountHigh: 4800, currency: 'USD',
    confidence: 'MEDIUM', lastUpdated: '2026-09-16',
    sourceName: '好望角国际物流 goodhope86.com 中欧班列价目表（两版）+ 西安平台参考指数 caexp.net',
    sourceUrl: 'https://goodhope86.com/railway/germany-price.html',
    asOf: '2026-08 / 2026-H2',
    note: '西安→杜伊斯堡/汉堡 $4,000（8月前版）；西安→汉堡/慕尼黑 $4,600（下半年版）；西安平台参考指数 ¥32,272.80≈$4,770 为上限。含基础铁路运费+出口报关，不含两端本地费。',
  },
  {
    id: 'rail-002',
    route: 'chongqing-duisburg-hamburg',
    container: '40HQ Rail',
    amount: 5400, amountLow: 5300, amountHigh: 5500, currency: 'USD',
    confidence: 'MEDIUM', lastUpdated: '2026-09-16',
    sourceName: '好望角国际物流 goodhope86.com 中欧班列价目表',
    sourceUrl: 'https://goodhope86.com/railway/germany-price.html',
    asOf: '2026',
    note: '重庆→杜伊斯堡 $5,300／重庆→汉堡 $5,500（站到站，含出口报关）。渝新欧线路，全程约 10,987 km。',
  },
  {
    id: 'rail-003',
    route: 'chengdu-nuremberg',
    container: '40HQ Rail',
    amount: 4600, amountLow: 4600, amountHigh: 4600, currency: 'USD',
    confidence: 'LOW', lastUpdated: '2026-09-16',
    sourceName: '好望角国际物流 goodhope86.com 中欧班列价目表',
    sourceUrl: 'https://goodhope86.com/railway/germany-price.html',
    asOf: '2026',
    note: '成都→纽伦堡 $4,600（单值）。成都线常规欧洲到站为罗兹/蒂尔堡/纽伦堡；成都→杜伊斯堡/汉堡无公开直达报价。',
  },
  {
    id: 'rail-004',
    route: 'xian-duisburg-hamburg',
    container: '40HQ Rail transit (days)',
    amount: 16, amountLow: 12, amountHigh: 20, currency: 'USD',
    confidence: 'MEDIUM', lastUpdated: '2026-09-16',
    sourceName: '西安国际港务区综合服务平台 caexp.net + 央广网 cnr.cn',
    sourceUrl: 'https://www.caexp.net/',
    asOf: '2026-09-16',
    note: '全程时刻表班列约 12 天（4 列/周）；普通班列 15–20 天。',
  },
  {
    id: 'rail-005',
    route: 'chongqing-duisburg-hamburg',
    container: '40HQ Rail transit (days)',
    amount: 14.5, amountLow: 14, amountHigh: 15, currency: 'USD',
    confidence: 'MEDIUM', lastUpdated: '2026-09-16',
    sourceName: '中铁集装箱运输有限责任公司 crct.com',
    sourceUrl: 'https://www.crct.com/index.php?m=content&c=index&a=lists&catid=22',
    asOf: '2026-09-16',
    note: '官方线路简介：全程约 10,987 km，运行约 14–15 天。',
  },
];

export function getRatesByRoute(routeSlug: string): FreightRate[] {
  return rates.filter((rate) => rate.route === routeSlug);
}
