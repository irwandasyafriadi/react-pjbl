'use client';

import Link from "next/link"; 
import { Button } from "./ui/button";
import Image from "next/image";

// import swiper compoent
import {Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

import { Avatar, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

// components 
// import WawancaraCard from '@/components/WawancaraCard';

const DataTim = [
    {
        image : '/tim/daffa.jpg',
        content : 'Muhammad Daffa Rabbani ',
    },
    {
        image : '/tim/chyntia.jpg',
        content : 'Chyntia Indah Maulana',
    },
    {
        image : '/tim/olin.jpg',
        content : 'Elisabeth Caroline'

    },
    {
        image : '/tim/aldriani.jpg',
        content : 'Aldriani Saputra'

    },
    {
        image : '/tim/jenny.jpg',
        content : 'Jenny Aulia Az Zahra'

    },
    {
        image : '/tim/raihan.jpg',
        content : 'Ahmad Raihan'

    },
    {
        image : '/tim/nasya.jpg',
        content : 'Nasya Putri Salsabila'

    },
    {
        image : '/tim/irwan.jpg',
        content : 'Irwanda Syafriadi',

    },
    {
        image : '/tim/fifi.jpg',
        content : 'Wan Syafiyya Inayah Aulia'

    },
    {
        image : '/tim/zacky.jpg',
        content : 'Mohamad Zacky Aimar'

    },
];

const Tim = () => {
    return (
        <section className="container mx-auto pt-10">
        <div className=" space-y-10">
            {/* text */}
            <div className="">
                <h2 className="section-title ">
                    Tim Kami
                </h2>
            </div>
            <div>
                <Swiper className="h-[300px] "
                        slidesPerView={3}
                        breakpoints={{
                         640:{
                            slidesPerView: 6,
                         },   
                        }}
                        spaceBetween={30}
                        modules={Pagination}
                        pagination={{clickable: true}}
                        >

                    {DataTim.map(( tim) => {
                        return <SwiperSlide >
                            <Popover>
                                <PopoverTrigger>
                                <Avatar>
                                <AvatarImage src={tim.image} className=''/>
                            </Avatar>
                                </PopoverTrigger>
                                <PopoverContent>
                                    {tim.content}
                                </PopoverContent>
                            </Popover>
                            
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
    ) 
     
};

export default Tim;