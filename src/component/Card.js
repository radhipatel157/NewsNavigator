import React from 'react'

const Card = ({data}) => {
    if (!Array.isArray(data)) {
        return <div className='head'></div>; // Handle non-array or undefined data
      }
    
    console.log(data);
    
    
  return (
    <div className='cardContainer'>
        
        {data.map((curritem,idx)=>{
           

            if(!curritem.urlToImage)return null;
            else{
                return(
                    <div className='card'>
                        
                     <img src={curritem.urlToImage}/>
                     <div className='Content'>
                        <a className='title' onClick={() => window.open(curritem.url)}>{curritem.title}</a>
                        {/* curritem.description */}
                        <p>{curritem.description}</p>
                        <button onClick={() => window.open(curritem.url)} >Read More</button>
                     </div>
                    </div>
                )
            }
            
        })}
    </div>

  )
}

export default Card