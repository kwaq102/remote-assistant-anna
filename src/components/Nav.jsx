import React, { Component } from 'react';
import { Link } from 'react-scroll';


class Nav extends Component {
    state = {
        burger: true
    }
    handleChangeBurger = () => {
        this.setState({
            burger: !this.state.burger
        })
    }
    render() {
        const { burger } = this.state;
        return (
            <>
                <div className={burger ? "menu-burger" : "menu-burger open"} onClick={this.handleChangeBurger}>
                    <div className="burger"></div>
                </div>
                <nav className={burger ? "main-nav hidden" : "main-nav "}>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>O mnie</Link></li>
                        <li><Link>Oferta</Link></li>
                        <li><Link>Współpraca</Link></li>
                        <li><Link>Cennik</Link></li>
                        <li><Link>Kontakt</Link></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Nav;
