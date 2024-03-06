import Secondcomponent from "../component/secondcomponent"

const Secondpage = (props) => {
    const {aman,setAman} = props
    const Remote = () => {
        setAman(aman+1)
    }
    return(
        <div>
             {/* <Secondcomponent aman = {aman} setAman={setAman} /> */}
              <button onClick={Remote} >click me</button>
        </div>
    )
}
export default Secondpage;