import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./home/pages/HomePage";
import {BoatRoutes} from "./boat/BoatRoutes";

export default function AppRoutes () {
    return(
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            {BoatRoutes}
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="*" element={<Navigate to="/home" />}/>
        </Routes>
    )
}