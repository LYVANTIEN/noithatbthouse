"use client";

import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const { main } = menu;
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const [direction, setDirection] = useState(null);

  const pathname = usePathname();
  const asPath = pathname;

  useEffect(() => {
    const header = headerRef.current;
    const headerHeight = header.clientHeight + 200;
    let prevScroll = 0;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      scrollY > 0 ? setSticky(true) : setSticky(false);

      if (scrollY > headerHeight) {
        prevScroll > scrollY ? setDirection(-1) : setDirection(1);
        prevScroll = scrollY;
      } else {
        setDirection(null);
      }
    });
  }, []);

  const { logo } = config.site;

  return (
    <>
      {/* ===== INLINE GLASS HEADER CSS ===== */}
      <style>{`
        .glass-header {
          background: rgba(255, 255, 255, 0.4); /* 40% */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background 0.3s ease, backdrop-filter 0.3s ease;
        }

        .header-sticky.glass-header {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(16px);
        }

        /* Optional shadow */
        .glass-header {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }

        /* Mobile menu background */
        @media (max-width: 1024px) {
          .navbar-nav {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
          }
        }
      `}</style>

      <div className="header-height-fix"></div>

      <header
        ref={headerRef}
        className={`header glass-header ${sticky ? "header-sticky" : ""} ${direction === 1 ? "unpinned" : ""
          }`}
      >
        <nav className="navbar container-xl">
          {/* LOGO */}
          <div className="order-0">
            <Logo src={logo} />
          </div>

          {/* MENU */}
          <ul
            className={`navbar-nav order-2 w-full justify-center lg:order-1 md:w-auto md:space-x-2 lg:flex ${!showMenu && "hidden"
              }`}
          >
            {main.map((menu, i) => (
              <React.Fragment key={i}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>

                    <ul className="nav-dropdown-list hidden max-h-0 overflow-hidden border py-0 transition-all duration-500 group-hover:block group-hover:max-h-[200px] group-hover:py-2 lg:absolute lg:invisible lg:group-hover:visible">
                      {menu.children.map((child, j) => (
                        <li key={j}>
                          <Link
                            href={menu.url}
                            className={`nav-link text-[17px] lg:text-[18px] font-medium ${asPath === menu.url && "active"
                              }`}
                          >
                            {menu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      className={`nav-link ${asPath === menu.url && "active"
                        }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="order-1 ml-auto flex items-center">
            {showMenu ? (
              <button
                className="h-8 w-8 text-3xl lg:hidden"
                onClick={() => setShowMenu(false)}
              >
                <CgClose />
              </button>
            ) : (
              <button
                className="lg:hidden"
                onClick={() => setShowMenu(true)}
              >
                ☰
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
