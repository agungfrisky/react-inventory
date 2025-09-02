import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
    const navigate = useNavigate();

    const goToInventory = () => {
        navigate("/InventoryPage");
    };

    return (
        <div className="bg-white">
            <Header />
            <div className="bg-grey-500 m-10">
                <h1 className="self-center text-xl font-bold whitespace-nowrap text-green-500">Wellcome To MSMB Inventory</h1>
                <button
                    onClick={goToInventory}
                    className="text-xl font-semibold px-6 py-2 rounded-full text-white bg-green-600 hover:bg-green-500"
                >
                    Go to Inventory
                </button>
            </div>
        </div>
    );
}

export default HomePage;