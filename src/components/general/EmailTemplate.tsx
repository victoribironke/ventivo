import { EmailTemplateProps } from "@/types/general";

const EmailTemplate = ({ firstName }: Readonly<EmailTemplateProps>) => (
  <div style={{ maxWidth: "600px" }}>
    <h2 style={{ color: "black", fontWeight: "lighter" }}>
      Hi {firstName}, thank you for joining the waitlist.
    </h2>
    <h3 style={{ color: "black", fontWeight: "lighter" }}>
      This is a journey I am excited to start, and I appreciate you for joining
      me. I will be in touch with you over the coming days so we can begin
      building an amazing product. Until then, cheers.
    </h3>
    <a
      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.ventivo.co%2F&text=I%20just%20joined%20the%20Ventivo%20waitlist%20by%20@victoribironke_.%20You%20can%20join%20us%20to%20build%20an%20amazing%20product%20together%3A"
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontSize: "16px" }}
    >
      Tweet about it
    </a>
  </div>
);

export { EmailTemplate };
