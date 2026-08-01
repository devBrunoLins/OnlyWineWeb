<template>
  <div class="pb-16 pt-8 sm:pt-12">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <p class="mb-6">
        <NuxtLink
          to="/"
          class="text-sm font-medium text-primary hover:underline"
        >
          ← Voltar ao início
        </NuxtLink>
      </p>
      <article class="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-900/5 sm:p-10">
        <template v-if="step === 'done'">
          <div class="text-center">
            <h1 class="text-3xl font-medium tracking-tight text-gray-900">
              Conta excluída
            </h1>
            <p class="mt-4 text-base leading-relaxed text-gray-700">
              Sua conta OnlyWine e os dados associados a ela foram excluídos
              definitivamente. Sentiremos sua falta!
            </p>
            <p class="mt-6 text-sm text-gray-500">
              Se você tinha uma assinatura ativa, lembre-se de conferir o
              cancelamento no
              <a
                href="https://play.google.com/store/account/subscriptions"
                class="text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >Google Play</a>
              ou na App Store.
            </p>
          </div>
        </template>

        <template v-else>
          <header class="mb-8 border-b border-gray-200 pb-8">
            <h1 class="text-3xl font-medium tracking-tight text-gray-900">
              Excluir minha conta OnlyWine
            </h1>
            <p class="mt-2 text-sm text-gray-500">
              Válido para contas criadas no aplicativo OnlyWine (app.onlywine).
            </p>
          </header>

          <div class="space-y-6 text-gray-700">
            <section>
              <h2 class="text-lg font-semibold text-gray-900">
                O que será apagado
              </h2>
              <p class="mt-2 text-base leading-relaxed">
                Ao confirmar a exclusão, removemos de forma
                <strong>permanente</strong> todos os dados vinculados à sua
                conta:
              </p>
              <ul class="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
                <li>perfil (nome, e-mail, telefone, país, data de nascimento e foto);</li>
                <li>endereços salvos;</li>
                <li>carrinho, vinhos favoritos e avaliações de vídeos;</li>
                <li>pedidos e registros de assinatura;</li>
                <li>sua conta de acesso (login por e-mail/senha ou Google).</li>
              </ul>
              <p class="mt-3 text-base leading-relaxed">
                A exclusão é imediata e <strong>não pode ser desfeita</strong>.
                Nenhum dado da conta é retido após a confirmação.
              </p>
            </section>

            <section class="rounded-lg bg-amber-50 p-4 ring-1 ring-amber-200">
              <h2 class="text-sm font-semibold text-amber-900">
                Assinatura OnlyWinner ativa?
              </h2>
              <p class="mt-1 text-sm leading-relaxed text-amber-900">
                Excluir a conta <strong>não cancela</strong> a assinatura na
                loja. Cancele antes no
                <a
                  href="https://play.google.com/store/account/subscriptions"
                  class="font-medium underline"
                  target="_blank"
                  rel="noreferrer"
                >Google Play</a>
                (Android) ou em Ajustes → Assinaturas (iPhone), para evitar
                novas cobranças.
              </p>
            </section>

            <section v-if="step === 'request'">
              <h2 class="text-lg font-semibold text-gray-900">
                1. Confirme que a conta é sua
              </h2>
              <p class="mt-2 text-base leading-relaxed">
                Informe o e-mail da sua conta OnlyWine. Enviaremos um código de
                6 dígitos para confirmar a exclusão — vale também para contas
                criadas com o Google.
              </p>
              <form class="mt-4 space-y-4" @submit.prevent="submitEmail">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-900"
                  >
                    E-mail da conta
                  </label>
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    autocomplete="email"
                    required
                    placeholder="voce@exemplo.com"
                    class="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                </div>
                <button
                  type="submit"
                  :disabled="loading"
                  class="w-full rounded-lg bg-primary px-4 py-2.5 text-base font-medium text-white transition hover:opacity-90 disabled:opacity-50 sm:w-auto"
                >
                  {{ loading ? 'Enviando…' : 'Enviar código' }}
                </button>
              </form>
            </section>

            <section v-else>
              <h2 class="text-lg font-semibold text-gray-900">
                2. Digite o código e confirme a exclusão
              </h2>
              <p class="mt-2 text-base leading-relaxed">
                Código enviado para <strong>{{ email }}</strong>. Ele expira em
                15 minutos.
              </p>
              <form class="mt-4 space-y-4" @submit.prevent="submitCode">
                <div>
                  <label
                    for="code"
                    class="block text-sm font-medium text-gray-900"
                  >
                    Código de 6 dígitos
                  </label>
                  <input
                    id="code"
                    v-model="code"
                    inputmode="numeric"
                    autocomplete="one-time-code"
                    required
                    maxlength="6"
                    placeholder="000000"
                    class="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-center text-2xl font-semibold tracking-[0.4em] text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 sm:w-56"
                  >
                </div>
                <button
                  type="submit"
                  :disabled="loading"
                  class="w-full rounded-lg bg-primary px-4 py-2.5 text-base font-medium text-white transition hover:opacity-90 disabled:opacity-50 sm:w-auto"
                >
                  {{ loading ? 'Excluindo…' : 'Excluir minha conta definitivamente' }}
                </button>
              </form>
              <p class="mt-4 text-sm text-gray-500">
                Não recebeu?
                <button
                  type="button"
                  :disabled="loading"
                  class="font-medium text-primary hover:underline disabled:opacity-50"
                  @click="resendCode"
                >
                  Reenviar código
                </button>
                ·
                <button
                  type="button"
                  class="font-medium text-primary hover:underline"
                  @click="backToEmail"
                >
                  Trocar e-mail
                </button>
              </p>
            </section>

            <p
              v-if="info"
              class="rounded-lg bg-emerald-50 p-3 text-sm leading-relaxed text-emerald-900 ring-1 ring-emerald-200"
            >
              {{ info }}
            </p>
            <p
              v-if="error"
              class="rounded-lg bg-red-50 p-3 text-sm leading-relaxed text-red-900 ring-1 ring-red-200"
            >
              {{ error }}
            </p>

            <section class="border-t border-gray-200 pt-6">
              <p class="text-sm leading-relaxed text-gray-500">
                Você também pode excluir a conta pelo aplicativo em
                <strong>Perfil → Configurações → Excluir conta</strong>.
                Dúvidas? Escreva para
                <a
                  href="mailto:contact@onlywine.app"
                  class="text-primary hover:underline"
                >contact@onlywine.app</a>.
                Saiba como tratamos seus dados na
                <NuxtLink
                  to="/politica-de-privacidade"
                  class="text-primary hover:underline"
                >
                  Política de privacidade
                </NuxtLink>.
              </p>
            </section>
          </div>
        </template>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * Chama as Cloud Functions do projeto Firebase `onlywine` pelo protocolo HTTP
 * de callables (onCall v2): POST { data } → { result } | { error }.
 * As funções vivem em OnlyWine/functions/src/accountDeletion.ts.
 */
