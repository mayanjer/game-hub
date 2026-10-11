function GameCardSkeleton() {
    return (
        <div className="bg-gray-400 animate-pulse overflow-hidden shadow rounded-xl flex flex-col h-75">
            <hr className = "mt-auto border-gray-300"></hr>
        <div className="bg-gray-200 h-4 w-60 rounded-2xl mb-3 ml-2 mt-4"></div>
        <div className="bg-gray-200 h-4 w-40 rounded-2xl mb-3 ml-2"></div>
      </div>
    );
}
export default GameCardSkeleton