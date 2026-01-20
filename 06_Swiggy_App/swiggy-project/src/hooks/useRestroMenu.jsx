import React from 'react';
import { useState, useEffect } from 'react';

const useRestroMenu = (id) => {
    const [menu, setMenu] = useState({});

    useEffect(() => {fetchData()}, []);

    const fetchData = async () => {
        try {
            const menu = await fetch(`http://localhost:3500/${id}`);
            const menuJson = await menu.json();
            setMenu(menuJson.menu);
            // console.log("MenuJson: ", menuJson);
        } catch (error) {
            console.log(error);
        }
    }
  
    return menu;
}
export default useRestroMenu;
