import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="footer-left">
                        <h4><strong>Wirtualna Asystentka</strong></h4>
                        <h5>Anna Gajewska</h5>
                        <p><span>Tel: </span>+48 661 182 851</p>
                        <p><span>E-mail: </span>aniaG02@interia.pl</p>
                    </div>

                    <div className="footer-right">
                        <nav className="footer-nav">
                            <ul>
                                <li><Link>Home</Link></li>
                                <li><Link>O mnie</Link></li>
                                <li><Link>Oferta</Link></li>
                                <li><Link>Współpraca</Link></li>
                                <li><Link>Cennik</Link></li>
                                <li><Link>Kontakt</Link></li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <div className="footer-copyright">
                    <p>Projekt i wykonanie strony <Link>gajewwwski.pl</Link></p>
                    <p>© 2021 Wszystkie prawa zastrzeżone</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;