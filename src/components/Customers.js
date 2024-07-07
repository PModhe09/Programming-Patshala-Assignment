"use client"; 
import Image from "next/image";
import Link from "next/link";

export default function Customers({ data }) {
  
  return (
    <section className="content-block testimonials bg-silver dark:bg-slate-950 px-5 py-8 my-7">
      <div className="max-w-[1152px] mx-auto">
          
          <div className="card flex max-lg:flex-col items-center top-0 bg-transparent shadow-none gap-[78px]">
            {data.image && (
              <div className="max-w-[326px] w-full ">
                <Image
                  src={"/assets/images/client/" + data.image}
                  width={data.dimensions.width}
                  height={data.dimensions.height}
                  alt={data.title}
                />
              </div>
            )}
            <div className="content max-w-[748px]">
              <div
                className="text-base leading-6 text-gray mb-4 dark:text-snow"
                dangerouslySetInnerHTML={{ __html: data.text }}
              ></div>

              <div className="description flex flex-col gap-2 dark:text-snow">
                  <strong className="text-xl text-primary">{data.textby.name}</strong>
                  <span className="text-gray-light dark:text-snow">{data.textby.post}</span>
              </div>
              <div className="flex max-sm:flex-col justify-between items-center mt-8">
                <div className="logo-repeater flex flex-1 flex-wrap justify-between items-center pr-9 gap-3">
                  {
                    data.associated?.map((logo, i) => {
                      return <div key={'__testimonials__'+i}>
                        <Image src={'/assets/images/client/' + logo.image} width={logo.dimensions.width} height={logo.dimensions.height} alt={logo.link.name} />
                      </div>
                    })
                  }
                </div>

                <div className="more-link max-sm:w-full">
                  <Link className="text-xl text-primary font-semibold flex gap-3 items-center hover:text-secondary" href={data.more.url}>
                    {data.more.text} <span className="w-6 h-6 inline-flex items-center justify-center"><i className="icon-right text-[10px]"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
