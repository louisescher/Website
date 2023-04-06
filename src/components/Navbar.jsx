import Link from "next/link";
import { useRouter } from "next/router";
import { Divide as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  
  const [ isOpen, setOpen ] = useState(false);
  const [ isScrolled, setScrolled ] = useState(false);
  const [ resetNavbar, setResetNavbar ] = useState(false);

  const [ dropdownHiding, setDropdownHiding ] = useState(false);
  const [ dropdownShown, setDropdownShown ] = useState(false);

  const page = router.pathname;

  const hideDropdownAndNavigate = (href) => {
    setOpen(false);
    setDropdownHiding(true);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setDropdownHiding(false);
      setDropdownShown(false);
      router.push(href);
    }, 400);
  }

  function NavbarItem({ text, href }) {
    return (
      <Link 
        className={`w-fit flex flex-row items-center group mx-2 navbar-item big bg-transparent ${page === href ? "active" : "cursor-pointer"}`} 
        href={href}
        onClick={(e) => {
          e.preventDefault();
          hideDropdownAndNavigate(href);
        }}
      >
        <span className={`text-7xl z-20 stretch-text ${page === href ? "font-bold" : "font-thin"}`}>{text}</span>
        <div className="navitem-bg" />
      </Link>
    )
  }

  // Show the navbar background and border when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    document.body.addEventListener("scroll", handleScroll);

    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log("huerbfirg");
    });
    router.events.on("routeChangeStart", () => {
      setResetNavbar(true);
    });
    router.events.on("routeChangeComplete", () => {
      setResetNavbar(false);
    });
  }, []);

  return (
    <>
      <nav className={`h-16 w-full fixed top-0 left-0 flex flex-row items-center justify-between px-4 transition-all duration-100 ease-linear z-50 bg-transparent border-b border-transparent ${(isScrolled && resetNavbar == false) && "bg-white glass !border-lighter"}`}>
        <Link className="h-full flex flex-row items-center cursor-pointer group hover:opacity-75 transition-all duration-100 ease-linear mr-2" href={'/'}>
          <img src={"/img/C.S%20White.svg"} className={"h-full wide-logo-white mr-4"} />
          <span className="font-extrabold text-2xl z-20 stretch-text">code.spirit</span>
        </Link>
        <div className="ml-auto flex flex-row items-center">
          <span className="text-lg font-semibold text-accent-1 mr-4">MENU</span> 
          <Hamburger toggled={isOpen} toggle={setOpen} size={28} duration={0.1} easing="ease-in" onToggle={toggled => {
            if(toggled) {
              document.body.style.overflow = "hidden";
              setDropdownShown(true);
            } else {
              setDropdownHiding(true);
              document.body.style.overflow = "overlay";
              setTimeout(() => {
                setDropdownHiding(false);
                setDropdownShown(false);
              }, 400);
            }
          }} />
        </div>
      </nav>
      <div className={`navbar-mobile-dropdown !px-4 !pt-16 glass dark ${(isOpen === true || dropdownShown === true) && "active"} ${dropdownHiding === true && "hiding"}`}>
        <div className="h-1/2 flex flex-col justify-between m-16">
          <NavbarItem text={"Home"} href={'/'} />
          <NavbarItem text={"About"} href={'/about'} />
          <NavbarItem text={"Portfolio"} href={'/portfolio'} />
        </div>
      </div>
    </>
  )
}