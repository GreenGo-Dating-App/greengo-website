import React from 'react';
import { useTranslation } from 'react-i18next';
import PageLayout from './PageLayout';

const TermsOfService = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.language?.startsWith('pt');

  return (
    <PageLayout
      title={isPt ? "Termos e Condições" : "Terms and Conditions"}
      subtitle={isPt
        ? "Por favor, leia estes termos cuidadosamente antes de usar os serviços do GreenGo Chat."
        : "Please read these terms carefully before using GreenGo Chat services."
      }
    >
      <p className="last-updated">
        {isPt ? "Última Atualização: 15 de Janeiro de 2026" : "Last Updated: January 15, 2026"}
      </p>

      <h2>{isPt ? "1. Identificação da Empresa" : "1. Company Identification"}</h2>
      <p>
        {isPt
          ? "O GreenGo Chat é operado por:"
          : "GreenGo Chat is operated by:"
        }
      </p>
      <ul>
        <li><strong>{isPt ? "Razão Social:" : "Company Name:"}</strong> Universo Kardasha Comunicacoes LTDA</li>
        <li><strong>CNPJ:</strong> 54.665.599/0001-26</li>
        <li><strong>{isPt ? "Endereço:" : "Address:"}</strong> Rua Cardeal Arcoverde 2365, Cj 111, Pinheiros, São Paulo, SP, 05407-003, Brasil</li>
        <li><strong>Email:</strong> contato@greengochat.com</li>
      </ul>

      <h2>{isPt ? "2. Status de Pré-Venda" : "2. Pre-Sale Status"}</h2>
      <div className="highlight-box">
        <p>
          <strong>{isPt ? "Importante - Status Atual:" : "Important - Current Status:"}</strong>{" "}
          {isPt
            ? `O GreenGo Chat está atualmente em fase de pré-venda. O lançamento oficial da plataforma está
               previsto para 30 de março de 2026. Ao adquirir uma assinatura durante o período de pré-venda,
               você concorda que sua assinatura será ativada na data de lançamento oficial.`
            : `GreenGo Chat is currently in pre-sale phase. The official platform launch is scheduled for
               March 30, 2026. By purchasing a subscription during the pre-sale period, you agree that your
               subscription will be activated on the official launch date.`
          }
        </p>
      </div>

      <h2>{isPt ? "3. Aceitação dos Termos" : "3. Agreement to Terms"}</h2>
      <p>
        {isPt
          ? `Ao acessar ou usar o GreenGo Chat ("Serviço"), você concorda em vincular-se a estes Termos e
             Condições ("Termos"). Se você discordar de qualquer parte destes termos, você não tem permissão
             para acessar o Serviço.`
          : `By accessing or using GreenGo Chat ("Service"), you agree to be bound by these Terms and
             Conditions ("Terms"). If you disagree with any part of these terms, you do not have permission
             to access the Service.`
        }
      </p>

      <div className="highlight-box">
        <p>
          <strong>{isPt ? "Requisito de Idade:" : "Age Requirement:"}</strong>{" "}
          {isPt
            ? "Você deve ter pelo menos 18 anos para usar o GreenGo Chat. Ao usar nosso Serviço, você declara ter pelo menos 18 anos de idade."
            : "You must be at least 18 years old to use GreenGo Chat. By using our Service, you represent that you are at least 18 years of age."
          }
        </p>
      </div>

      <h2>{isPt ? "4. Descrição do Serviço" : "4. Description of Service"}</h2>
      <p>
        {isPt
          ? `O GreenGo Chat é uma plataforma internacional de relacionamento e conexão social que permite aos
             usuários descobrir, conectar e comunicar-se com pessoas ao redor do mundo. Nossos serviços incluem:`
          : `GreenGo Chat is an international dating and social connection platform that enables users to
             discover, connect, and communicate with others worldwide. Our services include:`
        }
      </p>
      <ul>
        <li>{isPt ? "Criação e gerenciamento de perfil" : "Profile creation and management"}</li>
        <li>{isPt ? "Algoritmo de matching com IA" : "AI-powered matching algorithm"}</li>
        <li>{isPt ? "Mensagens com tradução em tempo real" : "Messaging with real-time translation"}</li>
        <li>{isPt ? "Recursos de videochamada" : "Video chat capabilities"}</li>
        <li>{isPt ? "Acesso a eventos virtuais e presenciais" : "Virtual and in-person event access"}</li>
        <li>{isPt ? "Recursos de assinatura premium" : "Premium subscription features"}</li>
      </ul>

      <h2>{isPt ? "5. Planos de Assinatura" : "5. Subscription Plans"}</h2>
      <h3>{isPt ? "5.1 Planos Disponíveis" : "5.1 Available Plans"}</h3>
      <p>
        {isPt
          ? "O GreenGo Chat oferece os seguintes planos de assinatura:"
          : "GreenGo Chat offers the following subscription plans:"
        }
      </p>
      <ul>
        <li><strong>{isPt ? "Prata:" : "Silver:"}</strong> {isPt ? "Recursos básicos para começar" : "Basic features to get started"}</li>
        <li><strong>{isPt ? "Ouro:" : "Gold:"}</strong> {isPt ? "Recursos aprimorados incluindo tradução por IA" : "Enhanced features including AI translation"}</li>
        <li><strong>{isPt ? "Platina:" : "Platinum:"}</strong> {isPt ? "Recursos completos para conexões sérias" : "Full features for serious connections"}</li>
        <li><strong>{isPt ? "Diamante:" : "Diamond:"}</strong> {isPt ? "Experiência elite definitiva com serviço de concierge" : "Ultimate elite experience with concierge service"}</li>
      </ul>

      <h3>{isPt ? "5.2 Preços (Pré-Venda Early Bird)" : "5.2 Pricing (Pre-Sale Early Bird)"}</h3>
      <p>
        {isPt
          ? "Durante o período de pré-venda, oferecemos 65% de desconto nos primeiros 3 meses. Os preços regulares variam de $29 a $149 por mês dependendo do plano escolhido."
          : "During the pre-sale period, we offer 65% off your first 3 months. Regular prices range from $29 to $149 per month depending on the plan chosen."
        }
      </p>

      <h3>{isPt ? "5.3 Cobrança e Pagamentos" : "5.3 Billing and Payments"}</h3>
      <ul>
        <li>{isPt ? "Assinaturas de pré-venda serão cobradas no momento da compra" : "Pre-sale subscriptions will be charged at the time of purchase"}</li>
        <li>{isPt ? "A assinatura será ativada na data de lançamento (30 de março de 2026)" : "Subscription will be activated on launch date (March 30, 2026)"}</li>
        <li>{isPt ? "Pagamentos são processados através de provedores terceiros seguros" : "Payments are processed through secure third-party providers"}</li>
        <li>{isPt ? "Assinaturas renovam automaticamente a menos que sejam canceladas" : "Subscriptions automatically renew unless cancelled"}</li>
        <li>{isPt ? "Alterações de preço serão notificadas com 30 dias de antecedência" : "Price changes will be notified 30 days in advance"}</li>
      </ul>

      <h2>{isPt ? "6. Política de Cancelamento e Reembolso" : "6. Cancellation and Refund Policy"}</h2>
      <h3>{isPt ? "6.1 Reembolso Pré-Lançamento" : "6.1 Pre-Launch Refund"}</h3>
      <p>
        {isPt
          ? `Compras de pré-venda podem ser totalmente reembolsadas a qualquer momento antes da data de
             lançamento (30 de março de 2026). Após o lançamento, aplicam-se as políticas de reembolso padrão.`
          : `Pre-sale purchases can be fully refunded at any time before the launch date (March 30, 2026).
             After launch, standard refund policies apply.`
        }
      </p>

      <h3>{isPt ? "6.2 Reembolso Pós-Lançamento" : "6.2 Post-Launch Refund"}</h3>
      <ul>
        <li>{isPt ? "Você pode solicitar reembolso dentro de 7 dias após a ativação da assinatura" : "You may request a refund within 7 days of subscription activation"}</li>
        <li>{isPt ? "Residentes da UE: período de arrependimento de 14 dias conforme legislação europeia" : "EU residents: 14-day cooling-off period as per European law"}</li>
        <li>{isPt ? "Residentes do Brasil: direito de arrependimento de 7 dias conforme Código de Defesa do Consumidor" : "Brazil residents: 7-day right of withdrawal as per Consumer Defense Code"}</li>
        <li>{isPt ? "Após o período de reembolso, não há reembolsos para períodos parciais de assinatura" : "After the refund period, no refunds for partial subscription periods"}</li>
      </ul>

      <h2>{isPt ? "7. Conduta do Usuário" : "7. User Conduct"}</h2>
      <p>{isPt ? "Você concorda em NÃO:" : "You agree NOT to:"}</p>
      <ul>
        <li>{isPt ? "Usar o Serviço para qualquer propósito ilegal" : "Use the Service for any illegal purpose"}</li>
        <li>{isPt ? "Assediar, abusar, perseguir ou ameaçar outros usuários" : "Harass, abuse, stalk, or threaten other users"}</li>
        <li>{isPt ? "Publicar conteúdo falso, enganoso ou fraudulento" : "Post false, misleading, or deceptive content"}</li>
        <li>{isPt ? "Se passar por qualquer pessoa ou entidade" : "Impersonate any person or entity"}</li>
        <li>{isPt ? "Usar o Serviço para solicitação comercial" : "Use the Service for commercial solicitation"}</li>
        <li>{isPt ? "Enviar spam ou mensagens não solicitadas" : "Send spam or unsolicited messages"}</li>
        <li>{isPt ? "Fazer upload de malware, vírus ou código prejudicial" : "Upload malware, viruses, or harmful code"}</li>
        <li>{isPt ? "Tentar acessar contas de outros usuários" : "Attempt to access other users' accounts"}</li>
        <li>{isPt ? "Coletar dados de usuários sem consentimento" : "Scrape or collect user data without consent"}</li>
        <li>{isPt ? "Contornar medidas de segurança ou autenticação" : "Circumvent security or authentication measures"}</li>
        <li>{isPt ? "Usar sistemas automatizados ou bots" : "Use automated systems or bots"}</li>
        <li>{isPt ? "Publicar conteúdo que infrinja direitos de propriedade intelectual" : "Post content that infringes intellectual property rights"}</li>
        <li>{isPt ? "Promover violência, discriminação ou discurso de ódio" : "Promote violence, discrimination, or hate speech"}</li>
      </ul>

      <h2>{isPt ? "8. Diretrizes de Conteúdo" : "8. Content Guidelines"}</h2>
      <h3>{isPt ? "8.1 Seu Conteúdo" : "8.1 Your Content"}</h3>
      <p>
        {isPt
          ? `Você é responsável por todo o conteúdo que publica, incluindo fotos, textos e mensagens. Ao
             publicar conteúdo, você concede ao GreenGo Chat uma licença não exclusiva, mundial e isenta
             de royalties para usar, exibir e distribuir seu conteúdo em conexão com o Serviço.`
          : `You are responsible for all content you post, including photos, text, and messages. By posting
             content, you grant GreenGo Chat a non-exclusive, worldwide, royalty-free license to use, display,
             and distribute your content in connection with the Service.`
        }
      </p>

      <h3>{isPt ? "8.2 Conteúdo Proibido" : "8.2 Prohibited Content"}</h3>
      <p>{isPt ? "O seguinte conteúdo é estritamente proibido:" : "The following content is strictly prohibited:"}</p>
      <ul>
        <li>{isPt ? "Nudez ou material sexualmente explícito" : "Nudity or sexually explicit material"}</li>
        <li>{isPt ? "Violência, gore ou conteúdo gráfico" : "Violence, gore, or graphic content"}</li>
        <li>{isPt ? "Discurso de ódio ou conteúdo discriminatório" : "Hate speech or discriminatory content"}</li>
        <li>{isPt ? "Conteúdo promovendo atividades ilegais" : "Content promoting illegal activities"}</li>
        <li>{isPt ? "Informações pessoais de terceiros sem consentimento" : "Personal information of others without consent"}</li>
        <li>{isPt ? "Material protegido por direitos autorais sem autorização" : "Copyrighted material without authorization"}</li>
        <li>{isPt ? "Spam ou anúncios comerciais" : "Spam or commercial advertisements"}</li>
      </ul>

      <h2>{isPt ? "9. Segurança e Denúncia" : "9. Safety and Reporting"}</h2>
      <p>
        {isPt
          ? `Sua segurança é nossa prioridade. Encorajamos você a denunciar qualquer comportamento, conteúdo
             ou preocupação de segurança inadequada através do recurso de denúncia no aplicativo ou entrando
             em contato com seguranca@greengochat.com. Investigamos todas as denúncias e tomamos as medidas
             apropriadas.`
          : `Your safety is our priority. We encourage you to report any inappropriate behavior, content, or
             safety concerns through the in-app reporting feature or by contacting seguranca@greengochat.com.
             We investigate all reports and take appropriate action.`
        }
      </p>

      <h2>{isPt ? "10. Propriedade Intelectual" : "10. Intellectual Property"}</h2>
      <p>
        {isPt
          ? `O nome GreenGo Chat, logotipo, recursos e conteúdo são protegidos por leis de propriedade
             intelectual. Você não pode copiar, modificar, distribuir ou criar trabalhos derivados sem
             nossa permissão expressa por escrito.`
          : `The GreenGo Chat name, logo, features, and content are protected by intellectual property laws.
             You may not copy, modify, distribute, or create derivative works without our express written
             permission.`
        }
      </p>

      <h2>{isPt ? "11. Isenções de Responsabilidade" : "11. Disclaimers"}</h2>
      <h3>{isPt ? "11.1 Disponibilidade do Serviço" : "11.1 Service Availability"}</h3>
      <p>
        {isPt
          ? `O GreenGo Chat é fornecido "como está" e "conforme disponível". Não garantimos serviço
             ininterrupto ou livre de erros. Podemos modificar, suspender ou descontinuar qualquer
             aspecto do Serviço a qualquer momento.`
          : `GreenGo Chat is provided "as is" and "as available." We do not guarantee uninterrupted or
             error-free service. We may modify, suspend, or discontinue any aspect of the Service at any time.`
        }
      </p>

      <h3>{isPt ? "11.2 Interações entre Usuários" : "11.2 User Interactions"}</h3>
      <p>
        {isPt
          ? `Não somos responsáveis pela conduta dos usuários dentro ou fora da plataforma. Você é o único
             responsável por suas interações com outros usuários. Recomendamos exercer cautela e encontrar-se
             em locais públicos ao conhecer alguém pessoalmente.`
          : `We are not responsible for the conduct of users on or off the platform. You are solely responsible
             for your interactions with other users. We recommend exercising caution and meeting in public places
             when meeting someone in person.`
        }
      </p>

      <h2>{isPt ? "12. Limitação de Responsabilidade" : "12. Limitation of Liability"}</h2>
      <p>
        {isPt
          ? `Na máxima extensão permitida por lei, o GreenGo Chat e suas afiliadas não serão responsáveis
             por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes
             do seu uso do Serviço. Nossa responsabilidade total não excederá o valor que você nos pagou nos
             12 meses anteriores à reclamação.`
          : `To the maximum extent permitted by law, GreenGo Chat and its affiliates shall not be liable for
             any indirect, incidental, special, consequential, or punitive damages arising from your use of
             the Service. Our total liability shall not exceed the amount you paid us in the 12 months
             preceding the claim.`
        }
      </p>

      <h2>{isPt ? "13. Lei Aplicável e Resolução de Disputas" : "13. Governing Law and Dispute Resolution"}</h2>
      <h3>{isPt ? "13.1 Lei Aplicável" : "13.1 Governing Law"}</h3>
      <p>
        {isPt
          ? `Estes Termos são regidos pelas leis da República Federativa do Brasil, especialmente pelo
             Código de Defesa do Consumidor (Lei nº 8.078/1990) e Marco Civil da Internet (Lei nº 12.965/2014).`
          : `These Terms are governed by the laws of the Federative Republic of Brazil, especially the
             Consumer Defense Code (Law No. 8.078/1990) and the Internet Civil Framework (Law No. 12.965/2014).`
        }
      </p>

      <h3>{isPt ? "13.2 Foro" : "13.2 Jurisdiction"}</h3>
      <p>
        {isPt
          ? `Fica eleito o foro da Comarca de São Paulo, Estado de São Paulo, Brasil, para dirimir quaisquer
             controvérsias decorrentes destes Termos, ressalvado o direito do consumidor de optar pelo foro
             de seu domicílio.`
          : `The jurisdiction of the District of São Paulo, State of São Paulo, Brazil, is elected to resolve
             any disputes arising from these Terms, subject to the consumer's right to opt for the jurisdiction
             of their domicile.`
        }
      </p>

      <h2>{isPt ? "14. Rescisão" : "14. Termination"}</h2>
      <p>
        {isPt
          ? `Podemos encerrar ou suspender sua conta imediatamente, sem aviso prévio, por qualquer violação
             destes Termos. Após a rescisão, seu direito de usar o Serviço cessa imediatamente. As disposições
             que, por sua natureza, devem sobreviver à rescisão, sobreviverão.`
          : `We may terminate or suspend your account immediately, without prior notice, for any violation of
             these Terms. Upon termination, your right to use the Service ceases immediately. Provisions that
             by their nature should survive termination shall survive.`
        }
      </p>

      <h2>{isPt ? "15. Alterações nos Termos" : "15. Changes to Terms"}</h2>
      <p>
        {isPt
          ? `Reservamo-nos o direito de modificar estes Termos a qualquer momento. Mudanças materiais serão
             notificadas por email ou notificação no aplicativo com pelo menos 30 dias de antecedência antes
             de entrarem em vigor. O uso continuado após as alterações constitui aceitação dos novos Termos.`
          : `We reserve the right to modify these Terms at any time. Material changes will be notified via
             email or in-app notification at least 30 days before taking effect. Continued use after changes
             constitutes acceptance of the new Terms.`
        }
      </p>

      <h2>{isPt ? "16. Contato" : "16. Contact Information"}</h2>
      <p>{isPt ? "Para dúvidas sobre estes Termos, entre em contato:" : "For questions about these Terms, please contact:"}</p>
      <ul>
        <li><strong>Email:</strong> contato@greengochat.com</li>
        <li><strong>{isPt ? "Suporte:" : "Support:"}</strong> suporte@greengochat.com</li>
        <li><strong>{isPt ? "Endereço:" : "Address:"}</strong> Universo Kardasha Comunicacoes LTDA, Rua Cardeal Arcoverde 2365, Cj 111, Pinheiros, São Paulo, SP, 05407-003, Brasil</li>
      </ul>
    </PageLayout>
  );
};

export default TermsOfService;
