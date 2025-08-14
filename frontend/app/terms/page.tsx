'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Use</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-8">
              <strong>Effective Date:</strong> January 1, 2025<br/>
              <strong>Last Updated:</strong> January 7, 2025
            </p>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-8">
              <p className="text-gray-300">
                <strong>IMPORTANT:</strong> These Terms of Use constitute a legally binding agreement between you and Veles Solutions. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing or using the Veles Risk Management System ("Service"), you agree to be bound by these Terms of Use ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
              <p className="text-gray-300 mb-4">
                These Terms apply to all visitors, users, and others who access or use the Service, including but not limited to brokerage companies, financial institutions, and their authorized representatives.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Service Description</h2>
              <p className="text-gray-300 mb-4">
                Veles provides a comprehensive B2B risk management platform designed for brokerage companies, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Real-time risk monitoring and analytics</li>
                <li>AI-powered fraud detection and prevention</li>
                <li>Multi-account detection capabilities</li>
                <li>Market impact analysis</li>
                <li>Customizable reporting and dashboards</li>
                <li>Integration with trading platforms</li>
                <li>API access for custom implementations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Account Registration and Security</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Account Requirements</h3>
              <p className="text-gray-300 mb-4">To use our Service, you must:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Be a legally registered business entity</li>
                <li>Provide accurate, current, and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly notify us of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.2 Account Security</h3>
              <p className="text-gray-300 mb-4">
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">4. License and Restrictions</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">4.1 License Grant</h3>
              <p className="text-gray-300 mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service solely for your internal business purposes.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">4.2 Restrictions</h3>
              <p className="text-gray-300 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Resell, sublicense, or redistribute the Service</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Use the Service for any unlawful purpose or in violation of regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use automated systems to access the Service without permission</li>
                <li>Remove or alter any proprietary notices or labels</li>
                <li>Use the Service to compete with Veles or create a derivative work</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Usage and Ownership</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">5.1 Your Data</h3>
              <p className="text-gray-300 mb-4">
                You retain all rights, title, and interest in and to your data. By using the Service, you grant us a limited license to use, process, and store your data solely to provide the Service to you.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">5.2 Service Improvements</h3>
              <p className="text-gray-300 mb-4">
                We may use aggregated, anonymized data derived from your use of the Service to improve our products, develop new features, and conduct research. Such aggregated data will not identify you or your clients.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">5.3 Feedback</h3>
              <p className="text-gray-300 mb-4">
                Any feedback, suggestions, or recommendations you provide regarding the Service shall become our property, and we may use such feedback without restriction or compensation to you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">6.1 Fees</h3>
              <p className="text-gray-300 mb-4">
                You agree to pay all fees associated with your use of the Service according to the pricing plan you select. Fees are non-refundable except as required by law or as explicitly stated in these Terms.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">6.2 Billing</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Fees are billed in advance on a monthly or annual basis</li>
                <li>You authorize us to charge your designated payment method</li>
                <li>Failure to pay may result in suspension or termination of service</li>
                <li>All fees are exclusive of taxes, which you are responsible for paying</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">6.3 Price Changes</h3>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify our pricing with 30 days' notice. Continued use of the Service after price changes constitutes acceptance of the new pricing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">7.1 Veles Property</h3>
              <p className="text-gray-300 mb-4">
                The Service, including all content, features, and functionality, is owned by Veles Solutions and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">7.2 Trademarks</h3>
              <p className="text-gray-300 mb-4">
                "Veles" and our logos are trademarks of Veles Solutions. You may not use our trademarks without our prior written consent. All other trademarks referenced are the property of their respective owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Confidentiality</h2>
              <p className="text-gray-300 mb-4">
                Each party agrees to maintain the confidentiality of the other party's confidential information and use it solely for the purposes of these Terms. This obligation survives termination of these Terms for a period of five (5) years.
              </p>
              <p className="text-gray-300 mb-4">
                Confidential information does not include information that:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Is or becomes publicly available through no breach by the receiving party</li>
                <li>Was rightfully known by the receiving party before disclosure</li>
                <li>Is rightfully obtained from a third party without breach of confidentiality</li>
                <li>Is independently developed without use of confidential information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Warranties and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">9.1 Service Warranty</h3>
              <p className="text-gray-300 mb-4">
                We warrant that the Service will perform materially in accordance with the applicable documentation under normal use and circumstances.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">9.2 Disclaimer</h3>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
                <p className="text-gray-300 uppercase">
                  EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">9.3 No Trading Advice</h3>
              <p className="text-gray-300 mb-4">
                The Service provides risk management tools and analytics only. We do not provide trading advice, financial advice, or recommendations. You are solely responsible for your trading decisions and risk management strategies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
                <p className="text-gray-300 uppercase">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, VELES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </div>
              <p className="text-gray-300 mb-4">
                Our maximum aggregate liability under these Terms shall not exceed the total amount paid by you to Veles in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Indemnification</h2>
              <p className="text-gray-300 mb-4">
                You agree to indemnify, defend, and hold harmless Veles Solutions, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Any content or data you submit through the Service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Service Level Agreement</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">12.1 Uptime Commitment</h3>
              <p className="text-gray-300 mb-4">
                We strive to maintain 99.9% uptime for the Service, excluding scheduled maintenance and circumstances beyond our reasonable control.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">12.2 Support</h3>
              <p className="text-gray-300 mb-4">
                We provide technical support according to your service plan:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Standard:</strong> Business hours support via email</li>
                <li><strong>Professional:</strong> Extended hours with priority response</li>
                <li><strong>Enterprise:</strong> 24/7 support with dedicated account management</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">13. Term and Termination</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">13.1 Term</h3>
              <p className="text-gray-300 mb-4">
                These Terms commence on the date you first access the Service and continue until terminated.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">13.2 Termination</h3>
              <p className="text-gray-300 mb-4">
                Either party may terminate these Terms:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>For convenience with 30 days' written notice</li>
                <li>Immediately for material breach that remains uncured after 15 days' notice</li>
                <li>Immediately if the other party becomes insolvent or bankrupt</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">13.3 Effect of Termination</h3>
              <p className="text-gray-300 mb-4">
                Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Your access to the Service will be disabled</li>
                <li>You must pay all outstanding fees</li>
                <li>We will provide your data for export for 30 days</li>
                <li>Sections regarding intellectual property, confidentiality, and limitation of liability survive</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">14. Modifications to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these Terms at any time. Material changes will be notified via email at least 30 days before taking effect. Continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">15. General Provisions</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">15.1 Governing Law</h3>
              <p className="text-gray-300 mb-4">
                These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.2 Dispute Resolution</h3>
              <p className="text-gray-300 mb-4">
                Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of [Arbitration Body]. The arbitration shall be conducted in English in [Location].
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.3 Entire Agreement</h3>
              <p className="text-gray-300 mb-4">
                These Terms, together with our Privacy Policy and any applicable Order Forms, constitute the entire agreement between you and Veles regarding the Service.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.4 Severability</h3>
              <p className="text-gray-300 mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.5 Waiver</h3>
              <p className="text-gray-300 mb-4">
                No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.6 Force Majeure</h3>
              <p className="text-gray-300 mb-4">
                Neither party shall be liable for any delay or failure to perform due to causes beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemic, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">16. Contact Information</h2>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <p className="text-gray-300">
                  For questions about these Terms of Use, please contact us at:
                </p>
                <p className="text-gray-300 mt-4">
                  <strong>Veles Solutions</strong><br/>
                  Email: legal@veles.solutions<br/>
                  Phone: +1 (234) 567-890<br/>
                  Address: [Your Business Address]
                </p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-gray-900 rounded-xl border border-gray-800">
              <p className="text-sm text-gray-400 text-center">
                By using Veles Risk Management System, you acknowledge that you have read and understood these Terms of Use and agree to be bound by them.<br/><br/>
                These Terms of Use were last reviewed and updated on January 7, 2025.<br/>
                © 2025 Veles Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}