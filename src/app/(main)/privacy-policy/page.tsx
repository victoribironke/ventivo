import { BASE_URL, PAGES } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy ~ Ventivo",
  description: "Privacy policy for Ventivo.",
  openGraph: {
    title: "Privacy policy ~ Ventivo",
    description: "Privacy policy for Ventivo.",
    type: "website",
    url: BASE_URL + PAGES.privacy_policy,
    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy policy ~ Ventivo",
    description: "Privacy policy for Ventivo.",

    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
};

const Page = () => {
  return (
    <section className="w-full max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-6">
        Privacy policy
      </h1>

      <p className="mb-4">Effective Date: 2nd August, 2024</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to Ventivo! We are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          information when you use our application.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>

        <h3 className="text-lg font-semibold mb-1">1. Personal Information</h3>
        <p>
          We may collect personal information that you voluntarily provide to us
          when you register for an account, such as your name, email address,
          and other contact details.
        </p>

        <h3 className="text-lg font-semibold mb-1 mt-4">2. Firebase Data</h3>
        <p>
          Our application integrates with Firebase, and we may collect and store
          data from your Firebase projects to provide our services. This data
          includes your Firebase credentials and the authentication information
          for secure read access.
        </p>

        <h3 className="text-lg font-semibold mb-1 mt-4">3. PostgreSQL Data</h3>
        <p>
          Our application can connect to your postgres databse, and we may
          collect and store data from your postgres projects to provide our
          services. This data includes your postgres connection details.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p>
          We may use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>To provide, operate, and maintain our application.</li>
          {/* <li>To improve and personalize your experience with our app.</li> */}
          <li>
            To communicate with you about updates, offers, and promotions.
          </li>
          <li>
            To monitor and analyze usage and trends to enhance your experience.
          </li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Sharing Your Information</h2>
        <p>
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
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p>
          We take reasonable measures to protect your data. However, please be
          aware that no security measures are perfect or impenetrable, and we
          cannot guarantee the absolute security of your information.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. If you wish to exercise these rights, please contact us
          at support@ventivo.co.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page with the
          updated effective date.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at support@ventivo.co
        </p>
      </div>
    </section>
  );
};

export default Page;
