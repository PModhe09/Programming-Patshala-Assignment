"use client"
import { useRef, useEffect, useCallback, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperPagination } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from './ui/button';

export const SwiperHero = ({ data }) => {

    const swiperElRef = useRef(null);
    const [winWidth, setWinWidth] = useState(0);

    useEffect(() => {
        setWinWidth(window.innerWidth)
    }, []);


    return (
        <>
            <div className='swiper-hero bg-silver dark:bg-slate-950'>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    ref={swiperElRef}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay = {{
                        delay: 5000,
                      }}
                >
                    {
                        data?.map((herodata, i) => {
                            return (
                                <SwiperSlide key={'_brands_' + i}>
                                    <div className="card  max-w-[1152px] mx-auto flex flex-col md:flex-row items-center bg-silver dark:bg-slate-950 top-0  shadow-none md:gap-[100px] py-10 md:py-24">
                                        {
                                            herodata.image &&
                                            <div className="md:order-1 bg-pale-violet flex flex-col justify-center items-center ">
                                                <Image src={'/assets/images/' + herodata.image} className="image-placeholder" width={'391'} height={'407'} alt={herodata.title} />
                                            </div>
                                        }
                                        <div className="content flex flex-col justify-center items-center md:order-0">
                                            <div className="max-w-[670px]">
                                                <div className='h1 max-sm:text-3xl ' dangerouslySetInnerHTML={{ __html: herodata.title }}>
                                                </div>
                                                <div className="text-base leading-[1.5] text-dark-g dark:text-snow" dangerouslySetInnerHTML={{ __html: herodata.description }}></div>
                                                {
                                                    herodata.link?.url &&
                                                    <Button variant="default" className='mt-9 text-snow' href={herodata.link.url}>{herodata.link.name}</Button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide >
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    );
};