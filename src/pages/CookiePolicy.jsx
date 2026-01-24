import React from 'react';
import PageLayout from './PageLayout';

const CookiePolicy = () => {
  return (
    <PageLayout
      title="Cookie Policy"
      subtitle="Learn how GreenGo Chat uses cookies and similar technologies to enhance your experience."
    >
      <p className="last-updated">Last Updated: January 15, 2026</p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website or use an
        application. They help websites remember your preferences, understand how you use the
        service, and improve your overall experience.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>GreenGo Chat uses cookies and similar technologies to:</p>
      <ul>
        <li>Keep you signed in to your account</li>
        <li>Remember your preferences and settings</li>
        <li>Understand how you interact with our platform</li>
        <li>Personalize your experience and recommendations</li>
        <li>Measure and improve our services</li>
        <li>Provide relevant advertisements</li>
        <li>Ensure platform security and prevent fraud</li>
      </ul>

      <h2>3. Types of Cookies We Use</h2>

      <h3>3.1 Essential Cookies</h3>
      <p>
        These cookies are necessary for the platform to function properly. They enable core
        features like account authentication, security, and accessibility. You cannot opt
        out of essential cookies.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>session_id</td>
            <td>User authentication</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>csrf_token</td>
            <td>Security protection</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>device_id</td>
            <td>Device recognition</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>consent_status</td>
            <td>Cookie preferences</td>
            <td>1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>3.2 Functional Cookies</h3>
      <p>
        These cookies enhance your experience by remembering your preferences, such as
        language settings, display preferences, and notification settings.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>language</td>
            <td>Language preference</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>Display theme</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>notifications</td>
            <td>Notification settings</td>
            <td>1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>3.3 Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our platform by
        collecting and reporting information anonymously.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_ga</td>
            <td>Google Analytics</td>
            <td>User identification</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td>_gid</td>
            <td>Google Analytics</td>
            <td>Session tracking</td>
            <td>24 hours</td>
          </tr>
          <tr>
            <td>_mix_id</td>
            <td>Mixpanel</td>
            <td>User behavior</td>
            <td>1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>3.4 Advertising Cookies</h3>
      <p>
        These cookies are used to deliver relevant advertisements and measure the
        effectiveness of our marketing campaigns.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_fbp</td>
            <td>Facebook</td>
            <td>Ad targeting</td>
            <td>3 months</td>
          </tr>
          <tr>
            <td>IDE</td>
            <td>Google Ads</td>
            <td>Ad personalization</td>
            <td>1 year</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Similar Technologies</h2>
      <p>In addition to cookies, we use:</p>

      <h3>4.1 Pixels (Web Beacons)</h3>
      <p>
        Small transparent images that track user behavior, email opens, and conversion events.
      </p>

      <h3>4.2 Local Storage</h3>
      <p>
        Browser storage that retains data locally on your device, used for caching and
        offline functionality.
      </p>

      <h3>4.3 Device Fingerprinting</h3>
      <p>
        Collecting device attributes (screen size, browser version, etc.) for fraud
        prevention and security purposes.
      </p>

      <h2>5. Third-Party Cookies</h2>
      <p>
        Some cookies are placed by third-party services that appear on our pages. We do
        not control these cookies. Third parties include:
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> Website analytics and performance measurement</li>
        <li><strong>Facebook:</strong> Social features and advertising</li>
        <li><strong>Stripe:</strong> Payment processing</li>
        <li><strong>Intercom:</strong> Customer support chat</li>
        <li><strong>Cloudflare:</strong> Security and performance</li>
      </ul>

      <h2>6. Managing Your Cookie Preferences</h2>

      <h3>6.1 Cookie Settings</h3>
      <p>
        You can manage your cookie preferences through our Cookie Settings panel, accessible
        from the footer of our website or in your account settings.
      </p>

      <h3>6.2 Browser Settings</h3>
      <p>
        Most browsers allow you to control cookies through their settings. You can:
      </p>
      <ul>
        <li>Block all cookies</li>
        <li>Block third-party cookies only</li>
        <li>Delete cookies when you close your browser</li>
        <li>Browse in "private" or "incognito" mode</li>
      </ul>

      <div className="highlight-box">
        <p>
          <strong>Note:</strong> Blocking essential cookies may prevent you from using
          certain features of GreenGo Chat, including signing in to your account.
        </p>
      </div>

      <h3>6.3 Opt-Out Links</h3>
      <p>You can opt out of specific third-party cookies:</p>
      <ul>
        <li><strong>Google Analytics:</strong> tools.google.com/dlpage/gaoptout</li>
        <li><strong>Facebook:</strong> facebook.com/settings/?tab=ads</li>
        <li><strong>General Ad Opt-Out:</strong> optout.aboutads.info</li>
        <li><strong>European Ad Opt-Out:</strong> youronlinechoices.eu</li>
      </ul>

      <h2>7. Do Not Track Signals</h2>
      <p>
        Some browsers have a "Do Not Track" feature that signals to websites that you do
        not want to be tracked. Currently, there is no industry standard for handling
        DNT signals, and we do not respond to DNT signals at this time.
      </p>

      <h2>8. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy periodically to reflect changes in our practices
        or for legal, operational, or regulatory reasons. The "Last Updated" date indicates
        when the policy was last revised.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have questions about our use of cookies, please contact:</p>
      <ul>
        <li><strong>Email:</strong> privacy@greengochat.com</li>
        <li><strong>Address:</strong> GreenGo Chat Inc., 123 Innovation Way, San Francisco, CA 94105, USA</li>
      </ul>
    </PageLayout>
  );
};

export default CookiePolicy;
