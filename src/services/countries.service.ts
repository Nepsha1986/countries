import axios, { AxiosResponse } from "axios";

import { PartialCountryDTO, CountryDTO } from "@/schemas";
import { API_URL } from "@/utils/variables";

interface CountriesService {
  getAll: () => Promise<PartialCountryDTO[]>;
  get: (name: string) => Promise<CountryDTO>;
}
const countriesService: CountriesService = {
  getAll: async () => {
    const { data }: AxiosResponse<PartialCountryDTO[]> = await axios.get(
      `${API_URL}/api/v1/countries`,
    );
    return data;
  },
  get: async (name) => {
    const { data }: AxiosResponse<CountryDTO> = await axios.get(
      `${API_URL}/api/v1/countries/${name}`,
    );
    return data;
  },
};

export { countriesService };
