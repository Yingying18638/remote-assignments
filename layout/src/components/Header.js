import React,{useState, memo} from "react";
const Header=({setMenu})=>{
    return(
        <header>
            <Top 
               setMenu ={setMenu}
            />
            <Welcome/>
        </header>
    )
}
const Top=({setMenu})=>{
    return(
        <div className="top">
                <div className="logo">Website Title / Logo</div>
                <nav>
                    <div className="item">Item 1</div>
                    <div className="item">Item 2</div>
                    <div className="item">Item 3</div>
                    <div className="item">Item 4</div>
                </nav>
                <div className="menu" onClick={ setMenu }>
                    <div className="menu-trigger"></div>
                    <div className="menu-trigger"></div>
                    <div className="menu-trigger"></div>
                </div>
            </div>
    )
}
const Welcome=()=>{
    const changeText= (event)=>{
        //console.log(event.target)
        event.target.innerHTML= 'Have a Good Time !'
    }
    return(
        <div className="welcome-flex" onClick={(event)=> changeText(event)}>
            <h1 className="welcome">Welcome Message</h1>
        </div>       
    )
}
export default memo(Header);