import Footer from "@/components/Footer";
import HeadTemplate from "@/components/general/HeadTemplate";
import Header from "@/components/Header";

const TermsOfService = () => {
  return (
    <>
      <HeadTemplate title="Terms of service" />

      <Header />

      <section className="min-h-screen mt-36">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Terms of Service
          </h1>

          <p className="text-gray-600 mb-4">Effective Date: 2nd August, 2024</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Introduction
            </h2>
            <p className="text-gray-600">
              Welcome to Ventivo. These Terms of Service govern your use of our
              application and services. By using Ventivo, you agree to comply
              with and be bound by these terms.
            </p>
          </section>

          {/* <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Account Registration
            </h2>
            <p className="text-gray-600">
              To access certain features of Ventivo, you must register for an
              account. You agree to provide accurate and complete information
              during the registration process and to keep this information up to
              date.
            </p>
          </section> */}

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              User Responsibilities
            </h2>
            <p className="text-gray-600">
              You are responsible for all activity that occurs under your
              account. You agree to use Ventivo in compliance with all
              applicable laws and not to engage in any activity that could harm
              our service or other users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Payment and Subscriptions
            </h2>
            <p className="text-gray-600">
              Certain features of Ventivo may require payment. By selecting a
              paid plan, you agree to pay the applicable fees and taxes.
              Payments are non-refundable, except as described in our Refund
              Policy below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Refund Policy
            </h2>
            <p className="text-gray-600">
              We want you to be satisfied with our service. If you are not
              satisfied with Ventivo, you may request a refund within 14 days of
              your purchase. To request a refund, please contact us at
              support@ventivo.co.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Termination
            </h2>
            <p className="text-gray-600">
              We may suspend or terminate your access to Ventivo at any time,
              without notice, for conduct that we believe violates these Terms
              of Service or is harmful to other users or the service.
            </p>
          </section>

          {/* <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Limitation of Liability
            </h2>
            <p className="text-gray-600">
              Ventivo is provided on an "as is" and "as available" basis. We do
              not warrant that the service will be uninterrupted or error-free.
              To the fullest extent permitted by law, we disclaim all warranties
              and will not be liable for any damages arising from your use of
              the service.
            </p>
          </section> */}

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please
              contact us at support@ventivo.co
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsOfService;
