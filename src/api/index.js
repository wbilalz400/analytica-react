import axios from 'axios';

const url = 'https://api.covid19api.com/summary';

export const fetchData = async () => {
    try {
        const {data:{Global:{NewConfirmed,TotalConfirmed}}} = await axios.get(url);
        
        return {NewConfirmed,TotalConfirmed}
    } catch (error) {
        
    }
}