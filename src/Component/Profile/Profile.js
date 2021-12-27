import React from "react";
import PropTypes from "prop-types";
const Profile =({name,bio,profession,handleName, children})=> {
    console.log();
    return(
        <div>
            
            <h1 >This is {name} </h1>
            
            <p>he is {bio} and he works as {profession}</p>
           
            <span>{children}</span>
            <div>

            
            <button  onClick={handleName(name)}>Click me</button>
            </div>
        </div>
    )
}
Profile.propTypes={
    bio:PropTypes.string,
    profession: PropTypes.string,
    name:PropTypes.string,
    handleName: PropTypes.func
}

Profile.defaultProps={
   name:'a random monkey',
   bio:'young i guess, i dont remember his exact age',
   profession:' an entertainer for children'

}



export default Profile;

