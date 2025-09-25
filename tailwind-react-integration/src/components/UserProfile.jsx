function UserProfile() {
    return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my20 rounded-lg shadow-lg text-center">
        <img src="https://via.placeholder.com/150" 
        alt="User"
        className="w-36 h-36 mx-auto rounded-full mb-4" 
        />
        <h1 className="text-x1 font-bold my-4 text-blue-800">John Doe</h1>
        <p className="text-gray-600 text-base mt-2">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
    );
}

export default UserProfile;

