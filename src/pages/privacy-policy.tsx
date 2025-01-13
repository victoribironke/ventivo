import Footer from "@/components/Footer";
import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import { PAGES } from "@/constants/constants";

const PrivacyPolicy = () => {
  const meta = {
    title: "Privacy Policy ~ Ventivo",
    url: PAGES.privacy_policy,
    desc: "Privacy policy for Ventivo.",
    og_image: "https://ventivo.co/og-image.png",
  };

  return (
    <>
      <HeadTemplate meta={meta} />

      <Hero />

      <main className="my-20 max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">Effective Date: 2nd August, 2024</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Introduction
          </h2>
          <p className="text-gray-600">
            Welcome to Ventivo! We are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your
            information when you use our application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Information We Collect
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            1. Personal Information
          </h3>
          <p className="text-gray-600">
            We may collect personal information that you voluntarily provide to
            us when you register for an account, such as your name, email
            address, and other contact details.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-1 mt-4">
            2. Firebase Data
          </h3>
          <p className="text-gray-600">
            Our application integrates with Firebase, and we may collect and
            store data from your Firebase projects to provide our services. This
            data includes your Firebase credentials and the authentication
            information for secure read access.
          </p>

          {/* <h3 className="text-lg font-semibold text-gray-800 mb-1 mt-4">
              3. Usage Data
            </h3>
            <p className="text-gray-600">
              We may automatically collect information about how you interact
              with our app, including your IP address, device type, operating
              system, and browsing behavior.
            </p> */}
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            How We Use Your Information
          </h2>
          <p className="text-gray-600">
            We may use the information we collect for various purposes,
            including:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>To provide, operate, and maintain our application.</li>
            {/* <li>To improve and personalize your experience with our app.</li> */}
            <li>
              To communicate with you about updates, offers, and promotions.
            </li>
            <li>
              To monitor and analyze usage and trends to enhance your
              experience.
            </li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Sharing Your Information
          </h2>
          <p className="text-gray-600">
            We do not share your personal information with third parties.
            {/* except in the following circumstances: */}
          </p>
          {/* <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party service providers who perform
                services on our behalf.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities.
              </li>
            </ul> */}
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Data Security
          </h2>
          <p className="text-gray-600">
            We take reasonable measures to protect your data. However, please be
            aware that no security measures are perfect or impenetrable, and we
            cannot guarantee the absolute security of your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Rights
          </h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your personal
            information. If you wish to exercise these rights, please contact us
            at support@ventivo.co.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            with the updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact
            us at support@ventivo.co
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
