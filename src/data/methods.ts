import type { Method } from './types';

export const methods: Method[] = [
  {
    slug: 'fcl',
    name: 'FCL (Full Container Load)',
    summary:
      'Dedicated container shipping for larger volumes, using a full 20ft or 40ft container door-to-door or port-to-port.',
  },
  {
    slug: 'lcl',
    name: 'LCL (Less than Container Load)',
    summary:
      'Shared container space for smaller shipments, charged by volume (CBM) instead of a full container.',
  },
  {
    slug: 'air-freight',
    name: 'Air Freight',
    summary:
      'Expedited air transport for time-critical cargo, priced on chargeable weight.',
  },
  {
    slug: 'rail-freight',
    name: 'Rail Freight',
    summary:
      'Overland rail corridors that balance cost and transit time for selected destinations.',
  },
  {
    slug: 'ddp',
    name: 'DDP (Delivered Duty Paid)',
    summary:
      'Seller assumes costs, duties, and risk up to the buyer’s named destination.',
  },
  {
    slug: 'express',
    name: 'Express',
    summary:
      'Courier and parcel delivery for small, urgent shipments.',
  },
];

export function getMethodBySlug(slug: string): Method | undefined {
  return methods.find((method) => method.slug === slug);
}
