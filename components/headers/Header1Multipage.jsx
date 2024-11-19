"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav2 from "./components/Nav2";
import LanguageSelect from "./components/LanguageSelect";

export default function Header1Multipage({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      <div className="nav-logo-wrap local-scroll">
        <Link href={`/`} className="logo">
          <Image
            src="/assets/images/logo-dark.svg"
            alt="Your Company Logo"
            width={105}
            height={34}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/logo-white.svg"
            alt="Your Company Logo"
            width={105}
            height={34}
            className="dark-mode-logo"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>

      <div className="inner-nav desktop-nav">
        <ul className="clearlist local-scroll">
          <Nav2 links={links} />
        </ul>
        <ul className="items-end clearlist">
          {/* <LanguageSelect /> */}
          <li>
            <Link href="/main-pages-contact-1" className="opacity-1 no-hover">
              <span className="link-hover-anim underline" data-link-animate="y">
                <span className="link-strong link-strong-unhovered">
                  Let's work together
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  Let's work together
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
