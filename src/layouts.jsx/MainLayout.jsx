import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main className="">
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default MainLayout;