import Activity from './Activity';
import { useEffect, useState, useContext } from 'react';
import { FilterContext } from '../App';

function Favourites () {
    const { btn_switch } = useContext(FilterContext)
    const [favlist, setFavlist] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const templist = [];

    useEffect(() => {
        fetchData();
    }, [btn_switch]);

    const saved_fav = JSON.parse(localStorage.getItem('savedactivities'));
    const fetchData = async () => {
        if (saved_fav !== null) {
        for (let i=0; i < saved_fav.length; i++)
        {
            const response = await fetch(`https://www.boredapi.com/api/activity?key=${saved_fav[i]}`)
            const data = await response.json()
            templist.push(data);
        }
        setIsLoading(false);
        setFavlist(templist);
    }
    }
    if (localStorage.getItem('savedactivities') ===  null || saved_fav.length === 0){
        return (
            <p className='not-found'>There are no saved items.</p>
        )
    }
    else if (isLoading) {
        return (
            <p className='not-found'>Loading...</p>
        )
    }
    else {
        return (
            <section className='my-grid'>
                {favlist.map((fav) => {
                    return <Fav key={fav.key} item={fav}/>
                })}
            </section>
        )
    }
}

function Fav({item}) {

    return (
        <Activity item={item} />
    )
}

export default Favourites