const FUNCTIONS_BASE_URL = 'https://southamerica-east1-onlywine.cloudfunctions.net'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const API_MESSAGES: Record<string, string> = {
  'api.emailRequired': 'Informe seu e-mail.',
  'api.emailInvalid': 'E-mail inválido.',
  'api.verificationCodeRequired': 'Informe o código recebido por e-mail.',
  'api.verificationCodeSixDigits': 'O código deve ter 6 dígitos.',
  'api.accountDeletionNonePending':
    'Nenhuma solicitação de exclusão pendente para este e-mail. Solicite um novo código.',
  'api.codeExpiredRequestNew': 'Código expirado. Solicite um novo.',
  'api.tooManyWrongCodeAttempts': 'Muitas tentativas incorretas. Solicite um novo código.',
  'api.codeIncorrect': 'Código incorreto.',
  'api.userNotFound': 'Não encontramos uma conta para este e-mail.',
  'api.emailResendWaitSeconds': 'Aguarde {{seconds}} segundos para reenviar.',
  'api.networkRateLimitEmail':
    'Muitas solicitações a partir desta rede. Tente novamente mais tarde.',
  'api.emailCheckFailed': 'Erro ao verificar o e-mail. Tente novamente.',
  'api.emailConfigIncomplete': 'Serviço de e-mail indisponível no momento. Tente mais tarde.',
}

