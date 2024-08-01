import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

import { PartialCountryDTO } from "@/schemas";

const EXTERNAL_API_ENDPOINT = "https://restcountries.com/v3.1/all";
const QUERY_FIELDS = ["name", "flags", "population", "region", "capital"];

export async function GET() {
  try {
    const { data }: AxiosResponse<PartialCountryDTO[]> = await axios.get(
      EXTERNAL_API_ENDPOINT,
      {
        params: {
          fields: QUERY_FIELDS.join(","),
        },
      },
    );
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
