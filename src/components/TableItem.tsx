const ItemCard = () => {
    return (
        <>
            <table className="table-fixed mx-15 border-collapse border border-gray-400">
                <thead>
                    <tr>
                    <th className="border w-20 h-15 border-gray-300">No</th>
                    <th className="border w-60 h-15 border-gray-300">Name</th>
                    <th className="border w-50 h-15 border-gray-300">Status</th>
                    <th className="border w-xl h-15 border-gray-300">Keterangan</th>
                    <th className="border w-xs h-15 border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border text-center h-10 border-gray-300">1</td>
                        <td className="border h-10 px-5 border-gray-300">Jinawi</td>
                        <td className="border text-center h-10 border-gray-300">On Progress</td>
                        <td className="border h-10 px-5 border-gray-300">On Progress</td>
                        <td className="border text-center h-10 border-gray-300">
                            <button
                                className="text-md font-semibold px-4 py-1 mx-2 rounded-xl text-white bg-blue-600 hover:bg-blue-500"
                            >
                                Edit
                            </button>
                            <button 
                                className="text-md font-semibold px-4 py-1 mx-2 rounded-xl text-white bg-red-600 hover:bg-red-500"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border text-center h-10 border-gray-300">2</td>
                        <td className="border h-10 px-5 border-gray-300">Bathara</td>
                        <td className="border text-center h-10 border-gray-300">Build</td>
                        <td className="border h-10 px-5 border-gray-300">Build</td>
                        <td className="border text-center h-10 border-gray-300">
                            <button
                                className="text-md font-semibold px-4 py-1 mx-2 rounded-xl text-white bg-blue-600 hover:bg-blue-500"
                            >
                                Edit
                            </button>
                            <button 
                                className="text-md font-semibold px-4 py-1 mx-2 rounded-xl text-white bg-red-600 hover:bg-red-500"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ItemCard;