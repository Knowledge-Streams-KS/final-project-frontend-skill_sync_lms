import { Outlet } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="max-w-6xl h-auto mx-auto p-4 border-1 shadow-sm mt-5">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <div className="prose">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Skill Sync! These terms and conditions govern your use of
          our website and services.
        </p>

        <h2>2. Website Use</h2>
        <p className="mb-4">
          <span className="font-semibold">2.1. License:</span> We grant you a
          limited, non-exclusive, non-transferable license to use our website
          and services.
        </p>

        <h2>3. Online Courses</h2>
        <p className="mb-4">
          <span className="font-semibold">3.1. Course Access:</span> Upon
          purchase, you will receive access to the purchased course(s) for the
          specified duration, unless otherwise stated.
        </p>

        <h2>4. Payment and Pricing</h2>
        <p className="mb-4">
          <span className="font-semibold">4.1. Prices:</span> Prices for courses
          are displayed on our website and are subject to change without notice.
        </p>

        <h2>5. Refunds and Cancellations</h2>
        <p className="mb-4">
          <span className="font-semibold">5.1. Refunds:</span> Refunds are
          provided within [number] days of purchase, subject to our refund
          policy. Courses that have been accessed or completed may not be
          eligible for refunds.
        </p>

        <h2>6. Intellectual Property</h2>
        <p className="mb-4">
          <span className="font-semibold">6.1. Ownership:</span> All content on
          our website, including courses, logos, and trademarks, are the
          property of Skill Sync or our licensors and are protected by
          intellectual property laws.
        </p>

        <h2>7. Privacy Policy</h2>
        <p className="mb-4">
          <span className="font-semibold">7.1. Data Collection:</span> We
          collect and use personal information in accordance with our Privacy
          Policy. By using our website, you consent to such collection and use.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p className="mb-4">
          <span className="font-semibold">8.1. Disclaimer:</span> Our courses
          are provided “as is” without warranties of any kind. We do not
          guarantee the accuracy, completeness, or usefulness of course content.
        </p>

        <h2>9. Governing Law</h2>
        <p className="mb-4">
          <span className="font-semibold">9.1. Jurisdiction:</span> These terms
          are governed by and construed in accordance with the laws of [your
          jurisdiction], without regard to its conflict of law principles.
        </p>

        <h2>10. Changes to Terms</h2>
        <p className="mb-4">
          <span className="font-semibold">10.1. Modification:</span> We reserve
          the right to modify these terms at any time. Changes will be effective
          immediately upon posting on our website.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          <span className="font-semibold">11.1. Questions:</span> If you have
          any questions about these terms and conditions, please contact us at
          [contact email].
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
