import Link from "next/link";
import { useRouter } from "next/router";
import { Divide as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react";

function NavbarItem({ text, href, page }) {
  return (
    <Link className={`hidden sm:flex flex-row items-center group mx-2 navbar-item bg-transparent ${page === href ? "active" : "cursor-pointer"}`} href={href}>
      <span className="font-medium z-20">{text}</span>
      <div className="navitem-bg" />
    </Link>
  )
}

export default function Navbar() {
  const router = useRouter();
  
  const [ isOpen, setOpen ] = useState(false);
  const [ isScrolled, setScrolled ] = useState(false);
  const [ resetNavbar, setResetNavbar ] = useState(false);

  const page = router.pathname;

  // Show the navbar background and border when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setResetNavbar(true);
    });
    router.events.on("routeChangeComplete", () => {
      setResetNavbar(false);
    });
  }, []);

  return (
    <nav className={`h-16 w-full fixed top-0 left-0 flex flex-row items-center justify-between px-4 transition-all duration-100 ease-linear z-50 bg-transparent border-b border-transparent ${(isScrolled && resetNavbar == false) && "bg-white glass !border-lighter"}`}>
      <Link className="h-full flex flex-row items-center cursor-pointer group hover:opacity-75 transition-all duration-100 ease-linear mr-2 md:mr-8" href={'/'}>
        <img src={"/img/C.S%20White.svg"} className={"h-full wide-logo-white mr-4"} />
        <span className="font-extrabold text-2xl z-20">code.spirit</span>
      </Link>
      <NavbarItem text={"Navbar Item"} href={'/not-found'} page={page} />
      <div className="ml-auto flex flex-row items-center">
        <span className="text-lg font-semibold text-accent-1 mr-4">MENU</span> 
        <Hamburger toggled={isOpen} toggle={setOpen} size={28} duration={0.1} easing="ease-in" onToggle={toggled => {
          if(toggled) {
          } else {
          }
        }} />
      </div>
    </nav>
  )
}