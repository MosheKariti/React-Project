import React, {useEffect, useState} from "react";
import {changeUserType, deleteUser, getUsers} from "../../Services/Axios/axios";
import {UpdateUser} from "../Main/UpdateUser";
import Button from "@mui/material/Button";
import {toast, ToastContainer} from "react-toastify";

export function CRMAdminPage() {
    const [users,setUsers] = useState(undefined);
    const [isDeleteUserDialog,setDeleteUserDialog] = useState(undefined);
    const [userToDelete,setUserToDelete] = useState(undefined);
    const [isLoading,setIsLoading] = useState(false);
    useEffect(getUsersFromServer,[])

    function getUsersFromServer() {
        getUsers().then(response => setUsers(response)).catch(error => console.log(error));
    }
    function handleUserTypeEdit(user) {
        setIsLoading(true);
        changeUserType(user._id).then(()=> toast.success('Success')).then(getUsersFromServer).
        catch(error => console.log(error));
        setIsLoading(false);
    }
    function deleteUserDialog(user) {
        setUserToDelete(user);
        setDeleteUserDialog(true);
    }
    function handleUserDelete() {
        deleteUser(userToDelete._id).then(() => {
            toast.success('The user ' + '"' + userToDelete.name.first + ' ' + userToDelete.name.last + '"' + ' deleted');
            setDeleteUserDialog(false);
            getUsersFromServer();
        }).catch(error => {
            toast.error(error);
        });
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
            <ToastContainer
                position="top-center"
                text-center
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
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
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user) => (
                                <>
                                <tr style={{height:'50px', borderBottom:'solid darkGrey'}} key={user._id}>
                                    <td style={{width:'250px'}}>{user.name.first}</td>
                                    <td style={{width:'250px'}}>{user.name.last}</td>
                                    <td style={{width:'250px'}}>{checkType(user)}</td>
                                    <td style={{width:'250px'}}>{user.phone}</td>
                                    <td style={{width:'250px'}}>{user.email}</td>
                                    {!user.isAdmin &&
                                        <>
                                        <button onClick={()=>handleUserTypeEdit(user)} className={'btn m-1 btn-primary'} style={{width:'120px'}}>{user.isBusiness ? 'Set Simple' : 'Set Business'}</button>
                                        <button onClick={()=>deleteUserDialog(user)} className={'btn m-1 btn-danger'} style={{width:'120px'}}>Delete</button>
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
            {isDeleteUserDialog && <>
                <div className={"modal bg-opacity-50 bg-dark"} id={'myModal'}>
                    <div className={"modal-dialog-centered"}>
                        <div className={"modal-content p-5"}>
                            <div>
                                <h6>Are you sure you want to delete the following user?</h6>
                                <p className={'m-0'}>{'Name: '+ userToDelete.name.first + ' ' + userToDelete.name.last}</p>
                                <p>Email: {userToDelete.email}</p>
                            </div>
                            <div className={'mt-5'}>
                                <button onClick={()=>setDeleteUserDialog(false)} className={'m-2 btn btn-primary'}>Cancel</button>
                                <button onClick={handleUserDelete} className={'m-2 btn btn-danger'}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>}
            {isLoading && <>
                <div className={"modal bg-opacity-50 bg-dark"} id={'myModal'}>
                    <div className={"modal-dialog-centered"}>
                        <div className={"modal-content p-5"}>
                                Loading....
                        </div>
                    </div>
                </div>
            </>}
        </>
    );
};