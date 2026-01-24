import { useState, useEffect } from 'react';

const useRestroData = () => {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState([]);

    // console.log(data);
    
    // const handleRating = () => {
    //     const sorted = [...data].sort(
    //         (a, b) => b.finalData[0].info.avgRating - a.finalData[0].info.avgRating
    //     );
    //     setSort(sorted);
    // };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("http://localhost:3000/data");
            const json = await data.json();
            const finalData = json.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            // console.log(finalData);
            setData(finalData);
            setFiltered(finalData);
        } catch (error) {
            console.log(error);
        }
    }

  return {data, filtered, search,sort, setSort, setFiltered, setSearch, setData};
}

export default useRestroData;
