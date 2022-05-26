import AppRouter from "./router/Router";
import {useEffect} from "react";
import {socket} from "./socket/socket";
import store from './store/store'
import {setSocketID} from "./store/socketSlice/SocketSlice";
function App() {
    useEffect(()=>{
        socket.on('connect',()=>{
            store.dispatch(setSocketID(socket.id))
        })
    })
    return (
        <>
        <AppRouter />
        </>
    );
}

export default App;

