import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const EXTERNAL_API_ENDPOINT =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital";

export async function GET(request: NextRequest) {
  try {
    const response = await axios.get(EXTERNAL_API_ENDPOINT);
    return NextResponse.json(response.data);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
