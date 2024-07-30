import axios from "axios";
import { CountryDTO } from "@/schemas";
import { API_URL } from "@/utils/variables";

interface CountriesService {
  getAll: () => Promise<CountryDTO[]>;
}
const countriesService: CountriesService = {
  getAll: async () => {
    const { data } = await axios.get<CountryDTO[]>(
      `${API_URL}/api/v1/countries`,
    );
    return data;
  },
};

export { countriesService };
