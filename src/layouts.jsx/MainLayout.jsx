import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <header> this is header</header>
            <main className="mt-4">
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default MainLayout;