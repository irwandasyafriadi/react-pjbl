
import { motion } from "framer-motion";
import Link from "next/link";
//next hooks
import { usePathname } from "next/navigation";
usePathname

const links = [
    {path : '/', name: 'home'},
    {path : '/projects', name: 'projects'},
    {path : '/about', name: 'about'},
    {path : '/logbook', name: 'logbook'},
]; 
    
    
const Navbar = ({containerStyles, linkStyles, underlineStyles}) => {
    const path = usePathname();
    return (
    <nav className={`${containerStyles}`}> 
        {links.map((link, index) => {
            return(
            <Link href={link.path} 
            key={index} 
            className={`capitalize ${linkStyles}`}
            >
                {link.path === path &&(
                    <motion.span 
                        initial={{y: '-100%'}}
                        animate={{y: 0}} 
                        transition={{type: 'tween'}}
                        layoutId='underline'
                        className={`${underlineStyles}`}/>
                )}
                {link.name}
            </Link>
            );
        })}
    </nav>
    );
};

export default Navbar;