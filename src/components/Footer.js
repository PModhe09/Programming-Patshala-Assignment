import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerData = {
    success: "true",
    data: {
      sociallinks: [
        {
          text: 'Instagram',
          url: '/',
          icon: 'instagram.png'
        },
        {
          text: 'Dribble',
          url: '/',
          icon: 'dribble.png'
        },
        {
          text: 'Twitter',
          url: '/',
          icon: 'twitter.png'
        },
        {
          text: 'Youtube',
          url: '/',
          icon: 'youtube.png'
        },
      ],
      linkdata: [
        {
          title: "Company",
          links: [
            {
              text: 'About us',
              url: '/',
            },
            {
              text: 'Blog',
              url: '/',
            },
            {
              text: 'Contact us',
              url: '/',
            },
            {
              text: 'Pricing',
              url: '/',
            },
            {
              text: 'Testimonials',
              url: '/',
            },
          ]
        },

        {
          title: "Support",
          links: [
            {
              text: 'Help center',
              url: '/',
            },
            {
              text: 'Terms of service',
              url: '/',
            },
            {
              text: 'Legal',
              url: '/',
            },
            {
              text: 'Privacy policy',
              url: '/',
            },
            {
              text: 'Status',
              url: '/',
            },
          ]
        },
      ],
      copyright: 'Copyright © 2020 Nexcent ltd. <br />All rights reserved',
      footerlinks: [
        {
          text: 'Terms & Conditions',
          url: '/',
        },
        {
          text: 'Privacy Policy',
          url: '/',
        },
      ],
    },
  };

  return (
    <footer className="flex flex-col bg-secondary text-white py-16 px-5 md:px-10 text-[15px] leading-[1.8] ">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-10 md:gap-28">
        <div className="col-1 max-w-[350px] w-full">
          <Link href={"/"}>
            <Image
              src={"/assets/images/logo_dark.png"}
              width={"191"}
              height={"30"}
              alt="logo"
            />
          </Link>

          <div className="copyright max-w-md mt-10 mb-12">

            <span dangerouslySetInnerHTML={{ __html: footerData.data.copyright }}></span>
          </div>
          <div className="flex flex-row gap-4 social-icons">
            {
              footerData.data.sociallinks.map((item, index) => {
                return (
                  <Link className="flex justify-center hover:translate-y-[-5px] transition-transform ease-linear items-center rounded-full text-white text-base w-8 h-8 relative" href={item.url} key={index}>
                    <span className="bg-white opacity-10 rounded-full absolute top-0 left-0 w-full h-full"></span>
                    <Image src={"/assets/images/socials/"+ item.icon} className="color-white" height={20} width={20} alt={item.text}/>
                  </Link>
                )
              })
            }
          </div>
        </div>

        <div className="col-2 flex flex-col sm:flex-row gap-8 md:gap-20">
          {
            footerData.data.linkdata.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <h6 className="text-xl text-white">{item.title}</h6>
                  <ul>
                    {
                      item.links.map((link, index) => {
                        return (
                          <li key={index}>
                            <Link href={link.url}>{link.text}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }

          <div className="col">
            <h6 className="text-xl text-white">Stay up to date</h6>
            <form action="">
              <div className="relative h-10 pr-8">
              <span className="bg-white opacity-10 rounded-md absolute top-0 left-0 w-full h-full"></span>
                <input type="text" placeholder="Your email address" className="bg-transparent b-0 relative pl-2 h-10" />
                <button className="absolute h-full w-8"><Send className="text-white"/></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
