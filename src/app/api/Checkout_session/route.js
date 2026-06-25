import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { auth } from '@/lib/auth'

export async function POST() {
    const useSession = await auth?.api?.getSession({
        headers: await headers()
    })
    const useData = useSession?.user
    // console.log(useData)
    try {
        const headersList = await headers()
        const origin = headersList.get('origin')
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            customer_email: useData?.email,
            line_items: [
                {
                    // price: 'price_1TkiIsFGWqkx8LnDpgdaUQak',
                    price: 'price_1TmGGCFGWqkx8LnDr0aymwsb',
                    quantity: 1,
                },
            ],
            metadata: {
                customer_email: useData?.email,
                customer_name: useData?.name,
                customer_id: useData?.id,
                customer_role: useData?.role,
            },
            mode: 'payment',
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}