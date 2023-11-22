'use client';

import Link from "next/link"; 
import { Button } from "./ui/button";

// import swiper compoent
import {Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

// components 
import WawancaraCard from '@/components/WawancaraCard';

const WawancaraData = [
    {
        image : '/cara/hasbi.jpg',
        jenis : 'Wisatawan',
        nama  : 'Hasbi',
        deskripsi : 'Sudah cukup baik karena kita bisa menikmati beberapa budaya Indonesia tanpa perlu mengunjungi provinsinya untuk memberikan edukasi kepada anak anak ',
    },
    {
        image : '/cara/purnomo.jpg',
        jenis : 'Asistan Manager CS',
        nama  : 'Purnomo',
        deskripsi : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
        image : '/cara/dea.jpg',
        jenis : 'Wisatawan',
        nama  : 'Dea',
        deskripsi : 'Fasilitasnya sudah bagus, nyaman, dan bersih. Kesulitan karena keterbatasan waktu dan membuat tidak efisien. Menikmati di gondola karena bisa menikmati keindahan TMII dari atas.  ',
    },
    {
        image : '/cara/parmanto.jpg',
        jenis : 'Pengelola',
        nama  : 'Parmanto',
        deskripsi : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
        image : '/cara/putri.jpg',
        jenis : 'Wisatawan',
        nama  : 'Nina dan Putri',
        deskripsi : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
        image : '/cara/luna.jpg',
        jenis : 'Wisatawan',
        nama  : 'Luna',
        deskripsi : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
        image : '/cara/lina.jpg',
        jenis : 'Pengelola',
        nama  : 'Lina',
        deskripsi : 'lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
        image : '/cara/yunita.jpg',
        jenis : 'Wisatawan',
        nama  : 'Yunita',
        deskripsi : 'lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
        image : '/cara/erwin.jpg',
        jenis : 'Pengelola',
        nama  : 'Erwin',
        deskripsi : 'lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
        image : '/cara/hani.jpg',
        jenis : 'Wisatawan',
        nama  : 'Hani',
        deskripsi : 'lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
];

const Wawancara = () => {
    return  <section>
        <div className="container mx-auto space-y-10">
            {/* text */}
            <div className="">
                <h2 className="section-title ">
                    Data Wawancara
                </h2>
            </div>
            <div>
                <Swiper className=""
                        slidesPerView={1}
                        breakpoints={{
                         640:{
                            slidesPerView: 2,
                         },   
                        }}
                        spaceBetween={30}
                        modules={Pagination}
                        pagination={{clickable: true}}
                        >

                    {WawancaraData.map((item, index) => {
                        return(
                            <SwiperSlide key={index}>
                            <WawancaraCard item={item}/>
                        </SwiperSlide> 
                        ) 
                    })}
                </Swiper>
            </div>
        </div>
    </section>
};

export default Wawancara;