import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Base() {
    return (
        <>
            <div className="relative">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}