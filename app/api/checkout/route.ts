import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'

const clientId = 'ATuhSB1a-ENPXBj5ww7QZUHWX8iPgtFiUbLNfnrNVFyhyuADLjIZVkfAKt9nzFQh_gI2jnCm4T5o1Ypq'
const clientSecret = 'EImRNVhLAOhiFaMrWQxp6YDI72WvCSK81WPlpZ3k98AoKnOQZNjZt_HFl8Ephnohy_u_f6oOqYTfC3b1'

let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export async function POST() {  
    const request = new paypal.orders.OrdersCreateRequest(); 

    request.requestBody({
        "intent": "CAPTURE",
        "purchase_units": [
            {
                "amount": {
                    "currency_code": "USD",
                    "value": "100.00"
                }
            }
        ]
    });

    
    const createOrder = async () => {
        const response = await client.execute(request);
        return response.result.id;  
    };

    let orderId = await createOrder();  

    console.log(orderId);  
    return NextResponse.json({ id: orderId });  
}
