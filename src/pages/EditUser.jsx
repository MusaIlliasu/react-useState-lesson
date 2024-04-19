/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import Selection from '../components/Selection';

const EditUser = ({ show, user, updateUser, close }) => {
    const [userInfo, setUserInfo] = useState(() => user);

    const handleChange = (ev) => setUserInfo({...userInfo, [ev.target.name]: ev.target.value});

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const validated = Object.values(userInfo).every(val => (val.length && val.trim().length));
        if(validated){
            updateUser(userInfo);
            setUserInfo({
                id: "",
                name: "",
                age: "",
                country: "",
                city: ""
            });
            ev.target.reset();
            close();
            return;
        }

        return alert("All fields are required");
    }

    return (
        <div className={`w-full h-screen flex justify-center items-start md:items-center ${show ? "fixed" : "hidden"} top-0 left-0 z-20 bg-[rgba(0,0,0,0.5)]`}>
            <div className="container">
                <form className="w-full max-w-[350px] border rounded bg-white p-8 mx-auto text-xs" onSubmit={handleSubmit}>
                    <h1 className="font-bold text-sm text-center uppercase mb-4">Edit User</h1>

                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1">Name</label>
                        <input type="text" className="w-full border rounded outline-none py-1 px-3 transition-all" 
                            name="name" id="name"
                            defaultValue={userInfo.name}
                            placeholder="Enter your name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="age" className="block mb-1">Age</label>
                        <input type="number" className="w-full border rounded outline-none py-1 px-3 transition-all" 
                            name="age" id="age"
                            defaultValue={userInfo.age}
                            placeholder="Enter your age"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="country" className="block mb-1">Country</label>
                        <Selection
                            selected={userInfo.country}
                            setSelected={(country) => setUserInfo({...userInfo, country})}
                            options={["Nigeria", "USA", "Russia"]}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="city" className="block mb-1">City</label>
                        <Selection 
                            selected={userInfo.city}
                            setSelected={(city) => setUserInfo({...userInfo, city})}
                            options={["Jos", "Los Angela", "Unknown"]}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Update" className="w-full border border-primary bg-primary text-white rounded cursor-pointer py-1 px-4 text-center" />
                    </div>

                    {/* Close Btn */}
                    <span onClick={() => close()} className="w-[35px] h-[35px] border border-primary rounded-full bg-white text-black cursor-pointer flex justify-center items-center hover:bg-primary hover:text-white transition-all absolute -top-4 -right-4">X</span>
                </form>
            </div>
        </div>
    )
}

export default EditUser