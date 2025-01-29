import { useEffect, useState} from "react"
import bc1 from './assets/backgrounds/HD-wallpaper-computer-science-and-engineering-vision.jpg'
import bc2 from './assets/backgrounds/HD-wallpaper-computer-science-engineering-vision.jpg'
import bc3 from './assets/backgrounds/desktop-wallpaper-200-beautiful-software-engineer-for-you-software-engineer (1).jpg'
import bc4 from './assets/backgrounds/desktop-wallpaper-200-beautiful-software-engineer-for-you-software-engineer.jpg'
import bc5 from './assets/backgrounds/istockphoto-1291886933-612x612.jpg'
import { SgpaCal } from "./SgpaCal"
export function SgpaCard({marks,name,photo}:{marks:number[],name:string,photo:any}):JSX.Element{
   const pics:string[]=[bc1,bc2,bc3,bc4,bc5];
   const [picIndex,setPicIndex]=useState<number>(0)
   const sgpa=SgpaCal(marks[0], marks[1], marks[2], marks[3], marks[4], marks[5], marks[6], marks[7]);
   useEffect(()=>{
      setPicIndex(()=>{
        const rand:number=Math.floor(Math.random()*5);
        return rand;
      })
   },[])
   const boxStyle:React.CSSProperties={
  backgroundImage: `url(${pics[picIndex]})`, 
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'center', 
   }
   const texty:React.CSSProperties={
    textShadow:'2px 2px 3px black',
   }
    return(
        <section className={`flex flex-col justify-center items-center
        w-[250px] sm:w-[300px] h-[400px] sm:h-[500px]
         gap-1 mt-2 rounded-md`}
        style={boxStyle}>
            <img src={photo} alt="profile picture" 
            className={`h-[100px] sm:h-[200px] w-auto rounded-full `}/>
            <h1 className={`text-lg sm:text-2xl font-serif text-[#ffffff]`}
            style={texty}>{name}</h1>
            <nav className={`grid grid-cols-2 w-[80%] h-[200px] sm:h-[200px] gap-2`}>
             <p style={texty} className="text-white font-mono font-extrabold">Mathmatics:{marks[0]}</p>
             <p style={texty} className="text-white font-mono font-extrabold">Chemistry:{marks[0]}</p>
             <p style={texty} className="text-white font-mono font-extrabold">CAED:{marks[0]}</p>
             <p style={texty} className="text-white font-mono font-extrabold">PLC::{marks[0]}</p>
             <p style={texty} className="text-white font-mono font-extrabold">ESC:{marks[0]}</p>
             <p style={texty} className="text-white font-mono font-extrabold">English:{marks[0]}</p>
             <p style={texty} className="text-white font-mono font-extrabold">SFH:{marks[0]}</p>
             <p style={texty} className="text-white font-mono font-extrabold">Kannada:{marks[0]}</p>
            </nav>
            <h1 className={`text-lg sm:text-xl font-mono text-[whitesmoke]`}
             style={texty}>SGPA:{sgpa}</h1>
        </section>
    )
}