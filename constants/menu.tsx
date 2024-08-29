
interface SIDE_BAR_MENU_PROPS {
  label: string;
  path?: string;
  subMenu?: SIDE_BAR_MENU_PROPS[];
}

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: 'Population Census',
    subMenu: [
      { label: 'Delhi Population', path: 'delhi-population' },
      { label: 'Mumbai Population', path: 'mumbai-population' },
    ],
  },
  {
    label: 'Top Facts',
    subMenu: [
      { label: 'Largest States', path: 'largest-states' },
      { label: 'Highest Sex Ratio', path: 'highest-sex-ratio' },
      { label: 'Highest Literacy Rate', path: 'highest-literacy-rate' },
      { label: 'Urbanised States', path: 'urbanised-states' },
      { label: 'Highest Population', path: 'highest-population' },
    ],
  },
  {
    label: 'Religion Population',
    subMenu: [
      { label: 'All Religion', path: 'all-religion' },
      { label: 'Hindu Population', path: 'hindu-population' },
      { label: 'Muslim Population', path: 'muslim-population' },
      { label: 'Christian Population', path: 'christian-population' },
      { label: 'Sikh Population', path: 'sikh-population' },
      { label: 'Jain Population', path: 'jain-population' },
    ],
  },
  {
    label: 'Other Data',
    subMenu: [
      { label: 'Sex Ratio in India', path: 'sex-ratio-india' },
      { label: 'Literacy rate in India', path: 'literacy-rate-india' },
      { label: 'SC Population', path: 'sc-population' },
      { label: 'ST Population', path: 'st-population' },
      { label: 'Slum Population', path: 'slum-population' },
      { label: 'Patewari', path: 'patewari' },
    ],
  },
];



interface NAV_BAR_MENU_PROPS {
  label: string;
  path: string;
}

export const NAV_BAR_MENU: NAV_BAR_MENU_PROPS[] = [
  { label: "Home", path: "/" },
  { label: "States", path: "/states" },
  { label: "Districts", path: "/districts" },
  { label: "Cities", path: "/cities" },
  { label: "Villages", path: "/villages" }
];


export const STATE_TABLE_HEADER = [
  '#',
  'State',
  'Population (Total)',
  'Population (Rural)',
  'Population (Urban)',
]

export const DISTRICT_TABLE_HEADER = [
  '#',
  'District',
  'Population (Total)',
  'Population (Rural)',
  'Population (Urban)',
]

export const CITY_TABLE_HEADER = [
  '#',
  'City',
  'Population (Total)',
  'Population (Rural)',
  'Population (Urban)',
]


export const VILLAGE_IN_CITY_TABLE_HEADER = [
  '#',
  'Village',
  'Population (Total)',
]

export const VILLAGE_TABLE_HEADER = [
  '#',
  'Village',
  'District Name',
  'State Name',
  'Population (Total)',
]



type TABS_MENU_PROPS = {
  label: string
  icon?: JSX.Element
}

export const STAES_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'overview',
  },
  {
    label: 'demographics',
  },
  {
    label: 'education',
  },
  {
    label: 'employment',
  },
]


export const OVERVIEW_TABLE_HEADER = [
  // '#',
  'Description',
  '2011',
  // 'No. of Households',
  // 'Total Population (Persons)',
  // 'Total Population (Males)',
  // 'Total Population (Females)',
  // 'Literates (Persons)',
  // 'Literates (Males)',
  // 'Literates (Females)',
]
