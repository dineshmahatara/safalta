import Image from 'next/image';
import logoImage from '../../Image/logo.png';
import ctaImage from '../../Image/tracking.jpg'
import { useRouter } from 'next/navigation';

const Nav = () => {
    const router = useRouter();
    const handleRouting = (action) => {
    router.push(action);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image src={logoImage} alt="Logo" width={160} height={85} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">

                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button type="button" className="btn login_btn" onClick={() => handleRouting('/login')}>LogIn</button>
              <button type="button" className="btn signin_btn" onClick={() => handleRouting('/register')}>SignUp</button>
            </form>
          </div>
        </div>
      </nav>
     
    )
}


export default Nav