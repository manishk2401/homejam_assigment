
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import { MDBContainer } from 'mdb-react-ui-kit';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-circular-progressbar/dist/styles.css';

function App() {
  return (
    <div>
      <MDBContainer>
        <Navbar />
        <Header />
        <Footer />
      </MDBContainer>
    </div>
  );
}

export default App;
