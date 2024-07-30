import axios from "axios";
import { CountryDTO } from "@/schemas";

interface CountriesService {
  getAll: () => Promise<CountryDTO[]>;
}
const countriesService: CountriesService = {
  getAll: async () => {
    const { data } = await axios.get<CountryDTO[]>("/api/v1/countries");
    return data;
  },
};

export { countriesService };
