import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";
import { CountryDTO } from "@/schemas";

const COUNTRIES_BY_NAME_ENDPOINT = "https://restcountries.com/v3.1/name";
const COUNTRIES_BY_CODE_ENDPOINT = "https://restcountries.com/v3.1/alpha";
const QUERY_FIELDS: (keyof CountryDTO)[] = [
  "name",
  "flags",
  "population",
  "region",
  "capital",
  "subregion",
  "tld",
  "languages",
  "currencies",
  "borders",
];

export async function GET(_, { params }: { params: { name: string } }) {
  const { name } = params;

  try {
    const response: AxiosResponse<[CountryDTO]> = await axios.get(
      `${COUNTRIES_BY_NAME_ENDPOINT}/${name}`,
      {
        params: {
          fullText: true,
          fields: QUERY_FIELDS.join(","),
        },
      },
    );

    const country = response.data[0];
    const codes = country.borders;

    if (!!codes.length) {
      const { data }: AxiosResponse<Pick<CountryDTO, "name">[]> =
        await axios.get(COUNTRIES_BY_CODE_ENDPOINT, {
          params: {
            fields: "name",
            codes: codes.join(","),
          },
        });
      country.borders = data.map((i) => i.name.common);
    }

    return NextResponse.json(country);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
