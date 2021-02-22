import bgImg1 from '../../img/bg1.jpg'
import bgImg1Min from '../../img/bg1-min.jpg'

import bgImg2 from '../../img/bg2.jpg'
import bgImg2Min from '../../img/bg2-min.jpg'

import bgImg3 from '../../img/bg3.jpg'
import bgImg3Min from '../../img/bg3-min.jpg'

import logoMin from '../../img/logo-min.png'


const Header = () => {

    return (
        <>
            <header>

                <div className="logo">
                    <img src={logoMin} alt="Logo Zdalna Asystentka Anna Gajewska" className="logo-header" />
                </div>

                <div className="content-header">
                    <h1><strong>Wirtualna Asystentka</strong><span> Anna Gajewska</span></h1>

                    <div className="socials-header">
                        <div className="fb">
                            <a href="https://www.facebook.com/"><span class="fab fa-facebook-f"></span></a>
                        </div>
                        <div className="linkedin">
                            <a href="https://www.linkedin.com"><span class="fab fa-linkedin-in"></span></a>
                        </div>

                    </div>
                    <p>Profesjonalne wsparcie Twojego biznesu</p>
                    <button className="btn btn-header">Zakres usług</button>
                    <button className="btn btn-header">Napisz do mnie</button>
                </div>

                <div className="bg">
                    <img src={bgImg1} className="img1" alt="" />
                    <img src={bgImg2} className="img2" alt="" />
                    <img src={bgImg3} className="img3" alt="" />
                </div>


            </header>
        </>
    );
}

export default Header;