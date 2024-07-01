'use client'
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Home = () => {
  return (
    <div>
      <PayPalScriptProvider options={{
        clientId: "ATuhSB1a-ENPXBj5ww7QZUHWX8iPgtFiUbLNfnrNVFyhyuADLjIZVkfAKt9nzFQh_gI2jnCm4T5o1Ypq"
      }}>
        <PayPalButtons
          createOrder={async () => {
            try {
              const res = await fetch('/api/checkout', {
                method: 'POST'
              });
              if (!res.ok) {
                throw new Error(`Server responded with status ${res.status}`);
              }
              const data = await res.json();
              const orderId = data.id; 
              console.log('Order ID:', orderId);
              return orderId; 
            } catch (error) {
              console.error('Failed to create order:', error);
              return null; 
            }
          }} 
          onApprove={async (data, actions) => {
            console.log(data)
            actions.order?.capture();
            
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Home;
