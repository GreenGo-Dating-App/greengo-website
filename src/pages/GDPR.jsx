import React from 'react';
import PageLayout from './PageLayout';

const GDPR = () => {
  return (
    <PageLayout
      title="GDPR Compliance"
      subtitle="Learn about your rights under the General Data Protection Regulation and how we protect EU/EEA users."
    >
      <p className="last-updated">Last Updated: January 15, 2026</p>

      <h2>1. Our Commitment to GDPR</h2>
      <p>
        GreenGo Chat is committed to compliance with the General Data Protection Regulation (GDPR)
        for all users in the European Union (EU) and European Economic Area (EEA). This page
        explains your rights and how we fulfill our obligations under GDPR.
      </p>

      <div className="highlight-box">
        <p>
          <strong>Data Controller:</strong> GreenGo Chat Inc. is the data controller responsible
          for your personal data. Our Data Protection Officer can be reached at info@greengochat.com.
        </p>
      </div>

      <h2>2. Legal Basis for Processing</h2>
      <p>We process your personal data based on the following legal grounds:</p>

      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account creation and management</td>
            <td>Contract performance</td>
          </tr>
          <tr>
            <td>Matching and communication services</td>
            <td>Contract performance</td>
          </tr>
          <tr>
            <td>Payment processing</td>
            <td>Contract performance</td>
          </tr>
          <tr>
            <td>Safety and fraud prevention</td>
            <td>Legitimate interests</td>
          </tr>
          <tr>
            <td>Service improvements and analytics</td>
            <td>Legitimate interests</td>
          </tr>
          <tr>
            <td>Marketing communications</td>
            <td>Consent</td>
          </tr>
          <tr>
            <td>Special category data (orientation)</td>
            <td>Explicit consent</td>
          </tr>
          <tr>
            <td>Legal compliance</td>
            <td>Legal obligation</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Your GDPR Rights</h2>
      <p>As an EU/EEA resident, you have the following rights under GDPR:</p>

      <h3>3.1 Right to Access (Article 15)</h3>
      <p>
        You have the right to obtain confirmation of whether we process your personal data and
        access to that data. You can request a copy of your data through your account settings
        or by contacting us.
      </p>

      <h3>3.2 Right to Rectification (Article 16)</h3>
      <p>
        You can correct any inaccurate personal data and complete any incomplete data. Most
        information can be updated directly in your profile settings.
      </p>

      <h3>3.3 Right to Erasure (Article 17)</h3>
      <p>
        Also known as the "right to be forgotten," you can request deletion of your personal
        data when:
      </p>
      <ul>
        <li>The data is no longer necessary for its original purpose</li>
        <li>You withdraw consent (where consent was the legal basis)</li>
        <li>You object to processing and there are no overriding legitimate grounds</li>
        <li>The data was unlawfully processed</li>
        <li>Deletion is required by law</li>
      </ul>

      <h3>3.4 Right to Restrict Processing (Article 18)</h3>
      <p>You can request restriction of processing when:</p>
      <ul>
        <li>You contest the accuracy of the data (while we verify)</li>
        <li>Processing is unlawful but you prefer restriction over erasure</li>
        <li>We no longer need the data but you need it for legal claims</li>
        <li>You have objected to processing (pending verification)</li>
      </ul>

      <h3>3.5 Right to Data Portability (Article 20)</h3>
      <p>
        You can receive your personal data in a structured, commonly used, machine-readable
        format (JSON) and transmit it to another service provider. This applies to data you
        provided and processed based on consent or contract.
      </p>

      <h3>3.6 Right to Object (Article 21)</h3>
      <p>
        You can object to processing based on legitimate interests, including profiling for
        direct marketing. We will cease processing unless we demonstrate compelling legitimate
        grounds.
      </p>

      <h3>3.7 Rights Related to Automated Decision-Making (Article 22)</h3>
      <p>
        You have the right not to be subject to decisions based solely on automated processing
        that significantly affect you. Our matching algorithm suggests potential matches but
        does not make binding decisions about your relationships.
      </p>

      <h2>4. How to Exercise Your Rights</h2>
      <p>You can exercise your GDPR rights through:</p>
      <ul>
        <li><strong>In-App Settings:</strong> Access, download, or delete your data directly</li>
        <li><strong>Email Request:</strong> Contact info@greengochat.com with your request</li>
        <li><strong>Written Request:</strong> Send a letter to our Data Protection Officer</li>
      </ul>
      <p>
        We will respond to your request within <strong>30 days</strong>. Complex requests may
        require an additional 60 days, in which case we will notify you.
      </p>

      <h2>5. Data Transfers Outside EU/EEA</h2>
      <p>
        When we transfer your data outside the EU/EEA, we ensure adequate protection through:
      </p>
      <ul>
        <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
        <li>Transfers to countries with adequacy decisions</li>
        <li>Binding Corporate Rules for intra-group transfers</li>
        <li>Your explicit consent for specific transfers</li>
      </ul>

      <h2>6. Data Protection Impact Assessments</h2>
      <p>
        We conduct Data Protection Impact Assessments (DPIAs) for processing activities that
        may result in high risk to your rights and freedoms, including:
      </p>
      <ul>
        <li>Large-scale processing of special category data</li>
        <li>Systematic monitoring of users</li>
        <li>New technologies or profiling activities</li>
      </ul>

      <h2>7. Data Breach Notification</h2>
      <p>
        In the event of a personal data breach that poses a risk to your rights and freedoms,
        we will:
      </p>
      <ul>
        <li>Notify the relevant supervisory authority within 72 hours</li>
        <li>Inform affected users without undue delay when there is high risk</li>
        <li>Document all breaches and remedial actions taken</li>
      </ul>

      <h2>8. Supervisory Authority</h2>
      <p>
        You have the right to lodge a complaint with a supervisory authority. Our lead
        supervisory authority is:
      </p>
      <div className="highlight-box">
        <p>
          <strong>Irish Data Protection Commission</strong><br />
          21 Fitzwilliam Square South, Dublin 2, D02 RD28, Ireland<br />
          Website: www.dataprotection.ie<br />
          Email: info@dataprotection.ie
        </p>
      </div>
      <p>
        You may also contact your local supervisory authority in your country of residence.
      </p>

      <h2>9. Data Retention Under GDPR</h2>
      <p>We retain your data for the following periods:</p>
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Active account data</td>
            <td>Duration of account + 30 days</td>
          </tr>
          <tr>
            <td>Deleted account data</td>
            <td>Up to 90 days (for recovery)</td>
          </tr>
          <tr>
            <td>Transaction records</td>
            <td>7 years (legal requirement)</td>
          </tr>
          <tr>
            <td>Safety/fraud data</td>
            <td>3 years after last activity</td>
          </tr>
          <tr>
            <td>Analytics data</td>
            <td>26 months (anonymized thereafter)</td>
          </tr>
        </tbody>
      </table>

      <h2>10. Contact Our DPO</h2>
      <p>For GDPR-related inquiries, contact our Data Protection Officer:</p>
      <ul>
        <li><strong>Email:</strong> info@greengochat.com</li>
        <li><strong>Address:</strong> Data Protection Officer, GreenGo Chat Inc., 123 Innovation Way, San Francisco, CA 94105, USA</li>
      </ul>
    </PageLayout>
  );
};

export default GDPR;
