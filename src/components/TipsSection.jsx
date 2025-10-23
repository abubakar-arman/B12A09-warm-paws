import React from 'react';

const TipsSection = ({ tipsSection }) => {
    return (
        <div className="card w-96 bg-base-300 shadow-sm">
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold text-neutral">{tipsSection.title}</h2>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {tipsSection.tips.map((tip, i) => (
                        <li key={i}>
                            <span className='text-neutral'>{tip.icon} <span className='font-bold'>{tip.card_title}</span> - {tip.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TipsSection;