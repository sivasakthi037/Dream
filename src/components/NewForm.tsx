import React from 'react'

export default function NewForm() {
  return (
    <div>
      <body className="flex items-center justify-center h-screen ">
    <div className="bg-white bg-opacity-90 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">ANONYMOUS DREAM SHARING</h1>
        <form action="#" className="mb-4">
            <div className="mb-4">
                <label htmlFor="dreamTitle" className="block text-gray-700 font-bold mb-2  inner">DREAM TITLE:</label>
                <input type="text" id="dreamTitle" name="dreamTitle" className="w-full px-3 py-2 border rounded-md shadow-md shadow-black bg-slate-200 hover:bg-white"/>
            </div>
            <div className="mb-4">
                <label htmlFor="dreamExplanation" className="block text-gray-700 font-bold mb-2">Explanation about the
                    Dream</label>
                <textarea id="dreamExplanation" name="dreamExplanation"
                    className="w-full px-3 py-2 border rounded-md shadow-md shadow-black bg-slate-200 hover:bg-white"></textarea>
            </div>
            <button type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300">Launch</button>
        </form>
    </div>
</body>
    </div>
  )
}
