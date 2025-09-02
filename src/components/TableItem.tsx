import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Data {
    id: number;
    productionDate: string;
    productionStart: string;
    readyStock: number;
    customerInformation: string;
    name: string;
    institute: string;
    adress: string;
}

const ItemCard = () => {
    const [data, setData] = useState<Data[]>([]);

    const [editingItem, setEditingItem] = useState<Data | null>(null);
    const [showModalEdit, setShowModalEdit] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("incomingData") || "[]");
        setData(storedData);
    }, []);

    const handleMaintenance = (item: Data) => {
    navigate(`/MaintenancePage/${item.id}`);
    };

    const handleEdit = (item: Data) => {
        setEditingItem(item);
        setShowModalEdit(true);
    };

    const handleSaveEdit = () => {
        if (!editingItem) return;
        const newData = data.map((item) =>
        item.id === editingItem.id ? editingItem : item
        );
        setData(newData);
        localStorage.setItem("incomingData", JSON.stringify(newData));
        setShowModalEdit(false);
    };

    const handleDelete =  (id: number) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
        localStorage.setItem("incomingData", JSON.stringify(newData));
    }

    return (
        <>
            <table className="table-fixed text-sm mx-15 border-collapse border border-gray-400">
                <thead>
                    <tr>
                    <th className="border w-20 h-15 border-gray-300">No</th>
                    <th className="border w-40 h-15 border-gray-300">Tgl Produksi</th>
                    <th className="border w-40 h-15 border-gray-300">Mulai Produksi</th>
                    <th className="border w-20 h-15 border-gray-300">Stock</th>
                    <th className="border w-50 h-15 border-gray-300">Info Customer</th>
                    <th className="border w-50 h-15 border-gray-300">Nama</th>
                    <th className="border w-40 h-15 border-gray-300">Instansi</th>
                    <th className="border w-xl h-15 border-gray-300">Alamat</th>
                    <th className="border w-xs h-15 border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr>
                                <td className="border text-center h-10 border-gray-300">{item.id}</td>
                                <td className="border h-10 px-5 border-gray-300">{item.productionDate}</td>
                                <td className="border h-10 px-5 border-gray-300">{item.productionStart}</td>
                                <td className="border text-center h-10 border-gray-300">{item.readyStock}</td>
                                <td className="border h-10 px-5 border-gray-300">{item.customerInformation}</td>
                                <td className="border h-10 px-5 border-gray-300">{item.name}</td>
                                <td className="border h-10 px-5 border-gray-300">{item.institute}</td>
                                <td className="border h-10 px-5 border-gray-300">{item.adress}</td>
                                <td className="border text-center h-10 border-gray-300">
                                    <div>
                                        <button
                                            onClick={() => handleMaintenance(item)}
                                            className="text-md font-semibold px-4 py-1 m-1 rounded-md text-white bg-green-600 hover:bg-green-500"
                                        >
                                            Maintenance Log
                                        </button>
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="text-md font-semibold px-4 py-1 mb-1 rounded-md text-white bg-blue-600 hover:bg-blue-500"
                                            >
                                                Ubah
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(item.id)}
                                                className="text-md font-semibold px-4 py-1 mb-1 mx-1 rounded-md text-white bg-red-600 hover:bg-red-500"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </div>
                                    
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={9} className="text-center py-6 text-gray-500">
                                Data tidak ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Modal Edit */}
            {showModalEdit && editingItem && (
                <div className="bg-black bg-transparent overflow-y-auto overflow-x-hidden fixed flex justify-center items-center w-full shadow-2xl md:inset-0 h-modal md:h-full">
                    <div className="outline-2 outline-gray-400 relative p-4 w-full bg-white rounded-lg max-w-2xl h-full md:h-auto">
                        <h2 className="text-xl text-green-500 font-semibold mb-4">Edit Barang</h2>
                        <form
                            onSubmit={(e) => { e.preventDefault();
                                handleSaveEdit();
                            }}
                        >
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="productionDate" className="block mb-2 text-sm font-medium text-gray-900">Tanggal Produksi</label>
                                    <input type="date"
                                        value={editingItem.productionDate}
                                        onChange={(e) => setEditingItem({ ...editingItem, productionDate: e.target.value })
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="productionStart" className="block mb-2 text-sm font-medium text-gray-900">Mulai Produksi</label>
                                    <input type="date"
                                        value={editingItem.productionStart}
                                        onChange={(e) => setEditingItem({ ...editingItem, productionStart: e.target.value })
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="readyStock" className="block mb-2 text-sm font-medium text-gray-900">Ready Stock</label>
                                    <input
                                        type="number" value={editingItem.readyStock}
                                        onChange={(e) => setEditingItem({ ...editingItem, readyStock: e.target.value })
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="customerInformation" className="block mb-2 text-sm font-medium text-gray-900">Informasi Customer</label>
                                    <input
                                        type="text"
                                        value={editingItem.customerInformation}
                                        onChange={(e) => setEditingItem({ ...editingItem, customerInformation: e.target.value })
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
                                    <input
                                        type="text"
                                        value={editingItem.name}
                                        onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="institute" className="block mb-2 text-sm font-medium text-gray-900">Instansi</label>
                                    <input
                                        type="text"
                                        value={editingItem.institute}
                                        onChange={(e) => setEditingItem({ ...editingItem, institute: e.target.value })
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900">Alamat</label>
                                    <textarea 
                                        value={editingItem.adress}
                                        onChange={(e) => setEditingItem({ ...editingItem, adress: e.target.value })
                                        }
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                    />
                                </div>                    
                            </div>
                            <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowModalEdit(false)}
                                        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-red-600 hover:text-white"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                    >
                                        Simpan
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ItemCard;