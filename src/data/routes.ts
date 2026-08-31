import type { Route } from './types';

const originPorts = ['shanghai', 'ningbo-zhoushan', 'shenzhen'];

const destinations: { port: string; country: string; typical: number }[] = [
  { port: 'jeddah', country: 'saudi-arabia', typical: 18 },
  { port: 'dammam', country: 'saudi-arabia', typical: 20 },
  { port: 'jebel-ali', country: 'united-arab-emirates', typical: 21 },
  { port: 'hamad', country: 'qatar', typical: 22 },
  { port: 'shuwaikh', country: 'kuwait', typical: 24 },
  { port: 'sohar', country: 'oman', typical: 19 },
  { port: 'khalifa-bin-salman', country: 'bahrain', typical: 22 },
];

export const routes: Route[] = originPorts.flatMap((origin) =>
  destinations.map((dest) => ({
    slug: `${origin}-${dest.port}`,
    originPort: origin,
    destPort: dest.port,
    country: dest.country,
    transitDays: { typical: dest.typical, range: [15, 30] },
    confidence: 'LOW',
    note: 'estimate — verify with the relevant carrier before relying on this figure',
  })),
);

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find((route) => route.slug === slug);
}
