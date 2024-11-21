import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false,
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { services6 } from "@/data/services";
import Benefits2 from "@/components/homes/home-1/Benefits2";

import Link from "next/link";
import { features2 } from "@/data/features";
import Pricing from "@/components/homes/home-1/Pricing";
import Image from "next/image";
import { menuItemsDark } from "@/data/menu";
import { pricing, pricingTrafego, pricingDev } from "@/data/pricing";

export const metadata = {
  title: "Serviços | CNP Mídia - Marketing Digital e Gestão de Redes Sociais",
  description: "Conheça nossos serviços de marketing digital, gestão de redes sociais, criação de conteúdo e estratégias digitais personalizadas para seu negócio.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="page-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-11.jpg)",
                }}
              >
                <div className="container position-relative pt-50 pb-100 pb-sm-20">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s"
                        >
                          Nossos Serviços
                        </h2>
                        <h1 className="hs-title-1 mb-30">
                          <span className="wow charsAnimIn" data-splitting="chars">
                            <AnimatedText text="Soluções criativas que impulsionam seu negócio." />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-10 offset-lg-1">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              O poder do marketing digital para transformar seu negócio e alcançar resultados extraordinários.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
              <section className="page-section light-content pt-0" id="services">
                <div className="container position-relative mt-n120 mt-sm-n60">
                  <div className="row mb-n30">
                    {services6.map((elm, i) => (
                      <div
                        key={i}
                        className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30"
                      >
                        <div className="services-3-item round text-center">
                          <div className="wow fadeInUpShort" data-wow-offset={50}>
                            <div className="services-3-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={elm.width}
                                height={elm.height}
                                viewBox={`0 0 ${elm.width} ${elm.height}`}
                                aria-hidden="true"
                              >
                                <path d={elm.path} />
                              </svg>
                            </div>
                            <h3 className="services-3-title">{elm.title}</h3>
                            <div className="services-3-text">{elm.text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="full-wrapper light-content">
                <div className="page-section bg-border-gradient pt-0 pb-0 scroll-nav-invisible z-index-1">
                  <div className="page-section container position-relative scroll-nav-invisible">
                    <div
                      className="decoration-image-1"
                      data-rellax-y=""
                      data-rellax-speed="0.5"
                      data-rellax-percentage="0.5"
                    >
                      <Image
                        src="/assets/images/demo-gradient/section-image-6.jpg"
                        alt="CNP Mídia - Marketing Digital"
                        width={336}
                        height={406}
                      />
                    </div>
                    <div
                      className="decoration-image-2"
                      data-rellax-y=""
                      data-rellax-speed="-0.5"
                      data-rellax-percentage="0.4"
                    >
                      <Image
                        src="/assets/images/demo-gradient/section-image-7.jpg"
                        alt="CNP Mídia - Gestão de Redes Sociais"
                        width={350}
                        height={256}
                      />
                    </div>
                    <div className="row text-center">
                      <div className="col-md-8 offset-md-2">
                        <p className="section-descr mb-50 mb-sm-40">
                          Procurando serviços exclusivos de marketing digital? Entre em contato e receba uma consultoria gratuita para sua empresa.
                        </p>
                        <div className="local-scroll">
                          <Link
                            href="/main-pages-contact-1"
                            className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                          >
                            <span>Fale Conosco</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="page-section bg-dark-1 light-content">
                <Benefits2 />
              </section>
              <section
                className="page-section bg-scroll light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-gradient/section-bg-3.jpg)",
                }}
              >
                <div className="bg-overlay bg-gradient-dark-alpha-2 d-none d-md-block"></div>
                <div className="bg-overlay bg-dark-1 opacity-085 d-md-none"></div>
                <div className="container position-relative">
                  <div className="row wow fadeInUp">
                    <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                      <h2 className="section-title mb-40 mb-sm-30">
                        Impulsione seu Negócio com Marketing Digital
                      </h2>
                      <p className="mb-50 mb-sm-40">
                        Desenvolvemos estratégias personalizadas para aumentar sua presença digital, engajar seu público-alvo e converter seguidores em clientes. Nossa equipe especializada está pronta para transformar sua marca.
                      </p>
                      <div className="local-scroll mb-70 mb-sm-50">
                        <Link
                          href="/main-pages-contact-1"
                          className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                        >
                          <span>Solicitar Orçamento</span>
                        </Link>
                      </div>
                      <div className="row mt-n10">
                        {features2.map((elm, i) => (
                          <div key={i} className="col-lg-6 d-flex mt-10">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">{elm.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="page-section bg-dark-1 bg-gradient-gray-dark-2 light-content bg-scroll">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-caption mb-xs-10 wow fadeInUp">
                        Nossos Planos
                      </h2>
                      <h3 className="section-title mb-50 mb-sm-30">
                        <span className="wow charsAnimIn" data-splitting="chars">
                          Invista no crescimento do seu negócio com nossos planos personalizados.
                        </span>
                      </h3>
                    </div>
                  </div>

                  {/* Social Media Pricing */}
                  <div className="row mb-70">
                    <div className="col-12 text-center mb-40">
                      <h3 className="section-subtitle">Social Media e Estratégia</h3>
                    </div>
                    <div className="col-xl-10 offset-xl-1">
                      <Pricing items={pricing} />
                    </div>
                  </div>

                  {/* Tráfego Pago Pricing */}
                  <div className="row mb-70">
                    <div className="col-12 text-center mb-40">
                      <h3 className="section-subtitle">Tráfego Pago</h3>
                    </div>
                    <div className="col-xl-10 offset-xl-1">
                      <Pricing items={pricingTrafego} />
                    </div>
                  </div>

                  {/* Development Pricing */}
                  <div className="row">
                    <div className="col-12 text-center mb-40">
                      <h3 className="section-subtitle">Desenvolvimento Web e Programação</h3>
                    </div>
                    <div className="col-xl-10 offset-xl-1">
                      <Pricing items={pricingDev} />
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer1 dark />
          </div>
        </div>
      </div>
    </>
  );
}
