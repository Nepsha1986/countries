import CountriesListSection from "@/containers/CountriesListSection";
import { countriesService } from "@/services";

export default async function Home() {
  const countries = await countriesService.getAll();

  return (
    <>
      <CountriesListSection countries={countries} />
    </>
  );
}
