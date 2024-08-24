import { FaRegUser, FaUser } from 'react-icons/fa'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { IoBag, IoBagOutline,} from 'react-icons/io5'
import { MdOutlinePhotoLibrary, MdPhotoLibrary } from 'react-icons/md'
import { PiUsersThree, PiUsersThreeFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const BottomNavigation = () => {
   
  return (
    <section className="flex justify-between p-2 sticky bg-pinkishPurple bottom-0 left-0 w-full max-w-7xl mx-auto text-2xl ">
        <Link to={'/'}>
         {location.pathname==='/'?<GoHomeFill className='text-[#f381c2] cursor-pointer'/>:<GoHome className='text-stone-50 cursor-pointer'/>}
        </Link>
        <Link to={'/products'}>
          {location.pathname==='/products'?<IoBag className='text-[#f381c2] cursor-pointer'/>:<IoBagOutline className='text-stone-50 cursor-pointer'/>}
        </Link>
        <Link to={'/community'}>
          {location.pathname==='/community'?<PiUsersThreeFill className='text-[#f381c2] cursor-pointer'/>:<PiUsersThree className='text-stone-50 cursor-pointer' />}
        </Link>
        <Link to={'/memory'}>
          {location.pathname.includes('/memory')?<MdPhotoLibrary className='text-[#f381c2] cursor-pointer'/>:<MdOutlinePhotoLibrary className='text-stone-50 cursor-pointer'/>}
        </Link>
        <Link to={'/user'}>
          {location.pathname==='/user'?<FaUser className='text-[#f381c2] cursor-pointer'/>:<FaRegUser className='text-stone-50 cursor-pointer'/>}
        </Link>
        
        
    </section>
  )
}

export default BottomNavigation