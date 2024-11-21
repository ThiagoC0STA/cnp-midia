import React from "react";

export default function TermosECondicoes({ dark = true }) {
  return (
    <>
      <div className={`page-section ${dark ? "bg-dark-1 light-content" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h1 className="section-title mb-50 wow fadeInUp">
                Termos e Condições de Uso
              </h1>

              <div className="terms-content wow fadeInUp">
                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    1. Aceitação dos Termos
                  </h2>
                  <p>
                    Estes Termos e Condições regem o uso de todos os serviços
                    fornecidos pela CNP Mídia, incluindo, mas não se limitando a
                    estratégias digitais, gestão de redes sociais, criação de
                    sites e produtos digitais personalizados. Ao acessar este
                    site ou contratar nossos serviços, você confirma que leu,
                    entendeu e concorda com os termos aqui descritos.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    2. Serviços Oferecidos
                  </h2>
                  <p>
                    A CNP Mídia oferece serviços especializados em marketing
                    digital e social media. Esses serviços incluem, mas não se
                    limitam a:
                  </p>
                  <ul>
                    <li>Gestão estratégica de redes sociais;</li>
                    <li>Criação de conteúdo personalizado para marcas;</li>
                    <li>
                      Desenvolvimento de websites responsivos e otimizados;
                    </li>
                    <li>Design gráfico para campanhas digitais;</li>
                    <li>Análise e monitoramento de métricas de desempenho.</li>
                  </ul>
                  <p>
                    Os serviços serão prestados conforme o escopo acordado em
                    contrato específico entre a agência e o cliente.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    3. Responsabilidade do Usuário
                  </h2>
                  <p>
                    O usuário é responsável por fornecer informações precisas e
                    atualizadas para viabilizar a execução dos serviços. O uso
                    indevido ou o fornecimento de informações falsas poderá
                    resultar na suspensão ou encerramento do serviço contratado.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    4. Direitos Autorais e Propriedade Intelectual
                  </h2>
                  <p>
                    Todos os materiais criados pela CNP Mídia, incluindo textos,
                    imagens, vídeos e outros conteúdos digitais, são protegidos
                    por direitos autorais. A reprodução, distribuição ou
                    utilização desses materiais para fins comerciais sem
                    autorização prévia da agência é estritamente proibida.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">5. Privacidade</h2>
                  <p>
                    A CNP Mídia valoriza a sua privacidade. Todas as informações
                    coletadas durante a prestação de serviços serão tratadas de
                    acordo com a nossa Política de Privacidade, disponível neste
                    site.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    6. Alterações nos Termos
                  </h2>
                  <p>
                    A CNP Mídia se reserva o direito de alterar estes Termos e
                    Condições a qualquer momento, com aviso prévio de 30 dias
                    para mudanças significativas. Recomendamos que o usuário
                    reveja periodicamente esta página para manter-se informado
                    sobre eventuais atualizações.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    7. Limitação de Responsabilidade
                  </h2>
                  <p>
                    A CNP Mídia não será responsabilizada por perdas ou danos
                    decorrentes de falhas técnicas, indisponibilidade de
                    plataformas terceirizadas ou uso inadequado dos serviços
                    fornecidos.
                  </p>
                </section>

                <section className="mb-40">
                  <h2 className="section-title-small mb-20">
                    8. Contato e Suporte
                  </h2>
                  <p>
                    Para dúvidas, suporte ou esclarecimentos adicionais, entre
                    em contato conosco pelo email{" "}
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
