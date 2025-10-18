import React from "react";
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { navbarItems } from "../../../constants/navItemsData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className={`mx-auto px-20 py-6 fixed top-0 left-0 right-0 ${
        scrolled
          ? "bg-white shadow-[0px_27px_26px_-24px_rgba(0,_0,_0,_0.1)]"
          : "bg-transparent"
      } duration-200 z-10`}
    >
      <div className="hidden md:flex items-center justify-between">
        <div id="logo">
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_dark.svg?v=1676480977&width=409"
            alt=""
            className="w-[150px]"
          />
        </div>
        <div id="navbar">
          <div className=" flex items-center justify-center">
            <ul className="flex flex-row justify-center gap-10 items-center text-[18px] font-semibold tracking-wide">
              {navbarItems &&
                navbarItems.map((item) => (
                  <li
                    className="relative group py-3 hover:text-gray-800 text-gray-400 duration-200"
                    key={item.id}
                  >
                    <a href={item.link} className="flex gap-2">
                      {item.name} <ChevronDown />
                    </a>
                    <ul
                      className="absolute top-full py-2 w-[200px] bg-white shadow-md p-4 hidden
                                            group-hover:block"
                    >
                      {item.subItems &&
                        item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <a
                              href={subItem.link}
                              className="hover:bg-gray-100 block px-4 py-2"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div id="actions" className="flex gap-10">
          <div className="flex gap-2">
            <Search /> Search
          </div>
          <div className="flex gap-2">
            <ShoppingCart /> Cart (0)
          </div>
          <div className="flex gap-2">
            <Menu />
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between fixed top-0 left-0 right-0 bg-white py-4 px-6">
        <div className="flex flex-row items-center justify-between gap-8">
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_dark.svg?v=1676480977&width=409"
            alt=""
            className="w-[150px]"
          />
        </div>
        <div
          className="rounded-xl px-4 py-3 flex items-center gap-6
                        "
        >
          <Menu className="w-[20px]" />
        </div>
      </div>
    </div>
  );
}
