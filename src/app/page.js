import Image from "next/image";
import  {SwiperHero} from "@/components/Swiper";
import Client from "@/components/Client";
import Community from "@/components/Community";
import Content from "@/components/Content";
import Achievement from "@/components/Achievement";
import Customers from "@/components/Customers";
import CommunityUpdates from "@/components/CommunityUpdates";

import { heroData } from "@/constants/pageData";
import { clientsData } from "@/constants/pageData";
import { communityData } from "@/constants/pageData";
import { contentBlockData1 } from "@/constants/pageData";
import { contentBlockData2 } from "@/constants/pageData";
import { contentBlockData3 } from "@/constants/pageData";
import { achievemenetData } from "@/constants/pageData";
import { customersData } from "@/constants/pageData";
import { communityUpdatesData } from "@/constants/pageData";

export default function Home() {
  return (
    <main className="w-full dark:bg-slate-950">
        <SwiperHero data={heroData.data}/>
        <Client data={clientsData.data}/>
        <Community data={communityData.data} count={3}/>
        <Content data={contentBlockData1.data}/>
        <Achievement data={achievemenetData.data}/>
        <Content data={contentBlockData2.data}/>
        <Customers data={customersData.data}/>
        <CommunityUpdates data={communityUpdatesData.data}/>
        <Content data={contentBlockData3.data}/>

    </main>
  );
}
