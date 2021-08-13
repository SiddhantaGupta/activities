import { useContext } from 'react'
import { FilterContext } from '../App'

function Remove() {
    const { changeButton } = useContext(FilterContext);

    const removeItem = (e) => {
        let id;
        id = e.target.parentElement.id;
        let savedactivities = [];
        savedactivities = JSON.parse(localStorage.getItem('savedactivities'));
        savedactivities = savedactivities.filter(act => id !== act);
        localStorage.savedactivities = JSON.stringify(savedactivities);
        changeButton();
    }

    return (
        <>
        <button type='button' onClick={(e) => removeItem(e)}>remove</button>
        </>
    )
}

export default Remove