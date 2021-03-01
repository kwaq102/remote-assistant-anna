import logoAnaconda from '../../../img/logoAnaconda.jpg';
import logoAnywhere from '../../../img/logoAnywhere.jpg';
import logoBeskid from '../../../img/logoBeskid.jpg';
import logoJumboShop from '../../../img/logoJumboShop.jpg';
import logoTbp from '../../../img/logoTbp.jpg';

const Cooperation = () => {
    return (
        <>
            <section className="cooperation">
                {/* <h2>Wspólna współpraca</h2> */}
                <div className="cooperation-wrapper">

                    <div className="cooperation-desc">
                        <p>Podejmując współpracę, kluczowa jest dla mnie znajomość Twojego biznesu. Z chwilą przyjęcia zlecenia, biorę odpowiedzialność za Twoją Firmę i czuję się jej częścią. Od tej chwili Twój biznes jest moim biznesem i robię wszystko, aby dać Ci najlepsze wsparcie. </p>
                    </div>

                    <div className="cooperation-companies">
                        <h2>Klienci</h2>
                        <div className="logos">
                            <img src={logoAnaconda} alt="logo anaconda" />
                            <img src={logoAnywhere} alt="logo anywhere" />
                            <img src={logoBeskid} alt="logo Beskid" />
                            <img src={logoJumboShop} alt="logo JumboShop" />
                            <img src={logoTbp} alt="logoTbp" />
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}

export default Cooperation
