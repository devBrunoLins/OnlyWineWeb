import "server-only";

/**
 * O formulário de contato só funciona com o Resend configurado.
 *
 * A página de contato consulta isto no servidor para decidir se renderiza o
 * formulário. Sem essa checagem, o visitante preenche tudo, clica em enviar e
 * só aí descobre que a rota não está configurada — um site que parece
 * inacabado, justamente o que motivou a recusa da Apple.
 *
 * O canal de contato nunca some: o e-mail de atendimento aparece em destaque
 * nos dois casos.
 */
export function isContactFormConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM);
}
