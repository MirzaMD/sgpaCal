export function FormInput({register,subject}:any):JSX.Element{
    return(
        <div className={`flex justify-center w-full gap-2`}>
        <label htmlFor={subject}
        className={`bg-[linear-gradient(blue,black,cyan)] text-[whitesmoke] rounded-sm`}>{subject}:</label>
        <input id={subject} className={`border-2 focus:border-4 border-gray-600
        w-[80%]`} placeholder="enter the marks"
        type="number"
        {...register}></input>
        </div>
    )
}