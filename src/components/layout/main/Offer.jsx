import card from '../../../img/building.jpg'

const Offer = () => {
    return (
        <>
            <section className="offer">
                <h2>Oferta</h2>
                <div className="offer-wrapper">
                    <div className="offer-general-desc">
                        <p>Oferuję współpracę w zakresie ściśle określonych zadań, z których się rozliczamy, ale również stałą kooperację na wyłączność w określonych dniach czy godzinach. Jeżeli realizujesz ważny projekt i potrzebujesz asystentki pod ręką również jestem do dyspozycji. Z racji tego, że mam cygańską duszę, uwielbiam się przemieszczać i jestem urodzonym podróżnikiem, z wielką przyjemnością odwiedzę Twoje biuro niezależnie od lokalizacji, aby face to face omówić szczegóły naszej współpracy, wesprzeć Cię w przygotowaniu ważnego projektu czy też ogarnąć nagromadzone sprawy na miejscu.</p>
                    </div>
                    <div className="offer-desc">
                        <div className="offer-card">

                            <div className="offer-card-front">
                                <div className="offer-card-image">
                                    <img src={card} alt="" />
                                </div>
                                <h3>Sprawy administracyjne</h3>
                            </div>

                            <div className="offer-card-back">
                                <h3>Sprawy administracyjne</h3>
                                <ul>
                                    <li><span class="fas fa-check"></span>obsługa poczty</li>
                                    <li><span class="fas fa-check"></span>przygotowanie prezentacji</li>
                                    <li><span class="fas fa-check"></span>tworzenie raportów, zestawień, kalkulacji</li>
                                    <li><span class="fas fa-check"></span>prowadzenie dokumentacji</li>
                                    <li><span class="fas fa-check"></span>tworzenie wzorów dokumentów</li>
                                    <li><span class="fas fa-check"></span>prowadzenie kalendarza</li>
                                    <li><span class="fas fa-check"></span>umawianie spotkań</li>
                                    <li><span class="fas fa-check"></span>obsługa i aktualizacja CRM</li>
                                    <li><span class="fas fa-check"></span>wprowadzanie danych </li>
                                    <li><span class="fas fa-check"></span>prowadzenie rejestru faktur</li>
                                    <li><span class="fas fa-check"></span>research</li>
                                </ul>
                            </div>

                        </div>

                        <div className="offer-card">

                            <div className="offer-card-front">
                                <div className="offer-card-image">
                                    <img src={card} alt="" />
                                </div>
                                <h3>Copywriting</h3>
                            </div>

                            <div className="offer-card-back">
                                <h3>Copywriting</h3>
                                <ul>
                                    <li><span class="fas fa-check"></span>przygotowanie różnego rodzaju treści</li>
                                    <li><span class="fas fa-check"></span>teksty na bloga, stronę internetową,</li>
                                    <li><span class="fas fa-check"></span>treści do katalogów, folderów
                                    </li>
                                    <li><span class="fas fa-check"></span>przygotowanie ofert handlowych i newsletterów
                                    </li>
                                    <li><span class="fas fa-check"></span>posty do social mediów,</li>
                                    <li><span class="fas fa-check"></span>opisy usług i produktów</li>
                                    <li><span class="fas fa-check"></span>wywiady, recenzje, artykuły, felietony itd</li>
                                </ul>
                            </div>

                        </div>

                        <div className="offer-card">

                            <div className="offer-card-front">
                                <div className="offer-card-image">
                                    <img src={card} alt="" />
                                </div>
                                <h3>Organizacja spotkań, eventów i wyjazdów służbowych</h3>
                            </div>

                            <div className="offer-card-back">
                                <h3>Organizacja spotkań, eventów i wyjazdów służbowych</h3>
                                <ul>
                                    <li><span class="fas fa-check"></span>rezerwacja sali konferencyjnej,  hotelu, cateringu</li>
                                    <li><span class="fas fa-check"></span>rezerwacja lotu, pociągu, innego przejazdu</li>
                                    <li><span class="fas fa-check"></span>organizacja imprez okolicznościowych</li>
                                    <li><span class="fas fa-check"></span>organizacja wyjazdów integracyjnych</li>
                                </ul>
                            </div>

                        </div>

                        <div className="offer-card">

                            <div className="offer-card-front">
                                <div className="offer-card-image">
                                    <img src={card} alt="" />
                                </div>
                                <h3>Social media</h3>
                            </div>

                            <div className="offer-card-back">
                                <h3>Social media</h3>
                                <ul>
                                    <li><span class="fas fa-check"></span>przygotowywanie postów</li>
                                    <li><span class="fas fa-check"></span>obsługa kont w mediach społecznościowych</li>
                                    <li><span class="fas fa-check"></span>tworzenie postów, prostych grafik, wyszukiwanie zdjęć</li>
                                    <li><span class="fas fa-check"></span>administracja grup na Facebooku</li>
                                </ul>
                            </div>

                        </div>

                    </div>


                </div>
            </section>
        </>
    );
}

export default Offer;