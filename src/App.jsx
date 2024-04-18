import { useState } from "react";
import Navigation from "./pages/Navigation";

const App = () => {
    const [user, setUser] = useState({
        name: "",
        age: "",
        country: "",
        city: ""
    });
    const [users, setUsers] = useState([]);

    const displayUsers = () => {

        if(!users.length) {
            return <p className="text-center text-primary text-sm mt-8">No record</p>
        }

        return (
                <table className="w-full border border-collapse text-xs text-center mt-4">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-1">S/N</th>
                            <th className="border p-1">Name</th>
                            <th className="border p-1">Age</th>
                            <th className="border p-1">Country</th>
                            <th className="border p-1">City</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index + 1}>
                                    <td className="border p-1">{index + 1}</td>
                                    <td className="border p-1">{user.name}</td>
                                    <td className="border p-1">{user.age}</td>
                                    <td className="border p-1">{user.country}</td>
                                    <td className="border p-1">{user.city}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        )
    }

    const handleChange = (ev) => setUser({...user, [ev.target.name]: ev.target.value});

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const validated = Object.values(user).every(val => (val.length && val.trim().length));
        if(validated){
            setUsers([user, ...users]);
            setUser({
                name: "",
                age: "",
                country: "",
                city: ""
            });
            ev.target.reset();
            return;
        }

        return alert("All fields are required");
    }

  return (
    <>
        <Navigation />

        <div className="mt-6">
            <div className="container">

                <div>
                    <form className="text-xs" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="block mb-1">Name</label>
                                <input type="text" className="w-full border rounded outline-none py-1 px-3 transition-all" 
                                    name="name" id="name"
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="age" className="block mb-1">Age</label>
                                <input type="number" className="w-full border rounded outline-none py-1 px-3 transition-all" 
                                    name="age" id="age"
                                    placeholder="Enter your age"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="country" className="block mb-1">Country</label>
                                <input type="text" className="w-full border rounded outline-none py-1 px-3 transition-all" 
                                    name="country" id="country"
                                    placeholder="Enter your country for now"
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="block mb-1">City</label>
                                <input type="text" className="w-full border rounded outline-none py-1 px-3 transition-all" 
                                    name="city" id="city"
                                    placeholder="Enter your city for now"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <input type="submit" value="Add" className="border border-primary bg-primary text-white rounded cursor-pointer py-1 px-4 text-center" />
                        </div>

                    </form>
                </div>

                <hr className="my-4" />

                {displayUsers()}
            </div>
        </div>
    </>
  )
}

export default App;