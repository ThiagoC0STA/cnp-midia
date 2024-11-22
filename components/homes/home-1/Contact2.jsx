"use client";
import { useEffect, useState } from "react";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const selectedPlanData = localStorage.getItem("selectedPlan");
    if (selectedPlanData) {
      try {
        const { title, period } = JSON.parse(selectedPlanData);
        const isWebDev = title.includes("Desenvolvimento Web");
        const message = isWebDev
          ? `Olá, gostaria de contratar o plano ${title}.`
          : `Olá, gostaria de contratar o plano ${title.replace(
              "Social Media - ",
              ""
            )} ${period}.`;
        setFormData((prev) => ({ ...prev, message }));
        localStorage.removeItem("selectedPlan");
      } catch (error) {
        console.error("Erro ao processar dados do plano:", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "", phone: "" });
      } else {
        const { message } = await response.json();
        setError(message || "Erro ao enviar o formulário.");
      }
    } catch (err) {
      setError("Erro inesperado. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container position-relative">
      <div className="row ">
        <div className="col-lg-9">
          <div className="pe-lg-5">
            <h2 className="h5">Entre em contato conosco</h2>

            <p className="text-gray mb-0">
              Estamos prontos para transformar a presença digital da sua
              empresa. Nossa equipe altamente qualificada desenvolve estratégias
              personalizadas de marketing digital e gestão de redes sociais que
              geram resultados reais. Com anos de experiência no mercado,
              sabemos exatamente como impulsionar seu negócio, aumentar seu
              alcance e converter seguidores em clientes fiéis. Deixe-nos ajudar
              você a alcançar todo o potencial da sua marca no ambiente digital.
            </p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="row mb-60 mb-sm-50">
            <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch mt-on-mobile">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".3s"
              >
                <h4 className="alt-features-title">
                  Fale Conosco por email ou abaixo
                </h4>
                <div className="alt-features-descr clearlinks">
                  <a href="mailto:contato@cnpmidia.com.br">
                    contato@cnpmidia.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="mb-sm-50">
          <form onSubmit={handleSubmit} className="form contact-form pe-lg-5">
            <div className="row mt-4">
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="input-lg round form-control"
                    placeholder="Digite seu telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Digite seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="pt-20">
                  <button
                    type="submit"
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </div>
              </div>
            </div>
          </form>
          {success && (
            <p className="text-success">
              Obrigado por entrar em contato! Recebemos sua mensagem e
              retornaremos em breve.
            </p>
          )}
          {error && <p className="text-danger">Erro: {error}</p>}
        </div>
      </div>
    </div>
  );
}
