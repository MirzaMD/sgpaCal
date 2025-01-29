import { FaUpload } from "react-icons/fa";
import { useRef } from 'react';
export function NameAndPhoto({register1, register2,uploading}:any):JSX.Element{
    const imgRef=useRef<HTMLInputElement>(null)
    function clickUpload():void{
        console.log("Uploading triggered"); 
        if(imgRef.current)
        imgRef.current.click();
    }
    return(
    <section className="flex flex-col justify-center items-center">
    <div className={`flex justify-center items-center gap-1`}>
     <label htmlFor="nameInput"
     className="text-[blue] font-serif text-md sm:text-lg">Name:</label>
     <input type="text" id="nameInput" placeholder="enter your name"
     {...register1}/>
     </div>
     <div className={`flex justify-start gap-x-3 w-[235px] items-center`}>
     <label htmlFor="namePhoto"
     className="text-[blue] font-serif text-md sm:text-lg">Upload:</label>
     <input type="file" id="namePhoto" hidden
     {...register2} 
     ref={imgRef} onChange={uploading}/>
     <FaUpload onClick={clickUpload} className="text-lg sm:text-xl text-blue-400"/>
     </div>
    </section>
    )
}