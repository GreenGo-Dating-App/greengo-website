import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, AlertTriangle, CheckCircle, Loader, Eye, EyeOff } from 'lucide-react';
import PageLayout from './PageLayout';
import './DeleteAccount.css';

const DeleteAccount = () => {
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
  const deleteTextMatch = formData.confirmText.toLowerCase() === 'delete my account';
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
        throw new Error(data.error || 'Failed to process deletion request');
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'An error occurred. Please try again or contact support.');
    }
  };

  if (status === 'success') {
    return (
      <PageLayout
        title="Account Deleted"
        subtitle="Your account has been permanently removed"
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
          <h2>Account Successfully Deleted</h2>
          <p>
            Your GreenGo account and all associated data have been permanently deleted.
          </p>
          <p>
            A confirmation email has been sent to <strong>{formData.email}</strong>.
          </p>
          <div className="info-box">
            <h3>What was deleted:</h3>
            <ul>
              <li>Your profile and all personal information</li>
              <li>All matches and conversations</li>
              <li>All photos and media</li>
              <li>Coins and subscription data</li>
              <li>Your authentication credentials</li>
            </ul>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Delete Account"
      subtitle="Permanently remove your GreenGo account and data"
    >
      <div className="delete-account-content">
        {/* Warning Section */}
        <div className="warning-box">
          <div className="warning-icon">
            <AlertTriangle size={32} />
          </div>
          <div className="warning-content">
            <h3>This action is permanent and cannot be undone</h3>
            <p>
              Deleting your account will permanently remove all your data from GreenGo,
              including your profile, matches, conversations, coins, and subscription status.
            </p>
          </div>
        </div>

        {/* What Gets Deleted */}
        <div className="data-section">
          <h2>What will be deleted</h2>
          <div className="data-grid">
            <div className="data-item">
              <span className="data-icon">Profile</span>
              <span>Name, photos, bio, preferences</span>
            </div>
            <div className="data-item">
              <span className="data-icon">Matches</span>
              <span>All matches and connections</span>
            </div>
            <div className="data-item">
              <span className="data-icon">Messages</span>
              <span>All conversations and media</span>
            </div>
            <div className="data-item">
              <span className="data-icon">Coins</span>
              <span>Remaining balance (no refund)</span>
            </div>
            <div className="data-item">
              <span className="data-icon">Subscription</span>
              <span>Active subscription (no refund)</span>
            </div>
            <div className="data-item">
              <span className="data-icon">Activity</span>
              <span>Likes, views, and interactions</span>
            </div>
          </div>
        </div>

        {/* Deletion Form */}
        <form onSubmit={handleSubmit} className="delete-form">
          <h2>Confirm Your Identity</h2>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your account email"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                disabled={status === 'loading'}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirmation Checkboxes */}
          <div className="confirmations">
            <h3>Please confirm the following:</h3>

            <label className="confirmation-item">
              <input
                type="checkbox"
                checked={confirmations.understandDataLoss}
                onChange={() => handleConfirmationChange('understandDataLoss')}
                disabled={status === 'loading'}
              />
              <span className="checkmark"></span>
              <span className="confirmation-text">
                I understand that all my data (profile, matches, messages, photos) will be permanently deleted
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
                I understand that this action is irreversible and my account cannot be recovered
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
                I understand that any remaining coins or active subscription will be lost with no refund
              </span>
            </label>
          </div>

          {/* Type Confirmation */}
          <div className="form-group type-confirmation">
            <label htmlFor="confirmText">
              Type <strong>"delete my account"</strong> to confirm:
            </label>
            <input
              type="text"
              id="confirmText"
              name="confirmText"
              value={formData.confirmText}
              onChange={handleInputChange}
              placeholder="delete my account"
              required
              disabled={status === 'loading'}
              className={formData.confirmText && !deleteTextMatch ? 'invalid' : ''}
            />
            {formData.confirmText && !deleteTextMatch && (
              <span className="input-hint">Please type exactly: delete my account</span>
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
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Trash2 size={20} />
                <span>Permanently Delete My Account</span>
              </>
            )}
          </button>
        </form>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>Need Help?</h3>
          <p>
            If you're having issues with your account or want to discuss alternatives
            to deletion, please contact our support team:
          </p>
          <a href="mailto:support@greengo.app" className="contact-link">
            support@greengo.app
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default DeleteAccount;
