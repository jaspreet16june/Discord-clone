import './App.css';
import Sidebar from "./component/Sidebar";
import Chat from "./component/Chat";
import {useSelector} from "react-redux";
import Login from "./component/Login";

function App() {
  let user = useSelector((state) => state);
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
