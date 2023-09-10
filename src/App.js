import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";
import { Manager } from "socket.io-client";
function App() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsInVzZXJJZCI6IjY0YzI0Y2ZlYzljYjJkYmM0OTI4NzIyOSIsImFjdGl2YXRlZCI6dHJ1ZSwiZW1haWwiOiJhYmRlbHJhaG1hbmFiZGFsbGFoOTgwMEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFiZGVscmFobWFuMjMiLCJpYXQiOjE2OTA0NTUyOTR9.Jz6RSBoNz9XDlaeFqj0I_Cbzq77FSmnHUBw0bmPF7sE";

  const socket = io(`https://api.halajary.ae?token=${token}`, {
    transports: ["websocket"],
    autoConnect: false,
    rejectUnauthorized: false
  });
  socket.connect()
  socket.on('error', err => console.log(`error: $err`));
  socket.on('connect', err => {
    console.log(`connect`)
    console.log(socket)
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
