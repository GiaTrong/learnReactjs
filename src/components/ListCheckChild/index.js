import { useContext } from "react";
import { dataInApi } from "../Data";
function ListCheckChild() {
    const data = useContext(dataInApi);

    console.log(data)

    return (
      <>
        
      </>
    );
  }
  
  export default ListCheckChild;