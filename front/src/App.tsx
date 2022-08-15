import classNames from 'classnames';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { RouteList } from './components/routes/routeList';

function App() {
  return (
    <div>
    <Navbar>
      <div className={classNames({
        "px-12 py-4": true,
      })}><RouteList/></div>
    </Navbar>
    jkdfsakj
    <Footer/>
    </div>
  );
}

export default App;
