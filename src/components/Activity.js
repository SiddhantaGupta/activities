import { useContext } from 'react'
import { FilterContext } from '../App'
import Save from './Save'
import Remove from './Remove'

const Activity = () => {
    const {activity, btn_switch, setSwitch} = useContext(FilterContext);

    let difficulty = 'None';
    let cost = 'Free';
    let savedlist = [];

    if (activity.accessibility < 0.3)
        difficulty = 'Low';
    else if (activity.accessibility > 0.3 && activity.accessibility < 0.7)
        difficulty = 'Medium';
    else if (activity.accessibility > 0.7)
        difficulty = 'Hard';

    if (activity.price === 0)
        cost = 'Free';
    else if (activity.price < 0.3)
        cost = 'Low';
    else if (activity.price > 0.3 && activity.price < 0.7)
        cost = 'Medium';
    else if (activity.price > 0.7)
        cost = 'High';
    const changeButton = () => {
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
        {activity.error ? <div>{activity.error}</div> :
        <div id={activity.key}>
            <h1>{activity.activity}</h1>
            <h4>{activity.type}</h4>
            <p>Participants: {activity.participants}</p>
            <p>Cost: {cost}</p>
            <p>Difficulty: {difficulty}</p>
            {btn_switch ? <Save changeButton={changeButton} /> : <Remove changeButton={changeButton}/>}
        </div>}
        </>
    )
}

export default Activity