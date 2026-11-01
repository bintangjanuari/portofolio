import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters long").max(150),
  message: z.string().min(10, "Message must be at least 10 characters long").max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const formattedErrors = result.error.format();
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please verify your input.",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    // In production, integrate email service (Resend, SendGrid, or nodemailer)
    // Here we log the validated lead payload safely
    const { name, email, subject, message } = result.data;
    console.log(`[Contact Lead Received] from=${name} <${email}> subject="${subject}"`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please try emailing directly.",
      },
      { status: 500 }
    );
  }
}

