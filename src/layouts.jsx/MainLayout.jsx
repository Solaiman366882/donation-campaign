import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main className=" max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default MainLayout;