import { useContext, createContext, ReactNode, useState, useEffect } from "react";

type SocketT = {
    socket: WebSocket | null;
    setSocket: React.Dispatch<React.SetStateAction<WebSocket | null>>;
  }

const SocketContext = createContext<SocketT>({
  socket: null,
  setSocket: () => {},
});

export const useSocket = () => {
    return useContext(SocketContext);
} 

export const SocketContextProvider = ({children}:{children:ReactNode}) => {
    const [socket, setSocket] = useState<WebSocket | null >(null);

    useEffect(()=>{
        const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
    }
    setSocket(newSocket);
    },[])

    return <SocketContext.Provider value={{ socket, setSocket }}>

{children}
    </SocketContext.Provider>
}