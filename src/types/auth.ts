import { Dispatch, SetStateAction } from "react";

export type PasswordStrengthProps = {
  password: string;
};

export type SignupFormData = {
  firstName: string;
  lastName: string;
  birthdate: string;
  email: string;
  password: string;
};

export type SignupProps = {
  formData: SignupFormData;
  setFormData: Dispatch<SetStateAction<SignupFormData>>;
  setStep: Dispatch<SetStateAction<number>>;
};

export type ConfirmEmailProps = {
  formData: SignupFormData;
};
