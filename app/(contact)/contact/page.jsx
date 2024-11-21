import Footer1 from "@/components/footers/Footer1";
import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false,
  }
);
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import Faq from "@/components/common/Faq";
import Contact2 from "@/components/homes/home-1/Contact2";
import { menuItemsDark } from "@/data/menu";

export const metadata = {
  title: "CNP Mídia | Entre em Contato",
  description: "Entre em contato com a CNP Mídia para impulsionar sua presença digital com nossas soluções personalizadas de marketing digital e gestão de redes sociais.",
};

export default function MainAboutPage1Dark() {
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
                  className="page-section pb-100 pb-sm-60 bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/texture2.jpeg)",
                  }}
                >
                  <>
                    <>
                      <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-dark mt-on-mobile"></div>
                      <div className="container position-relative pt-50">
                        <div className="text-center">
                          <div className="row">
                            <div className="col-md-8 offset-md-2">
                              <h2
                                className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                                data-wow-duration="1.2s"
                              >
                                Fale Conosco
                              </h2>
                              <h1 className="hs-title-1 mb-0">
                                <span
                                  className="wow charsAnimIn"
                                  data-splitting="chars"
                                >
                                  Vamos impulsionar seu negócio juntos
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </>
                </ParallaxContainer>
              </section>
              <>
                <section
                  className="page-section bg-dark-1 light-content pt-0"
                  id="contact"
                >
                  <Contact2 />
                </section>
                <hr className="mt-0 mb-0 white" />
                <section className="page-section bg-dark-1 light-content z-index-1">
                  <div className="container position-relative">
                    <div className="position-relative">
                      <div
                        className="decoration-21 d-none d-lg-block"
                        data-rellax-y=""
                        data-rellax-speed="0.75"
                        data-rellax-percentage="0.5"
                      >
                        <Image
                          src="/assets/images/decoration-3.svg"
                          className="svg-shape"
                          width={148}
                          height={148}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row position-relative">
                      <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                        <h3 className="section-title mb-30">
                          Perguntas Frequentes
                        </h3>
                        <p className="text-gray mb-0">
                          Tire suas dúvidas sobre nossos serviços de marketing digital e gestão de redes sociais. Estamos aqui para ajudar sua empresa a crescer no ambiente digital com estratégias personalizadas e resultados comprovados.
                        </p>
                      </div>
                      <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                        <Faq />
                      </div>
                    </div>
                  </div>
                </section>
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
