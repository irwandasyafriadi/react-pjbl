import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from'@/components/ui/tabs'
import {
    User2,
    MailIcon,
    HomeIcon,
    Calendar,
    Briefcase,
    User,
} from 'lucide-react'



const Middle = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }   ;

    
    return (
        <section className='xl:h-[860px] pb-12 xl:py-24  '>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>TMII</h2>
            
            <div className="flex flex-col xl:flex-row  ">
                {/* image */}
                <div className="hidden xl:flex flex-1 relative">
                    {/* <DevImg containerStyles='bg-about_shape_light'/> */}
                    <Image src='/logbook/dok-tmii.jpg' width='550' height='600' className="rounded-sm border-md"/>

                </div>
                <div className="flex-1  ">
                    <Tabs defaultValue="pengertian" className="">
                        <TabsList className='w-full grid grid-cols-3 xl:max-w[520px] xl:border dark:border-none mb-10'>
                            <TabsTrigger value='pengertian'>Pengertian</TabsTrigger>
                            <TabsTrigger value='tujuan'>Tujuan</TabsTrigger>
                            {/* <TabsTrigger value='manfaat'>Manfaat</TabsTrigger> */}
                            <TabsTrigger value='pelaksanaan'>Pelaksanaan</TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-24 xl:mt-8">
                            <TabsContent value='pengertian'>
                                <h4 className="mb-8 text-left text-sm xl:text-left font-semibold">
                                Taman Mini "Indonesia Indah" (TMII) merupakan salah satu destinasi wisata yang berbasis wisata edukasi dan budaya. TMII hadir sebagai rangkuman 33 provinsi bangsa Indonesia dalam bentuk miniatur kepulauan nusantara lengkap dengan anjungan daerah, bangunan dan arsitektur tradisional, kesenian daerah, taman rekreasi, dan berbagai macam wahana yang menawarkan sarana seni, rekreasi, dan edukasi bagi wisatawan.
                                </h4>  
                            </TabsContent>
                            <TabsContent value='tujuan'>
                            <h4 className="mb-8 text-left text-sm font-semibold">
                            Di pertengahan
Oktober tahun 2022 TMII memiliki wajah baru yang
mengusung konsep green, smart, culture, dan
inclusive. Harapannya, wajah baru TMII yang baru
akan dikenal bagi masyarakat sebagai ikon wisata
kultural dan sarat edukasi keragaman budaya
Indonesia yang kaya. Improvisasi dan mempercantik
pada beberapa aspek untuk meningkatkan kualitas
layanan dan juga daya tarik berupa atraksi yang bisa
dinikmati wisatawan di TMII secara inklusif. Oleh karena itu, tujuan dalam
pengamatan ini mengenai upaya meningkatkan daya tarik
wisata dalam memberikan informasi dan inovasi
kepada para wisatawan untuk menjadikan TMII
menjadi destinasi yang populer kembali.
                                </h4> 
                            </TabsContent>
                            {/* <TabsContent value='manfaat'>
                            <h4 className="mb-8 text-center xl:text-left">
                            Di pertengahan
Oktober tahun 2022 TMII memiliki wajah baru yang
mengusung konsep green, smart, culture, dan
inclusive. Harapannya, wajah baru TMII yang baru
akan dikenal bagi masyarakat sebagai ikon wisata
kultural dan sarat edukasi keragaman budaya
Indonesia yang kaya. Improvisasi dan mempercantik
pada beberapa aspek untuk meningkatkan kualitas
layanan dan juga daya tarik berupa atraksi yang bisa
dinikmati wisatawan di TMII secara inklusif.
                                </h4> 
                            </TabsContent> */}
                            <TabsContent value='pelaksanaan'>
                            <h4 className="mb-8 text-left text-sm font-semibold">
                            Pada pengamatan ini kami menggunakan
metode penelitian kualitatif deskriptif, yang dimana
akan berisi data untuk memberikan gambaran
mendalam mengenai berbagai aspek terkait dengan objek penelitian. Metode ini memungkinkan kami
untuk menggali informasi secara rinci, menjelaskan
fenomena yang diamati, serta memahami konteks dan
karakteristik yang ada. Dengan metode ini kami dapat
menyajikan analisis yang mendalam dan menyeluruh
terkait dengan topik penelitian yang kami amati.
                                </h4> 
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
                </div>
            </div>
        </section>
    );
};
export default Middle;