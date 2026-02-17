import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, location, experience, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !location || !experience) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Format the email message
    const emailMessage = `
New Sales Registration Submission

Personal Information:
- Full Name: ${fullName}
- Email: ${email}
- Phone: ${phone}
- Location: ${location}

Professional Information:
- Current Company: ${company || 'Not provided'}
- Years of Experience: ${experience}

Additional Information:
${message || 'No additional information provided'}

---
This form was submitted from amenityforge.com/salesregistration
    `.trim();

    // Use Web3Forms API (similar to Contact component)
    // Note: Configure your Web3Forms account at https://web3forms.com to send emails to amenityforge@gmail.com
    // Or get a new access key specifically for this form and set it in .env.local as WEB3FORMS_SALES_ACCESS_KEY
    const accessKey = process.env.WEB3FORMS_SALES_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY || '09d17e97-7ab1-4fe5-aa2c-d65f328d12db';
    
    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('name', fullName);
    formData.append('email', email);
    formData.append('subject', `New Sales Registration: ${fullName}`);
    formData.append('message', emailMessage);
    // Web3Forms sends to the email configured in your account dashboard
    // Make sure amenityforge@gmail.com is set as the recipient in your Web3Forms account
    formData.append('from_name', 'Amenity Forge Sales Registration');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json(
        { success: true, message: 'Registration submitted successfully!' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: data.message || 'Failed to submit registration.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing sales registration:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your registration.' },
      { status: 500 }
    );
  }
}
