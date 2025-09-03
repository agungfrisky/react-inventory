import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TableMaintenance from "../components/TableMaintenance";

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

interface MaintenanceLog {
    id: number;
    date: string;
    description: string;
}

const MaintenancePage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Data | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [logDate, setLogDate] = useState("");
  const [logDesc, setLogDesc] = useState("");

  useEffect(() => {
    const storedData: Data[] = JSON.parse(localStorage.getItem("incomingData") || "[]");
    const foundItem = storedData.find((d) => d.id === Number(id)) || null;
    setItem(foundItem);
  }, [id]);

  const handleSaveLog = () => {
    if (!item) return;

    const storedLogs = JSON.parse(localStorage.getItem("maintenanceLogs") || "{}");
    const itemLogs: MaintenanceLog[] = storedLogs[item.id] || [];

    const newLog: MaintenanceLog = {
      id: itemLogs.length + 1,
      date: logDate || new Date().toISOString().split("T")[0],
      description: logDesc
    };

    const updatedLogs = { ...storedLogs, [item.id]: [...itemLogs, newLog] };
    localStorage.setItem("maintenanceLogs", JSON.stringify(updatedLogs));

    setShowModal(false);
    setLogDate("");
    setLogDesc("");
  };

  if (!item) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <>
        <div className="flex flex-1 flex-col items-center justify-center px-6 m-5 text-center">
            <h1 className="text-xl md:text-5xl font-extrabold text-green-600 drop-shadow-sm">Maintenance Log</h1>
            <div className="grid grid-cols-3 gap-2 px-10 py-5 mx-10 my-5 w-full bg-gray-200 rounded-xl">
                <h1 className="text-md font-semibold flex justify-start">Nama           : {item.name}</h1>
                <p className="text-md font-semibold flex justify-start">Instansi        : {item.institute}</p>
                <p className="text-md font-semibold flex justify-start">Customer        : {item.customerInformation}</p>
                <p className="text-md font-semibold flex justify-start">Tanggal Produksi: {item.productionDate}</p>
                <p className="text-md font-semibold flex justify-start">Mulai Produksi  : {item.productionStart}</p>
                <p className="text-md font-semibold flex justify-start">Stock           : {item.readyStock}</p>
                <p className="text-md font-semibold col-span-3">Alamat  : {item.adress}</p>
            </div>
            {/* Tombol Tambah Log */}
            <div className="w-full flex justify-start">
                <button
                    onClick={() => setShowModal(true)}
                    className="text-md font-semibold px-4 py-2 mb-4 rounded-md text-white bg-green-600 hover:bg-green-500"
                >
                    Tambah Maintenance Log
                </button>
            </div>
            <TableMaintenance itemId={item.id} />
        </div>

        {/* Tambah Log */}
        {showModal && (
            <div className="outline-2 outline-gray-400 fixed inset-0 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-xl font-bold mb-4">Tambah Maintenance Log</h2>
                    <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSaveLog();
                    }}
                    >
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Tanggal</label>
                        <input
                        type="date"
                        value={logDate}
                        onChange={(e) => setLogDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Deskripsi</label>
                        <textarea
                        value={logDesc}
                        onChange={(e) => setLogDesc(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                        rows={3}
                        required
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                        type="button"
                        onClick={() => setShowModal(false)}
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
};

export default MaintenancePage;
