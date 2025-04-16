  import './App.css'
import ThemeToggler from './components/ThemeToggler';
import { useMouse } from './hooks/useMouse';
import { useOnline } from './hooks/useOnline';
import { useSocket } from './hooks/useSocket'

function App() {
  const {socket} = useSocket();
  const {isOnline} = useOnline();
  const {mouseData} = useMouse();
// console.log("socket : ",socket);
// console.log("isOnline : ",isOnline);
  return (
    <>
    {<p>
      JSON.stringify(mouseData)
    </p> 
      }
    <ThemeToggler/>
      {/* <div className={`circle`} style={{
            position: 'absolute',
            top: mouseData?.y || 0,
            left: mouseData?.x || 0,
            transform: 'translate(-50%, -50%)',
            transition: 'all  ease-in-out',
          }}>
    </div> */}
    </>
  )
}

export default App
