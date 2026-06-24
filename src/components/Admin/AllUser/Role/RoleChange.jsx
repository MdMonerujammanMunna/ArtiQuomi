import React from 'react';
import { FiFolder } from 'react-icons/fi';

const RoleChange = ({ prompt }) => {
    const Role = [
        "Admin",
        "Creator",
        "User"
    ]

    return (
        <>
            <div>
                <select defaultValue={prompt.role} name="category" required className={` `}>
                    {Role.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default RoleChange;