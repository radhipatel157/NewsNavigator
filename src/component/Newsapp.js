import React, { useEffect, useState } from 'react'
import Card from './Card';
const Newsapp = () => {
    const API_KEY="1b50a51fbb974e42a85d122f3ee2fa98";
    const [search,setSearch]=useState("Technology");
    //another usestate for storing the data
    const [newsData,setNewsData]=useState("null");

    const getData=async()=>{
        //here into the fetch write now i have passed india but by using the usestate will be having the data as per out search
        const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);

        //now converting this data into json format
        const jsonData=await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);

        //console.log(setNewsData);
        
    }

    useEffect(()=>{
    getData();
    },[])

    const handleInput=(e)=>{
        //console.log(e.target.value);
        setSearch(e.target.value);

    }

    const useinput=(event)=>{
        setSearch(event.target.value);
    }
    
  return (
    <div>
<nav>
    <div>
    <h1>Trending News</h1>
    </div>
    
    <div  className='searchbar'>
        <input type='text' placeholder='Search News' value={search} onChange={handleInput}></input>
        <button onClick={getData} >Search</button>
    </div>
</nav>
   <p className='head'>Stay Updated with the latest news</p>
<div className='categoryBtn'>
    <button onClick={useinput} value="sports">sports </button>
    <button onClick={useinput} value="Politics">Politics</button>
    <button onClick={useinput} value="Entertainment">Entertainment </button>
    <button onClick={useinput} value="Health">Health</button>
    <button onClick={useinput} value="Finance">Finance</button>
    <button onClick={useinput} value="Technology">Technology</button>
</div>
     
     <div>
        {newsData?<Card data={newsData}></Card>:null}
     </div>





    </div>
  )
}

export default Newsapp;