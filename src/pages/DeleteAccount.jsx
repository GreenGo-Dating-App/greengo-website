import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, AlertTriangle, CheckCircle, Loader, Eye, EyeOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageLayout from './PageLayout';
import './DeleteAccount.css';

const DeleteAccount = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.language?.startsWith('pt');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmText: '',
  });
  const [confirmations, setConfirmations] = useState({
    understandDataLoss: false,
    understandPermanent: false,
    understandSubscription: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const allConfirmed = Object.values(confirmations).every(Boolean);
  const deleteText = isPt ? 'excluir minha conta' : 'delete my account';
  const deleteTextMatch = formData.confirmText.toLowerCase() === deleteText;
  const isFormValid = formData.email && formData.password && allConfirmed && deleteTextMatch;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmationChange = (key) => {
    setConfirmations(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // Call the Firebase Cloud Function to delete account
      const response = await fetch('https://us-central1-greengo-chat.cloudfunctions.net/requestAccountDeletion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || (isPt ? 'Falha ao processar solicitação de exclusão' : 'Failed to process deletion request'));
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || (isPt ? 'Ocorreu um erro. Tente novamente ou entre em contato com o suporte.' : 'An error occurred. Please try again or contact support.'));
    }
  };

  if (status === 'success') {
    return (
      <PageLayout
        title={isPt ? "Conta Excluída" : "Account Deleted"}
        subtitle={isPt ? "Sua conta foi removida permanentemente" : "Your account has been permanently removed"}
      >
        <div className="delete-success">
          <motion.div
            className="success-icon-wrapper"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <CheckCircle size={64} />
          </motion.div>
          <h2>{isPt ? "Conta Excluída com Sucesso" : "Account Successfully Deleted"}</h2>
          <p>
            {isPt
              ? "Sua conta GreenGo e todos os dados associados foram excluídos permanentemente."
              : "Your GreenGo account and all associated data have been permanently deleted."
            }
          </p>
          <p>
            {isPt
              ? <>Um email de confirmação foi enviado para <strong>{formData.email}</strong>.</>
              : <>A confirmation email has been sent to <strong>{formData.email}</strong>.</>
            }
          </p>
          <div className="info-box">
            <h3>{isPt ? "O que foi excluído:" : "What was deleted:"}</h3>
            <ul>
              <li>{isPt ? "Seu perfil e todas as informações pessoais" : "Your profile and all personal information"}</li>
              <li>{isPt ? "Todos os matches e conversas" : "All matches and conversations"}</li>
              <li>{isPt ? "Todas as fotos e mídias" : "All photos and media"}</li>
              <li>{isPt ? "Moedas e dados de assinatura" : "Coins and subscription data"}</li>
              <li>{isPt ? "Suas credenciais de autenticação" : "Your authentication credentials"}</li>
            </ul>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={isPt ? "Excluir Conta" : "Delete Account"}
      subtitle={isPt ? "Remova permanentemente sua conta GreenGo e dados" : "Permanently remove your GreenGo account and data"}
    >
      <div className="delete-account-content">
        {/* Warning Section */}
        <div className="warning-box">
          <div className="warning-icon">
            <AlertTriangle size={32} />
          </div>
          <div className="warning-content">
            <h3>{isPt ? "Esta ação é permanente e não pode ser desfeita" : "This action is permanent and cannot be undone"}</h3>
            <p>
              {isPt
                ? "Excluir sua conta removerá permanentemente todos os seus dados do GreenGo, incluindo seu perfil, matches, conversas, moedas e status de assinatura."
                : "Deleting your account will permanently remove all your data from GreenGo, including your profile, matches, conversations, coins, and subscription status."
              }
            </p>
          </div>
        </div>

        {/* What Gets Deleted */}
        <div className="data-section">
          <h2>{isPt ? "O que será excluído" : "What will be deleted"}</h2>
          <div className="data-grid">
            <div className="data-item">
              <span className="data-icon">{isPt ? "Perfil" : "Profile"}</span>
              <span>{isPt ? "Nome, fotos, bio, preferências" : "Name, photos, bio, preferences"}</span>
            </div>
            <div className="data-item">
              <span className="data-icon">Matches</span>
              <span>{isPt ? "Todos os matches e conexões" : "All matches and connections"}</span>
            </div>
            <div className="data-item">
              <span className="data-icon">{isPt ? "Mensagens" : "Messages"}</span>
              <span>{isPt ? "Todas as conversas e mídias" : "All conversations and media"}</span>
            </div>
            <div className="data-item">
              <span className="data-icon">{isPt ? "Moedas" : "Coins"}</span>
              <span>{isPt ? "Saldo restante (sem reembolso)" : "Remaining balance (no refund)"}</span>
            </div>
            <div className="data-item">
              <span className="data-icon">{isPt ? "Assinatura" : "Subscription"}</span>
              <span>{isPt ? "Assinatura ativa (sem reembolso)" : "Active subscription (no refund)"}</span>
            </div>
            <div className="data-item">
              <span className="data-icon">{isPt ? "Atividade" : "Activity"}</span>
              <span>{isPt ? "Curtidas, visualizações e interações" : "Likes, views, and interactions"}</span>
            </div>
          </div>
        </div>

        {/* Deletion Form */}
        <form onSubmit={handleSubmit} className="delete-form">
          <h2>{isPt ? "Confirme Sua Identidade" : "Confirm Your Identity"}</h2>

          <div className="form-group">
            <label htmlFor="email">{isPt ? "Endereço de Email" : "Email Address"}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={isPt ? "Digite o email da sua conta" : "Enter your account email"}
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{isPt ? "Senha" : "Password"}</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder={isPt ? "Digite sua senha" : "Enter your password"}
                required
                disabled={status === 'loading'}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? (isPt ? 'Ocultar senha' : 'Hide password') : (isPt ? 'Mostrar senha' : 'Show password')}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirmation Checkboxes */}
          <div className="confirmations">
            <h3>{isPt ? "Por favor, confirme o seguinte:" : "Please confirm the following:"}</h3>

            <label className="confirmation-item">
              <input
                type="checkbox"
                checked={confirmations.understandDataLoss}
                onChange={() => handleConfirmationChange('understandDataLoss')}
                disabled={status === 'loading'}
              />
              <span className="checkmark"></span>
              <span className="confirmation-text">
                {isPt
                  ? "Entendo que todos os meus dados (perfil, matches, mensagens, fotos) serão excluídos permanentemente"
                  : "I understand that all my data (profile, matches, messages, photos) will be permanently deleted"
                }
              </span>
            </label>

            <label className="confirmation-item">
              <input
                type="checkbox"
                checked={confirmations.understandPermanent}
                onChange={() => handleConfirmationChange('understandPermanent')}
                disabled={status === 'loading'}
              />
              <span className="checkmark"></span>
              <span className="confirmation-text">
                {isPt
                  ? "Entendo que esta ação é irreversível e minha conta não pode ser recuperada"
                  : "I understand that this action is irreversible and my account cannot be recovered"
                }
              </span>
            </label>

            <label className="confirmation-item">
              <input
                type="checkbox"
                checked={confirmations.understandSubscription}
                onChange={() => handleConfirmationChange('understandSubscription')}
                disabled={status === 'loading'}
              />
              <span className="checkmark"></span>
              <span className="confirmation-text">
                {isPt
                  ? "Entendo que quaisquer moedas restantes ou assinatura ativa serão perdidas sem reembolso"
                  : "I understand that any remaining coins or active subscription will be lost with no refund"
                }
              </span>
            </label>
          </div>

          {/* Type Confirmation */}
          <div className="form-group type-confirmation">
            <label htmlFor="confirmText">
              {isPt
                ? <>Digite <strong>"excluir minha conta"</strong> para confirmar:</>
                : <>Type <strong>"delete my account"</strong> to confirm:</>
              }
            </label>
            <input
              type="text"
              id="confirmText"
              name="confirmText"
              value={formData.confirmText}
              onChange={handleInputChange}
              placeholder={deleteText}
              required
              disabled={status === 'loading'}
              className={formData.confirmText && !deleteTextMatch ? 'invalid' : ''}
            />
            {formData.confirmText && !deleteTextMatch && (
              <span className="input-hint">
                {isPt ? `Por favor, digite exatamente: ${deleteText}` : `Please type exactly: ${deleteText}`}
              </span>
            )}
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <div className="error-message">
              <AlertTriangle size={20} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="delete-button"
            disabled={!isFormValid || status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <Loader className="spinner" size={20} />
                <span>{isPt ? "Processando..." : "Processing..."}</span>
              </>
            ) : (
              <>
                <Trash2 size={20} />
                <span>{isPt ? "Excluir Minha Conta Permanentemente" : "Permanently Delete My Account"}</span>
              </>
            )}
          </button>
        </form>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>{isPt ? "Precisa de Ajuda?" : "Need Help?"}</h3>
          <p>
            {isPt
              ? "Se você está tendo problemas com sua conta ou deseja discutir alternativas à exclusão, entre em contato com nossa equipe de suporte:"
              : "If you're having issues with your account or want to discuss alternatives to deletion, please contact our support team:"
            }
          </p>
          <a href="mailto:info@greengochat.com" className="contact-link">
            info@greengochat.com
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default DeleteAccount;
