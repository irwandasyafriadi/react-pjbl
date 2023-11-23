import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return <Link href='/'>
        <div className=" flex flex-row">
        <Image src='/logoupn.svg' width={52} height={52} priority />
        <Image src='/remove.svg' width={66} height={56} priority />            
        </div>
    </Link>
};

export default Logo;