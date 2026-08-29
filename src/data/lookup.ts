import { chinaPorts } from './china-ports';
import { gccPorts } from './gcc-ports';
import { gccCountries } from './gcc-countries';
import type { Port, Country } from './types';

const allPorts: Port[] = [...chinaPorts, ...gccPorts];

export function getPortBySlug(slug: string): Port | undefined {
  return allPorts.find((port) => port.slug === slug);
}

export function portName(slug: string): string {
  return getPortBySlug(slug)?.name ?? slug;
}

export function getCountryBySlug(slug: string): Country | undefined {
  return gccCountries.find((country) => country.slug === slug);
}

export function countryName(slug: string): string {
  return getCountryBySlug(slug)?.name ?? slug;
}

export function countrySlugForPort(portSlug: string): string | undefined {
  return gccCountries.find((country) => country.ports.includes(portSlug))?.slug;
}
