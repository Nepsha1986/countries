import Image from "next/image";

import { countriesService } from "@/services";
import { DefItem, LinkBtn } from "@/ui";

export default async function Page({ params }: { params: { id } }) {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags,
  } = await countriesService.get(params.id);

  return (
    <>
      <LinkBtn href="/">Back</LinkBtn>

      <div>
        <div>
          <Image src={flags.svg} alt={flags.alt} width={600} height={400} />
        </div>

        <div>
          <h1>{name.common}</h1>

          <DefItem
            term="Native Name"
            def={name.nativeName[Object.keys(languages)[0]].common}
          />
          <DefItem term="Population" def={population} />
          <DefItem term="Region" def={region} />
          <DefItem term="Sub Region" def={subregion} />
          <DefItem term="Capital" def={capital.join(",")} />
          <DefItem term="TopLevel Domain" def={tld.join(",")} />
          <DefItem
            term="Currencies"
            def={Object.values(currencies).join(",")}
          />
          <DefItem term="Lannguages" def={Object.values(languages).join(",")} />

          <h3>Border Countries:</h3>

          {borders.map((item) => (
            <LinkBtn key={item} href={`/country/${item.toLowerCase()}`}>
              {item}
            </LinkBtn>
          ))}
        </div>
      </div>
    </>
  );
}
