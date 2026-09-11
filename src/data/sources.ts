import type { Source } from './types';

export const countrySourceIds: Record<string, string[]> = {
  'saudi-arabia': ['mawani', 'zatca'],
  'united-arab-emirates': ['dubai-customs', 'dp-world', 'abu-dhabi-ports'],
  qatar: ['qatar-customs'],
  kuwait: ['kuwait-customs'],
  oman: ['oman-customs'],
  bahrain: ['bahrain-customs'],
};

export const portSourceIds: Record<string, string[]> = {
  jeddah: ['mawani'],
  dammam: ['mawani'],
  'riyadh-dry-port': ['mawani'],
  'jebel-ali': ['dp-world'],
  'khalifa-port-abu-dhabi': ['abu-dhabi-ports'],
  'port-khalid': ['dubai-customs'],
  hamad: ['qatar-customs'],
  shuwaikh: ['kuwait-customs'],
  shuaiba: ['kuwait-customs'],
  sohar: ['oman-customs'],
  salalah: ['oman-customs'],
  'khalifa-bin-salman': ['bahrain-customs'],
  shanghai: ['sipg'],
  'ningbo-zhoushan': ['ningbo-zhoushan-port'],
  shenzhen: ['shenzhen-port-group'],
  guangzhou: ['world-bank'],
  qingdao: ['world-bank'],
  tianjin: ['world-bank'],
  xiamen: ['world-bank'],
};

export function sourcesByIds(ids: string[]): Source[] {
  return sources.filter((source) => ids.includes(source.id));
}

export const sources: Source[] = [
  {
    id: 'mawani',
    name: 'Mawani — Saudi Ports Authority',
    url: 'https://mawani.gov.sa',
    type: 'port-authority',
  },
  {
    id: 'zatca',
    name: 'ZATCA — Saudi Customs / Tax Authority',
    url: 'https://zatca.gov.sa',
    type: 'government',
  },
  {
    id: 'dubai-customs',
    name: 'Dubai Customs',
    url: 'https://www.dubaicustoms.gov.ae',
    type: 'government',
  },
  {
    id: 'dp-world',
    name: 'DP World',
    url: 'https://www.dpworld.com',
    type: 'industry',
  },
  {
    id: 'abu-dhabi-ports',
    name: 'Abu Dhabi Ports',
    url: 'https://www.adports.ae',
    type: 'port-authority',
  },
  {
    id: 'qatar-customs',
    name: 'Qatar Customs (General Authority of Customs)',
    url: 'https://www.customs.gov.qa',
    type: 'government',
  },
  {
    id: 'kuwait-customs',
    name: 'Kuwait General Administration of Customs',
    url: 'https://www.customs.gov.kw',
    type: 'government',
  },
  {
    id: 'oman-customs',
    name: 'Oman Customs',
    url: 'https://www.customs.gov.om',
    type: 'government',
  },
  {
    id: 'bahrain-customs',
    name: 'Bahrain Customs',
    url: 'https://www.bahraincustoms.gov.bh',
    type: 'government',
  },
  {
    id: 'sipg',
    name: 'Shanghai International Port Group',
    url: 'https://www.portshanghai.com.cn',
    type: 'port-authority',
  },
  {
    id: 'ningbo-zhoushan-port',
    name: 'Ningbo-Zhoushan Port',
    url: 'https://www.nbport.com.cn',
    type: 'port-authority',
  },
  {
    id: 'shenzhen-port-group',
    name: 'Shenzhen Port Group',
    url: 'https://www.szport.com.cn',
    type: 'port-authority',
  },
  {
    id: 'world-bank',
    name: 'World Bank — Trade & Logistics Data',
    url: 'https://www.worldbank.org',
    type: 'organization',
  },
  {
    id: 'unctad',
    name: 'UNCTAD — Trade Statistics',
    url: 'https://unctad.org',
    type: 'organization',
  },
];
