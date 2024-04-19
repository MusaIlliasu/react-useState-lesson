import { useState } from "react";
import Navigation from "./pages/Navigation";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";

const App = () => {
    const [users, setUsers] = useState([]);
    const [showAdduser, setShowAddUser] = useState(false);

    const handleRemoveUser = (userId) => {
        return setUsers(users.filter(user => user.id !== userId));
    }

    const handleUserUpdate = (updatedUser) => {
        const updatedUsers = users.map(user => {
            if(user.id === updatedUser.id){ return updatedUser }
            return user;
        });

        return setUsers(updatedUsers);
    }

    return (
        <>
            <Navigation setShowAddUser={() => setShowAddUser(true)} />

            <AddUser
                show={showAdduser}
                setParentUser={(user) => setUsers([user, ...users])}
                close={() => setShowAddUser(false)}
            />

            <Users 
                users={users} 
                handleRemoveUser={handleRemoveUser}
                handleUserUpdate={handleUserUpdate}
            />
        </>
    )
}

export default App;