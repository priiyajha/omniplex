import {NextRequest} from "next/server";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


export async function POST(request: NextRequest) {
    try{
        const { amount } = await request.json();

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            automatic_payment_methods: {enabled: true},
        });

        return Response.json({clientSecret: paymentIntent.client_secret});
    }catch(e){
        console.error(e);
        return Response.json(
            {error: `Internal Server Error ${e}`},
            { status: 500 }
        );
    }
}