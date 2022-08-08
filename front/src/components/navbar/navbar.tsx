import React from "react";


const Navbar = (props : {children?:React.ReactNode})=>{

    return(
        <div className="navbar">
            {props.children}
        </div>
    )
}
export default Navbar;