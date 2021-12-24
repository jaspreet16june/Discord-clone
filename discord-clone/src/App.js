import './App.css';
import Sidebar from "./component/Sidebar";
import Chat from "./component/Chat";
import {useSelector , useDispatch} from "react-redux";
import Login from "./component/Login";
import {auth} from "./firebase";
import {userCreator, logoutUser} from "../src/redux/action/userAction";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state);

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=> {
      console.log("user is:", authUser);
      if(authUser){
        dispatch(userCreator({
          uid:authUser.uid,
          photo:authUser.photoURL,
          displayName : authUser.displayName,
          email:authUser.email,
        }))
      }
    
    })
  })
  return (
    <div className='app'>
    {
      user ? (
      <>
      <Sidebar />      
      <Chat/>
      </>
      ) :(
        <Login />
      )}
    </div>
  );
}

export default App;
