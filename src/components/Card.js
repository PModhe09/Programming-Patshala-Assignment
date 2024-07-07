import Image from "next/image";
import Link from "next/link";

export default function Card({ data }) {
  return (
    <div className="card flex justify-between top-0 bg-white dark:rounded-3xl">
      <Link href={data.link.url} className="max-w-full">
        <div className="content py-6 px-7">
          <div className="text-center">
            <div className="icon-holder relative w-[50px] h-[50px] mx-auto mb-4">
              <i className="icon-leaf text-[50px] text-[#E8F5E9]"></i>
              <div className="h-12 w-12 absolute bottom-3 right-3 flex items-center justify-center">
                <Image src={"assets/images/community/"+ data.icon} width={65} height={56}/>
              </div>
            </div>
            <h3>{data.title}</h3>
            <div className="description text-[14px] leading-5 text-gray mt-2">
              {data.description}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
