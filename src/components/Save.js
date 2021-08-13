import { useContext } from 'react';
import { FilterContext } from '../App';

function Save() {
    const { changeButton, activity } = useContext(FilterContext);

    const saveactivity = () => {
        let activity_id = [];
        if (localStorage.getItem('savedactivities') === null) {
            activity_id[0] = activity.key;
        }
        else {
            activity_id = JSON.parse(localStorage.getItem('savedactivities'));
            activity_id.push(activity.key);
        }

        localStorage.savedactivities = JSON.stringify(activity_id);
        changeButton();
    }

    return (
        <>
        <button type='button' onClick={saveactivity}>Save</button>
        </>
    )

}

export default Save