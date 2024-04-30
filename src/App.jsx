import { useState } from "react";
import Navigation from "./pages/Navigation";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";

const App = () => {
    const [users, setUsers] = useState(() => {
        const items = localStorage.getItem("items");
        if(items){ return JSON.parse(items); }
        return [];
    });
    const [showAdduser, setShowAddUser] = useState(false);

    const handleAddUser = (user) => {
        const items = localStorage.getItem("items");

        if(items){
            const updatedItems = [user, ...JSON.parse(items)];
            localStorage.setItem("items", JSON.stringify(updatedItems));
            setUsers(updatedItems);
            return;
        }

        localStorage.setItem("items", JSON.stringify([user]));
        setUsers([user]);
    }

    const handleRemoveUser = (userId) => {
        const items = localStorage.getItem("items");
        if(items){
            const parsedItems = JSON.parse(items);
            const updatedItems = parsedItems.filter(user => user.id !== userId);
            localStorage.setItem("items", JSON.stringify(updatedItems));
            setUsers(updatedItems);
            return;
        }

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
                setParentUser={(user) => handleAddUser(user)}
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