import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main className=" max-w-screen-xl mx-auto px-4">
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default MainLayout;