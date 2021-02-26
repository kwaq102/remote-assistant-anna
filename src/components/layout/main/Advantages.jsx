import exaple from '../../../img/example.jpg'
import time from '../../../img/time.jpg'
import organization from '../../../img/organization.jpg'
import agreement from '../../../img/agreement.jpg'
import help from '../../../img/help.jpg'
import success from '../../../img/success.jpg'
import savingMoney from '../../../img/savingMoney.jpg'
import homeOffice from '../../../img/homeOffice.jpg'




const Advantages = () => {
    return (
        <>
            <section className="advantages">
                <h3>Rób więcej, pracuj mniej!</h3>

                <div className="advantages-wrapper">
                    <dvi className="advantage-content">
                        <div className="advantage-image">
                            <img src={time} alt="" />
                        </div>
                        <div className="advantage-desc">
                            <h4>Oszczędność czasu</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione itaque similique rerum illo commodi debitis dolorum consequuntur. Officiis laudantium ullam sequi, consequuntur nihil ea amet atque repudiandae accusamus quaerat.</p>
                        </div>
                    </dvi>

                    <dvi className="advantage-content">
                        <div className="advantage-image">
                            <img src={organization} alt="" />
                        </div>
                        <div className="advantage-desc">
                            <h4>Lepsza organizacja pracy</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione itaque similique rerum illo commodi debitis dolorum consequuntur. Officiis laudantium ullam sequi, consequuntur nihil ea amet atque repudiandae accusamus quaerat.</p>
                        </div>
                    </dvi>

                    <dvi className="advantage-content">
                        <div className="advantage-image">
                            <img src={savingMoney} alt="" />
                        </div>
                        <div className="advantage-desc">
                            <h4>Oszczędność pieniędzy</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione itaque similique rerum illo commodi debitis dolorum consequuntur. Officiis laudantium ullam sequi, consequuntur nihil ea amet atque repudiandae accusamus quaerat.</p>
                        </div>
                    </dvi>


                    <dvi className="advantage-content">
                        <div className="advantage-image">
                            <img src={homeOffice} alt="" />
                        </div>
                        <div className="advantage-desc">
                            <h4>Brak konieczności posiadania biura</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione itaque similique rerum illo commodi debitis dolorum consequuntur. Officiis laudantium ullam sequi, consequuntur nihil ea amet atque repudiandae accusamus quaerat.</p>
                        </div>
                    </dvi>


                    <dvi className="advantage-content">
                        <div className="advantage-image">
                            <img src={agreement} alt="" />
                        </div>
                        <div className="advantage-desc">
                            <h4>Nie wiążesz się długoterminową umową</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione itaque similique rerum illo commodi debitis dolorum consequuntur. Officiis laudantium ullam sequi, consequuntur nihil ea amet atque repudiandae accusamus quaerat.</p>
                        </div>
                    </dvi>

                    <dvi className="advantage-content">
                        <div className="advantage-image">
                            <img src={help} alt="" />
                        </div>
                        <div className="advantage-desc">
                            <h4>Pomoc w rozwoju biznesu</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione itaque similique rerum illo commodi debitis dolorum consequuntur. Officiis laudantium ullam sequi, consequuntur nihil ea amet atque repudiandae accusamus quaerat.</p>
                        </div>
                    </dvi>

                    <dvi className="advantage-content">
                        <div className="advantage-image">
                            <img src={success} alt="" />
                        </div>
                        <div className="advantage-desc">
                            <h4>Twój sukces, to mój sukces!</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione itaque similique rerum illo commodi debitis dolorum consequuntur. Officiis laudantium ullam sequi, consequuntur nihil ea amet atque repudiandae accusamus quaerat.</p>
                        </div>
                    </dvi>
                </div>

            </section>
        </>
    );
}

export default Advantages;