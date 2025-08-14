'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-8">
              <strong>Effective Date:</strong> January 1, 2025<br/>
              <strong>Last Updated:</strong> January 7, 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                Veles Solutions ("Veles," "we," "us," or "our") is committed to protecting the privacy and security of personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our risk management software and services designed for brokerage companies.
              </p>
              <p className="text-gray-300 mb-4">
                As a B2B software provider serving the financial services industry, we recognize the critical importance of data protection in maintaining trust and regulatory compliance. We voluntarily adhere to the principles of the General Data Protection Regulation (GDPR) and other international data protection standards, regardless of our clients' jurisdictions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Data Protection Principles</h2>
              <p className="text-gray-300 mb-4">We adhere to the following data protection principles:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Lawfulness, fairness, and transparency:</strong> We process data lawfully, fairly, and in a transparent manner.</li>
                <li><strong>Purpose limitation:</strong> We collect data for specified, explicit, and legitimate purposes only.</li>
                <li><strong>Data minimization:</strong> We process only the data necessary for the specified purposes.</li>
                <li><strong>Accuracy:</strong> We ensure that personal data is accurate and kept up to date.</li>
                <li><strong>Storage limitation:</strong> We retain personal data only for as long as necessary.</li>
                <li><strong>Integrity and confidentiality:</strong> We implement appropriate security measures to protect personal data.</li>
                <li><strong>Accountability:</strong> We are responsible for demonstrating compliance with these principles.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Types of Data We Process</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Client Account Data</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Company information (name, registration number, jurisdiction)</li>
                <li>Contact details (business addresses, phone numbers, email addresses)</li>
                <li>Authorized user accounts and access credentials</li>
                <li>Business relationship information</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.2 Trading and Risk Data</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Trading account information and transaction histories</li>
                <li>Risk metrics and analytics data</li>
                <li>Market exposure and position data</li>
                <li>Compliance and regulatory reporting data</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.3 Technical Data</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>IP addresses and device identifiers</li>
                <li>Browser types and versions</li>
                <li>System logs and usage patterns</li>
                <li>API access logs and integration data</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.4 Communication Data</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Support ticket contents and correspondence</li>
                <li>Training and onboarding communications</li>
                <li>Feedback and survey responses</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Lawful Bases for Processing</h2>
              <p className="text-gray-300 mb-4">We process personal data based on the following legal grounds:</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">4.1 Contract Performance</h3>
              <p className="text-gray-300 mb-4">Processing necessary to fulfill our contractual obligations to provide risk management software and related services.</p>

              <h3 className="text-xl font-semibold text-white mb-3">4.2 Legitimate Interests</h3>
              <p className="text-gray-300 mb-4">Processing necessary for our legitimate business interests, including:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Improving our products and services</li>
                <li>Ensuring platform security and preventing fraud</li>
                <li>Conducting business analytics and research</li>
                <li>Direct marketing to existing clients about similar services</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">4.3 Legal Obligations</h3>
              <p className="text-gray-300 mb-4">Processing necessary to comply with legal obligations, including anti-money laundering (AML) requirements and regulatory reporting.</p>

              <h3 className="text-xl font-semibold text-white mb-3">4.4 Consent</h3>
              <p className="text-gray-300 mb-4">Where we rely on consent, we ensure it is freely given, specific, informed, and unambiguous.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">5. How We Use Your Data</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Service Delivery:</strong> To provide and maintain our risk management platform</li>
                <li><strong>Account Management:</strong> To manage client accounts and user access</li>
                <li><strong>Risk Analysis:</strong> To perform risk calculations and generate analytics</li>
                <li><strong>Customer Support:</strong> To respond to inquiries and provide technical assistance</li>
                <li><strong>Platform Improvement:</strong> To enhance features and develop new functionalities</li>
                <li><strong>Security:</strong> To protect against unauthorized access and ensure data integrity</li>
                <li><strong>Compliance:</strong> To meet regulatory requirements and industry standards</li>
                <li><strong>Communication:</strong> To send service updates, security alerts, and relevant information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4">We may share data with:</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">6.1 Service Providers</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Cloud infrastructure providers (AWS, Google Cloud, Azure)</li>
                <li>Analytics and monitoring services</li>
                <li>Communication and support platforms</li>
                <li>Payment processors (for billing purposes)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">6.2 Business Transfers</h3>
              <p className="text-gray-300 mb-4">In the event of a merger, acquisition, or sale of assets, data may be transferred to the acquiring entity.</p>

              <h3 className="text-xl font-semibold text-white mb-3">6.3 Legal Requirements</h3>
              <p className="text-gray-300 mb-4">We may disclose data when required by law, court order, or regulatory authorities.</p>

              <p className="text-gray-300 mt-4">
                <strong>Important:</strong> We never sell personal data to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Data Security</h2>
              <p className="text-gray-300 mb-4">We implement comprehensive security measures including:</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">7.1 Technical Measures</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>Multi-factor authentication for all user accounts</li>
                <li>Regular security audits and penetration testing</li>
                <li>Intrusion detection and prevention systems</li>
                <li>Secure API endpoints with rate limiting</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">7.2 Organizational Measures</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Employee data protection training</li>
                <li>Access controls based on principle of least privilege</li>
                <li>Confidentiality agreements with all staff</li>
                <li>Incident response and breach notification procedures</li>
                <li>Regular security awareness programs</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Data Retention</h2>
              <p className="text-gray-300 mb-4">We retain data for different periods based on its nature and purpose:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Active Account Data:</strong> Duration of the business relationship plus 6 years</li>
                <li><strong>Trading Records:</strong> 7 years from transaction date (regulatory requirement)</li>
                <li><strong>Technical Logs:</strong> 90 days for operational logs, 2 years for security logs</li>
                <li><strong>Support Communications:</strong> 3 years from last interaction</li>
                <li><strong>Marketing Data:</strong> Until consent is withdrawn or 3 years of inactivity</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Your Rights</h2>
              <p className="text-gray-300 mb-4">You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                <li><strong>Restriction:</strong> Request limited processing of your data</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Automated Decision-Making:</strong> Not be subject to purely automated decisions</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise these rights, contact us at privacy@veles.solutions with proof of identity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
              <p className="text-gray-300 mb-4">
                When we transfer data internationally, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Standard Contractual Clauses approved by regulatory authorities</li>
                <li>Adequacy decisions where applicable</li>
                <li>Additional technical and organizational measures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Updates to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy periodically. Material changes will be notified via:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Email notification to primary account contacts</li>
                <li>In-platform notifications</li>
                <li>Prominent notice on our website</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Specific Provisions for Brokerage Services</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">12.1 Client Trading Data</h3>
              <p className="text-gray-300 mb-4">
                As a risk management platform for brokers, we process trading data solely for the purposes of risk analysis, compliance monitoring, and fraud detection. We do not use this data for proprietary trading or share it with competitors.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">12.2 Regulatory Compliance</h3>
              <p className="text-gray-300 mb-4">
                We maintain data processing practices that enable our clients to meet their regulatory obligations under MiFID II, ESMA guidelines, and other relevant financial regulations.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">12.3 Data Segregation</h3>
              <p className="text-gray-300">
                Each client's data is logically segregated using robust access controls and encryption. Cross-client data access is strictly prohibited except for aggregated, anonymized analytics.
              </p>
            </section>

            <div className="mt-12 p-6 bg-gray-900 rounded-xl border border-gray-800">
              <p className="text-sm text-gray-400 text-center">
                This Privacy Policy was last reviewed and updated on January 7, 2025.<br/>
                © 2025 Veles Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}