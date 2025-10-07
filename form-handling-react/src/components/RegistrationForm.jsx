import { useState } from 'react';

function RegistrationForm () {

    const [formData, setFormData] = useState({
            username: "",
            email: "",
            password: "",
        
    });

    const [errors, setErrors] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if( !formData.username || !formData.email || !formData.password){
            setErrors("All fields are required.");
        return;
        }

        setErrors("");
        console.log("User Registered Successfully:", formData);

        setFormData({username:"", email: "", password: ""})
    };

    return (
        <div>
            <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold mb-4 text-center">User Registration</h2>

                {errors && <p className="text-red-500 text-sm mb-3">{errors}</p>}

                <label className="block mb-2 text-gray-700">Username</label>
                <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block mb-2 text-gray-700">Email</label>
                <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block mb-2 text-gray-700">Password</label>
                <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm;