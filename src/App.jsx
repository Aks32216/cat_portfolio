import { useEffect } from "react";
import { useState } from "react"
import CatBasicInfo from "./Components/CatBasicInfo";
import Characteristics from "./Components/Characteristics";

function App() {

  const [data,setData]=useState({});
  const [catId,setCatId]=useState("");

  useEffect(()=>{
    async function getCatData(){
      const catDetailsRes=await fetch(`https://api.thecatapi.com/v1/images/${catId}`);
      const catDetailsJson=await catDetailsRes.json();
      setData(catDetailsJson);
    }  

    if(catId!==""){
      getCatData();
    }
      
  },[catId]);

  async function handleCatChange(){
      async function getCatId(){
        const catIdRes=await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1/api_key=live_RLxK0K2ptxTHPRLonhJuEiB8VSWCEJmVTpnJlHe8xlBG3BNsotSO81TmuDNJqigK')
        const catIdJson=await catIdRes.json();
        const catId=catIdJson[0].id;
        return catId;
      }

      const catId=await getCatId();
      console.log(catId);
      setCatId(catId);
  }


  return (
    <div className="w-full flex flex-col items-center justify-evenly h-screen">
      <div className="max-w-2xl h-auto rounded overflow-hidden shadow-lg">
        {
          Object.keys(data).length === 0 ? <h2>Oops!! No cat data available. Click to get cat Information</h2> :
          <>
            <CatBasicInfo name={data.breeds[0]["name"]} url={data.url} weight={data.breeds[0]["weight"]["imperial"]} lifespan={data.breeds[0]["life_span"]} origin={data.breeds[0]["origin"]} wikipedia={data.breeds[0]["wikipedia_url"]} vetstreet={data.breeds[0]["vetstreet_url"]}></CatBasicInfo>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                {data.breeds[0]["description"]}
              </p>
            </div>
            <div class="m-5 gap-8 sm:grid sm:grid-cols-2">
              <Characteristics feature={"Affection Level"} rating={data.breeds[0]["affection_level"]}/>
              <Characteristics feature={"Adaptability"} rating={data.breeds[0]["adaptability"]}/>
              <Characteristics feature={"Child Friendly"} rating={data.breeds[0]["child_friendly"]}/>
              <Characteristics feature={"Energy Level"} rating={data.breeds[0]["energy_level"]}/>
              <Characteristics feature={"Intelligence"} rating={data.breeds[0]["intelligence"]}/>
              <Characteristics feature={"Stranger Friendly"} rating={data.breeds[0]["stranger_friendly"]}/>
            </div>
          </>
        }
        </div>
        <div>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleCatChange}>
          Get {Object.keys(data).length === 0 ? " a " : " other "} Cat</button>
        </div>
    </div>
  )
}

export default App
