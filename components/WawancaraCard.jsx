import { Card, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import {Wawancara   } from "./Wawancara";


const WawancaraCard = ({item}) => {
    return (
        <Card className=''>
        <CardHeader className='p-0'>
           <div className="relative w-full h-[300px] flex items-center justify-center bg-secondary rounded-sm ">
            <Image className="absolute h-[200px] w-[300px] rounded-sm shadow-2xl" src={item.image} width={247} height={250} priority/>
           </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
            <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
                {item.jenis}
            </Badge>
            <div>
                <h2 className="h2 mb-2"> {item.nama}</h2>
                <p className="text-muted-foreground text-lg">{item.deskripsi}</p>
            </div>
        </div>
    </Card>
    );
};

export default WawancaraCard;