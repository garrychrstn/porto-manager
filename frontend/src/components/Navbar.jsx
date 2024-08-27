
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
function Navbar() {

  return (
    <>
        <div className='navbar'>
            <ul>
                <li>
                  <a className='nav-a flex items-center' href='https://github.com/garrychrstn'>
                    <FaGithub />
                    <span className="ml-1">garrychrstn</span>
                  </a>
                </li>
                <li>
                  <a className='nav-a flex items-center' href='https://instagram.com/garrychrstn'>
                    <FaInstagram />
                    <span className="ml-1">garrychrstn</span>
                  </a>
                  </li>
                <li>
                  <a className='nav-a flex items-center' href='tel:6287786965543'>
                    <BsFillTelephoneForwardFill/>
                    <span className="ml-1">+62 877 8696 5543</span>
                  </a>
                </li>
                <li>
                  <a className='nav-a flex items-center' href='mailto:garrychrstn@gmail.com'>
                    <CgMail />
                    <span className="ml-1">garrychrstn@gmail.com</span>
                  </a>
                </li>
                <li>
                  
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
