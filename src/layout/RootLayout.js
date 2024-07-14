import { Outlet } from "react-router-dom";
import Header from "../components/Header"

function RootLayout() {
    return (
        <div>
            <div>
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