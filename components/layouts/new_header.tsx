import { auth } from '@clerk/nextjs';
import Link from "next/link"
import { dashboardConfig } from "@/config/dashboard"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/UI/button"
import { CartSheet } from "@/components/cart/cart_sheet"
import { MainNav } from "@/components/layouts/main_nav"
import { MobileNav } from "@/components/layouts/mobile_nav"
import { ThemeToggle } from "./theme_toggle"

import React from 'react'
import UserMenu from './user_menu';

const NewHeader = () => {
    const { userId } = auth();
  
    return (
        <header className="fixed clearNav top-0 z-30 w-full">
      <div className="w-full flex flex-row h-14 justify-between items-center flex-wrap px-2 py-1"> 
        <div>
        <MainNav items={siteConfig.mainNav} />
        </div>
        <MobileNav
          mainNavItems={siteConfig.mainNav}
          sidebarNavItems={dashboardConfig.sidebarNav}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle/>
            <CartSheet />
            {userId ? (<UserMenu/>) : (
              <Link href="/signin">
                <div
                  className={buttonVariants({
                    variant:'outline',
                    size: "sm",
                  })}
                >
                  Sign In
                  <span className="sr-only">Sign In</span>
                </div>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
    );
}

export default NewHeader
