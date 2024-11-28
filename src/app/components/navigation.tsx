import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAddressCard, faPhone, faVoicemail, faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faPlaystation } from "@fortawesome/free-brands-svg-icons"

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top px-3">
            <div className="container-fluid bg-light">
                <div className=" d-flex flex-row">
                    <FontAwesomeIcon size='2x' style={{ alignSelf: 'center'}} icon={faPlaystation} />
                    <div className="d-flex flex-column align-items-center" style={{ marginLeft: '1vw' }}>
                        <p className="navbar-brand nav-link fs-5 p-0 m-0">Jasa Desain</p>
                        <p className="navbar-brand nav-link fs-6 p-0 m-0">Tangerang</p>
                    </div>
                </div>
                {/* <a className="navbar-brand nav-link fs-3">Jasa Desain Tangerang</a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link fs-6" href="#about">About</a>
                        <a className="nav-link fs-6" href="#services">Services</a>
                        <a className="nav-link fs-6" href="#features">Client</a>
                        <a className="nav-link fs-6" href="#portfolio">Portofolio</a>
                        <a className="nav-link fs-6" href="#testimonials">Testimonials</a>
                        <a className="nav-link fs-6" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
