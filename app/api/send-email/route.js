import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, phone } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ message: "Nome e email são obrigatórios" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "support@cnpmidia.com",
        pass: "rjvr nbja rxsb nhjj",
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(45deg, #2193b0, #6dd5ed);
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background: #fff;
              padding: 20px;
              border-radius: 0 0 8px 8px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background: #f8f9fa;
              border-radius: 4px;
            }
            .label {
              font-weight: bold;
              color: #2193b0;
              display: block;
              margin-bottom: 5px;
            }
            .message {
              white-space: pre-wrap;
              line-height: 1.8;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Nova Mensagem de Contato</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Nome:</span>
              ${name}
            </div>
            <div class="field">
              <span class="label">Email:</span>
              ${email}
            </div>
            <div class="field">
              <span class="label">Mensagem:</span>
              <div class="message">${message}</div>
            </div>
            <div class="field">
              <span class="label">Telefone:</span>
              ${phone || "Não informado"}
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "support@cnpmidia.com",
      subject: `Novo contato: ${name}`,
      html: htmlContent,
    });

    return new Response(
      JSON.stringify({ message: "Email enviado com sucesso" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({
        message: "Erro ao enviar email",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
