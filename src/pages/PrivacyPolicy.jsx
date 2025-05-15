import { Helmet } from "react-helmet"

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10">
      <Helmet>
        <title>Privacy Policy | SportsGear</title>
        <meta name="description" content="SportsGear's privacy policy - how we collect, use, and protect your data." />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Privacy Policy</h1>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 italic">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              At SportsGear, we respect your privacy and are committed to protecting your personal data. This privacy
              policy will inform you about how we look after your personal data when you visit our website and tell you
              about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">2. The Data We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              We may collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Personal information (name, email address, phone number)</li>
              <li>Contact information</li>
              <li>Payment information</li>
              <li>Device and usage information</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">3. How We Use Your Data</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              We use the information we collect about you for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>To provide and maintain our service</li>
              <li>To process your transactions</li>
              <li>To send you order confirmations and updates</li>
              <li>To improve our website and customer service</li>
              <li>To communicate with you about products, services, and promotions</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">4. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We implement appropriate security measures to protect your personal information. However, no method of
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">5. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
              <p className="text-gray-700 dark:text-gray-300">Email: info@sportsgearrrr.comm</p>
              <p className="text-gray-700 dark:text-gray-300">Phone: +880 007 0013</p>
              <p className="text-gray-700 dark:text-gray-300">Address: 123 Sports Avenue, Nilkhet, Dhaka-1205</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
