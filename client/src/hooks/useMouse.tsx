import { useContext, createContext, ReactNode, useState, useEffect } from "react";

const MouseContext = createContext<{
       mouseData:{ x:number,y:number}
}>({mouseData:{x:0,y:0}});

export const useMouse = () => useContext(MouseContext);

export const MouseContextProvider = ({children}:{children:ReactNode})=> {

    const [mouseData, setMouseData] = useState<{
        x:number,y:number
    }>({
        x:0,y:0
    });

    const moving = (e:MouseEvent) =>{
        setMouseData({x:e.clientX, y:e.clientY})
    }
    useEffect(()=>{
    window.addEventListener('mousemove',moving);        
        return ()=>{
            window.removeEventListener('mousemove',moving)
        }
    },[mouseData])
    



    return (
        <MouseContext value={{mouseData}}>
            {children}
        </MouseContext>
    )
}