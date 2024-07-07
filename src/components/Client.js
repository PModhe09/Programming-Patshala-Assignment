"use client";
import Image from "next/image";
import Link from "next/link";

export default function Client({ data }) {
  return (
    <section className="content-block bg-pale-white dark:bg-slate-900 relative px-5 py-10">
      <div className="max-w-[1152px] mx-auto text-center ">
        {data.title && <h2 className="mb-2 text-snow">{data.title}</h2>}
        {data.shortdescription && <p className="text-snow">{data.shortdescription}</p>}
        {data?.clients?.length > 0 && (
          <div className="flex flex-wrap justify-between items-center gap-8 mt-8 h-24">
            {data.clients.map((client, i) => {
              return (
                <div key={"_client_" + i} className="client dark:bg-white dark:rounded-full dark:p-2">
                <Link href={client.link.url}>
                  <Image
                    src={"/assets/images/client/" + client.image}
                    width={client.dimensions.width}
                    height={client.dimensions.height}
                    alt={client.link.name}
                  />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
