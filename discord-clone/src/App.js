import './App.css';
import Sidebar from "./component/Sidebar";
import Chat from "./component/Chat";

function App() {
  return (
    <div className='app'>
    

      {/* sidebar */}
      <Sidebar />
      
      {/* chat */}
      <Chat/>
    </div>
  );
}

export default App;
