'use client';
import Link from 'next/link'
import Image from "next/image";


export default function CommunityUpdates({ data, count }) {
    return (
        <section className='content-block card-list pt-5 pb-24 px-5 dark:bg-slate-900'>
            <div className={`max-w-[1152px] mx-auto`}>
                <div className='flex flex-col items-center max-w-[628px] mx-auto text-center'>
                    <h2 className='mb-2 dark:text-snow'>{data.title}</h2>
                    <p className='font-normal text-base dark:text-white'>{data.shortdescription}</p>
                </div>
                <div className={`flex sm:grid sm:grid-cols-3 flex-wrap max-md:mx-[-10px] mt-4 gap-6`}>
                    {
                        data.carddata?.slice(0, count).map((data, i) => {
                            return (
                                <div className={'max-sm:px-[10px] marketing-cards'} key={i}>
                                    <Link href={data.link.url} className="max-w-full">
                                        <div className="content">
                                            <div className="text-center">
                                                <div className="icon-holder">
                                                    <Image
                                                        src={"/assets/images/community/" + data.image}
                                                        className="image-placeholder shadow-image rounded-lg"
                                                        width={data.dimensions?.width || '386'}
                                                        height={data.dimensions?.height || '286'}
                                                        alt={data.title}
                                                    />
                                                </div>
                                                <div className='mt-[-80px] px-[25px]'>
                                                    <div className='mt-[-80px] mx-auto shadow-marketing bg-silver rounded-md relative z-10 p-4 px-[22px] font-semibold'>
                                                        <h4 className='text-xl text-gray'>{data.title}</h4>
                                                        <span className='text-xl text-primary inline-flex items-center mt-6'>
                                                            {data.link.name}
                                                            <span className="w-6 h-6 inline-flex items-center justify-center"><i className="icon-right text-[10px]"></i></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
