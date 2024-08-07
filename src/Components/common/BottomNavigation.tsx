import { FaRegUser, FaUser } from 'react-icons/fa'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { IoBag, IoBagOutline,} from 'react-icons/io5'
import { MdOutlinePhotoLibrary, MdPhotoLibrary } from 'react-icons/md'

const BottomNavigation = () => {
   
  return (
    <footer className="flex justify-between mt-10 p-2 sticky bg-pinkishPurple bottom-0 left-0 w-full text-2xl ">
        {location.pathname==='/'?<GoHomeFill className='text-[#f381c2]'/>:<GoHome className='text-stone-50'/>}
        {location.pathname==='/products'?<IoBag className='text-[#f381c2]'/>:<IoBagOutline className='text-stone-50'/>}
        {location.pathname==='/memory'?<MdPhotoLibrary className='text-[#f381c2]'/>:<MdOutlinePhotoLibrary className='text-stone-50'/>}
        {location.pathname==='/user'?<FaUser className='text-[#f381c2]'/>:<FaRegUser className='text-stone-50'/>}
    </footer>
  )
}

export default BottomNavigation