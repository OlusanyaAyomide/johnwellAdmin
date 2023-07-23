import { Icons } from '@/utils/Icons'
import { Button } from '../ui/button'
import { Dialog,DialogTrigger,DialogContent } from '../ui/dialog'
import useDownloader from "react-use-downloader"



export default function ImageDiv({url,text}:{url:string,text:string}) {
  const {download} = useDownloader()
  console.log(url)
  return (
    <div className='w-full group cursor-pointer h-full relative overlay flex justify-center items-center'>
        <h1 className="absolute z-40 max-sm:text-xs sm:hidden  top-0 left-0 text-white text-center sm:group-hover:block w-full">{text}</h1>
        <img src={url} alt="image" className='h-full w-full  object-cover' />

        <Dialog>
            <DialogTrigger asChild>
                <Button size={'icon'} className='p-1 hover:bg-white hover:text-main sm:hidden sm:group-hover:flex absolute z-40 bg-main text-2xl text-white top-[45%] left-[20%]'>
                  <Icons.full/>
                </Button>        
            </DialogTrigger>  
            <DialogContent>
              <div className='h-screen w-screen'>
                <img src={url} alt="image"  className='object-contain'/>  
              </div>

            </DialogContent> 
        </Dialog>


        <Button onClick={()=>{download(url,"test.jpg")}} size={'icon'} className='p-1 hover:bg-white hover:text-main sm:hidden sm:group-hover:flex absolute z-40 bg-main text-2xl text-white top-[45%] right-[20%]'>
        <Icons.download/>
        </Button>

    </div>
  )
}
