import { LucideMoon, SunDim } from 'lucide-react'
import { useState } from 'react'

type Props = {
  className?:string
}

function ThemeToggler({className}: Props) {
  const [isDark,setIsDark] = useState<boolean>(false);

  const change = () => {
    const dark = document.documentElement.classList.toggle('dark');
    setIsDark(dark);
  }


  return (
    <button onClick={change} className={`${className}`}>{isDark?<SunDim/>:<LucideMoon/>}</button>
  )
}

export default ThemeToggler