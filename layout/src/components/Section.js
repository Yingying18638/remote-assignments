import React,{ useState, memo} from "react";
const Section = ()=>{
    const [contentClassName, setContentClassName]=useState('callContainer')
    const handleContentClassName=()=>{
        setContentClassName('container')
    }
    return(
        <>
            <SectionOne/>
            <Button
                showContent={handleContentClassName}
            />
            <SectionTwo
               classNameState={contentClassName}
            />
        </>
    )
}
const SectionOne =()=>{
    return(
        <section>
            <h2>Section Title</h2>
            <div className="container">
                <div className="box">Content Box 1</div>
                <div className="box">Content Box 2</div>
                <div className="box">Content Box 3</div>
                <div className="box">Content Box 4</div>
            </div>
        </section>
    )
}
const Button=({showContent})=>{

    return(
        <div className="btnAction" 
        onClick={showContent}
        >
            Call to Action
        </div>
    )
}
const SectionTwo=({classNameState})=>{
    return(
        <section>
            <div className={classNameState} >
                <div className="box">Content Box 5</div>
                <div className="box">Content Box 6</div>
                <div className="box">Content Box 7</div>
                <div className="box">Content Box 8</div>
            </div>
        </section>
    )
}
export default memo(Section);