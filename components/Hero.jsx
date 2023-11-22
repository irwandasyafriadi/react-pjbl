import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

//components
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/* text */}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 
                text-center xl:text-left pt-12">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[3px] xl:ml-2 hover:italic">Project Based Learning </div>
                    <h1 className="h1 mb-4 ">Pengembangan Destinasi Taman Mini Indonesia Indah TMII</h1>
                    <p className="mb-4 mx-0 text-xl text-justify"> Dalam Upaya Meningkatkan Daya Tarik TMII Sebagai Destinasi Wisata Yang Populer</p>
                {/* button */}
                <div>
                    <Link href='/projects'>
                        <Button>Hasil PjBL</Button>
                    </Link>
                </div>

                </div>
                {/* image */}
                <div className="hidden xl:flex relative">
                    <div className="">
                        <img src="/hero/tmii.jpg" className="h-80 w-100 rounded-sm mt-6" />
                    </div>
                </div>
            </div>
            {/* icons */}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce ">
            <RiArrowDownSLine className="text-3xl text-primary "/>
            </div>
        </div>
    </section>
    );
   
};

export default Hero ;