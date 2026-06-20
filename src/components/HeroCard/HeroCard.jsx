import React from 'react';
import PromptCard from '../Prompts/Card/CardUi';

const HeroCard = ({ result }) => {
    return (
        <>
            <div className="text-center ">
                <h1 className='text-3xl font-bold mb-2'>Most Popular AI Prompts</h1>
                <p>Explore curated prompts designed for every workflow.</p>
            </div>
            <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-10 mb-10">
                {result.map((prompt) => (
                    <PromptCard key={prompt._id} prompt={prompt} />
                ))}
            </div>
        </>
    );
};

export default HeroCard;