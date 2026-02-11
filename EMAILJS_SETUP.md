# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to https://dashboard.emailjs.com/signup
2. Sign up for a free account

## Step 2: Add Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose Gmail or your preferred email provider
4. Connect your email account
5. Copy the **Service ID** (e.g., `service_xxxxx`)
6. Add it to `.env` as `VITE_EMAILJS_SERVICE_ID`

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Submission - {{subject}}

New message from {{from_name}}:

Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save the template
5. Copy the **Template ID** (e.g., `template_xxxxx`)
6. Add it to `.env` as `VITE_EMAILJS_TEMPLATE_ID`

## Step 4: Get Public Key

1. Go to **Account** (bottom left)
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxx`)
3. Add it to `.env` as `VITE_EMAILJS_PUBLIC_KEY`

## Step 5: Restart Development Server

```bash
npm run dev
```

## Testing

1. Go to your portfolio contact form
2. Fill out the form
3. Submit - you should receive an email at `mihirsingh191@gmail.com`

## Troubleshooting

- If emails aren't sending, check browser console for errors
- Make sure all three environment variables are set in `.env`
- Verify your email service is properly connected
- Check spam folder for test emails
