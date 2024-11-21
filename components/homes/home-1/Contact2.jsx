"use client";
import { useEffect, useState } from "react";

export default function Contact2() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const selectedPlanData = localStorage.getItem("selectedPlan");
    if (selectedPlanData) {
      try {
        const { title, period } = JSON.parse(selectedPlanData);
        const isWebDev = title.includes('Desenvolvimento Web');
        setMessage(
          isWebDev
            ? `Olá, gostaria de contratar o plano ${title}.`
            : `Olá, gostaria de contratar o plano ${title.replace('Social Media - ', '')} ${period}.`
        );
        localStorage.removeItem("selectedPlan");
      } catch (error) {
        console.error("Erro ao processar dados do plano:", error);
      }
    }
  }, []);

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-9">
          <div className="pe-lg-5">
            <h2 className="h5">Entre em contato conosco</h2>

            <p className="text-gray mb-0">
              Estamos prontos para transformar a presença digital da sua empresa. Nossa equipe altamente qualificada 
              desenvolve estratégias personalizadas de marketing digital e gestão de redes sociais que geram resultados 
              reais. Com anos de experiência no mercado, sabemos exatamente como impulsionar seu negócio, aumentar 
              seu alcance e converter seguidores em clientes fiéis. Deixe-nos ajudar você a alcançar todo o potencial 
              da sua marca no ambiente digital.
            </p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="row mb-60 mb-sm-50">
            <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".3s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                  <div className="alt-features-icon-s">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                    </svg>
                  </div>
                </div>
                <h4 className="alt-features-title">Fale Conosco</h4>
                <div className="alt-features-descr clearlinks">
                  <div>
                    <a href="mailto:contato@cnpmidia.com.br">
                      contato@cnpmidia.com.br
                    </a>
                  </div>
                  <div>+55 (11) 99999-9999</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="mb-sm-50">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form pe-lg-5"
            id="contact_form"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Digite seu nome"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Digite seu email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="pt-20">
                  <button
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    id="submit_btn"
                    aria-controls="result"
                  >
                    <span>Enviar Mensagem</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-tip pt-20 pt-sm-0 mt-sm-20">
                  <i className="icon-info size-16" />
                  Todos os campos são obrigatórios. Ao enviar o formulário você
                  concorda com os <a href="#">Termos e Condições</a> e{" "}
                  <a href="#">Política de Privacidade</a>.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
        {/* <div className="col-md-6 d-flex align-items-stretch">
          <div className="map-boxed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975774948833!2d-46.6522791!3d-23.5645224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9f875c6b4e607!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1709669436099!5m2!1spt-BR!2sbr"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
