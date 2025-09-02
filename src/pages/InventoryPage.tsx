import Header from "../components/Header";
import ItemCard from "../components/TableItem";
import SearchBox from "../components/SearchBox";
import DropDown from "../components/DropDown";
import AddForm from "../components/AddForm";
import { useState } from "react";

const InventoryPage = () => {
    const [showModal, setShowModal] = useState(false);
    console.log("ini show modal", showModal);

    return (
        <>
            <Header />
            <div className="bg-grey-500 mx-10 mt-10">
                <h1 className="self-center text-xl font-bold whitespace-nowrap text-green-500">MSMB Inventory</h1>
                <SearchBox />
            </div>
            <div className="flex justify-between mx-15 my-5">
                <DropDown />
                <button
                    className="text-md font-semibold px-3 py-1 content-end rounded-lg text-white bg-green-600 hover:bg-green-500"
                    onClick={() => setShowModal(true)}
                >
                    Tambah Item
                </button>
            </div>
            <ItemCard />

            <AddForm isOpen={showModal} onClose={() => setShowModal(false)} />
        </>
    );
}

export default InventoryPage;