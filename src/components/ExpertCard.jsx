import React from 'react';

const ExpertCard = ({ expert }) => {
    const { name, title, specialty, bio_summary, image_url, focus_areas } = expert
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <div className="flex flex-col justify-between items-center">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img src={image_url} />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-neutral">{name}</h2>
                    <p className="font-extralight">{title}</p>
                </div>
                <p className=""><span className='badge badge-neutral'>Specialty</span><br /> {specialty}</p>
                <p className=""><span className="badge badge-neutral">Biography</span><br /> {bio_summary}</p>
                <span className="badge badge-neutral">Focus Area</span>
                <ul className="list-disc pl-5">
                    {focus_areas.map((area, i) => <li key={i}>{area}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default ExpertCard;