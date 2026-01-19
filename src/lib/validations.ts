import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Please enter a valid email address")
  .max(255, "Email must be less than 255 characters")
  .refine((email) => {
    // Check for common alias patterns like + addressing
    const hasAlias = email.includes("+");
    return !hasAlias;
  }, "Email aliases (with +) are not allowed");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(100, "Password must be less than 100 characters")
  .refine((password) => /[A-Z]/.test(password), "Password must contain at least one uppercase letter")
  .refine((password) => /[a-z]/.test(password), "Password must contain at least one lowercase letter")
  .refine((password) => /[0-9]/.test(password), "Password must contain at least one number");

export const signUpSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

export const checkoutContactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name too long"),
  email: emailSchema,
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long")
    .regex(/^[+]?[\d\s-]+$/, "Please enter a valid phone number"),
  address: z.string().trim().min(10, "Please enter a complete address").max(200, "Address too long"),
});

export const cardPaymentSchema = z.object({
  cardNumber: z
    .string()
    .trim()
    .min(1, "Card number is required")
    .regex(/^[\d\s]{13,19}$/, "Please enter a valid card number"),
  expiry: z
    .string()
    .trim()
    .min(1, "Expiry date is required")
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Please enter a valid expiry date (MM/YY)")
    .refine((expiry) => {
      const [month, year] = expiry.split("/");
      const now = new Date();
      const currentYear = now.getFullYear() % 100;
      const currentMonth = now.getMonth() + 1;
      const expiryYear = parseInt(year);
      const expiryMonth = parseInt(month);
      
      if (expiryYear < currentYear) return false;
      if (expiryYear === currentYear && expiryMonth < currentMonth) return false;
      return true;
    }, "Card has expired"),
  cvv: z
    .string()
    .trim()
    .min(3, "CVV is required")
    .max(4, "CVV must be 3-4 digits")
    .regex(/^\d{3,4}$/, "Please enter a valid CVV"),
});

export const upiPaymentSchema = z.object({
  upiId: z
    .string()
    .trim()
    .min(1, "UPI ID is required")
    .regex(/^[\w.-]+@[\w]+$/, "Please enter a valid UPI ID (e.g., name@upi)"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type CheckoutContactFormData = z.infer<typeof checkoutContactSchema>;
export type CardPaymentFormData = z.infer<typeof cardPaymentSchema>;
export type UpiPaymentFormData = z.infer<typeof upiPaymentSchema>;
