import React from 'react';
import { useTranslation } from 'react-i18next';
import PageLayout from './PageLayout';

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.language?.startsWith('pt');

  return (
    <PageLayout
      title={isPt ? "Política de Privacidade" : "Privacy Policy"}
      subtitle={isPt
        ? "Sua privacidade é importante para nós. Saiba como coletamos, usamos e protegemos suas informações pessoais."
        : "Your privacy is important to us. Learn how we collect, use, and protect your personal information."
      }
    >
      <p className="last-updated">
        {isPt ? "Última Atualização: 27 de Janeiro de 2026" : "Last Updated: January 27, 2026"}
      </p>

      <h2>{isPt ? "1. Introdução" : "1. Introduction"}</h2>
      <p>
        {isPt
          ? `Bem-vindo ao GreenGo Chat, operado pela Universo Kardasha Comunicacoes LTDA ("nós", "nosso" ou "empresa").
             Estamos comprometidos em proteger sua privacidade e garantir a segurança de suas informações pessoais.
             Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações
             quando você usa nossa plataforma de relacionamento e serviços relacionados.`
          : `Welcome to GreenGo Chat, operated by Universo Kardasha Comunicacoes LTDA ("we," "our," or "company").
             We are committed to protecting your privacy and ensuring the security of your personal information.
             This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
             use our dating platform and related services.`
        }
      </p>

      <div className="highlight-box">
        <p>
          <strong>{isPt ? "Importante:" : "Important:"}</strong>{" "}
          {isPt
            ? `Ao usar o GreenGo Chat, você concorda com a coleta e uso de informações de acordo com esta política
               e em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
               Encorajamos você a ler esta política cuidadosamente.`
            : `By using GreenGo Chat, you agree to the collection and use of information in accordance with this
               policy and in compliance with the Brazilian General Data Protection Law (LGPD - Law No. 13.709/2018).
               We encourage you to read this policy carefully.`
          }
        </p>
      </div>

      <h2>{isPt ? "2. Controlador de Dados" : "2. Data Controller"}</h2>
      <p>
        {isPt
          ? "O controlador de dados responsável pelo tratamento de seus dados pessoais é:"
          : "The data controller responsible for processing your personal data is:"
        }
      </p>
      <ul>
        <li><strong>{isPt ? "Empresa:" : "Company:"}</strong> Universo Kardasha Comunicacoes LTDA</li>
        <li><strong>CNPJ:</strong> 54.665.599/0001-26</li>
        <li><strong>{isPt ? "Endereço:" : "Address:"}</strong> Rua Cardeal Arcoverde 2365, Cj 111, Pinheiros, São Paulo, SP, 05407-003, Brasil</li>
        <li><strong>{isPt ? "Encarregado de Proteção de Dados (DPO):" : "Data Protection Officer (DPO):"}</strong> Mauro Tommasi</li>
        <li><strong>Email:</strong> info@greengochat.com</li>
      </ul>

      <h2>{isPt ? "3. Informações que Coletamos" : "3. Information We Collect"}</h2>

      <h3>{isPt ? "3.1 Informações que Você Fornece" : "3.1 Information You Provide"}</h3>
      <p>{isPt ? "Quando você se cadastra e usa o GreenGo Chat, coletamos:" : "When you register and use GreenGo Chat, we collect:"}</p>
      <ul>
        <li><strong>{isPt ? "Dados Cadastrais:" : "Account Information:"}</strong> {isPt ? "Nome, endereço de email, número de telefone, data de nascimento, gênero e senha" : "Name, email address, phone number, date of birth, gender, and password"}</li>
        <li><strong>{isPt ? "Dados de Perfil:" : "Profile Information:"}</strong> {isPt ? "Fotos, biografia, interesses, preferências, localização e objetivos de relacionamento" : "Photos, bio, interests, preferences, location, and relationship goals"}</li>
        <li><strong>{isPt ? "Dados de Verificação:" : "Verification Data:"}</strong> {isPt ? "Documento de identidade com foto (para perfis verificados), fotos de verificação por selfie" : "Government-issued ID (for verified profiles), selfie verification photos"}</li>
        <li><strong>{isPt ? "Dados de Comunicação:" : "Communication Data:"}</strong> {isPt ? "Mensagens, histórico de chat e conteúdo compartilhado com outros usuários" : "Messages, chat history, and content you share with other users"}</li>
        <li><strong>{isPt ? "Dados de Pagamento:" : "Payment Information:"}</strong> {isPt ? "Dados de cartão de crédito, endereço de cobrança e histórico de transações (processados de forma segura por nossos provedores de pagamento)" : "Credit card details, billing address, and transaction history (processed securely by our payment providers)"}</li>
      </ul>

      <h3>{isPt ? "3.2 Informações Coletadas Automaticamente" : "3.2 Information Collected Automatically"}</h3>
      <ul>
        <li><strong>{isPt ? "Dados do Dispositivo:" : "Device Information:"}</strong> {isPt ? "Tipo de dispositivo, sistema operacional, identificadores únicos do dispositivo e informações de rede móvel" : "Device type, operating system, unique device identifiers, and mobile network information"}</li>
        <li><strong>{isPt ? "Dados de Uso:" : "Usage Data:"}</strong> {isPt ? "Recursos utilizados, tempo gasto no app, cliques e padrões de interação" : "Features used, time spent on the app, clicks, and interaction patterns"}</li>
        <li><strong>{isPt ? "Dados de Localização:" : "Location Data:"}</strong> {isPt ? "Localização precisa ou aproximada baseada em GPS, Wi-Fi ou endereço IP" : "Precise or approximate location based on GPS, Wi-Fi, or IP address"}</li>
        <li><strong>{isPt ? "Cookies e Rastreamento:" : "Cookies and Tracking:"}</strong> {isPt ? "Informações coletadas através de cookies, pixels e tecnologias similares" : "Information collected through cookies, pixels, and similar technologies"}</li>
      </ul>

      <h3>{isPt ? "3.3 Permissões do Aplicativo Móvel" : "3.3 Mobile Application Permissions"}</h3>
      <p>
        {isPt
          ? "Nosso aplicativo móvel requer certas permissões do dispositivo para funcionar corretamente. Abaixo está uma lista das permissões que podemos solicitar e como são utilizadas:"
          : "Our mobile application requires certain device permissions to function properly. Below is a list of permissions we may request and how they are used:"
        }
      </p>

      <h4>{isPt ? "a) Permissão de Câmera" : "a) Camera Permission"} (android.permission.CAMERA)</h4>
      <ul>
        <li><strong>{isPt ? "Propósito:" : "Purpose:"}</strong> {isPt ? "Permitir que você tire fotos para seu perfil, capture imagens para verificação de identidade e compartilhe fotos em mensagens com outros usuários." : "To allow you to take photos for your profile, capture images for identity verification, and share photos in messages with other users."}</li>
        <li><strong>{isPt ? "Uso de Dados:" : "Data Use:"}</strong> {isPt ? "Fotos tiradas com a câmera são enviadas para nossos servidores para exibição do perfil, verificação de identidade ou compartilhamento de mensagens." : "Photos taken using the camera are uploaded to our servers for profile display, identity verification, or message sharing."}</li>
        <li><strong>{isPt ? "Armazenamento:" : "Storage:"}</strong> {isPt ? "As imagens são armazenadas com segurança em nossos servidores de acordo com nossas políticas de retenção de dados." : "Images are stored securely on our servers in accordance with our data retention policies."}</li>
        <li><strong>{isPt ? "Compartilhamento com Terceiros:" : "Third-Party Sharing:"}</strong> {isPt ? "Fotos do perfil podem ser visíveis para outros usuários. Fotos de verificação são processadas por nossos provedores de serviços de verificação de identidade." : "Profile photos may be visible to other users. Verification photos are processed by our identity verification service providers."}</li>
        <li><strong>{isPt ? "Controle do Usuário:" : "User Control:"}</strong> {isPt ? "Você pode revogar a permissão de câmera a qualquer momento através das configurações do seu dispositivo." : "You can revoke camera permission at any time through your device settings."}</li>
      </ul>

      <h4>{isPt ? "b) Permissão de Localização" : "b) Location Permission"}</h4>
      <ul>
        <li><strong>{isPt ? "Propósito:" : "Purpose:"}</strong> {isPt ? "Mostrar potenciais matches perto de sua localização e habilitar recursos baseados em localização." : "To show you potential matches near your location and enable location-based features."}</li>
        <li><strong>{isPt ? "Uso de Dados:" : "Data Use:"}</strong> {isPt ? "Dados de localização são usados para calcular distâncias e sugerir usuários próximos." : "Location data is used to calculate distances and suggest nearby users."}</li>
        <li><strong>{isPt ? "Compartilhamento com Terceiros:" : "Third-Party Sharing:"}</strong> {isPt ? "Localização aproximada pode ser mostrada a outros usuários (nível de cidade/região). Localização precisa não é compartilhada com outros usuários." : "Approximate location may be shown to other users (city/region level). Precise location is not shared with other users."}</li>
        <li><strong>{isPt ? "Controle do Usuário:" : "User Control:"}</strong> {isPt ? "Você pode desativar as permissões de localização a qualquer momento." : "You can disable location permissions at any time."}</li>
      </ul>

      <h4>{isPt ? "c) Permissão de Armazenamento" : "c) Storage Permission"}</h4>
      <ul>
        <li><strong>{isPt ? "Propósito:" : "Purpose:"}</strong> {isPt ? "Permitir que você selecione e envie fotos da galeria do seu dispositivo." : "To allow you to select and upload photos from your device gallery."}</li>
        <li><strong>{isPt ? "Uso de Dados:" : "Data Use:"}</strong> {isPt ? "Fotos selecionadas são enviadas para nossos servidores para fins de perfil ou mensagens." : "Selected photos are uploaded to our servers for profile or messaging purposes."}</li>
        <li><strong>{isPt ? "Controle do Usuário:" : "User Control:"}</strong> {isPt ? "Você pode revogar a permissão de armazenamento a qualquer momento." : "You can revoke storage permission at any time."}</li>
      </ul>

      <h4>{isPt ? "d) Acesso à Internet" : "d) Internet Access"} (android.permission.INTERNET)</h4>
      <ul>
        <li><strong>{isPt ? "Propósito:" : "Purpose:"}</strong> {isPt ? "Necessário para o aplicativo se comunicar com nossos servidores, carregar conteúdo e habilitar mensagens." : "Required for the app to communicate with our servers, load content, and enable messaging."}</li>
        <li><strong>{isPt ? "Uso de Dados:" : "Data Use:"}</strong> {isPt ? "Todos os dados transmitidos pela internet são criptografados usando TLS 1.3." : "All data transmitted over the internet is encrypted using TLS 1.3."}</li>
      </ul>

      <h4>{isPt ? "e) Notificações Push" : "e) Push Notifications"} (android.permission.POST_NOTIFICATIONS)</h4>
      <ul>
        <li><strong>{isPt ? "Propósito:" : "Purpose:"}</strong> {isPt ? "Enviar notificações sobre novas mensagens, matches e atualizações importantes." : "To send you notifications about new messages, matches, and important updates."}</li>
        <li><strong>{isPt ? "Compartilhamento com Terceiros:" : "Third-Party Sharing:"}</strong> {isPt ? "Usamos Firebase Cloud Messaging (Google) para entregar notificações." : "We use Firebase Cloud Messaging (Google) to deliver notifications."}</li>
        <li><strong>{isPt ? "Controle do Usuário:" : "User Control:"}</strong> {isPt ? "Você pode desativar notificações a qualquer momento através das configurações do seu dispositivo ou preferências no aplicativo." : "You can disable notifications at any time through your device settings or in-app preferences."}</li>
      </ul>

      <h4>{isPt ? "f) Autenticação Biométrica" : "f) Biometric Authentication"} (android.permission.USE_BIOMETRIC)</h4>
      <ul>
        <li><strong>{isPt ? "Propósito:" : "Purpose:"}</strong> {isPt ? "Fornecer login seguro usando impressão digital ou reconhecimento facial." : "To provide secure login using fingerprint or face recognition."}</li>
        <li><strong>{isPt ? "Uso de Dados:" : "Data Use:"}</strong> {isPt ? "Dados biométricos são processados localmente no seu dispositivo e nunca transmitidos para nossos servidores." : "Biometric data is processed locally on your device and never transmitted to our servers."}</li>
        <li><strong>{isPt ? "Controle do Usuário:" : "User Control:"}</strong> {isPt ? "Você pode optar por usar autenticação por senha." : "You can choose to use password authentication instead."}</li>
      </ul>

      <div className="highlight-box">
        <p>
          <strong>{isPt ? "Como Gerenciar Permissões:" : "How to Manage Permissions:"}</strong>{" "}
          {isPt
            ? "Usuários Android: Vá para Configurações > Aplicativos > GreenGo Chat > Permissões. Usuários iOS: Vá para Configurações > GreenGo Chat. Você pode ativar ou desativar permissões individuais a qualquer momento."
            : "Android Users: Go to Settings > Apps > GreenGo Chat > Permissions. iOS Users: Go to Settings > GreenGo Chat. You can toggle individual permissions on or off at any time."
          }
        </p>
      </div>

      <h2>{isPt ? "4. Base Legal para Tratamento (LGPD)" : "4. Legal Basis for Processing (LGPD)"}</h2>
      <p>{isPt ? "De acordo com a LGPD, tratamos seus dados pessoais com base nas seguintes hipóteses legais:" : "In accordance with the LGPD, we process your personal data based on the following legal grounds:"}</p>
      <ul>
        <li><strong>{isPt ? "Consentimento:" : "Consent:"}</strong> {isPt ? "Para atividades de marketing e comunicações promocionais" : "For marketing activities and promotional communications"}</li>
        <li><strong>{isPt ? "Execução de Contrato:" : "Contract Performance:"}</strong> {isPt ? "Para fornecer nossos serviços conforme os Termos de Uso" : "To provide our services according to the Terms of Service"}</li>
        <li><strong>{isPt ? "Interesse Legítimo:" : "Legitimate Interest:"}</strong> {isPt ? "Para melhorar nossos serviços, prevenir fraudes e garantir a segurança" : "To improve our services, prevent fraud, and ensure security"}</li>
        <li><strong>{isPt ? "Cumprimento de Obrigação Legal:" : "Legal Obligation:"}</strong> {isPt ? "Para cumprir leis e regulamentos aplicáveis" : "To comply with applicable laws and regulations"}</li>
      </ul>

      <h2>{isPt ? "5. Como Usamos Suas Informações" : "5. How We Use Your Information"}</h2>
      <p>{isPt ? "Usamos as informações coletadas para:" : "We use the collected information to:"}</p>
      <ul>
        <li>{isPt ? "Criar e gerenciar sua conta" : "Create and manage your account"}</li>
        <li>{isPt ? "Fornecer e personalizar nossos serviços de matching" : "Provide and personalize our matching services"}</li>
        <li>{isPt ? "Possibilitar comunicação entre usuários" : "Enable communication between users"}</li>
        <li>{isPt ? "Processar pagamentos e assinaturas" : "Process payments and subscriptions"}</li>
        <li>{isPt ? "Verificar identidades de usuários e prevenir fraudes" : "Verify user identities and prevent fraud"}</li>
        <li>{isPt ? "Enviar notificações e atualizações do serviço" : "Send service-related notifications and updates"}</li>
        <li>{isPt ? "Melhorar nossa plataforma e desenvolver novos recursos" : "Improve our platform and develop new features"}</li>
        <li>{isPt ? "Fornecer suporte ao cliente" : "Provide customer support"}</li>
        <li>{isPt ? "Garantir segurança e aplicar nossas diretrizes da comunidade" : "Ensure safety and enforce our community guidelines"}</li>
        <li>{isPt ? "Realizar pesquisas e análises" : "Conduct research and analytics"}</li>
        <li>{isPt ? "Cumprir obrigações legais" : "Comply with legal obligations"}</li>
      </ul>

      <h2>{isPt ? "6. Compartilhamento de Informações" : "6. Information Sharing"}</h2>
      <p>{isPt ? "Podemos compartilhar suas informações com:" : "We may share your information with:"}</p>
      <ul>
        <li><strong>{isPt ? "Outros Usuários:" : "Other Users:"}</strong> {isPt ? "Suas informações de perfil são visíveis para outros usuários com base em suas configurações de privacidade" : "Your profile information is visible to other users based on your privacy settings"}</li>
        <li><strong>{isPt ? "Prestadores de Serviço:" : "Service Providers:"}</strong> {isPt ? "Terceiros que auxiliam na operação de nossa plataforma (hospedagem, análise, processamento de pagamentos)" : "Third parties who assist in operating our platform (hosting, analytics, payment processing)"}</li>
        <li><strong>{isPt ? "Parceiros de Negócio:" : "Business Partners:"}</strong> {isPt ? "Parceiros confiáveis para promoções, eventos ou serviços aprimorados (com seu consentimento)" : "Trusted partners for promotions, events, or enhanced services (with your consent)"}</li>
        <li><strong>{isPt ? "Autoridades Legais:" : "Legal Authorities:"}</strong> {isPt ? "Quando exigido por lei ou para proteger direitos, segurança ou propriedade" : "When required by law or to protect rights, safety, or property"}</li>
      </ul>

      <div className="highlight-box">
        <p>
          <strong>{isPt ? "Nunca Vendemos Seus Dados Pessoais:" : "We Never Sell Your Personal Data:"}</strong>{" "}
          {isPt
            ? "O GreenGo Chat não vende suas informações pessoais a terceiros para fins de marketing."
            : "GreenGo Chat does not sell your personal information to third parties for marketing purposes."
          }
        </p>
      </div>

      <h2>{isPt ? "7. Seus Direitos (LGPD)" : "7. Your Rights (LGPD)"}</h2>
      <p>{isPt ? "De acordo com a LGPD, você tem direito a:" : "According to the LGPD, you have the right to:"}</p>
      <ul>
        <li><strong>{isPt ? "Confirmação e Acesso:" : "Confirmation and Access:"}</strong> {isPt ? "Confirmar a existência de tratamento e obter acesso aos seus dados" : "Confirm the existence of processing and obtain access to your data"}</li>
        <li><strong>{isPt ? "Correção:" : "Correction:"}</strong> {isPt ? "Solicitar correção de dados incompletos, inexatos ou desatualizados" : "Request correction of incomplete, inaccurate, or outdated data"}</li>
        <li><strong>{isPt ? "Anonimização, Bloqueio ou Eliminação:" : "Anonymization, Blocking, or Deletion:"}</strong> {isPt ? "Solicitar anonimização, bloqueio ou eliminação de dados desnecessários" : "Request anonymization, blocking, or deletion of unnecessary data"}</li>
        <li><strong>{isPt ? "Portabilidade:" : "Portability:"}</strong> {isPt ? "Obter portabilidade dos dados a outro fornecedor de serviço" : "Obtain portability of data to another service provider"}</li>
        <li><strong>{isPt ? "Eliminação:" : "Deletion:"}</strong> {isPt ? "Solicitar eliminação de dados tratados com base no consentimento" : "Request deletion of data processed based on consent"}</li>
        <li><strong>{isPt ? "Informação sobre Compartilhamento:" : "Information about Sharing:"}</strong> {isPt ? "Saber com quais entidades públicas e privadas compartilhamos seus dados" : "Know which public and private entities we share your data with"}</li>
        <li><strong>{isPt ? "Revogação do Consentimento:" : "Consent Revocation:"}</strong> {isPt ? "Revogar o consentimento a qualquer momento" : "Revoke consent at any time"}</li>
      </ul>
      <p>
        {isPt
          ? "Para exercer seus direitos, entre em contato com nosso DPO através do email: info@greengochat.com"
          : "To exercise your rights, contact our DPO at: info@greengochat.com"
        }
      </p>

      <h2>{isPt ? "8. Segurança dos Dados" : "8. Data Security"}</h2>
      <p>
        {isPt
          ? "Implementamos medidas de segurança padrão da indústria para proteger suas informações pessoais:"
          : "We implement industry-standard security measures to protect your personal information:"
        }
      </p>
      <ul>
        <li>{isPt ? "Criptografia de ponta a ponta para mensagens" : "End-to-end encryption for messages"}</li>
        <li>{isPt ? "Criptografia SSL/TLS para transmissão de dados" : "SSL/TLS encryption for data transmission"}</li>
        <li>{isPt ? "Data centers seguros com monitoramento 24/7" : "Secure data centers with 24/7 monitoring"}</li>
        <li>{isPt ? "Auditorias de segurança regulares e testes de penetração" : "Regular security audits and penetration testing"}</li>
        <li>{isPt ? "Opções de autenticação de dois fatores" : "Two-factor authentication options"}</li>
        <li>{isPt ? "Controles de acesso e treinamento de funcionários" : "Access controls and employee training"}</li>
      </ul>

      <h2>{isPt ? "9. Retenção de Dados" : "9. Data Retention"}</h2>
      <p>
        {isPt
          ? `Retemos suas informações pessoais enquanto sua conta estiver ativa ou conforme necessário para
             fornecer serviços. Após a exclusão da conta, podemos reter certas informações para cumprimento
             legal, prevenção de fraudes ou propósitos comerciais legítimos por até 5 anos, conforme permitido
             pela legislação brasileira.`
          : `We retain your personal information for as long as your account is active or as needed to provide
             services. After account deletion, we may retain certain information for legal compliance, fraud
             prevention, or legitimate business purposes for up to 5 years, as permitted by Brazilian law.`
        }
      </p>

      <h2>{isPt ? "10. Transferências Internacionais de Dados" : "10. International Data Transfers"}</h2>
      <p>
        {isPt
          ? `Como plataforma global, suas informações podem ser transferidas e processadas em países diferentes
             do seu. Garantimos que salvaguardas apropriadas estejam em vigor, incluindo Cláusulas Contratuais
             Padrão aprovadas pelas autoridades relevantes, em conformidade com o Capítulo V da LGPD.`
          : `As a global platform, your information may be transferred to and processed in countries other than
             your own. We ensure appropriate safeguards are in place, including Standard Contractual Clauses
             approved by relevant authorities, in compliance with Chapter V of the LGPD.`
        }
      </p>

      <h2>{isPt ? "11. Privacidade de Menores" : "11. Children's Privacy"}</h2>
      <p>
        {isPt
          ? `O GreenGo Chat é destinado a usuários maiores de 18 anos. Não coletamos intencionalmente informações
             pessoais de menores de 18 anos. Se descobrirmos que coletamos dados de um menor, excluiremos
             imediatamente.`
          : `GreenGo Chat is intended for users 18 years and older. We do not knowingly collect personal
             information from anyone under 18. If we discover we have collected data from a minor, we will
             delete it immediately.`
        }
      </p>

      <h2>{isPt ? "12. Alterações nesta Política" : "12. Changes to This Policy"}</h2>
      <p>
        {isPt
          ? `Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças
             significativas por email ou notificação no aplicativo. Seu uso continuado após as alterações
             constitui aceitação da política atualizada.`
          : `We may update this Privacy Policy periodically. We will notify you of significant changes via
             email or in-app notification. Your continued use after changes constitutes acceptance of the
             updated policy.`
        }
      </p>

      <h2>{isPt ? "13. Contato" : "13. Contact Us"}</h2>
      <p>
        {isPt
          ? "Se você tiver dúvidas sobre esta Política de Privacidade ou nossas práticas de dados, entre em contato:"
          : "If you have questions about this Privacy Policy or our data practices, please contact us:"
        }
      </p>
      <ul>
        <li><strong>Email:</strong> info@greengochat.com</li>
        <li><strong>{isPt ? "Endereço:" : "Address:"}</strong> Universo Kardasha Comunicacoes LTDA, Rua Cardeal Arcoverde 2365, Cj 111, Pinheiros, São Paulo, SP, 05407-003, Brasil</li>
        <li><strong>{isPt ? "Encarregado de Proteção de Dados (DPO):" : "Data Protection Officer (DPO):"}</strong> Mauro Tommasi - info@greengochat.com</li>
      </ul>
    </PageLayout>
  );
};

export default PrivacyPolicy;
