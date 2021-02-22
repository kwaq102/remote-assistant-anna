import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import Nav from './components/Nav';

// import './style/App.scss'

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
