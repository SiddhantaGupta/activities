import { useState, createContext } from 'react'
import Filter from './components/Filter'
import Activity from './components/Activity'

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
    <FilterContext.Provider value={{activity, setActivity, filters, setFilters, btn_switch, setSwitch}}>
      <Filter />
      {(activity.activity || activity.error) && <Activity />}
    </FilterContext.Provider>
    </>
  );
}

export default App;
export { FilterContext }
