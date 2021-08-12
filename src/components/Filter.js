import { useContext } from "react";
import { FilterContext } from '../App'

const Filter = () => {
    const { setActivity, filters, setFilters } = useContext(FilterContext);
        
    const randomActivity = () => {
        fetch('https://www.boredapi.com/api/activity/').then((response) => response.json()).then((data) => {setActivity(data)}).catch(e => { const err = {error: e};
        setActivity(err);
    });
    };

    const handleChange = (e) => {
        const new_filters = {
            ...filters,
            [e.target.name]:e.target.value
        };
        setFilters(new_filters);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let minaccessibility = 0.0;
        let maxaccessibility = 1.0;
        let minprice = '';
        let maxprice = '';

        if(filters.accessiblity === 'low')
        {
            maxaccessibility = 0.3
        }
        else if(filters.accessiblity === 'medium')
        {
            minaccessibility = 0.3;
            maxaccessibility = 0.7;
        }
        else if(filters.accessiblity === 'high')
        {
            minaccessibility = 0.7;
        }

        if (filters.price === '1')
        {
            filters.price = '';
            minprice = 0.1;
            maxprice = 1;
        }

        fetch(`https://www.boredapi.com/api/activity?type=${filters.type}&price=${filters.price}&minprice=${minprice}&maxprice=${maxprice}&participants=${filters.participants}&minaccessibility=${minaccessibility}&maxaccessibility=${maxaccessibility}`)
        .then(response => response.json())
        .then(data => setActivity(data))
        .catch(e => {
            const err = {error: e}
            setActivity(err)
        });

        setFilters({
            type:'',
            price:'',
            participants:'',
            accessiblity:'',
        })
    }

    return(
        <div>
            <button type='submit' onClick={randomActivity}>RANDOM</button>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='type'>Type:</label>
                <select id='type' name='type' value={filters.type} onChange={(e) => {handleChange(e)}}>
                    <option disabled selected value=''>--Select an option--</option>
                    <option value='education'>Education</option>
                    <option value='recreational'>Recreational</option>
                    <option value='social'>Social</option>
                    <option value='diy'>DIY</option>
                    <option value='charity'>Charity</option>
                    <option value='cooking'>Cooking</option>
                    <option value='relaxation'>Relaxation</option>
                    <option value='music'>Music</option>
                    <option value='busywork'>Busy Work</option>
                </select>
                <label htmlFor='price'>Price:</label>
                <select name='price' id='price' value={filters.price} onChange={(e) => {handleChange(e)}}>
                    <option value=''>--Select Price--</option>
                    <option value='0'>Free</option>
                    <option value='1'>Paid</option>
                </select>
                <label htmlFor='participants'>Participants:</label>
                <input type='number' value={filters.participants} name='participants' min='1' max='10' id='participants' onChange={(e) => {handleChange(e)}} />
                <label htmlFor='accessiblitiy'>Accessiblity:</label>
                <select id='accessiblity' name='accessiblity' value={filters.accessiblity} onChange={(e) => {handleChange(e)}}>
                    <option disabled selected value=''>--Select Accessiblity--</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Filter;