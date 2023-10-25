import { EmailTemplate } from "@/components/general/EmailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name } = req.query;

  try {
    const data = await resend.emails.send({
      from: "Ventivo <hello@ventivo.co>",
      to: [email as string],
      subject: "Thank you for joining the waitlist",
      react: EmailTemplate({ firstName: name as string }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
