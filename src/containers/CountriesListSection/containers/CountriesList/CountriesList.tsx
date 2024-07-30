import { useFetch } from "@/hooks";
import { CountryDTO } from "@/schemas";
import { countriesService } from "@/services";
import { useMemo } from "react";

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

  return (
    <div>
      {!!filteredData.length
        ? filteredData.map((i) => (
            <div key={i.name.common}> {i.name.common}</div>
          ))
        : "No countries found"}
    </div>
  );
};

export default CountriesList;
