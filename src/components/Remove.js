import { useContext } from 'react'
import { FilterContext } from '../App'

function Remove({act}) {
    const { setSwitch } = useContext(FilterContext);
    const removeItem = (e) => {
        let id;
        id = e.target.dataset.id;
        let savedactivities = [];
        savedactivities = JSON.parse(localStorage.getItem('savedactivities'));
        savedactivities = savedactivities.filter(act => id !== act);
        localStorage.savedactivities = JSON.stringify(savedactivities);
        setSwitch(true);
    }

    return (
        <>
        <button type='button' data-id={act} onClick={(e) => removeItem(e)}>remove</button>
        </>
    )
}

export default Remove