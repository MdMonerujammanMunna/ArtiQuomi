"use client";
import { AdminUpdateUser } from '@/lib/api/Admin/Users';
import React from 'react';

const RoleChange = ({ prompt }) => {
    const Role = [
        "Admin",
        "Creator",
        "User"
    ]
    const ChangeRole = async (e) => {
        const id = prompt._id;
        const role = e.target.value;
        const dataChange = await AdminUpdateUser(id, role);
        // toast.error("Role changed successfully");
        // router.refresh();
    };
    return (
        <>
            <div>
                <select defaultValue={prompt.role} name="role" onChange={ChangeRole} required className={` `}>
                    {Role.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default RoleChange;