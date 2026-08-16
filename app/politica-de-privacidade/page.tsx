import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal-page";
import { addressLine, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Política de privacidade do aplicativo OnlyWine: quais dados são coletados, para quê, com quem são compartilhados e quais são os seus direitos sob a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalPage
      title="Política de privacidade do aplicativo OnlyWine"
      updatedAt="23 de abril de 2026"
    >
      <LegalSection number={1} title="Introdução">
        <p>
          A OnlyWine respeita a sua privacidade. Esta Política descreve como
          coletamos, usamos, armazenamos e protegemos dados pessoais quando você
          utiliza o aplicativo OnlyWine (“App”) em dispositivos móveis.
        </p>
      </LegalSection>

      {/*
        Identificação completa do controlador. O texto anterior dizia apenas
        "a OnlyWine, conforme identificada nas lojas de aplicativos" — vago
        demais para o art. 9º da LGPD e sem nenhum valor para a Apple confirmar
        que o domínio pertence à organização inscrita.
      */}
      <LegalSection number={2} title="Controlador dos dados">
        <p>
          O responsável pelo tratamento dos dados pessoais coletados por meio do
          App é:
        </p>
        <ul>
          <li>
            <strong>Razão social:</strong> {company.legalName}
          </li>
          <li>
            <strong>CNPJ:</strong> {company.cnpj}
          </li>
          <li>
            <strong>Endereço:</strong> {addressLine}
          </li>
          <li>
            <strong>E-mail para assuntos de privacidade:</strong>{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={3} title="Dados que podemos coletar">
        <p>
          Dependendo de como você usa o App e das funcionalidades disponíveis,
          podemos tratar categorias como:
        </p>
        <ul>
          <li>
            dados de cadastro e perfil (por exemplo, nome, e-mail, telefone,
            país, data de nascimento e foto);
          </li>
          <li>endereços de entrega salvos e histórico de pedidos;</li>
          <li>
            dados de uso do App (como interações, vinhos favoritos, preferências
            e eventos de analytics de forma agregada ou pseudonimizada);
          </li>
          <li>
            dados técnicos do dispositivo e da conexão (como modelo do aparelho,
            sistema operacional, idioma e identificadores anônimos necessários
            para notificações ou diagnóstico de erros).
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={4} title="Finalidades do tratamento">
        <p>
          Utilizamos os dados para prestar e melhorar o App, processar pedidos e
          entregas, personalizar recomendações quando aplicável, garantir
          segurança, cumprir obrigações legais, comunicar atualizações relevantes
          e, mediante base legal adequada, realizar estatísticas e aprimoramento
          do produto.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Compartilhamento">
        <p>
          Podemos compartilhar dados com prestadores de serviços que nos auxiliam
          na hospedagem, analytics, notificações push, meios de pagamento,
          logística de entrega ou suporte, sempre mediante contratos e medidas de
          segurança compatíveis com a legislação aplicável.{" "}
          <strong>Não vendemos seus dados pessoais.</strong>
        </p>
      </LegalSection>

      <LegalSection number={6} title="Armazenamento e segurança">
        <p>
          Adotamos práticas razoáveis de segurança da informação para proteger os
          dados contra acesso não autorizado, perda ou alteração. Nenhum sistema é
          totalmente isento de riscos; em caso de incidente relevante, buscaremos
          agir conforme a lei.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Retenção">
        <p>
          Mantemos os dados pelo tempo necessário para cumprir as finalidades
          descritas, respeitar prazos legais e preservar direitos em eventual
          controvérsia.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Seus direitos (LGPD)">
        <p>
          Nos termos da Lei nº 13.709/2018 (LGPD), você pode solicitar confirmação
          de tratamento, acesso, correção, anonimização, portabilidade, eliminação
          de dados desnecessários, informação sobre compartilhamentos e revogação
          de consentimento quando o tratamento for baseado nele. O exercício pode
          ser feito pelos canais indicados abaixo.
        </p>
        <p>
          Para excluir sua conta e todos os dados associados, você também pode
          usar a página de{" "}
          <a href="/excluir-conta">exclusão de conta</a>, que faz a remoção de
          forma imediata e permanente.
        </p>
      </LegalSection>

      <LegalSection number={9} title="Crianças e adolescentes">
        <p>
          O App não se destina a menores de 18 anos. Se tomarmos ciência de dados
          coletados inadvertidamente de menores sem consentimento legal adequado,
          adotaremos medidas para eliminá-los.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Alterações desta política">
        <p>
          Podemos atualizar este texto para refletir mudanças no App ou na
          legislação. A data da última versão aparecerá no topo desta página;
          alterações relevantes podem ser comunicadas também pelo App ou por
          e-mail, quando aplicável.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Contato">
        <p>
          Para dúvidas ou solicitações relacionadas a privacidade e proteção de
          dados, envie um e-mail para{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> ou use o{" "}
          <a href="/contato">formulário de contato</a>. Respondemos em dias úteis.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
