import classNames from 'classnames';
import Navbar from './components/navbar/navbar';
import { RouteList } from './components/routes/routeList';

function App() {
  return (
    <Navbar>
      <div className={classNames({
        "px-12 pt-8": true,
      })}><RouteList/></div>
    </Navbar>
  );
}

export default App;
