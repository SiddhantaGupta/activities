import { useContext, useEffect } from 'react';
import { FilterContext } from '../App';
import Save from './Save';
import Remove from './Remove';

const Activity = ({item}) => {
    const { btn_switch, setSwitch } = useContext(FilterContext);

    let difficulty = 'None';
    let cost = 'Free';
    
    if (item.accessibility < 0.3)
        difficulty = 'Low';
    else if (item.accessibility > 0.3 && item.accessibility < 0.7)
        difficulty = 'Medium';
    else if (item.accessibility > 0.7)
        difficulty = 'Hard';

    if (item.price === 0)
        cost = 'Free';
    else if (item.price < 0.3)
        cost = 'Low';
    else if (item.price > 0.3 && item.price < 0.7)
        cost = 'Medium';
    else if (item.price > 0.7)
        cost = 'High';

    useEffect(() => {
        setSwitch(true);
        let savedlist = [];
        if (localStorage.getItem('savedactivities') !== null)
        {
            savedlist = JSON.parse(localStorage.getItem('savedactivities'));
            for (let i=0; i <= savedlist.length; i++) {
                if (item.key === savedlist[i]) {
                    setSwitch(false);
                    break;
                }
            }
        }
    })
    return (
        <>
        {item.error ? <p className='not-found'>{item.error}</p> :
        <article>
            <h1>{item.activity}</h1>
            <h4>{item.type}</h4>
            <p>Participants: {item.participants}</p>
            <p>Cost: {cost}</p>
            <p>Difficulty: {difficulty}</p>
            {btn_switch ? <Save act={item.key} /> : <Remove act={item.key} />}
        </article>}
        </>
    )
}

export default Activity