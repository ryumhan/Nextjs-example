import Link from 'next/link'
import { useRouter } from 'next/router';


export default function NavBar() :React.ReactElement{
    const router = useRouter();

     return (
     <nav> 
        <Link href='/' className={ router.pathname === "/" ? "active": ""}>
        Home
        </Link>
        <Link href='/about' className={ router.pathname === "/about" ? "active": ""}>
        About
        </Link>
    </nav>
    );
}