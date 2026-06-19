'use client';

import React from 'react';
import Link from 'next/link';

const UserDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
                    <p className="mt-2 text-gray-600">Welcome to your user dashboard</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/Dashboard/User/MyPrompts">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <h2 className="text-xl font-semibold text-gray-900">My Prompts</h2>
                            <p className="mt-2 text-gray-600">View and manage your prompts</p>
                        </div>
                    </Link>

                    <Link href="/Dashboard/User/CreatePrompt">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <h2 className="text-xl font-semibold text-gray-900">Create Prompt</h2>
                            <p className="mt-2 text-gray-600">Create a new prompt</p>
                        </div>
                    </Link>

                    <Link href="/Dashboard/User/MyProfile">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <h2 className="text-xl font-semibold text-gray-900">My Profile</h2>
                            <p className="mt-2 text-gray-600">View and edit your profile</p>
                        </div>
                    </Link>

                    <Link href="/Dashboard/User/SavePrompts">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <h2 className="text-xl font-semibold text-gray-900">Saved Prompts</h2>
                            <p className="mt-2 text-gray-600">View your saved prompts</p>
                        </div>
                    </Link>

                    <Link href="/Dashboard/User/ReviewsPrompts">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
                            <p className="mt-2 text-gray-600">View prompt reviews</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
