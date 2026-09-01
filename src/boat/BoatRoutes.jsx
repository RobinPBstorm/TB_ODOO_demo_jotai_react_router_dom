import { Route } from "react-router-dom";
import BoatListPage from "./pages/BoatListPage";
import BoatDetail from "./pages/BoatDetail";

export const BoatRoutes = (
    <Route path="/boat">
        <Route path="" index element={<BoatListPage/>}/>
        <Route path=":id" element={<BoatDetail/>}/>
    </Route>
)