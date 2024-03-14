
export default function DreamStats() {
  return (
    <div>
      <body className="bg-gray-200 flex h-screen justify-center">
    <div className="bg-gray-300 rounded-lg flex h-72 mt-4 flex-col items-center w-[500px] space-y-10 shadow-lg p-2">
        <h1 className="text-3xl font-bold text-gray-800 border-spacing-2 rounded-lg hover:cursor-pointer">Dream Statics . . .🔮🦄</h1>
        <div className="flex space-x-12">
            <div title="Reactions count" className="text-center hover:cursor-pointer">
                <h2 className="text-4xl font-bold text-yellow-500 mb-2 hover:cursor-pointer hover:scale-110 ">125</h2>
                <span className="text-gray-700 font-bold  ">💗 Likes</span>
            </div>
            <div className="text-center hover:cursor-pointer">
                <h2 className="text-4xl font-bold text-red-500 mb-2 hover:scale-110">13</h2>
                <span className="text-gray-700 font-bold  ">😢 Sad</span>
            </div>
        </div>
        <div className="flex space-x-12 hover:cursor-pointer">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-blue-500 mb-2 hover:scale-110 ">40</h2>
                <span className="text-gray-700 font-bold  ">😂 Haha</span>
            </div>
            <div className="text-center hover:cursor-pointer">
                <h2 className="text-4xl font-bold text-purple-500 mb-2  hover:scale-110">22</h2>
                <span className="text-gray-700 font-bold ">😡 Angry</span>
            </div>
        </div>
    </div>
    </body>

    </div>
  )
}
