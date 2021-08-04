import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../component/Title'

//get all unique values
const getUnique = (items,value)=>{
    return [...new Set(items.map(item =>item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const { handelChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfst,pet }= context;
    
    
    //get uniqu types
    let types = getUnique(rooms,'type');
    //add all
    types = ['all',...types];
    //map
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    //pepole
    let pepole = getUnique(rooms, 'capacity');
    pepole = pepole.map((item,index)=>{
        return <option key={index} value={item} >{item}</option>
    })


    return (
        <section className="filter-container">
            <Title title="search room" />
            <form className="filter-form">
                 {/* {selct type} */}
                 <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handelChange} >
                        {types}
                    </select>
                 </div>
                 {/* {end selct type} */}

                  {/* {guest} */}
                  <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handelChange} >
                        {pepole}
                    </select>
                 </div>
                 {/* {end guest} */}

                 {/* {room price} */}

                 <div className="form-group">
                    <label htmlFor="capacity">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} value={price} className="form-control" onChange={handelChange} />
                 </div>
                 {/* {end room price} */}


            </form>
        </section>
        
    )
}
