import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
const onePage = false;
const dark = true;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import Facts from "@/components/homes/home-1/Facts";
import Testimonials3 from "@/components/homes/home-1/Testimonials3";
import Faq from "@/components/common/Faq";
import Features from "@/components/homes/home-1/Features";
import Brands2 from "@/components/homes/home-1/Brands2";
import Brands from "@/components/homes/home-1/Brands";
import Benefits from "@/components/homes/home-1/Benefits";
import { menuItemsDark } from "@/data/menu";

export const metadata = {
  title: "Sobre a CNP Mídia | Agência de Marketing Digital",
  description: "Conheça a CNP Mídia, uma agência especializada em marketing digital e gestão de redes sociais, focada em resultados e crescimento para sua marca.",
};

export default function MainAboutPage2Dark() {
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/section-bg-2.jpg)",
                  }}
                >
                  <div className="container position-relative pt-50 pb-100 pb-sm-20">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <h1 className="hs-title-1 mb-30">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Olá! Somos a CNP Mídia." />
                            </span>
                          </h1>
                          <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                              <p
                                className="section-descr mb-0 wow fadeInUp"
                                data-wow-delay="0.6s"
                                data-wow-duration="1.2s"
                              >
                                Somos uma agência especializada em marketing digital, 
                                criando experiências únicas e resultados expressivos para sua marca.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </ParallaxContainer>
              </section>
              <div className="page-section overflow-hidden pt-0 pb-0">
                <div className="marquee marquee-style-2 no-rotate bg-dark-2">
                  <div className="marquee-track marquee-animation-1">
                    <div>Localizada em Curitiba</div>
                    <div>Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                    <div aria-hidden="true">Localizada em Curitiba</div>
                    <div aria-hidden="true">Desde 2018</div>
                  </div>
                </div>
              </div>
              <section
                className="page-section bg-dark-1 light-content"
                id="about"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-sm-4 mb-xs-50">
                      <div className="call-action-4-images">
                        <div className="call-action-4-image-1">
                          <Image
                            src="/assets/images/demo-strong/section-image-1.jpg"
                            alt="CNP Mídia - Marketing Digital"
                            width={500}
                            height={692}
                            className="wow scaleOutIn"
                            data-wow-duration="1.2s"
                          />
                        </div>
                        <div className="call-action-4-image-2">
                          <Image
                            src="/assets/images/demo-strong/section-image-2.jpg"
                            alt="CNP Mídia - Gestão de Redes Sociais"
                            width={500}
                            height={692}
                            className="wow scaleOutIn"
                            data-wow-duration="1.2s"
                            data-wow-offset="0"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
                      <div className="wow linesAnimIn" data-splitting="lines">
                        <h3 className="h5">Nossa Missão</h3>

                        <p className="text-gray">
                          A CNP Mídia é uma agência inovadora e dinâmica especializada em 
                          marketing digital e gestão de redes sociais. Nossa paixão é criar 
                          estratégias digitais que transformam marcas e impulsionam negócios. 
                          Trabalhamos com foco em resultados mensuráveis e crescimento sustentável.
                        </p>

                        <h3 className="h5">Nossa Visão</h3>

                        <p className="text-gray mb-0">
                          Trabalhamos em estreita colaboração com nossos clientes para desenvolver 
                          estratégias personalizadas, criar conteúdo relevante e gerenciar campanhas 
                          eficientes. Nosso objetivo é garantir que cada cliente alcance seus objetivos 
                          de negócio através de uma presença digital forte e autêntica.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
                      <div className="overflow-hidden">
                        <Image
                          src="/assets/images/demo-strong/section-image-3.jpg"
                          alt="CNP Mídia - Resultados"
                          width={330}
                          height={894}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <ParallaxContainer
                className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-2.jpg)",
                }}
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-4 mb-md-60 mb-xs-50">
                      <h2 className="section-title mb-20 wow fadeInUp">
                        Confira nossos resultados.
                      </h2>
                      <p
                        className="section-descr mb-40 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        Desenvolvemos estratégias eficientes que fazem os negócios 
                        de nossos clientes crescerem.
                      </p>
                      <div
                        className="local-scroll wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <Link
                          href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                        >
                          <span>Solicitar Orçamento</span>
                        </Link>
                      </div>
                    </div>{" "}
                    <Facts />
                  </div>
                </div>
              </ParallaxContainer>
              <section className="page-section bg-dark-2 light-content overflow-hidden">
                <Testimonials3 />
              </section>
              <section
                className={`page-section  ${dark ? " light-content" : ""}`}
              >
                {dark ? <Brands2 /> : <Brands />}
              </section>
              <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
              <section
                className={`page-section  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <Benefits />{" "}
              </section>
              <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
              <section
                className={`page-section  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <div className="container position-relative">
                  <div className="row">
                    {/* Images */}
                    <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
                      <div className="call-action-2-images">
                        <div
                          className="call-action-2-image-1"
                          data-rellax-y=""
                          data-rellax-speed="0.5"
                          data-rellax-percentage="0.7"
                        >
                          <Image
                            width={386}
                            height={400}
                            src="/assets/images/promo-3.jpg"
                            alt="Marketing Digital CNP Mídia"
                            className="wow scaleOutIn"
                            data-wow-duration="1.2s"
                            data-wow-offset={255}
                          />
                        </div>
                        <div className="call-action-2-image-2">
                          <Image
                            width={810}
                            height={512}
                            src="/assets/images/promo-4.jpg"
                            alt="Gestão de Redes Sociais CNP Mídia"
                            className="wow scaleOutIn"
                            data-wow-duration="1.2s"
                            data-wow-offset={134}
                          />
                        </div>
                        <div
                          className="call-action-2-image-3"
                          data-rellax-y=""
                          data-rellax-speed="-0.5"
                          data-rellax-percentage="0.5"
                        >
                          <Image
                            width={386}
                            height={500}
                            src="/assets/images/promo-5.jpg"
                            alt="Estratégias Digitais CNP Mídia"
                            className="wow scaleOutIn"
                            data-wow-duration="1.2s"
                            data-wow-offset={0}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Images */}
                    {/* Text */}
                    <div className="col-lg-5 d-flex align-items-center">
                      <div
                        className="wow fadeInUp"
                        data-wow-duration="1.2s"
                        data-wow-offset={255}
                      >
                        <h2 className="section-title mb-50 mb-sm-20">
                          Como trabalhamos?
                        </h2>
                        <Faq />
                        <div className="local-scroll">
                          <Link
                            href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                            className="btn btn-mod btn-large btn-w btn-round btn-hover-anim"
                          >
                            <span>Iniciar Projeto</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* End Text */}
                  </div>
                </div>
              </section>
            </main>
            <Footer1 dark={true} />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
