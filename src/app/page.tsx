'use client'
import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";

import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import  {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";


if(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY=== undefined) {
    throw new Error("No PRIVATE_KEY provided");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);


export default function Home(){
    const amount = 49.99;
    return (
    <AuthWrapper>
      <div className={styles.main}>
        <MainPrompt />
      </div>

    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
        <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-white mb-2">Priya</h1>
            <h2 className="text-white">
                has requested
                <span className="font-bold"> ${amount} </span>
            </h2>
        </div>
        <Elements
            stripe={stripePromise}
            options={{
                mode:"payment",
                amount:convertToSubcurrency(amount),
                currency:"usd",
            }}
        >
            <CheckoutPage amount = {amount}/>
        </Elements>
    </main>
    </AuthWrapper>
  );
}


