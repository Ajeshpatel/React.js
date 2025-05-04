function Card({username="XYZ", userposition="Engineer"}){
    return(
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ... ">
        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://photosbulk.com/wp-content/uploads/2024/08/hijab-girl-pic_108.webp" alt="" />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">{username}</p>
            <p className="font-medium text-gray-500">{userposition}</p>
          </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-black active:bg-purple-700 ...">
          Message
          </button>
        </div>
    </div>
    )
}

export default Card