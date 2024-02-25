import React, { Fragment } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import { menuItems, subMenuItems } from "@/constants/menu";

const MobileMenu = ({
  showCatMenu,
  setShowCatMenu,
  setShowMobileMenu,
}: any) => {
  return (
    <ul
      className={`flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh - 50px)] bg-light-1 border-t text-dark-1`}
    >
      {menuItems?.map((item) => (
        <Fragment key={item.id}>
          {!!item.subMenu ? (
            <li
              className="py-4 px-5 border-b flex flex-col relative"
              onClick={() => setShowCatMenu(!showCatMenu)}
            >
              <div className={`flex justify-between items-center`}>
                {item?.name}
                <BsChevronDown size={14} />
              </div>

              {showCatMenu && (
                <ul className={`bg-black/[0.05] -mx-5 mt-4 -mb-4`}>
                  {subMenuItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem?.href}
                      onClick={() => {
                        setShowCatMenu(false);
                        setShowMobileMenu(false);
                      }}
                    >
                      <li className={`py-4 px-8 border-t flex justify-between`}>
                        {subItem.name}

                        {/* <span className="opacity-50 text-sm">78</span> */}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className={`py-4 px-5 border-b`}>
              <Link href={item?.href} onClick={() => setShowMobileMenu(false)}>
                {item?.name}
              </Link>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default MobileMenu;
