'use client';
import { useState } from 'react'
import Link from 'next/link'
import Card from './Card';

export default function Community({ data, count }) {
  return (
    <section className='content-block card-list py-5 px-5 dark:bg-slate-900'>
      <div className={`max-w-[1152px] mx-auto`}>
        <div className='flex flex-col items-center max-w-[550px] mx-auto text-center'>
          <h2 className='mb-2 max-sm:text-2xl dark:text-snow'>{data.title}</h2>
          <p className='font-normal text-gray dark:text-snow'>{data.shortdescription}</p>
        </div>
        <div className={`flex sm:grid sm:grid-cols-3 flex-wrap max-md:mx-[-10px] sm:gap-8 mt-4 lg:gap-[127px]`}>
          {
            data.carddata?.slice(0, count).map((data, i) => {
              return (
                <div className={'cards max-sm:px-[10px]'} key={i}>
                  <Card data={data} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
