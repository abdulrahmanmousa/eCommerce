import "./Products.scss";
import List from "../components/List";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const cat = useParams().cat;

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type='checkbox' name='' id='1' />
            <label htmlFor='1'>Jewelery</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' name='' id='2' />
            <label htmlFor='2'>Electronics</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' name='' id='3' />
            <label htmlFor='3'>Men{`'`}s Clothing</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <span>0</span>
          <input
            type='range'
            min={0}
            max={1000}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input
              type='radio'
              name='price'
              id='asc'
              onChange={() => {
                setSort("asc");
              }}
            />
            <label htmlFor='asc'>Price(lowest first)</label>
          </div>
          <div className='inputItem'>
            <input
              type='radio'
              name='price'
              id='dsc'
              onChange={() => {
                setSort("dsc");
              }}
            />
            <label htmlFor='dsc'>Price(highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <h1 className='catName' style={{ textAlign: "center" }}>
          {cat.toUpperCase()}
        </h1>
        <List cat={cat} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}
