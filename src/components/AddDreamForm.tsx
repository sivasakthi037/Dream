import React, { useState } from 'react';

export default function AddDreamForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [error, setError] = useState('');
    const [] = React.useState<Date>()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!title || !content) {
            setError('Title and description are mandatory');
            return;
        }

        const formData = {
            title,
            content,
            topics: selectedCategory,
        };

        try {
            const response = await fetch('https://dreams.sivasakthi-n2022cse.workers.dev/dreams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success
                console.log('Dream added successfully');
                setTitle('');
                setContent('');
                setSelectedCategory('');
                alert('Dream launched successfully . . .🔬✨');
            } else {
                // Handle error
                console.error('Failed to add dream');
            }
        } catch (error) {
            console.error('Failed to fetch API', error);
        }
    };

    return (
        <div>
            <div className="bg-gray-600 rounded-xl text-white text-base font-bold h-full m-16">
                <h1 className='flex flex-row w-full justify-center py-3'> Describe the universe you've lived . . .💤🔮✨</h1>
                <form
                    className="justify-between flex flex-col gap-2 border border-t-gray-300 p-5 h-[550px] w-full "
                    onSubmit={handleSubmit}
                >
                    <div className="bg-transparent flex flex-row rounded-md pl-2 w-full gap-10">
                        <h1> Title 🌌:</h1>
                        <input
                            id="title"
                            type="text"
                            className="border bg-transparent w-80 rounded-sm pl-2"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div className='w-full flex flex-row justify-evenly '>
                    <textarea
                        name="Content"
                        id="content"
                        cols={50}
                        rows={10}
                        placeholder="Enter the contents here 🔬"
                        className="bg-transparent border border-white rounded-md w-[400px] pl-5 pt-3"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    ></textarea>
                    </div>
                    {error && <p className="text-red-500 p-1">{error}</p>}
                    <div className="bg-transparent flex flex-row rounded-md gap-7">
                        <h1> Dream ✨:</h1>
                        <select
                            id="category"
                            className="border text-white bg-transparent w-80 rounded-sm"
                            value={selectedCategory}
                            onChange={(event) => setSelectedCategory(event.target.value)}
                        >
                            <option className='bg-gray-600' value="">Select the concept ...💤</option>
                            <option className='bg-gray-600' value="Adventure 🚵‍♂️">Adventure 🚵‍♂️</option>
                            <option className='bg-gray-600' value="Fantacy 🦄">Fantacy 🦄</option>
                            <option className='bg-gray-600' value="Sci-Fi 🔬">Sci-Fi 🔬</option>
                            <option className='bg-gray-600' value="Romance 🌌">Romance 🌌</option>
                            <option className='bg-gray-600' value="Horror 😱">Horror 😱</option>
                            <option className='bg-gray-600' value="Mystry 🔮">Mystry 🔮</option>
                        </select>
                    </div>
                    {/* Rest of the code */}
                    <div className='flex flex-row justify-center'>
                    <button
                        type="submit"
                        className="bg-slate-500 w-[200px] rounded-md hover:bg-green-200 hover:text-black mt-4"
                    >
                        Launch Your Dream🚀
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
