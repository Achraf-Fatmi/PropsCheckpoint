

import './App.css';
import Pic from './Component/Profile/assets/pic.jpg'
import Profile from './Component/Profile/Profile';


function App() {
  const handleName=(name)=>()=>alert ('hello '+ name)

  
  return (
    <div className="App" style={{alignItems: 'center' ,color: 'dodgerblue' , textAlign:'center'}} >

      <h1 style={{color:'red'}}>Steve's Profile</h1>
     <Profile name='steve' bio= 'a 10 year old monkey' profession='an entertainer' handleName={handleName}> 
     <img src={Pic} alt='Steve' width={300} />
     </Profile>
    </div>
  );
}

export default App;
