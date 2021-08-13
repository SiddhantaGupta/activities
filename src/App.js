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

  const changeButton = () => {
    let savedlist = [];
    if (localStorage.getItem('savedactivities') !== null)
    {
        savedlist = JSON.parse(localStorage.getItem('savedactivities'));
        for (let i=0; i <= savedlist.length; i++) {
            if (activity.key === savedlist[i]) {
                setSwitch(false);
                break;
            }
            else if (activity.key !== savedlist[i]){
                setSwitch(true);
            }
        }
    }
}
  return (
    <>
    <FilterContext.Provider value={{activity, setActivity, filters, setFilters, btn_switch, setSwitch, changeButton}}>
      <Filter />
      {(activity.activity || activity.error) && <Activity />}
    </FilterContext.Provider>
    </>
  );
}

export default App;
export { FilterContext }
