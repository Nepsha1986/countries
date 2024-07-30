import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import { useFetch } from "@/hooks";
import { CountryDTO } from "@/schemas";
import { countriesService } from "@/services";
import { CountryCard } from "@/components";

import styles from "./styles.module.scss";

interface Props {
  search: string;
  region: string;
}

const filterCountries = (
  countries: CountryDTO[],
  searchTerm: string,
  selectedRegion: string,
): CountryDTO[] => {
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

const CountriesList = ({ search, region }: Props) => {
  const { data, loading, error } = useFetch<CountryDTO[]>(
    countriesService.getAll,
  );

  const filteredData: CountryDTO[] = useMemo(() => {
    return data ? filterCountries(data, search, region) : [];
  }, [search, region, data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong, please try again later</div>;
  if (!filteredData) return <div>No countries found</div>;

  return (
    <ul className={styles.countriesList}>
      {filteredData.map((i) => (
        <li className={styles.countriesList__item} key={i.name.common}>
          <Link href={`/country/${i.name.common}`}>
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
