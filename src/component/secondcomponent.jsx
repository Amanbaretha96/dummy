import { useState } from "react"
import Secondpage from "../pages/secondpage";

const Secondcomponent = () => {
    const[aman,setAman] = useState(0)

    return(
        <div>
            {aman}
            <Secondpage aman = {aman} setAman={setAman} />
        </div>
    )
}
export default Secondcomponent;