import { MdEmail } from 'react-icons/md';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
    const {user} = useAuth()
    const {displayName, email, photoURL} = user
    return (
        <div className="card w-fit min-w-sm bg-base-100 shadow-sm mx-auto my-10 h-150 lg:h-140">
            <div className="card-body">
                <div id="header-bg" className="bg-primary h-48 rounded-xs"></div>
                <div className="flex flex-col justify-between items-center -mt-25">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring-6 ring-offset-2">
                            <img src={photoURL} />
                        </div>
                    </div>
                    <h2 className="text-5xl mt-5 font-bold text-center text-neutral">{displayName}</h2>
                    <p className="font-extralight text-lg mt-5 flex gap-2 items-center"><MdEmail /> {email}</p>
                    <button className='btn btn-primary mt-10 '>Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;