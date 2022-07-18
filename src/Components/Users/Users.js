import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { fetchUsers } from '../../Features/FetchSlice';
import "./usersStyle.css"
const Users = () => {
    const { users, loading, error } = useSelector(state => state.usersReducer)
    console.log(users);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())

    }, [dispatch])
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        swal("ERROR", "Something went wrong", 'error')
    }
    return (
        <div>
            <h1>Users Fetched from API</h1>
            <div className='row row-cols-1 row-cols-md-4'>
                {
                    users && users.map(user => {
                        return <div key={user.id} className="col  ">
                            <div className="shadow-lg m-4 p-4 singleUser" >
                                <h3>{user.name}</h3>
                                <p className='text-white-50'>{user.email}</p>
                                <p className='text-white-50'>{user.phone}</p>
                                <a href={user.website} target="blank" >{user.website}</a>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Users;