import classNames from 'classnames';
import Navbar from './components/navbar/navbar';
import { RouteList } from './components/routes/routeList';

function App() {
  return (
    <Navbar>
      <div className={classNames({
      })}><RouteList/></div>
    </Navbar>
  );
}

export default App;
