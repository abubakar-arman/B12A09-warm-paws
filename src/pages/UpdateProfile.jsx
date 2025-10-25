import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const UdateProfile = () => {
    const { user, updateUserProfile } = useAuth()
    const navigate = useNavigate()

    // useEffect(()=>{
    //     console.log('kkkk', user);
        
    // }, [user])

    const handleUpdate = async (e) => {
        e.preventDefault()
        
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        // console.log(email);

        if (!name || !photoUrl) {
            toast.error('Fill in the form correctly')
            return
        }
        const userUpdate = { displayName: name, photoURL: photoUrl}
        try {
            await updateUserProfile(userUpdate)
            toast.success('Profile updated successfully!')
            e.target.reset()
            navigate('/profile')
        } catch(err) {
            toast.error('Profile update failed')
            // console.log(err);
            return err
            
        }

    }
    return (
        <div className="card w-fit min-w-sm bg-base-100 shadow-sm mx-auto my-10 min-h-100 lg:h-100">
            <div className='card-title text-center'>
                <h3 className='font-bold text-2xl text-primary inline mx-auto mt-5'>Update Your Profile</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleUpdate} className="flex flex-col justify-between ">
                    <label className="label">Name</label>
                    <input name="name" type="text" className="input beautify" placeholder="Name" />
                    <label className="label">Photo URL</label>
                    <input name="photoUrl" type="text" className="input beautify" placeholder="Photo URL" />
                    <button className='btn btn-primary mt-30 '>Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default UdateProfile;