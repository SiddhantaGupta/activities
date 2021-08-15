import { useState, createContext } from 'react';
import Filter from './components/Filter';
import Activity from './components/Activity';
import Navbar from './components/Navbar';
import Favourites from './components/Favourites';
import Error from './components/Error'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const FilterContext = createContext();

function App() {
  const [activity, setActivity] = useState({});
  const [filters, setFilters] = useState({
      type:'',
      price:'',
      participants:'',
      accessiblity:'',
  });
  const [btn_switch, setSwitch] = useState(true);
  
  return (
    <>
    <Router>
      <FilterContext.Provider value={{activity, setActivity, filters, setFilters, btn_switch, setSwitch}}>
        <Navbar />
          <Switch>
            <Route exact path='/'>
                <Filter />
                {(activity.activity || activity.error) && <Activity item={activity} />}
            </Route>
            <Route path='/favourites'>
              <Favourites />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </FilterContext.Provider>
    </Router>
    </>
  );
}

export default App;
export { FilterContext }