import React from "react";

export default function PoliticaDePrivacidade({ dark = true }) {
  return (
    <>
      <div className={`page-section ${dark ? "bg-dark-1 light-content" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h1 className="section-title mb-50 wow fadeInUp">
                Política de Privacidade
              </h1>

              <div className="privacy-content wow fadeInUp">
                <section className="mb-40">
                  <h2 className="section-title-small mb-20">1. Introdução</h2>
                  <p>
                    Na CNP Mídia, a privacidade dos nossos usuários é uma
                    prioridade. Esta Política de Privacidade descreve como
                    coletamos, usamos e protegemos suas informações pessoais ao
                    acessar nosso site ou contratar nossos serviços.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    2. Coleta de Dados
                  </h2>
                  <p>Coletamos os seguintes tipos de informações:</p>
                  <ul>
                    <li>
                      <strong>Informações fornecidas pelo usuário:</strong>{" "}
                      Nome, email, telefone e outras informações enviadas por
                      meio de formulários ou comunicações diretas.
                    </li>
                    <li>
                      <strong>Dados automáticos:</strong> Informações técnicas,
                      como endereço IP, tipo de navegador, sistema operacional,
                      tempo de acesso e páginas visitadas.
                    </li>
                  </ul>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    3. Uso das Informações
                  </h2>
                  <p>
                    As informações coletadas são utilizadas para os seguintes
                    fins:
                  </p>
                  <ul>
                    <li>Personalizar e melhorar nossos serviços;</li>
                    <li>Responder a solicitações e contatos realizados;</li>
                    <li>
                      Enviar newsletters e materiais promocionais, quando
                      autorizado pelo usuário;
                    </li>
                    <li>Realizar análises de desempenho e métricas do site.</li>
                  </ul>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    4. Compartilhamento de Dados
                  </h2>
                  <p>
                    A CNP Mídia não vende ou aluga suas informações pessoais. No
                    entanto, podemos compartilhar informações com:
                  </p>
                  <ul>
                    <li>
                      Parceiros e fornecedores necessários para a execução dos
                      serviços;
                    </li>
                    <li>
                      Autoridades legais, caso seja requerido por lei ou ordem
                      judicial.
                    </li>
                  </ul>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">5. Cookies</h2>
                  <p>
                    Utilizamos cookies para melhorar a experiência do usuário no
                    nosso site. Você pode desativar os cookies nas configurações
                    do seu navegador, mas isso pode afetar o funcionamento de
                    algumas funcionalidades.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    6. Segurança dos Dados
                  </h2>
                  <p>
                    Adotamos medidas técnicas e organizacionais para proteger
                    seus dados contra acesso não autorizado, perda ou
                    destruição. No entanto, nenhum sistema de segurança é
                    completamente infalível, e não podemos garantir 100% de
                    proteção.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    7. Direitos do Usuário
                  </h2>
                  <p>Você tem o direito de:</p>
                  <ul>
                    <li>
                      Acessar, corrigir ou excluir suas informações pessoais;
                    </li>
                    <li>
                      Solicitar a interrupção do envio de comunicações
                      promocionais;
                    </li>
                    <li>Retirar seu consentimento para o uso de seus dados.</li>
                  </ul>
                  <p>
                    Para exercer seus direitos, entre em contato através do
                    email
                    <strong> contato@cnpmidia.com</strong>.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    8. Alterações na Política
                  </h2>
                  <p>
                    Esta Política de Privacidade pode ser atualizada
                    periodicamente. Recomendamos que revise esta página
                    regularmente para estar ciente de quaisquer mudanças.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">9. Contato</h2>
                  <p>
                    Em caso de dúvidas ou solicitações relacionadas à nossa
                    Política de Privacidade, entre em contato pelo email{" "}
                    <strong>support@cnpmidia.com</strong>.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
