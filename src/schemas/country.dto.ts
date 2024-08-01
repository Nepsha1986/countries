type CountryFlag = {
  png: string;
  svg: string;
  alt: string;
};

type CountryName = {
  official: string;
  common: string;
};

type Name = {
  common: string;
  official: string;
  nativeName: {
    eng: CountryName;
  };
};

export interface PartialCountryDTO {
  flags: CountryFlag;
  name: Name;
  capital: string[];
  region: string;
  population: number;
}

export interface CountryDTO extends PartialCountryDTO {
  subregion: string;
  tld: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
  borders: string[] | [];
}
