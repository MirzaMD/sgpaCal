import { FormInput } from "./FormInput";
import { z } from "zod";
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { NameAndPhoto } from "./NameAndPhoto";
import { SgpaCard } from "./SgpaCard";
import { SgpaHeader } from "./SgpaHeader";
const detailSchema = z.object({
  name:z.string().max(10,"length of the name can't exceed 10 characters"),
  pic: z.instanceof(File),
  math: z.string().transform((val) => Number(val))
    .refine((value) => value >= 0 && value <= 100, {
      message: "Invalid marks entry.",
    }),
  chem: z.string().transform((val) => Number(val))
    .refine((value) => value >= 0 && value <= 100, {
      message: "Invalid marks entry.",
    }),
  caed: z.string().transform((val) => Number(val))
    .refine((value) => value >= 0 && value <= 100, {
      message: "Invalid marks entry.",
    }),
  plc: z.string().transform((val) => Number(val))
    .refine((value) => value >= 0 && value <= 100, {
      message: "Invalid marks entry.",
    }),
  esc: z.string().transform((val) => Number(val))
    .refine((value) => value >= 0 && value <= 100, {
      message: "Invalid marks entry.",
    }),
  eng: z.string().transform((val) => Number(val))
    .refine((value) => value >= 0 && value <= 100, {
      message: "Invalid marks entry.",
    }),
  sfh: z.string().transform((val) => Number(val))
    .refine((value) => value >= 0 && value <= 100, {
      message: "Invalid marks entry.",
    }),
  kan: z.string().transform((val) => Number(val))
    .refine((value) => value >= 0 && value <= 100, {
      message: "Invalid marks entry.",
    }),
});

export function Form():JSX.Element{
  const {register,handleSubmit,reset,
  setValue,formState:{errors,isSubmitting}}=useForm(
    {
      resolver:zodResolver(detailSchema)
    }
  )
  const[marks,setMarks]=useState<number[]>(Array(8).fill(0))
  const[name,setName]=useState<string>('')
  const[photo,setPhoto]=useState<any>()
  const[displayCard,setDisplayCard]=useState<boolean>(false)
  const subs={
    math:"Mathematics",
    chem:"Chemistry",
    caed:"CAED",
    plc:"PLC",
    esc:"ESC",
    eng:"English",
    sfh:"SFH",
    kan:"Kannada"
  }
  async function sending(data:any):Promise<void>{
    setMarks(()=>[
      data.math,
      data.chem,
      data.caed,
      data.plc,
      data.esc,
      data.eng,
      data.sfh,
      data.kan
    ])
    setName(data.name)
    await new Promise((resolve)=>{
      setTimeout(()=>{
        setDisplayCard(true);
        resolve(null)
      },1000)
    })
    reset();
  } 
  function uploading(e:React.ChangeEvent<HTMLInputElement>):void{
    const file=e.target.files?.[0]
    if(file) {
      setValue("pic",file);
      setPhoto(URL.createObjectURL(file))
    }
  }
  return(
    <section className={`flex flex-col w-full justify-center items-center`}>
    <SgpaHeader/>
    {!displayCard?
    (<form onSubmit={handleSubmit(sending)} 
    className={`w-full flex flex-col gap-y-8 justify-center items-center`}>
      <div>
      <NameAndPhoto register1={register("name")} register2={register("pic")} uploading={uploading}/>
      {(errors.pic) && (
        <p className="text-red-600">Fill in to all the fields</p>
      )}
      </div>
    {Object.keys(subs).map((s,i)=>(
      <div key={i} className={`w-full`}>
        <FormInput register={register(s)} subject={subs[s as keyof typeof subs]}/>
        {errors[s as keyof typeof subs] && (
          <p className="text-red-600">{`${errors[s as keyof typeof subs]?.message}`}</p>
        )}
      </div>
    ))}
    <button 
    disabled={isSubmitting}
    type="submit"
    className={`text-white w-[80px]
    rounded-md font-serif
     ${isSubmitting?
     'bg-gray-500 text-black':
     'bg-[radial-gradient(purple,blue,cyan)]'}
     `}>{isSubmitting?'Loading...':'Submit'}</button>
    </form>)
    :<SgpaCard marks={marks} name={name} photo={photo}/> }
    </section>
  )
}