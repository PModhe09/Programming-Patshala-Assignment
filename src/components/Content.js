import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Content({ data }) {
  return (
    <section className={`content-block image-content-block py-5 dark:bg-slate-900 ${data[0].image ? '' : 'bg-silver'}`}>
      <div className={`max-w-[1152px] mx-auto flex flex-col md:flex-row ${data[0].image ? '' : 'text-center'}`}>
        {
          data[0].image && 
        <div
          className={`md:order-${
            data.imageonright ? "1" : "0"
          } max-md:px-8 max-md:pb-8`}
        >
          <Image
            alt={data[0].title}
            src={"/assets/images/content/" + data[0].image}
            width={data[0].dimensions.width}
            height={data[0].dimensions.height}
          />
        </div>
        }
        <div
          className={`flex  md:order-${
            data.imageonright ? "0" : "1"
          } p-5 max-sm:py-0 md:p-12 pr-[60px] ${data[0].image ? ' justify-end' : 'w-full'}`}
        >
          <div className={`${data[0].image ? 'md:max-w-[576px]' : 'md:max-w-[887px] mx-auto'}`}>
            {
              data[0].image ?
              <h2 className="text-h2 max-md:text-2xl dark:text-snow">{data[0].title}</h2>
              :
              <div className="text-h1 max-md:text dark:text-snow -2xl text-gray-dark">{data[0].title}</div>
            }
            <div className="text-sm text-gray dark:text-snow mt-4 leading-5">
              {data[0].description}
            </div>
            <Button variant="default" className="mt-8 text-snow inline-flex items-center">
            <Link
              className={`${data[0].link.arrow}`}
              href={data[0].link.url}
            >
              {data[0].link.name}
              {
                data[0].link.arrow &&
                <span className="w-4 h-4 inline-flex items-center justify-center ml-2"><i className="icon-right text-[8px]"></i></span>
              }
            </Link>
            </Button>
            
              
          </div>
        </div>
      </div>
    </section>
  );
}
