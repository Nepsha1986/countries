import Image from "next/image";

import { countriesService } from "@/services";
import { DefItem, LinkBtn } from "@/ui";

import CountryInfoBlock from "./_components/CountryInfoBlock";

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
      <LinkBtn style={{ marginBottom: "2rem" }} href="/">
        Back
      </LinkBtn>

      <CountryInfoBlock
        heading={name.common}
        img={<Image src={flags.svg} alt={flags.alt} width={600} height={400} />}
        leftSlot={
          <>
            <DefItem
              term="Native Name"
              def={name.nativeName[Object.keys(languages)[0]].common}
            />
            <DefItem term="Population" def={population} />
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
        footer={
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{ textWrap: "nowrap" }}>Border Countries:</h3>

            <div>
              {!!borders.length
                ? borders.map((item) => (
                    <LinkBtn
                      size="sm"
                      style={{ marginRight: "5px" }}
                      key={item}
                      href={`/country/${item.toLowerCase()}`}
                    >
                      {item}
                    </LinkBtn>
                  ))
                : "-"}
            </div>
          </div>
        }
      />
    </>
  );
}
