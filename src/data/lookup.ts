import { chinaPorts } from './china-ports';
import { gccPorts } from './gcc-ports';
import { gccCountries } from './gcc-countries';
import { europePorts } from './europe-ports';
import { europeCountries } from './europe-countries';
import type { Port, Country } from './types';

const allPorts: Port[] = [...chinaPorts, ...gccPorts, ...europePorts];
const allCountries: Country[] = [...gccCountries, ...europeCountries];

export function getPortBySlug(slug: string): Port | undefined {
  return allPorts.find((port) => port.slug === slug);
}

export function portName(slug: string): string {
  return getPortBySlug(slug)?.name ?? slug;
}

export function getCountryBySlug(slug: string): Country | undefined {
  return allCountries.find((country) => country.slug === slug);
}

export function countryName(slug: string): string {
  return getCountryBySlug(slug)?.name ?? slug;
}

export function countrySlugForPort(portSlug: string): string | undefined {
  return allCountries.find((country) => country.ports.includes(portSlug))?.slug;
}
