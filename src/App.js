import { useState, createContext} from 'react'
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

  return (
    <>
    <FilterContext.Provider value={{activity, setActivity, filters, setFilters}}>
      <Filter />
      {activity.activity && <Activity />}
    </FilterContext.Provider>
    </>
  );
}

export default App;
export {FilterContext}
