'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "./ui/button";
import useThemeStore from "@/stores/useThemeStore";
import { applyThemePreference } from "@/utils/themeUtils";
import { MoonStar, Sun } from "lucide-react";

export default function Header(props) {
    const toggleTheme = useThemeStore((state)=>state.toggleTheme);
    const theme = useThemeStore((state)=>state.theme);
    console.log(theme);

    useEffect(() => {
        applyThemePreference(theme);
      }, [theme]);
    return (
        <>
            <header className="bg-silver dark:bg-slate-950 p-8 xl:pl-[104px] xl:pr-[120px] sticky top-0  z-50">
                <div className="flex justify-between items-center ">
                    <Link href={'/'} className="max-w-[155px]">
                       {theme === "dark"
                       ?
                        <Image
                            src={"/assets/images/logo_dark.png"}
                            width={"155"}
                            height={"24"}
                            alt="logo"
                        />
                       :
                        <Image 
                        src={'/assets/images/Logo.png'} 
                        width={'155'}
                         height={'24'}
                          alt="logo" />
                       }
                    </Link>


                    <ul className="nav hidden lg:flex justify-end items-center text-base dark:text-snow gap-10px">
                        <li><Link className="py-3 px-4 active font-medium" href={'/'}>Home</Link></li>
                        <li><Link className="py-3 px-4" href={'/'}>Service</Link></li>
                        <li><Link className="py-3 px-4" href={'/'}>Feature</Link></li>
                        <li><Link className="py-3 px-4" href={'/'}>Product</Link></li>
                        <li><Link className="py-3 px-4" href={'/'}>Testimonial</Link></li>
                        <li><Link className="py-3 px-4" href={'/'}>FAQ</Link></li>
                    </ul>

                    <ul className="flex font-medium gap-3.5 hidden lg:flex">
                        <li><Button variant="outline" size="default"    href={'/'}>Login</Button></li>
                        <li><Button variant="default" size="default" className="text-snow"  href={'/'}>Sign up</Button></li>
                        <li>{theme != 'dark' ? <Sun onClick={toggleTheme} color="yellow" className="p-0 bg-blue-400 rounded-full"  size={48}/> : <MoonStar className="text-white" size={48} onClick={toggleTheme} />}</li>
                    </ul>

                    <div className="max-lg:flex lg:hidden">
                        <Link className="py-3 px-2 text-xl" href={'/'}><i className="icon-globe"></i></Link>
                        <Link className="py-3 px-2 text-xl" href={'/'}><i className="icon-search"></i></Link>
                        <input type="checkbox" name="menu" id="menu" />
                        <label id="menuToggle" htmlFor="menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <div className="hidden fixed top-[91px] flex flex-col w-full h-full bg-silver right-0 px-5">
                            <ul className="nav w-full mt-3 flex flex-col text-lg uppercase gap-3">
                                <li><Link className="py-3 px-4" href={'/'}>Home</Link></li>
                                <li><Link className="py-3 px-4" href={'/'}>Service</Link></li>
                                <li><Link className="py-3 px-4" href={'/'}>Feature</Link></li>
                                <li><Link className="py-3 px-4" href={'/'}>Product</Link></li>
                                <li><Link className="py-3 px-4" href={'/'}>Testimonial</Link></li>
                                <li><Link className="py-3 px-4" href={'/'}>FAQ</Link></li>
                            </ul>
                            <ul className="flex flex-col justify-between">
                                <li><Link className="btn max-sm:pl-[16px] max-sm:text-xl text-primary" href={'/'}>Login</Link></li>
                                <li><Link className="btn btn-primary" href={'/'}>Sign up</Link></li>
                                <li className="rounded-md px-8 py-3.5 leading-[1.42] inline-block text-navmax-sm:pl-[16px] max-sm:text-xl">{theme != 'dark' ? <Sun onClick={toggleTheme} /> : <MoonStar onClick={toggleTheme} />}</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </header>

        </>
    )
}