const GENERIC_ERROR = 'Algo deu errado. Tente novamente em instantes.'
const NETWORK_ERROR = 'Falha de conexão. Verifique sua internet e tente novamente.'

type CallableError = {
  message?: string
  status?: string
  details?: Record<string, unknown>
}

async function callFunction (name: string, data: unknown): Promise<unknown> {
  let res: Response
  try {
    res = await fetch(`${FUNCTIONS_BASE_URL}/${name}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })
  } catch {
    throw new Error(NETWORK_ERROR)
  }

  const body = (await res.json().catch(() => null)) as
    | { result?: unknown, error?: CallableError }
    | null

  if (!res.ok || body?.error) {
    const key = body?.error?.message ?? ''
    const template = API_MESSAGES[key]
    if (!template) {
      throw new Error(GENERIC_ERROR)
    }
    const details = body?.error?.details ?? {}
    const message = template.replace(/\{\{(\w+)\}\}/g, (_, k: string) => {
      const value = (details as Record<string, unknown>)[k]
      return typeof value === 'string' || typeof value === 'number' ? String(value) : ''
    })
    throw new Error(message)
  }

  return body?.result
}

export default Vue.extend({
  name: 'ExcluirContaPage',
  data () {
    return {
      step: 'request' as 'request' | 'confirm' | 'done',
      email: '',
      code: '',
      loading: false,
      error: '',
      info: '',
    }
  },
  watch: {
    code (value: string) {
      const digits = value.replace(/\D/g, '').slice(0, 6)
      if (digits !== value) {
        this.code = digits
      }
    },
  },
  methods: {
    async submitEmail () {
      const normalized = this.email.trim().toLowerCase()
      if (!EMAIL_REGEX.test(normalized)) {
        this.error = 'Informe um e-mail válido.'
        return
      }
      this.loading = true
      this.error = ''
      this.info = ''
      try {
        await callFunction('requestAccountDeletionCode', { email: normalized })
        this.email = normalized
        this.step = 'confirm'
        this.info =
          'Se existir uma conta OnlyWine com este e-mail, enviamos um código de 6 dígitos. Confira também a caixa de spam.'
      } catch (err) {
        this.error = err instanceof Error ? err.message : GENERIC_ERROR
      } finally {
        this.loading = false
      }
    },
    async resendCode () {
      if (this.loading) {
        return
      }
      this.loading = true
      this.error = ''
      this.info = ''
      try {
        await callFunction('requestAccountDeletionCode', { email: this.email })
        this.info = 'Código reenviado. Confira também a caixa de spam.'
      } catch (err) {
        this.error = err instanceof Error ? err.message : GENERIC_ERROR
      } finally {
        this.loading = false
      }
    },
    async submitCode () {
      if (this.code.length !== 6) {
        this.error = 'O código deve ter 6 dígitos.'
        return
      }
      this.loading = true
      this.error = ''
      this.info = ''
      try {
        await callFunction('confirmAccountDeletion', {
          email: this.email,
          code: this.code,
        })
        this.step = 'done'
      } catch (err) {
        this.error = err instanceof Error ? err.message : GENERIC_ERROR
      } finally {
        this.loading = false
      }
    },
    backToEmail () {
      this.step = 'request'
      this.code = ''
      this.error = ''
      this.info = ''
    },
  },
  head () {
    return {
      title: 'OnlyWine — Excluir conta',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Exclua definitivamente sua conta OnlyWine e todos os dados associados a ela.',
        },
      ],
    }
  },
})
</script>
