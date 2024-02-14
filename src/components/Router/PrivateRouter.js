import { Outlet } from "react-router-dom";

function PrivateRouter(){
    const token = localStorage.getItem('jwtToken');
    return(
        token && <Outlet/> 
    )
}
export default PrivateRouter;