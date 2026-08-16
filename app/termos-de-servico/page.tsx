import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal-page";
import { addressLine, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de serviço",
  description:
    "Termos de serviço do aplicativo OnlyWine: regras de uso, conta, assinatura OnlyWinner, responsabilidades e legislação aplicável.",
  alternates: { canonical: "/termos-de-servico" },
};

export default function TermosDeServico() {
  return (
    <LegalPage
      title="Termos de serviço do aplicativo OnlyWine"
      updatedAt="23 de abril de 2026"
    >
      <LegalSection number={1} title="Aceitação">
        <p>
          Ao instalar, acessar ou usar o aplicativo OnlyWine (“App”), você declara
          que leu e concorda com estes Termos de Serviço. Se não concordar, não
          utilize o App.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Quem oferece o serviço">
        <p>O App é oferecido por:</p>
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
            <strong>Contato:</strong>{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={3} title="Descrição do serviço">
        <p>
          O App oferece experiências digitais relacionadas ao universo do vinho:
          descoberta e recomendação de rótulos, informações sobre vinhos,
          conteúdo educativo em vídeo, loja com entrega e a assinatura OnlyWinner.
          Recursos podem mudar, ser descontinuados ou ampliados sem aviso prévio,
          desde que compatível com a lei e com contratos aplicáveis às lojas de
          aplicativos.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Conta e elegibilidade">
        <p>
          Quando houver cadastro, você é responsável pela veracidade das
          informações e pela confidencialidade de credenciais. O App destina-se a
          usuários com capacidade civil para contratar ou com autorização legal,
          conforme exigido na jurisdição aplicável, respeitada a idade mínima de
          18 anos para consumo de bebidas alcoólicas no Brasil.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Assinatura OnlyWinner">
        <p>
          A assinatura OnlyWinner é opcional e dá acesso a benefícios descritos no
          App. A cobrança e a renovação são processadas pela loja de aplicativos
          em que você a contratou (App Store ou Google Play), conforme as regras
          dessas plataformas.
        </p>
        <p>
          O cancelamento é feito diretamente na loja: em Ajustes → Assinaturas, no
          iPhone, ou em Assinaturas, no Google Play.{" "}
          <strong>
            Excluir sua conta OnlyWine não cancela a assinatura na loja
          </strong>{" "}
          — cancele antes para evitar novas cobranças.
        </p>
      </LegalSection>

      <LegalSection number={6} title="Uso permitido e condutas proibidas">
        <p>
          É vedado utilizar o App de forma ilícita, abusiva ou que prejudique
          terceiros, incluindo engenharia reversa não autorizada, tentativa de
          acesso não autorizado a sistemas, distribuição de malware, coleta
          automatizada de dados sem permissão, ou qualquer uso que viole direitos
          de propriedade intelectual ou a legislação vigente.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Propriedade intelectual">
        <p>
          Marcas, logotipos, textos, imagens, layout, código e demais conteúdos do
          App são de titularidade da OnlyWine ou licenciados. Nenhuma licença
          adicional é concedida além do necessário para uso pessoal e não
          comercial do App conforme estes Termos.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Conteúdo e informações">
        <p>
          Descrições, notas e sugestões exibidas no App têm caráter informativo.
          Variações de safra, rótulo, preço e disponibilidade dependem de
          terceiros (produtores, lojas, distribuidores). A OnlyWine não garante
          exaustividade ou atualização permanente de todos os dados exibidos.
        </p>
      </LegalSection>

      <LegalSection
        number={9}
        title="Bebidas alcoólicas e responsabilidade do usuário"
      >
        <p>
          O consumo de bebidas alcoólicas deve obedecer à legislação local e ao
          bom senso. A venda e o consumo são proibidos para menores de 18 anos, e
          a idade pode ser conferida no momento da entrega. O App não substitui
          orientação médica ou legal. O usuário é inteiramente responsável pelo
          uso que fizer das informações e por cumprir regras de trânsito, trabalho
          e saúde.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Isenções e limitação de responsabilidade">
        <p>
          Na máxima extensão permitida pela lei aplicável, o App é fornecido “no
          estado em que se encontra”. A OnlyWine não se responsabiliza por danos
          indiretos, lucros cessantes, perda de dados ou interrupções, salvo
          disposição legal em contrário. Em hipóteses em que a responsabilidade
          não possa ser excluída, ela ficará limitada ao que for razoável e
          proporcional ao caso concreto.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Serviços de terceiros e lojas">
        <p>
          O download e pagamentos podem estar sujeitos aos termos da Apple App
          Store, Google Play ou outros canais. Em caso de conflito sobre cobrança
          ou distribuição, também aplicam-se as políticas dessas plataformas.
        </p>
      </LegalSection>

      <LegalSection number={12} title="Suspensão e encerramento">
        <p>
          Podemos suspender ou encerrar o acesso ao App em caso de violação destes
          Termos, risco à segurança ou exigência legal, observados os direitos do
          usuário quando a lei assim determinar. Você pode encerrar sua conta a
          qualquer momento pela página de{" "}
          <a href="/excluir-conta">exclusão de conta</a>.
        </p>
      </LegalSection>

      <LegalSection number={13} title="Alterações">
        <p>
          Podemos alterar estes Termos. A data da versão vigente constará no topo
          desta página. O uso continuado do App após alterações relevantes pode
          significar aceitação, conforme permitido pela lei e pelas regras das
          lojas de aplicativos.
        </p>
      </LegalSection>

      <LegalSection number={14} title="Lei aplicável e foro">
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil.
          Fica eleito o foro da comarca de domicílio do consumidor no Brasil,
          quando aplicável o Código de Defesa do Consumidor; nos demais casos,
          aplicam-se as regras legais de competência.
        </p>
      </LegalSection>

      <LegalSection number={15} title="Contato">
        <p>
          Dúvidas sobre estes Termos podem ser encaminhadas para{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> ou pelo{" "}
          <a href="/contato">formulário de contato</a> do site.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
