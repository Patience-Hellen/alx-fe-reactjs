function UserProfile() {
    return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
        <img src="https://via.placeholder.com/150" 
        alt="User"
        className="w-36 h-36 mx-auto rounded-full mb-4" 
        />
        <h1 className="text-xl font-bold text-blue-800 my-4">
            John Doe
        </h1>
        <p className="text-gray-600 text-base mt-2">
            Developer at Example Co. Loves to write code and explore new technologies.
        </p>
    </div>
    );
}

export default UserProfile;
