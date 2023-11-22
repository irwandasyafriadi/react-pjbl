import React from "react";
import { 
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter,
 } from "@/components/ui/table";
 import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";


const Contact = () => {
    return <section className="container mx-auto pt-10 space-y-8 ">
        <div className="">
            <h1 className="section-title">Logbook </h1>
        </div>
        <Table className='max-w-sm xl:max-w-full overflow-hidden  font-medium'>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
               <TableHeader className='  '>
                    <TableRow className=''>
                        <TableHead className="text-center">Aktivitas</TableHead>
                        <TableHead className='text-center'>Tanggal / Bulan</TableHead>
                        <TableHead className="text-center">Bukti</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='justify-between'>
                    <TableRow >
                        <TableCell className="font-medium">Menentukan tema/judul proposal pjbl dan menyelesaikan pendahuluan</TableCell>
                        <TableCell className=''>12 September 2023</TableCell>
                        <TableCell className="">
                            <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/1.png" alt="" srcset="" className="text-center items-center rounded-sm"/>
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/1.png" alt="" srcset="" className="rounded-sm relative mb-5 h-64 w-70"/>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Pembagian masing-masing tugas dalam beberapa kelompok dan menentukan topik</TableCell>
                        <TableCell className=''>20 September 2023</TableCell>
                        <TableCell className="">
                        <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/2.png" alt="" srcset="" className="rounded-sm"/>
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/2.png" alt="" srcset="" className="rounded-sm relative mb-5 bg-primary bg-popover-none"/>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Diskusi pembuatan judul </TableCell>
                        <TableCell className=''>24 September 2023</TableCell>
                        <TableCell className="">
                        <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/3.jpg" alt="" srcset="" className="rounded-sm"/>
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/3.jpg" alt="" srcset="" className="rounded-sm relative h-64 w-70"/>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Meminta persetujuan diskusi judul dengan Ibu Yuli</TableCell>
                        <TableCell className=''>25 September 2023</TableCell>
                        <TableCell className="">
                        <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/4.png" alt="" srcset="" className="rounded-sm"/>
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/4.png" alt="" srcset="" className="rounded-sm relative h-60 w-70 "/>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Mendiskusikan perihal PjBL dengan Bapak Ryan Hidayatullah</TableCell>
                        <TableCell className=''>25 September 2023</TableCell>
                        <TableCell className="">
                            <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/5.png" alt="" srcset=" " className="rounded-sm" />
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/5.png" alt="" srcset=" " className="rounded-sm relative h-60 w-70" />
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Membuat planning pengamatan ke lokasi TMII</TableCell>
                        <TableCell className=''>25 September 2023</TableCell>
                        <TableCell className="">
                        <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/5.jpg" alt="" srcset="" className="relative rounded-sm" />
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/5.jpg" alt="" srcset="" className="rounded-sm relative h-60 w-70" />
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Membuat PPT untuk diserahkan kepada dosen mata kuliah Bahasa Indonesia dan di presentasikan</TableCell>
                        <TableCell className=''>26 September 2023</TableCell>
                        <TableCell className="">
                             <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/7.png" alt="" srcset="" className="rounded-sm" />
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/7.png" alt="" srcset="" className="rounded-sm relative h-70 w-60" />
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Melanjutkan pembuatan proposal </TableCell>
                        <TableCell className=''>29 September 2023</TableCell>
                        <TableCell className="">
                        <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/8.png" alt="" srcset="" className="rounded-sm" />
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/8.png" alt="" srcset="" className="rounded-sm relative h-52 w-58" />
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Pelaksanaan penelitian di Taman Mini Indonesia Indah</TableCell>
                        <TableCell className=''>16 Oktober 2023</TableCell>
                        <TableCell className="">
                        <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/9.png" alt="" srcset="" className="rounded-sm" />
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/9.png" alt="" srcset="" className="rounded-sm relative h-48 w-58" />
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Pelaksanaan penelitian di Taman Mini Indonesia Indah</TableCell>
                        <TableCell className=''>18 Oktober 2023</TableCell>
                        <TableCell className=" w-[300px] ">
                        <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/dok-tmii.jpg" className="rounded-sm" />
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/dok-tmii.jpg" className="rounded-sm relative h-48 w-58" />
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Presentasi Hasil Penelitian Project Taman Mini Indonesia Indah</TableCell>
                        <TableCell className=''>23 Oktober 2023</TableCell>
                        <TableCell className="">
                        <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/11.png" alt="" srcset="" className="rounded-sm" />
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/11.png" alt="" srcset="" className="rounded-sm relative h-56 w-66" />
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell className="font-medium">Bimbingan Revisi Laporan dan Artikel</TableCell>
                        <TableCell className=''>6 November 2023</TableCell>
                        <TableCell className="">
                        <Popover>
                                <PopoverTrigger>
                            <img src="/logbook/12.png" alt="" srcset="" className="rounded-sm" />
                                </PopoverTrigger>
                                <PopoverContent>
                            <img src="/logbook/12.png" alt="" srcset="" className="rounded-sm relative h-60 w-58" />
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>
                    
                </TableBody>
        </Table>

    </section>

}

export default Contact ;