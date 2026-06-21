import { redirect } from 'next/navigation'

import { stripe } from '../../lib/stripe'
import Link from "next/link";
import { Button } from "@heroui/react";
import { BiCheckCircle } from 'react-icons/bi';
import { GiSparkles } from 'react-icons/gi';
import { BsArrowLeft } from 'react-icons/bs';
import { UserPaymentsData } from '@/lib/api/Pyment';

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        metadata,
        customer_details: { email: customerEmail }
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {
        await UserPaymentsData({ ...metadata, session_id });
        return (
            <>
                <div className="min-h-screen bg-[#070a13] flex items-center justify-center px-4 py-10">
                    {/* Glow */}
                    <div className="absolute w-72 h-72 bg-emerald-500/20 blur-[120px] rounded-full"></div>

                    <div className="relative w-full max-w-xl rounded-3xl border border-emerald-500/20 bg-[#0d1324]/80 backdrop-blur-xl p-8 md:p-12 text-center shadow-2xl">
                        {/* Success Icon */}
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30">
                            <BiCheckCircle
                                size={60}
                                className="text-emerald-400"
                            />
                        </div>

                        {/* Badge */}
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                            <GiSparkles size={16} />
                            Payment Successful
                        </div>

                        {/* Heading */}
                        <h1 className="mt-6 text-4xl font-bold text-white">
                            Thank You!
                        </h1>
                        <p className="mt-4 text-emerald-400 text-sm font-bold">{customerEmail}</p>

                        {/* Description */}
                        <p className="mt-4 text-gray-400 leading-7">
                            Your payment has been completed successfully.
                            <br />
                            Your purchase is now confirmed and you can continue
                            exploring ArtiQuomi.
                        </p>

                        {/* Divider */}
                        <div className="my-8 h-px bg-linear-to-r from-transparent via-gray-700 to-transparent"></div>

                        {/* Button */}
                        <Link href="/">
                            <Button
                                radius="full"
                                size="lg"
                                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 transition-all duration-300"
                                startContent={<BsArrowLeft size={18} />}
                            >
                                Back to Home
                            </Button>
                        </Link>

                        {/* Footer */}
                        <p className="mt-8 text-sm text-gray-500">
                            Need help? Contact our support anytime.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}