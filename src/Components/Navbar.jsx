import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  Home,
  Info,
  Briefcase,
  GraduationCap,
  Phone,
} from "lucide-react";

import OopsLogicLogo from "../assets/OopsLogicLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Close mobile menu after route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);


  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={18} />,
    },
    {
      name: "About",
      path: "/about",
      icon: <Info size={18} />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Courses",
      path: "/courses",
      icon: <GraduationCap size={18} />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <Phone size={18} />,
    },
  ];


  return (
    <header className="fixed top-3 sm:top-5 left-0 w-full z-50 px-3 sm:px-5">

      <div className="max-w-7xl mx-auto">

        <div
          className={`
          rounded-2xl border border-white/40 backdrop-blur-xl
          transition-all duration-300
          ${
            scrolled
            ? "bg-white/95 shadow-2xl"
            : "bg-white/80 shadow-xl"
          }
          `}
        >


          {/* Main Navbar */}

          <div className="flex items-center justify-between 
          h-16 sm:h-20 px-4 sm:px-6">


            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3"
            >

              <img
                src={OopsLogicLogo}
                alt="Oops Logic"
                className="
                w-10
                sm:w-12
                lg:w-14
                transition-transform
                duration-300
                hover:rotate-6
                "
              />


              <div className="leading-tight">

                <h2
                  className="
                  text-lg
                  sm:text-xl
                  font-bold
                  text-slate-900
                  "
                >
                  Oops
                  <span className="text-blue-600">
                    {" "}Logic
                  </span>
                </h2>


                <p
                  className="
                  hidden
                  sm:block
                  text-[11px]
                  sm:text-xs
                  text-slate-500
                  "
                >
                  Technologies & Learning center
                </p>

              </div>

            </Link>



            {/* Desktop Navigation */}

            <nav
              className="
              hidden
              lg:flex
              items-center
              gap-1
              xl:gap-2
              "
            >

              {
                navLinks.map((item)=>(

                  <Link
                    key={item.name}
                    to={item.path}

                    className={`
                    flex items-center gap-2
                    px-4
                    xl:px-5
                    py-3
                    rounded-full
                    text-sm
                    xl:text-base
                    font-medium
                    transition-all duration-300

                    ${
                      location.pathname === item.path
                      ?
                      "bg-blue-600 text-white shadow-lg"
                      :
                      "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    }

                    `}
                  >

                    {item.icon}

                    {item.name}

                  </Link>

                ))
              }

            </nav>



            {/* Desktop CTA */}

            <div className="hidden lg:block">

              <a
                href="https://wa.me/916369868846"
                target="_blank"
                rel="noopener noreferrer"

                className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-5
                xl:px-6
                py-3
                text-sm
                xl:text-base
                font-semibold
                text-white
                shadow-lg
                transition
                hover:scale-105
                "
              >

                Free Consultation


                <ArrowRight
                  size={18}
                  className="
                  transition
                  group-hover:translate-x-1
                  "
                />

              </a>

            </div>



            {/* Mobile Button */}

            <button

              onClick={()=>setIsOpen(!isOpen)}

              className="
              lg:hidden
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              bg-slate-100
              flex
              items-center
              justify-center
              hover:bg-blue-100
              transition
              "

            >

              {
                isOpen
                ?
                <X size={23}/>
                :
                <Menu size={23}/>
              }


            </button>



          </div>





          {/* Mobile Menu */}

          <div
            className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500

            ${
              isOpen
              ?
              "max-h-[700px] opacity-100"
              :
              "max-h-0 opacity-0"
            }

            `}
          >

            <div
              className="
              border-t
              border-slate-200
              bg-white
              rounded-b-2xl
              px-4
              py-5
              "
            >


              {
                navLinks.map((item)=>(

                  <Link

                    key={item.name}

                    to={item.path}

                    className={`
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3.5
                    mb-2
                    rounded-xl
                    font-medium
                    transition

                    ${
                      location.pathname===item.path

                      ?

                      "bg-blue-600 text-white"

                      :

                      "text-slate-700 hover:bg-blue-50 hover:text-blue-600"

                    }

                    `}

                  >

                    {item.icon}

                    {item.name}

                  </Link>


                ))
              }



              {/* Mobile WhatsApp CTA */}

              <a

                href="https://wa.me/916369868846"

                target="_blank"

                rel="noopener noreferrer"

                className="
                mt-4
                w-full
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                py-4
                font-semibold
                text-white
                transition
                hover:scale-[1.02]
                "

              >

                Free Consultation

                <ArrowRight size={18}/>

              </a>


            </div>


          </div>


        </div>


      </div>


    </header>
  );
};


export default Navbar;