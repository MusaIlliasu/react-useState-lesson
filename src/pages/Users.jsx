/* eslint-disable react/prop-types */

import { useState } from "react"
import Modal from "../components/Modal"

const Users = ({ users, handleRemoveUser }) => {
    const [deleteInfo, setDeleteInfo] = useState({
        show: false,
        userId: ""
    });

    const handleDelete = (userId) => {
        return setDeleteInfo({...deleteInfo, show: true, userId});
    }

    const handleProceed = () => {
        handleRemoveUser(deleteInfo.userId);
        return setDeleteInfo({...deleteInfo, show: false, userId: ""});
    }

    const displayUsers = () => {

        if(!users.length) {
            return <p className="text-center text-primary text-sm mt-8">No record found</p>
        }

        return (
                <div className="overflow-x-scroll pb-4">
                    <table className="w-full border border-collapse text-xs text-center whitespace-nowrap mt-4">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-1">S/N</th>
                                <th className="border p-1">Name</th>
                                <th className="border p-1">Age</th>
                                <th className="border p-1">Country</th>
                                <th className="border p-1">City</th>
                                <th className="border p-1">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td className="border p-1">{index + 1}</td>
                                        <td className="border p-1">{user.name}</td>
                                        <td className="border p-1">{user.age}</td>
                                        <td className="border p-1">{user.country}</td>
                                        <td className="border p-1">{user.city}</td>
                                        <td className="border p-1 flex justify-center items-center gap-3">
                                            <span className="border border-blue-500 hover:bg-blue-500 hover:text-white transition-all py-1 px-3 rounded text-xs  cursor-pointer">Edit</span>
                                            <span onClick={() => handleDelete(user.id)} className="border border-red-500 hover:bg-red-500 hover:text-white transition-all py-1 px-3 rounded text-xs  cursor-pointer">Delete</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
        )
    }

  return (
      <>
        {/* Delete Modal */}
        <Modal 
            show={deleteInfo.show}
            message={"Did you want to delete this user?"}
            handleProceed={handleProceed}
            handleCancel={() => setDeleteInfo({...deleteInfo, show: false, userId: ""})}
        />

        <div className="container">
            <h1 className="font-bold text-primary text-sm text-center mt-6 mb-2">USERS</h1>

            {displayUsers()}
        </div>
    </>
  )
}

export default Users;