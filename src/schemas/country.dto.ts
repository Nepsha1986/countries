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

export interface CountryDTO {
  flags: CountryFlag;
  name: Name;
  capital: string[];
  region: string;
  population: number;
}
