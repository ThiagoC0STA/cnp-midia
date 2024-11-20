"use client";

export default function NewsLetter() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3 wow fadeInUp">
          <h2 className="section-title-small text-center mb-40">
            Fique por dentro das nossas novidades
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            id="mailchimp"
            className="form"
          >
            <div className="d-sm-flex justify-content-between mb-20">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Seu email
              </label>
              <input
                placeholder="Digite seu email"
                className="newsletter-field input-lg round"
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                pattern=".{5,100}"
                required
                aria-required="true"
              />
              <button
                type="submit"
                aria-controls="subscribe-result"
                className="newsletter-button btn btn-mod btn-w btn-large btn-round btn-hover-anim"
              >
                <span>Inscrever-se</span>
              </button>
            </div>
            <div className="form-tip">
              <i className="icon-info size-16" /> Ao enviar o formulário você
              concorda com os{" "}
              <a target="_blank" href="/terms">
                Termos e Condições
              </a>{" "}
              e{" "}
              <a target="_blank" href="/policy">
                Política de Privacidade
              </a>
              .
            </div>
            <div
              id="subscribe-result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
