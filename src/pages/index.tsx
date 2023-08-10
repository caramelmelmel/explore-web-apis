import { 
    createBrowserRouter, 
    createRoutesFromElements,
    Route
} from "react-router-dom";
import Main from "./main";
import APIDetails from "./APIDetails";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' index={false}>
            <Route path=':url' element={<APIDetails />} />
            <Route index element={<Main/>} />
        </Route>
    )
)

export default router