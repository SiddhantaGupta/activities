import Activity from './Activity'
import { useEffect, useState, useContext } from 'react'
import { FilterContext } from '../App'

function Favourites () {
    const { btn_switch } = useContext(FilterContext)
    const [favlist, setFavlist] = useState([])
    const templist = [];

    useEffect(() => {
        fetchData();
    }, [btn_switch])

    const saved_fav = JSON.parse(localStorage.getItem('savedactivities'));
    const fetchData = async () => {
        if (saved_fav !== null) {
        for (let i=0; i < saved_fav.length; i++)
        {
            const response = await fetch(`https://www.boredapi.com/api/activity?key=${saved_fav[i]}`)
            const data = await response.json()
            templist.push(data);
        }
        setFavlist(templist)
    }
    }
    if (localStorage.getItem('savedactivities') === null){
        return (
            <div>
                There are no saved items.
            </div>
        )
    }
    return (
        <section>
            {favlist.map((fav) => {
                return <Fav key={fav.key} item={fav}/>
            })}
        </section>
    )
}

function Fav({item}) {

    return (
        <Activity item={item} />
    )
}

export default Favourites