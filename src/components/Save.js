import { useContext } from 'react';
import { FilterContext } from '../App';

function Save({act}) {
    const { setSwitch } = useContext(FilterContext);
    const saveactivity = (e) => {
        let activity_id = [];
        if (localStorage.getItem('savedactivities') === null) {
            activity_id.push(e.target.dataset.id);
        }
        else {
            activity_id = JSON.parse(localStorage.getItem('savedactivities'));
            activity_id.push(e.target.dataset.id);
        }

        localStorage.savedactivities = JSON.stringify(activity_id);
        setSwitch(false);
    }

    return (
        <div>
        <button type='button' data-id={act} onClick={e => saveactivity(e)}>Save</button>
        </div>
    )
}

export default Save