import React, {useContext} from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
    const {user} = useContext(UserContext);
    if(!user) return <div>Please Login</div>
    return <div className='min-h-screen text-3xl justify-center flex items-center'>
        User : {user.username}
    </div>
}

export default Profile
