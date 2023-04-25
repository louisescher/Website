import Link from "next/link";
import { useRouter } from "next/router";
import { Divide as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react";

function NavbarItem({ text, href, page, hideDropdownAndNavigate }) {
  const [ isHovered, setHovered ] = useState(false);
  const [ active, setActive ] = useState(false);

  useEffect(() => {
    if(page === href) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [page]);

  return (
    <Link 
      className={`w-fit flex navbar-dropdown-link ${isHovered === false && "test"} flex-row items-center group mx-2 navbar-item big bg-transparent ${(active) ? "active active-navdrop" : "cursor-pointer"}`} 
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.getElementsByClassName("active-navdrop")[0].classList.remove("active");
        document.getElementsByClassName("active-navdrop")[0].classList.remove("active-navdrop");
        setActive(true);
        hideDropdownAndNavigate(href, setActive);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={`text-5xl sm:text-7xl z-20 stretch-text ${page === href ? "font-bold" : "font-thin"}`}>{text}</span>
      <div className="navitem-bg" />
    </Link>
  )
}

export default function Navbar() {
  const router = useRouter();
  
  const [ isOpen, setOpen ] = useState(false);
  const [ isScrolled, setScrolled ] = useState(false);
  const [ resetNavbar, setResetNavbar ] = useState(false);

  const [ dropdownHiding, setDropdownHiding ] = useState(false);
  const [ dropdownShown, setDropdownShown ] = useState(false);

  const page = router.pathname;

  const hideDropdownAndNavigate = (href, setActive) => {
    setOpen(false);
    setDropdownHiding(true);
    document.documentElement.style.overflow = "overlay";
    setTimeout(() => {
      setDropdownHiding(false);
      setDropdownShown(false);
      setActive(false);
      router.push(href);
    }, 400);
  }

  // Show the navbar background and border when scrolled down
  useEffect(() => {
    // Check window scroll position
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setResetNavbar(current => !current);
    });
  }, []);

  return (
    <>
      <nav className={`h-16 w-full fixed top-0 left-0 flex flex-row items-center justify-between px-4 transition-all duration-100 ease-linear z-50 bg-transparent border-b border-transparent ${(isScrolled && resetNavbar == false) && "bg-white glass !border-lighter"}`}>
        <Link 
          className="h-full flex flex-row items-center cursor-pointer group hover:opacity-75 transition-all duration-100 ease-linear mr-2" 
          href={'/'}
          onClick={(e) => {
            if(isOpen === true) {
              e.preventDefault();
              setOpen(false);
              setDropdownHiding(true);
              document.documentElement.style.overflow = "overlay";
              setTimeout(() => {
                setDropdownHiding(false);
                setDropdownShown(false);
                router.push("/");
              }, 400);
            }
          }}
        >
          <img src={"/img/C.S%20White.svg"} className={"h-full wide-logo-white mr-4"} />
          <span className="font-extrabold text-2xl z-20 stretch-text hidden xs:block">code.spirit</span>
        </Link>
        <div className="ml-auto flex flex-row items-center">
          <span className="text-lg font-semibold text-accent-1 mr-4">MENU</span> 
          <Hamburger toggled={isOpen} toggle={setOpen} size={28} duration={0.1} easing="ease-in" onToggle={toggled => {
            if(toggled) {
              setDropdownShown(true);

              // Disable all scrolling on the html element
              document.documentElement.style.overflow = "hidden";
            } else {
              setDropdownHiding(true);
              document.documentElement.style.overflow = "overlay";
              setTimeout(() => {
                setDropdownHiding(false);
                setDropdownShown(false);
              }, 400);
            }
          }} />
        </div>
      </nav>
      <div className={`navbar-dropdown !px-4 glass dark ${(isOpen === true || dropdownShown === true) && "active"} ${dropdownHiding === true && "hiding"}`}>
        <div className="h-1/2 sm:h-3/5 my-auto flex flex-col justify-between ml-4 sm:mx-16">
          <NavbarItem text={"Home"} href={'/'} page={page} hideDropdownAndNavigate={hideDropdownAndNavigate} />
          <NavbarItem text={"About"} href={'/about'} page={page} hideDropdownAndNavigate={hideDropdownAndNavigate} />
          <NavbarItem text={"Skills"} href={'/skills'} page={page} hideDropdownAndNavigate={hideDropdownAndNavigate} />
          <NavbarItem text={"Portfolio"} href={'/portfolio'} page={page} hideDropdownAndNavigate={hideDropdownAndNavigate} />
          <NavbarItem text={"Contact"} href={'/contact'} page={page} hideDropdownAndNavigate={hideDropdownAndNavigate} />
        </div>
      </div>
    </>
  )
}