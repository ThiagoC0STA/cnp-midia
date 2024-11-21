import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">Nossos Serviços</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="Oferecemos as melhores soluções em marketing." />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                O poder da criatividade nos ajuda a resolver desafios complexos
                e a impulsionar resultados.
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Gestão de Redes Sociais
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Criação de Conteúdo
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Tráfego Pago
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Copywriting
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-5"
                aria-controls="services-item-5"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Análise de Métricas
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-6"
                aria-controls="services-item-6"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Estratégia de Marketing
              </a>
            </li>
          </ul>
        </div>

        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Gestão de Redes Sociais</h4>
                  <p className="text-gray mb-0">
                    Gerenciamos suas redes sociais de forma estratégica e profissional. 
                    Criamos e publicamos conteúdo relevante, interagimos com seu público 
                    e construímos uma presença digital forte e consistente para sua marca.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-1.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Criação de Conteúdo</h4>
                  <p className="text-gray mb-0">
                    Desenvolvemos conteúdo estratégico e criativo que conecta sua marca 
                    ao público-alvo. Nosso foco é criar materiais relevantes e 
                    envolventes que geram engajamento e fortalecem seu posicionamento digital.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-2.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Tráfego Pago</h4>
                  <p className="text-gray mb-0">
                    Potencializamos seus resultados através de campanhas 
                    estratégicas de mídia paga. Investimos de forma inteligente 
                    para maximizar seu ROI e alcançar o público certo no momento ideal.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-3.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Copywriting</h4>
                  <p className="text-gray mb-0">
                    Criamos textos persuasivos e envolventes que convertem leitores em clientes. 
                    Nossa escrita estratégica comunica o valor da sua marca e gera conexão 
                    emocional com seu público-alvo.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-4.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-5"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Análise de Métricas</h4>
                  <p className="text-gray mb-0">
                    Transformamos dados em insights acionáveis para sua empresa. 
                    Nossa análise detalhada de métricas permite otimizar estratégias, 
                    identificar oportunidades e tomar decisões baseadas em resultados reais.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-5.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-6"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Estratégia de Marketing</h4>
                  <p className="text-gray mb-0">
                    Desenvolvemos estratégias digitais personalizadas e eficazes para sua marca. 
                    Combinamos planejamento, análise de mercado e tendências para criar uma 
                    presença digital que gera resultados mensuráveis e crescimento sustentável.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-6.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
