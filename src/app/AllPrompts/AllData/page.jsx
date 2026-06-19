import PromptCard from '@/components/Prompts/Card/CardUi';
import { getPrompts } from '@/lib/api/Prompts';
import React from 'react';

const AllDataPrompts = async () => {
    const AllPrompts = await getPrompts();
    return (
        <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
            {AllPrompts.map((prompt) => (
                <PromptCard key={prompt._id} prompt={prompt} />
            ))}
        </div>
    );
};

export default AllDataPrompts;