import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
  const navigate = useNavigate();

  const goToInventory = () => {
    navigate("/InventoryPage");
  };

  const goToInventoryWithModal = () => {
    navigate("/InventoryPage", { state: { openModal: true } }); // kirim state
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 drop-shadow-sm">
          Welcome to MSMB Inventory
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
          Kelola barang masuk, keluar, dan history dengan mudah
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={goToInventory}
            className="px-6 py-3 text-lg font-semibold rounded-full text-white bg-green-600 hover:bg-green-500 shadow-md transition"
          >
            Go to Inventory
          </button>
          <button
            onClick={goToInventoryWithModal}
            className="px-6 py-3 text-lg font-semibold rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition"
          >
            Tambah Barang
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
