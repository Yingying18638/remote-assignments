import React,{useState, memo, useEffect} from "react";
const Fixed = ({isMenuTriggered})=>{
    const [ display, setDisplay ]=useState('default')
    useEffect(()=>{
        if(display==="default"){
            return(()=>{
                setDisplay("")
            }
            );
        }
        setDisplay("block")
        // console.log(isMenuTriggered)
    },[isMenuTriggered])

    const displayNone=()=>{setDisplay("none")}
    return(
        <div className="fixed"  style={{display}}
        onClick={ displayNone }>
            <div id="Item1">Item 1 
                <span id="X" >X</span>
            </div> 
            <div>Item 2</div> 
            <div>Item 3</div> 
            <div>Item 4</div> 
        </div>        
    )
}
export default memo(Fixed);