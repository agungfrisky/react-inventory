import { useState } from "react";

interface AddFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddForm: React.FC<AddFormProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [productionDate, setProductionDate] = useState("");
    const [productionStart, setProductionStart] = useState("");
    const [readyStock, setReadyStock] = useState("");
    const [customerInformation, setCustomerInformation] = useState("");
    const [name, setName] = useState("");
    const [institute, setInstitute] = useState("");
    const [adress, setAdress] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Ambil data lama dari localStorage
        const data = JSON.parse(localStorage.getItem("incomingGoods") || "[]");

        // Buat data baru dengan ID unik
        const newData = {
            id: Date.now(),
            productionDate,
            productionStart,
            readyStock,
            customerInformation,
            name,
            institute,
            adress,
        };

        // Simpan ke localStorage
        localStorage.setItem("incomingGoods", JSON.stringify([...data, newData])
        );

        onClose();
    };

    return (
        <>
            {/* <!-- Main modal --> */}
            <div id="defaultModal" tabIndex={-1} aria-hidden="true" className="bg-black bg-transparent overflow-y-auto overflow-x-hidden fixed flex justify-center items-center w-full shadow-2xl md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg shadow-2xl sm:p-5">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                            <h3 className="text-lg font-semibold text-green-500">
                                Add Data
                            </h3>
                            <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="productionDate" className="block mb-2 text-sm font-medium text-gray-900">Tanggal Produksi</label>
                                    <input type="date" value={productionDate} onChange={(e) => setProductionDate(e.target.value)} name="productionDate" id="productionDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Tanggal produksi" required />
                                </div>
                                <div>
                                    <label htmlFor="productionStart" className="block mb-2 text-sm font-medium text-gray-900">Mulai Produksi</label>
                                    <input type="date" value={productionStart} onChange={(e) => setProductionStart(e.target.value)} name="productionStart" id="productionStart" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Tanggal mulai produksi" required />
                                </div>
                                <div>
                                    <label htmlFor="readyStock" className="block mb-2 text-sm font-medium text-gray-900">Ready Stock</label>
                                    <input type="number" value={readyStock} onChange={(e) => setReadyStock (e.target.value)} name="readyStock" id="readyStock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Jumlah ready stock" required />
                                </div>
                                <div>
                                    <label htmlFor="customerInformation" className="block mb-2 text-sm font-medium text-gray-900">Informasi Customer</label>
                                    <input type="text" value={customerInformation} onChange={(e) => setCustomerInformation (e.target.value)} name="customerInformation" id="customerInformation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Masukkan informasi customer" required />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
                                    <input type="text" value={name} onChange={(e) => setName (e.target.value)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Masukkan nama customer" required />
                                </div>
                                <div>
                                    <label htmlFor="institute" className="block mb-2 text-sm font-medium text-gray-900">Instansi</label>
                                    <input type="text" value={institute} onChange={(e) => setInstitute (e.target.value)} name="institute" id="institute" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Masukkan nama customer" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900">Alamat</label>
                                    <textarea value={adress} onChange={(e) => setAdress (e.target.value)} id="adress" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Masukkan alamat customer"></textarea>                    
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Add new data
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddForm;