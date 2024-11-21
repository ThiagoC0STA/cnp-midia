"use client";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";
import "jarallax/dist/jarallax.min.css";
import { usePathname } from "next/navigation";
import "photoswipe/dist/photoswipe.css";
import { useEffect } from "react";
import "react-modal-video/css/modal-video.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "../public/assets/css/styles.css";

import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import { init_wow } from "@/utlis/initWowjs";
import "tippy.js/dist/tippy.css";

export default function RootLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    var mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();
    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [path]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm").then(() => {});
    }
  }, []);

  return (
    <html lang="pt-BR" className="no-mobile no-touch ">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="./favicon-cnp.svg" />
      </head>
      <body className="appear-animate body">{children}</body>
    </html>
  );
}
