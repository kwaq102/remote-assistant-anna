const Contact = () => {
    return (
        <>
            <section className="contact">
                <h2>Dane kontaktowe</h2>
                <div className="wrapper-contact">

                    <div className="contact-left">
                        <p>Osoby zainteresowane współpracą zapraszman do kontaktu telefonicznego, mailowego lub za pośrednictwem social mediów. </p>
                        <p>Szanując czas partnerów biznesowych staram się odpowiadać na wiadomości najszybciej jak to możliwe.</p>
                        <p>Jeśli Masz jakieś pytania chętnie rozwieję wszelkie wątpliwości.</p>
                    </div>

                    <div className="contact-right">

                        <div className="phone">
                            <h3>Telefon</h3>

                            <span class="fas fa-phone-square"></span>
                            <p>+48 661 182 851</p>
                        </div>


                        <div className="email">
                            <h3>E-mail</h3>

                            <span class="fas fa-envelope"></span>
                            <p>aniaG02@interia.pl</p>
                        </div>


                        <div className="socials">
                            <h3>Social Media</h3>

                            <div className="facebook">
                                <a href="https://www.facebook.com/"><span class="fab fa-facebook-square"></span></a>
                            </div>

                            <div className="linkedin">
                                <a href="https://www.linkedin.com/"><span class="fab fa-linkedin"></span></a>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}

export default Contact;