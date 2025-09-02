

export const Data = (
    { data, handleDelete, handleUpdate }
) => {

    const { id, title, body } = data;
    return (
        <li 
        key={id}
        className="bg-gray-700 p-4 gap-4  text-white border-l-2"
        >
           <div 
           className="flex flex-col gap-4 my-4"
           >
                {/* <p>{id}.</p> */}
                <p
                className="text-justify"
                >
                    <span>Title:</span> <br />
                    {
                        title
                    }
                </p>
                <p 
                className="text-justify"
                >
                    <span>News:</span> <br />
                    {
                        body
                    }
                </p>
           </div>
           
           <div 
           className="flex gap-4 items-end"
           >
                <button
                className="bg-green-500 px-6 py-2 text-lg"
                onClick={() => handleUpdate(id, title, body)}
                >EDIT</button>
                <button
                className="bg-red-500 px-6 py-2 text-lg"
                onClick={() => handleDelete(id)}
                >DELETE</button>
           </div>
        </li>
    )
}