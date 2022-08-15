import logo from './logo.svg';
import './App.css';
import Profile  from './profile/profile.js'

function App() {

  function handleName(fullname){
    alert('full name :'+ fullname );
  }

  return (
    <Profile fullName="Amine Medjdoub"
     bio="A biography, or simply bio, is a detailed description of a person's life. It involves more than just the basic facts like education, work, relationships, ..."
     profession="full stack develloper"
     handleName = {handleName}>
      <img style={{width:100,height:100,borderRadius:"50%"}} src="./myimage.jpeg"  />
    </Profile>
  );
}

export default App;
