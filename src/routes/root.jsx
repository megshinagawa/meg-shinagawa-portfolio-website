import Navigation from "../components/navigation/navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

export default function Root() {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
        
    );
}