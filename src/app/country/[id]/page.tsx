import Image from "next/image";

import { countriesService } from "@/services";
import { DefItem } from "@/ui";

import { CountryInfoBlock, NeighboursLinks, BackBtn } from "./_components";
import { formatNumber } from "@/utils/formatNumber";

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
      <BackBtn />

      <CountryInfoBlock
        heading={name.common}
        img={<Image src={flags.svg} alt={flags.alt} width={600} height={400} />}
        leftSlot={
          <>
            <DefItem
              term="Native Name"
              def={name.nativeName[Object.keys(languages)[0]]?.common}
            />
            <DefItem term="Population" def={formatNumber(population)} />
            <DefItem term="Region" def={region} />
            <DefItem term="Sub Region" def={subregion} />
            <DefItem term="Capital" def={capital.join(",")} />
          </>
        }
        rightSlot={
          <>
            <DefItem term="TopLevel Domain" def={tld.join(",")} />
            <DefItem
              term="Currencies"
              def={Object.values(currencies)
                .map((i) => i.name)
                .join(",")}
            />
            <DefItem
              term="Lannguages"
              def={Object.values(languages).join(",")}
            />
          </>
        }
        footer={<NeighboursLinks borders={borders} />}
      />
    </>
  );
}
