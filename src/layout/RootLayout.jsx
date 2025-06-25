import { Outlet } from "react-router-dom";
import Header from "../components/Header"

function RootLayout() {
    return (
        <div className="container mx-auto">
            <div className="sticky top-0 bg-[#fff] z-10">
                <Header />
            </div>
            <div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default RootLayout;