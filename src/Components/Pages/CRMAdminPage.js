import React, {useEffect, useState} from "react";
import {getUsers} from "../../Services/Axios/axios";

export function CRMAdminPage() {
    const [users,setUsers] = useState(undefined);
    const [userToEdit,setUserToEdit] = useState(undefined);
    useEffect(  ()=> {
            getUsers().then(response => setUsers(response)).catch(error => console.log(error));
        }
        ,[])
    function handleUserTypeEdit(userId) {

    }
    function handleUserDelete(userId) {

    }
    function checkType(user) {
        if (user.isAdmin) {
            return 'Admin';
        } else if (user.isBusiness) {
            return 'Business';
        } else {
            return 'Simple';
        }
    }
    return (
        <>
           <h1 className={'text-center mt-3 mb-5'}>Users Management</h1>
            {users &&
            <>
                <div className={'container-fluid bg-body-secondary'}>
                        <table style={{width: '100%', borderCollapse: 'collapse'}}>
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Type</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user) => (
                                <>
                                <tr style={{height:'50px', borderBottom:'solid darkGrey'}} key={user._id}>
                                    <td>{user.name.first}</td>
                                    <td>{user.name.last}</td>
                                    <td>{checkType(user)}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    {!user.isAdmin &&
                                        <>
                                        <button onClick={handleUserTypeEdit(user._id)} className={'btn m-1 btn-primary w-25'}>{user.isBusiness ? 'Set Simple' : 'Set Business'}</button>
                                        <button onClick={handleUserDelete(user._id)} className={'btn m-1 btn-danger w-25'}>Delete</button>
                                        </>
                                    }
                                </tr>
                                </>
                            ))}
                            </tbody>
                        </table>
                    </div>
            </>
            }
        </>
    );
};