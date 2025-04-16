import { useContext, createContext, ReactNode, useState, useEffect } from "react";

type onlineContextT = {
    isOnline:boolean;
    setIsOnline:React.Dispatch<React.SetStateAction<boolean>>
}

const OnlineContext = createContext<onlineContextT>({
    isOnline:false,
    setIsOnline:()=>{}
});

export const useOnline = () => useContext(OnlineContext);

export const OnlineContextProvider = ({children}:{children:ReactNode}) => {
    const [isOnline, setIsOnline] = useState<boolean>(false);

    useEffect(()=>{
        const data = window.navigator.onLine;
        console.log(window.onmousemove);
        setIsOnline(data);
    },[])

  return (<OnlineContext value={{isOnline, setIsOnline}}>{children}</OnlineContext>)
};
