import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function PostsComponent() {
    const [refreshCount, setRefreshCount] = useState(0);

    const {
        data,
        error,
        isLoading,
        isError,
        refetch,
        isFetching,
    } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
        throw new Error('Failed to fetch posts');
        }
        return response.json();
    },
    staleTime: 5000,
    cacheTime: 1000 * 60 * 5,
    });

    if (isLoading) return <p className="text-center text-gray-500">Loading posts...</p>;

    if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

    return (
        <div className="p-6">
        <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">Posts</h1>
        <button
            onClick={() => {
            refetch();
            setRefreshCount((prev) => prev + 1);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
            {isFetching ? 'Refreshing...' : 'Refetch Posts'}
        </button>
        </div>

        <p className="text-sm text-gray-500 mb-4">
        Refetched {refreshCount} time{refreshCount !== 1 && 's'}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 10).map((post) => (
            <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
            >
            <h2 className="text-lg font-semibold mb-2 text-blue-600">{post.title}</h2>
            <p className="text-gray-700 text-sm">{post.body}</p>
            </div>
        ))}
        </div>
    </div>
    );
}

export default PostsComponent;
