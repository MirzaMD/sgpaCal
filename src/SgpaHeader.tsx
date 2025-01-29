import logo from './assets/logo.png'
export function SgpaHeader():JSX.Element{
    return(<header className='flex  justify-center items-center 
        bg-[radial-gradient(purple,blue,cyan)]
     text-white font-serif h-[120px] w-full'>
          <img src={logo} className='h-[60px] sm:h-[100px] '/>
          <h1 className='w-full text-center text-lg sm:text-3xl'>Build Card</h1>
          </header>)
}