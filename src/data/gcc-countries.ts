// GCC / Middle East destination countries (Phase 1 priority markets).
// Capital, ISO codes, currency, languages are public, verifiable facts.

import type { Country } from "./types";

export const gccCountries: Country[] = [
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    region: "Middle East",
    iso2: "SA",
    iso3: "SAU",
    capital: "Riyadh",
    currency: "SAR",
    languages: ["Arabic"],
    ports: ["jeddah", "dammam", "riyadh-dry"],
    summary:
      "Largest GCC market. Key sea gateways are Jeddah Islamic Port (Red Sea) and King Abdulaziz Port Dammam (Arabian Gulf).",
    status: "active",
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    region: "Middle East",
    iso2: "AE",
    iso3: "ARE",
    capital: "Abu Dhabi",
    currency: "AED",
    languages: ["Arabic"],
    ports: ["jebel-ali", "khalifa"],
    summary:
      "Regional trade and transshipment hub, led by Jebel Ali (largest port in the Middle East) and Khalifa Port.",
    status: "active",
  },
  {
    slug: "qatar",
    name: "Qatar",
    region: "Middle East",
    iso2: "QA",
    iso3: "QAT",
    capital: "Doha",
    currency: "QAR",
    languages: ["Arabic"],
    ports: ["hamad"],
    summary:
      "Served primarily by Hamad Port, opened 2017, a modern gateway for Qatar's imports.",
    status: "active",
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    region: "Middle East",
    iso2: "KW",
    iso3: "KWT",
    capital: "Kuwait City",
    currency: "KWD",
    languages: ["Arabic"],
    ports: ["shuwaikh", "shuaiba"],
    summary:
      "Arabian Gulf market served by Shuwaikh and Shuaiba commercial ports.",
    status: "active",
  },
  {
    slug: "oman",
    name: "Oman",
    region: "Middle East",
    iso2: "OM",
    iso3: "OMN",
    capital: "Muscat",
    currency: "OMR",
    languages: ["Arabic"],
    ports: ["salalah", "sohar"],
    summary:
      "Deep-water ports at Salalah and Sohar serve both Oman and transshipment into the Gulf.",
    status: "active",
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    region: "Middle East",
    iso2: "BH",
    iso3: "BHR",
    capital: "Manama",
    currency: "BHD",
    languages: ["Arabic"],
    ports: ["khalifa-bin-salman"],
    summary:
      "Served by Khalifa bin Salman Port; regional logistics hub via King Fahd Causeway to Saudi Arabia.",
    status: "active",
  },
];
