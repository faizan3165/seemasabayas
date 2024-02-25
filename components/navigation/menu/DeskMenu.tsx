import React, { Fragment } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import { menuItems, subMenuItems } from "@/constants/menu";

const Menu = ({ showCatMenu, setShowCatMenu }: any) => {
  return (
    <ul className={`hidden md:flex items-center gap-8 font-medium text-black`}>
      {menuItems?.map((item) => (
        <Fragment key={item.id}>
          {!!item.subMenu ? (
            <li
              className="cursor-pointer flex items-center gap-2 relative"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {item?.name}
              <BsChevronDown size={14} />

              {showCatMenu && (
                <ul className="bg-light-1 absolute top-6 left-0 min-w-[250px] px-1 py-1 text-dark-1 shadow-lg">
                  {subMenuItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem?.href}
                      onClick={() => setShowCatMenu(false)}
                    >
                      <li className="h-12 flex flex-row justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                        {subItem.name}

                        {/* <span className="opacity-50 text-sm">78</span> */}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer">
              <Link href={item?.href}>{item?.name}</Link>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default Menu;
