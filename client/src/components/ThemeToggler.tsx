import { LucideMoon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";

type Props = {
  className?: string;
};

function ThemeToggler({ className }: Props) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement | null>(null);
  
  const change = async() => {
    if(!ref.current)return;
    await document.startViewTransition(() => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle("dark");
        setIsDark(dark);
      });
    }).ready;
    
    const { top, left, width, height } = ref.current.getBoundingClientRect() ;
    const x = left + width / 2;
    const y = top + height / 2;
      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRadius = Math.hypot(
        Math.max(left, right),
        Math.max(top, bottom),
      );
    document.documentElement.animate(
      {
        clipPath:[
          `circle(0px at ${x}px ${y}px)`,
          `circle(${Number(maxRadius)}px at ${x}px ${y}px)`,
        ]
      },
      {
        duration: 1000,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  // useEffect(()=>{
  //   change();
  // },[])

  return (
    <button ref={ref} onClick={change} className={`${className}`}>
      {isDark ? <SunDim /> : <LucideMoon />}
    </button>
  );
}

export default ThemeToggler;
