# Contact Form Setup Instructions

The contact form is now configured to use **Resend** for sending emails. Follow these steps to complete the setup:

## 1. Sign Up for Resend

1. Go to [resend.com](https://resend.com)
2. Create a free account (3,000 emails/month free)
3. Verify your email address

## 2. Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to [API Keys](https://resend.com/api-keys)
3. Click "Create API Key"
4. Give it a name (e.g., "Contact Form")
5. Copy the generated API key

## 3. Configure Environment Variables

1. Open the `.env` file in the project root
2. Replace `your_resend_api_key_here` with your actual Resend API key
3. Replace `your-email@example.com` with the email address where you want to receive contact form submissions

Example:
```env
RESEND_API_KEY=re_123abc456def789
SITE_OWNER_EMAIL=you@yourdomain.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

## 4. Configure Your Sending Domain (Optional but Recommended)

By default, emails are sent from `onboarding@resend.dev`. To send from your own domain:

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain name
4. Add the DNS records shown (SPF, DKIM, etc.)
5. Wait for verification (usually a few minutes)
6. Set `RESEND_FROM_EMAIL` in your environment variables to a verified sender, for example:
   ```env
   RESEND_FROM_EMAIL=contact@yourdomain.com
   ```

## 5. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox (the one you set in `SITE_OWNER_EMAIL`)

## 6. Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables to your hosting platform:
   - `RESEND_API_KEY`
   - `SITE_OWNER_EMAIL`
   - `RESEND_FROM_EMAIL`
2. Make sure to use your verified domain in production

### Vercel
- Go to Project Settings → Environment Variables
- Add all three variables

### Netlify
- Go to Site Settings → Environment Variables
- Add all three variables

## Troubleshooting

### "Email service is not configured" error
- Check that `RESEND_API_KEY` is set in your `.env` file
- Check that `SITE_OWNER_EMAIL` and `RESEND_FROM_EMAIL` are set
- Restart your dev server after adding environment variables

### Emails not arriving
- Check your spam folder
- Verify your API key is correct
- Check the Resend dashboard for logs: [resend.com/logs](https://resend.com/logs)
- Make sure `SITE_OWNER_EMAIL` is set correctly

### Rate limits
- Free tier: 3,000 emails/month (100/day)
- If you need more, upgrade your Resend plan

## How It Works

1. User fills out the contact form
2. Frontend validates the input
3. Form data is sent to `/api/contact` (Astro API route)
4. Server-side endpoint uses Resend to send the email
5. User receives success/error message

## Security

- API keys are never exposed to the browser
- Server-side validation prevents malicious submissions
- The user's email is set as the reply-to address for easy responses
