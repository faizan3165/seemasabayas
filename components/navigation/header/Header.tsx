"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useSelector } from "react-redux";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

import Wrapper from "../../shared/Wrapper";
import DeskMenu from "../menu/DeskMenu";
import MobileMenu from "../menu/MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showHeader, setShowHeader] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const { cartItems } = useSelector((state: any) => state.cart);

  const showNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !showMobileMenu) {
        setShowHeader("-translate-y-[80px]");
      } else {
        setShowHeader("shadow-md");
      }
    } else {
      setShowHeader("translate-y-0");
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", showNavbar);

    return () => {
      window.removeEventListener("scroll", showNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${showHeader}`}
    >
      <Wrapper className={`h-[60px] flex justify-between items-center`}>
        {/* Logo Start */}
        <Link href={"/"}>
          <Image
            src={"/logos/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className="md:w-[60px] rounded-full max-sm:hidden"
          />

          <Image
            src={"/logos/logo.png"}
            alt="logo"
            width={100}
            height={100}
            priority
            className="md:w-[60px] rounded-full md:hidden block"
          />
        </Link>
        {/* Logo End */}

        {/* Desktop Menu Start */}
        <DeskMenu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {/* Desktop Menu End */}

        {/* Mobile Menu Start */}
        {showMobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        )}
        {/* Mobile Menu End */}

        {/* Icons Container Start */}
        <div className={`flex items-center gap-2 text-dark-1`}>
          {/* Wishlist Icon Start
          <div className={`icon_container`}>
            <Link href={"//wishlist"}>
              <IoMdHeartEmpty className={`text-[19px] md:text-[24px]`} />

              <div
                className={`h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-light-1 text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]`}
              >
                15
              </div>
            </Link>
          </div>
          Wishlist Icon End */}

          {/* Cart Icon Start */}
          <div className={`icon_container`}>
            <Link href={"/cart"}>
              <BsCart className={`text-[15px] md:text-[20px]`} />
              {cartItems.length > 0 && (
                <div
                  className={`h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-light-1 text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]`}
                >
                  {cartItems.length}
                </div>
              )}
            </Link>
          </div>
          {/* Cart Icon End */}

          {/* User Icon Start */}
          {/* <div
            className={`w-12 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative`}
          >
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <Link href={"/sign-in"}>
                <Image
                  src={"/assets/user.svg"}
                  alt="sign-in"
                  width={30}
                  height={40}
                />
              </Link>
            </SignedOut>
          </div> */}
          {/* User Icon End */}

          {/* Mobile Menu Icon Start */}
          <div className={`icon_container -mr-2 md:hidden`}>
            {showMobileMenu ? (
              <VscChromeClose
                className={`text-[16px]`}
                onClick={() => setShowMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className={`text-[20px]`}
                onClick={() => setShowMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile Menu Icon End */}
        </div>
        {/* Icons Container Start */}
      </Wrapper>
    </header>
  );
};

export default Header;
