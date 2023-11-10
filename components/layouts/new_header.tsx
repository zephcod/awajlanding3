'use client'
import useAuth from "@/hooks/use_auth"
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
    const {authStatus} = useAuth();
  
    return (
    <header className="sticky clearNav top-0 z-30 w-full">
      <div className="flex flex-row h-14 justify-between items-center flex-wrap px-4 py-1"> 
        <MainNav items={siteConfig.mainNav} />
        <MobileNav
          mainNavItems={siteConfig.mainNav}
          sidebarNavItems={dashboardConfig.sidebarNav}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle/>
            {/* <CartSheet /> */}
            {authStatus ? 
            (<UserMenu/>)
             : (
              <Link href="/signin">
                <div
                  className={buttonVariants({
                    variant:'outline',
                    size: "sm",
                  })}
                >
                  Get Started
                  <span className="sr-only">Get started</span>
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
