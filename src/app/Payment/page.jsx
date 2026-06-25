"use client";

import Link from "next/link";
import { Card, Button, Chip, } from "@heroui/react";
import {
    FiArrowLeft,
    FiCheckCircle,
} from "react-icons/fi";

export default function PaymentPage() {
    const prompt = {
        price: 5,
        Featured: ["Instant Access",
            "Lifetime Access",
            "Premium AI Prompt",
            "One-Click Copy",
            "High-Quality Results",
            "Secure Digital Delivery"],
    };

    return (
        <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4 py-12">
            <Card className="max-w-5xl w-full bg-[#111827]/90 border border-emfrom-emerald-500/20 backdrop-blur-xl">
                <Card.Content className="p-8">
                    <div className="bg-[#1F2937] rounded-2xl p-6 border border-white/10">
                        <Card.Header className="px-0">
                            <h2 className="text-2xl font-bold text-white">
                                Payment Summary
                            </h2>
                        </Card.Header>

                        <hr className="my-4 bg-white/10" />

                        <div className="space-y-4">
                            <div className="flex justify-between text-gray-400">
                                <span>Prompt Price</span>
                                <span className="text-white">${prompt.price}</span>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <span>Platform Fee</span>
                                <span className="text-green-400">Free</span>
                            </div>

                            <hr className="bg-white/10" />

                            <div className="flex justify-between">
                                <span className="text-lg text-white font-semibold">
                                    Total
                                </span>

                                <span className="text-3xl font-bold text-emfrom-emerald-400">
                                    ${prompt.price}
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 rounded-xl bg-[#111827] border border-emfrom-emerald-500/20 p-4">
                            {prompt.Featured.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 mb-3">
                                    <FiCheckCircle className="text-emerald-400" size={24} />
                                    <div>
                                        <h4 className="text-white font-semibold">
                                            {item}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="">
                            <form action={"/api/Checkout_session"} method="POST">
                                <Button
                                    color="secondary"
                                    size="lg"
                                    type="submit"
                                    className="w-full mt-8 bg-linear-to-r from-emerald-600 to-cyan-600 text-white font-semibold"
                                >
                                    Pay ${prompt.price}
                                </Button>
                            </form>
                        </div>

                        <Link href="/">
                            <Button
                                variant="light"
                                startContent={<FiArrowLeft />}
                                className="w-full mt-3 text-gray-300"
                            >
                                Back Home
                            </Button>
                        </Link>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}