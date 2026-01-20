 function Shimmer() {
    return(
        <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
            {Array.from({length: 12}).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 m-2 animate-pulse">
                    <div className="w-full h-48 bg-gray-400 rounded-md mb-2"></div>
                    <div className="h-5 bg-gray-400 rounded mb-2"></div>
                    <div className="h-4 bg-gray-400 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-400 rounded mb-2"></div>
                    <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                </div>
            ))}
        </div>
    )
}

export default Shimmer;