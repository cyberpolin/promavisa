"use client"
import { Waypoint } from "react-waypoint"
import Image from "next/image"
import React, { useState } from "react"
import Link from "next/link"

const MenuItem = ({
  href,
  title,
  subMenu,
}: {
  href: string
  title: string
  subMenu?: { href: string; title: string }[]
}) => {
  const hasSubMenu = subMenu && subMenu.length > 0
  return (
    <ul className=" nav navbar-nav">
      <li className=" ">
        <Link
          className=" text-white hover:!text-logoGreen text-base"
          href={href}
        >
          {title}
          {hasSubMenu && <i className="fa fa-chevron-down"></i>}
        </Link>
        {hasSubMenu && (
          <ul className="sub-menu !bg-logoDarkBrown">
            {subMenu.map(({ href, title }, i) => (
              <li key={i}>
                <a className=" text-white hover:!text-logoGreen" href={href}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  )
}
const MenuContent = ({
  removeMargin,
  toggleMenu,
}: {
  removeMargin?: boolean
  toggleMenu?: () => void
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      inputRef.current && inputRef.current.focus()
    }
  }
  return (
    <div className="header-nav navbar-collapse min-h-16 bg-logoDarkBrown !justify-end ">
      <div className={`hidden md:flex flex-1 ${removeMargin ? "" : "ml-44"} `}>
        <MenuItem href="#" title="Inicio" />
        <MenuItem
          href="javascript:;"
          title="Sucursales"
          subMenu={[
            { href: "javascript:;", title: "Opcion 1" },
            { href: "javascript:;", title: "Opcion 2" },
            { href: "javascript:;", title: "Opcion 3" },
            { href: "javascript:;", title: "Opcion 4" },
          ]}
        />
        <MenuItem href="#" title="Productos" />
        <MenuItem href="#" title="Servicios" />
        <MenuItem href="#" title="Contacto" />
      </div>
      <div className="flex flex-none md:mr-8 mr-4  ">
        <input
          type="search"
          ref={inputRef}
          name="search"
          placeholder="Ingresa tu busqueda"
          className={`
          border-slate-700
          bg-logoDarkBrown
          border-2
          text-base
          p-2
          rounded-md
          transition-all
          ${isSearchOpen ? "opacity-100" : "opacity-0 -mr-11 -z-10"}
          `}
        />
        <i
          className=" m-3 fa fa-search fa-lg text-white hover:!text-logoGreen cursor-pointer"
          onClick={toggleSearch}
        ></i>
        <i
          className="hidden mt-3 mb-3 ml-0 mr-0 md:m-3 fa fa-bars fa-lg text-white hover:!text-logoGreen cursor-pointer"
          onClick={toggleMenu}
        ></i>
      </div>
    </div>
  )
}

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Waypoint
        onEnter={() => {
          setIsSticky(false)
        }}
      >
        <div className="hidden md:flex header-middle bg-white">
          <div className="container">
            <div className="logo-header">
              <a href="index.html">
                <Image
                  src="/images/logotipo.png"
                  width="60"
                  height="150"
                  alt="Proveedora de maderas de Villahermosa"
                />
              </a>
            </div>
            <div className="header-info">
              <ul>
                <li>
                  <div>
                    <div className="icon-sm">
                      <span className="icon-cell  site-text-primary">
                        <i className="flaticon-placeholder"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <strong>Dirección </strong>
                      <span>Av. Cesar Sandino #333</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="icon-sm">
                      <span className="icon-cell  site-text-primary">
                        <i className="flaticon-smartphone"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <strong>Teléfono</strong>
                      <span>993-123-123</span>
                    </div>
                  </div>
                </li>
                <li className="btn-col-last">
                  <div>
                    <div className="icon-sm">
                      <span className="icon-cell  site-text-primary">
                        <i className="iconmoon-email"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <strong>Abrimos </strong>
                      <span>Lun - Sab: 10:00 - 20:00 </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Waypoint>
      <Waypoint
        onLeave={() => {
          setIsSticky(true)
        }}
        topOffset={"60px"}
      >
        <div>
          <div className={`min-w-full hidden md:flex justify-center`}>
            <div className={`max-w-1149 min-h-16 bg-logoBrown flex-1 `}>
              <div className="header-nav navbar-collapse">
                <MenuContent removeMargin />
              </div>
            </div>
          </div>
          {/* sticky */}
          <div
            className={`min-w-full flex justify-center fixed delay-150 transition-all ease-linear duration-200 ${
              isSticky ? "top-0" : "md:-top-40 -top-0"
            }`}
          >
            <div className={`max-w-1149 bg-logoBrown flex-1 `}>
              <ul
                className={`md:hidden w-2/3 h-screen fixed transition-all ${
                  isMenuOpen ? "left-0" : "-left-2/3"
                } p-2 bg-logoDarkBrown z-50 pt-4 `}
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li
                    key={i}
                    className="p-3 text-lg border-t-2 border-slate-700 border-opacity-10"
                  >
                    <a className="!text-slate-300 " href="javascript:;">
                      Opcion {i}
                    </a>
                  </li>
                ))}
              </ul>
              <div
                className={`transition-transform bg-white border radius-5 md:w-36 md:h-36 h-20 w-20 fixed ml-5 p-2 z-10 rounded-b-md`}
              >
                <Image
                  className="transition-transform duration-200 ease-linear md:scale-100"
                  src="/images/logotipo.png"
                  width="120"
                  height="150"
                  alt="Proveedora de maderas de Villahermosa"
                />
              </div>
              <MenuContent toggleMenu={toggleMenu} />
            </div>
          </div>
        </div>
      </Waypoint>
    </>
  )
}

export default StickyHeader
