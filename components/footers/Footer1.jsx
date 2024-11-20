"use client";
import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer1({ dark = false }) {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"
      }  pb-30`}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link href={"/"} className="mb-30">
              <Image
                src="/assets/images/logo-dark.svg"
                width={105}
                height={34}
                className="light-mode-logo"
                alt="CNP Mídia Logo"
              />

              <Image
                src="/assets/images/logo-white.svg"
                width={105}
                height={34}
                className="dark-mode-logo"
                alt="CNP Mídia Logo"
              />
            </Link>
            <p>
              Somos especialistas em construir autoridade digital para sua marca
              através de estratégias personalizadas de social media.
            </p>
            <div className="clearlinks">
              <a href="mailto:support@cnpmidia.com.br">
                support@cnpmidia.com.br
              </a>
            </div>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Empresa</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Redes Sociais</h3>
                <ul className="fw-menu clearlist">
                  <FooterSocials />
                </ul>
              </div>

              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Legal</h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.path}>{elm.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-gray">
          <div className="col-md-4 col-lg-3">
            <b>
              © CNP Mídia {new Date().getFullYear()}. Todos os direitos
              reservados.
            </b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>Curitiba - PR, Brasil</b>

            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Voltar ao topo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
