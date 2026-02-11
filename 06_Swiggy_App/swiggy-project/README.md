  
 ***FOOD APP FLOW***
  

   **DAY 1 = understanding the props**

    - import/export explanation
    - type module explanation
    - dynamic cards using props passing and receiving
    - header,body,restroCard,footer=layout
    - map and key

  *dummy data for day 1 =*

  **day 2**
  
  - useState explanation through filter logic
  - useEffect logic theory only
  - swiggy api intro  
  - api = api="https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"

  
 to read about - key importance
 - useState = keeps the UI in sync with the data
    - useState is a function
    - useState returns an array of 2 values
    - whenever a state variable a changes, the component re-renders
const [listOfRestro] = useState([])
const [listOfRestro,setlistOfRestro] = useState([])


**Cmds to Run a react/frontend project  **    
- To run swiggy-project on browser (have to run these cmds in different Terminals )
1. Terminal cmd: - Path for data:
  PS C:\Users\Ksona\OneDrive\Desktop\react\06_Swiggy_App\swiggy-project\src\data>  npx json-server data.json --port 3000  

 - JSON Server started on PORT :3000
    Press CTRL-C to stop  (in terminal)
    Watching data.json...

2. Terminal cmd: - Path for Menu-data:
  PS C:\Users\Ksona\OneDrive\Desktop\react\06_Swiggy_App\swiggy-project\src\data>  npx json-server menu.json --port 3500  

3. Terminal cmd: - Path to run swiggy-project
   PS C:\Users\Ksona\OneDrive\Desktop\react\06_Swiggy_App\swiggy-project> npm run dev

and if you need to run more cmd you have to open a new terminal and write cmd there

