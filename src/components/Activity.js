import { useContext } from 'react'
import { FilterContext } from '../App'
import Save from './Save'
import Remove from './Remove'

const Activity = () => {
    const {btn_switch, activity} = useContext(FilterContext);

    let difficulty = 'None';
    let cost = 'Free';
    
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

    return (
        <>
        {activity.error ? <div>{activity.error}</div> :
        <div id={activity.key}>
            <h1>{activity.activity}</h1>
            <h4>{activity.type}</h4>
            <p>Participants: {activity.participants}</p>
            <p>Cost: {cost}</p>
            <p>Difficulty: {difficulty}</p>
            {btn_switch ? <Save /> : <Remove />}
        </div>}
        </>
    )
}

export default Activity