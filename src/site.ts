export const SITE_URL = 'https://worldfreighthub.net';
export const SITE_NAME = 'WorldFreightHub';
export const SITE_TAGLINE = 'Global Freight Intelligence Network';
export const SITE_DESCRIPTION =
  'WorldFreightHub is a freight intelligence network covering China to GCC shipping — routes, ports, countries, methods, tools and a trusted provider directory.';

export const CONTACT = {
  name: 'Martin.Wong',
  email: 'martin@dinweys.com',
  phoneDisplay: '+86 13323237275',
  phoneTel: '+8613323237275',
  whatsapp: '8613323237275',
};

/**
 * Central entity definition (EEAT).
 * Only real, verifiable facts are declared here — no fabricated credentials.
 * Follows the site's own zero-fabrication policy.
 */
export const ORGANIZATION = {
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisherName: 'WorldFreightHub Research Desk',
  publisherRole: 'Research Desk',
  publisherEmail: CONTACT.email,
  legalName: 'YIWU DINGWEI TRADING COMPANY',
  foundingDate: '2025',
  address: {
    streetAddress: 'Room 303, Unit 1, Building 71, Shankou Community, Jiangdong Subdistrict',
    addressLocality: 'Yiwu City, Jinhua',
    addressRegion: 'Zhejiang',
    addressCountry: 'CN',
  },
  identifier: {
    propertyID: 'Unified Social Credit Code',
    value: '92330782MA8GW3P***',
  },
  editorialPolicy: `${SITE_URL}/editorial-policy/`,
  correctionsPolicy: `${SITE_URL}/corrections/`,
  sameAs: [SITE_URL],
};

/** Schema.org Organization JSON-LD payload, shared by all pages. */
export const ORGANIZATION_SCHEMA = {
  type: 'Organization',
  data: {
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    legalName: ORGANIZATION.legalName,
    description: ORGANIZATION.description,
    foundingDate: ORGANIZATION.foundingDate,
    address: {
      '@type': 'PostalAddress',
      ...ORGANIZATION.address,
    },
    identifier: {
      '@type': 'PropertyValue',
      ...ORGANIZATION.identifier,
    },
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og.png`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      name: ORGANIZATION.publisherName,
      email: ORGANIZATION.publisherEmail,
      telephone: CONTACT.phoneTel,
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: ORGANIZATION.sameAs,
  },
};
