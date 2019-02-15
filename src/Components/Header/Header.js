import React from 'react';
import './Header.css';




function Header(props){
    return(<div  className="header"> <h1> {props.text}</h1>
    <h2>
        {props.message}
        <div>
        <span class="badge badge-secondary">score:{props.score}</span> 
        </div>
    </h2>
    <h2 className="msg"> <span class="badge badge-success">Top Score : {props.topScore}</span>
    </h2>
    {/* <span class="badge badge-secondary">New</span> */}

   
     </div>)
}




export default Header;