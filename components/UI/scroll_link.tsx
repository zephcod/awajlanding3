'use client'
// components/ScrollLink.tsx
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import { buttonVariants } from "./button";
// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
    //   top: elem?.getBoundingClientRect().bottom,
      behavior: "smooth",
    });
  };
  return (
    <Link scroll={false} {...props} onClick={handleScroll}>
        <div className={buttonVariants({
                variant:'default',
                size: "default",
            })}
            >
            {children}
            <span className="sr-only">{children}</span>
        </div>
    </Link>
  );
};
export default ScrollLink;
