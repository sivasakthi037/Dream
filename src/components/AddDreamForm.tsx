import React from 'react'

interface AddDreamFormProps {
        cat1: string
        cat2: string
        cat3: string
        cat4: string
        cat5: string
}

export default function AddDreamForm({cat1, cat2, cat3, cat4, cat5}: AddDreamFormProps) {
    return (
        <div>
            <div className="bg-gray-700 flex flex-col text-center items-center justify-center text-white text-base font-bold h-screen">
                <div className="justify-evenly flex flex-col gap-2 border border-gray-400 p-5 rounded-lg">
                    <div className="bg-gray-700 flex flex-row rounded-md gap-5 pl-2">
                        <h1> Title :</h1>
                        <input id="title" type="text" className="border bg-transparent w-80 rounded-sm" />
                    </div>
                    <textarea name="Content" id="content" cols={50} rows={10} placeholder="Enter the contents here" className="bg-transparent border border-white rounded-md p-3"></textarea>
                    <div className="w-auto bg-transparent flex flex-col py-2 pl-4">
                        <div className="flex flex-row gap-3">
                            <input type="checkbox" id="checkbox1" name={cat1} value={cat1} />
                            <label htmlFor={cat1}>{cat1}</label><br />
                        </div>
                        <div className="flex flex-row gap-3">
                            <input type="checkbox" id="checkbox2" name={cat2} value={cat2} />
                            <label htmlFor={cat2}>{cat2}</label><br />
                        </div>
                        <div className="flex flex-row gap-3">
                            <input type="checkbox" id="checkbox3" name={cat3} value={cat3} />
                            <label htmlFor={cat3}>{cat3}</label><br />
                        </div>
                        <div className="flex flex-row gap-3">
                            <input type="checkbox" id="checkbox4" name={cat4} value={cat4} />
                            <label htmlFor={cat4}>{cat4}</label><br />
                        </div>
                        <div className="flex flex-row gap-3">
                            <input type="checkbox" id="checkbox5" name={cat5} value={cat5} />
                            <label htmlFor={cat5}>{cat5}</label><br />
                        </div>
                        <div className="flex flex-row gap-3">
                            <input type="checkbox" id="checkbox6" name="others" value="others" />
                            <label htmlFor="others">Others</label><br />
                        </div>
                    </div>
                </div>
                <button type="submit" className="bg-slate-500 w-20 rounded-md hover:bg-green-200 hover:text-black mt-4">Launch</button>
            </div>
        </div>
    )
}
