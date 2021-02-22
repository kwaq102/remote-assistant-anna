import AnnaG from '../../../img/AnnaGajewska.jpg'

const About = () => {
    return (
        <>
            <section className="about">
                <h2>Kilka słów o mnie</h2>
                <div className="about-wrapper">
                    <div className="about-img">



                        <img src={AnnaG} alt="Zdalna Asystentka Anna Gajewska" />
                    </div>
                    <div className="about-text">
                        <p>Nazywam się <strong>Anna Gajewska</strong> i od lat pracuję <strong>zdalnie</strong>. <strong>Jestem wirtualną asystentką</strong>, co oznacza, że wpieram podmioty gospodarcze w prowadzeniu firmy. Zakres mojego działania jest szeroki i zależny od potrzeb danego biznesu. Jestem osobą wielozadaniową i wielofunkcyjną, zatem możesz liczyć na moje wsparcie na różnych płaszczyznach Twojej działalności. </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;