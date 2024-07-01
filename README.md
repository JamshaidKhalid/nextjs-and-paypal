# Next.js PayPal Integration

## Description
This project demonstrates the integration of PayPal with a Next.js application. The integration uses PayPal's sandbox environment for testing and showcases various use cases such as creating a payment, capturing a payment, and handling payment status updates.

## Getting Started
First, clone the repo and install dependencies:
```bash
npm install
```
First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


### Setup environmental variables
```bash
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
```

## Configuring PayPal Sandbox Account
Ensure your PayPal sandbox account is set up correctly:

1. Log in to your PayPal Developer Dashboard.
2. Create a sandbox account if you haven't already.
3. Generate sandbox API credentials.


## Usecases
1. Creating a payment
2. Capturing a payment
3. Handling Payments with Status Updates (Webhooks)


Ensure you are using latest version of PayPal SDK, or refer to [PayPal Developer Documentation](https://developer.paypal.com/tools/sandbox/)
