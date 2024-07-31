import axios from "axios";
import { PartialCountryDTO, CountryDTO } from "@/schemas";
import { API_URL } from "@/utils/variables";

interface CountriesService {
  getAll: () => Promise<PartialCountryDTO[]>;
  get: (name: string) => Promise<CountryDTO>;
}
const countriesService: CountriesService = {
  getAll: async () => {
    const { data } = await axios.get<PartialCountryDTO[]>(
      `${API_URL}/api/v1/countries`,
    );
    return data;
  },
  get: async (name) => {
    const { data } = await axios.get<CountryDTO>(
      `${API_URL}/api/v1/countries/${name}`,
    );
    return data;
  },
};

export { countriesService };
