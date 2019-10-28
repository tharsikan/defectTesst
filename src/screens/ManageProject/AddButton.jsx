import React,{useState} from 'react'
import { Button } from 'semantic-ui-react'
import PopUp from './PopUp'


const AddButton = () => {
    const [clicked,setClicked] = useState(false);
    const clickHandiler= () =>{
        setClicked({
            clicked:true
        })
        
    }
    
    return (
        <div>
            {/* <Button  color="primary" onClick={()=>clickHandiler()}>Add Project</Button>     
            {clicked && <PopUp/> }    */}
            <PopUp/>
                
        </div>
    )
}

export default AddButton