import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import { PartialCountryDTO } from "@/schemas";
import { CountryCard } from "@/components";

import styles from "./styles.module.scss";

interface Props {
  search: string;
  region: string;
  data: PartialCountryDTO[] | [];
}

const filterCountries = (
  countries: PartialCountryDTO[],
  searchTerm: string,
  selectedRegion: string,
): PartialCountryDTO[] => {
  return countries.filter((country) => {
    const countryRegion = country.region.toLowerCase();
    const normalizedRegion = selectedRegion.toLowerCase();
    const countryName = country.name.common.toLowerCase();
    const normalizedSearchTerm = searchTerm.toLowerCase();

    const isRegionMatched = !!selectedRegion
      ? countryRegion === normalizedRegion
      : true;

    return countryName.includes(normalizedSearchTerm) && isRegionMatched;
  });
};

const CountriesList = ({ search, region, data }: Props) => {
  const filteredData: PartialCountryDTO[] = useMemo(() => {
    return data ? filterCountries(data, search, region) : [];
  }, [search, region, data]);

  if (!filteredData.length)
    return (
      <p>No countries found with the search query: &quot;{search}&quot;</p>
    );

  return (
    <ul className={styles.countriesList}>
      {filteredData.map((i) => (
        <li className={styles.countriesList__item} key={i.name.common}>
          <Link href={`/country/${i.name.common.toLowerCase()}`}>
            <CountryCard
              img={
                <Image
                  src={i.flags.svg}
                  alt={i.flags.alt}
                  width={600}
                  height={300}
                />
              }
              region={i.region}
              title={i.name.common}
              population={i.population}
              capital={i.capital[0]}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
