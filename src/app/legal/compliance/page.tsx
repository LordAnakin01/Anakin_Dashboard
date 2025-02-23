import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CompliancePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/legal"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Legal
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Compliance</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Regulatory Compliance</h2>
          <p>
            The Anakin Dynasty Limited is committed to maintaining the highest standards of regulatory 
            compliance across all our operations. We adhere to various international and local 
            regulations governing our industry.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Data Protection Standards</h2>
          <p className="mb-4">We comply with major data protection regulations including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>Personal Data Protection Act (PDPA)</li>
            <li>Australian Privacy Principles (APP)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Security</h2>
          <p className="mb-4">Our security measures include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>ISO 27001 Information Security Management System</li>
            <li>Regular security audits and penetration testing</li>
            <li>Employee security awareness training</li>
            <li>Incident response and recovery procedures</li>
            <li>24/7 security monitoring</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Financial Compliance</h2>
          <p className="mb-4">We maintain compliance with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>International Financial Reporting Standards (IFRS)</li>
            <li>Anti-Money Laundering (AML) regulations</li>
            <li>Know Your Customer (KYC) requirements</li>
            <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Industry Standards</h2>
          <p className="mb-4">We adhere to various industry standards including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quality Management System (ISO 9001:2015)</li>
            <li>Environmental Management System (ISO 14001:2015)</li>
            <li>Occupational Health and Safety (ISO 45001:2018)</li>
            <li>Business Continuity Management (ISO 22301:2019)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Ethics and Corporate Governance</h2>
          <p className="mb-4">Our commitment includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Code of Business Conduct and Ethics</li>
            <li>Anti-corruption and bribery policies</li>
            <li>Whistleblower protection</li>
            <li>Regular compliance training for employees</li>
            <li>Transparent reporting practices</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Environmental Compliance</h2>
          <p>
            We are committed to environmental sustainability and comply with all relevant 
            environmental regulations and standards in our operations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Compliance Monitoring</h2>
          <p className="mb-4">Our compliance program includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regular internal audits</li>
            <li>Third-party compliance assessments</li>
            <li>Continuous monitoring systems</li>
            <li>Regular reporting to regulatory authorities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Reporting Concerns</h2>
          <p>
            If you have any concerns about our compliance with any regulations or standards, 
            please contact our Compliance Officer at compliance@anakindynasty.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Updates and Reviews</h2>
          <p>
            We regularly review and update our compliance programs to ensure they remain 
            current with changing regulations and best practices in our industry.
          </p>
        </section>
      </div>
    </div>
  )
} 