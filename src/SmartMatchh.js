import React from 'react';
import { useState } from 'react';
const Items = ['Shoes', 'Bags', 'Laptop', 'Computer', 'Function', 'React js'];

const SmartMatchh = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className='container p-5'>
        <div className='row d-block'>
          <div className='col'>
            <div className='d-flex items-center justify-content-between'>
              <div className=''>
                <h1>Our Products</h1>
              </div>
              <div>
                <input
                  placeholder='Search Item'
                  className='form-control'
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className='col-sm mx-auto w-50 pt-5'>
            <div style={{ display: 'block' }}>
              {Items.filter((item) => {
                if (item.toLowerCase().includes(search.toLowerCase())) {
                  return item;
                }
              }).map((item, index) => {
                return (
                  <>
                    <div className='shadow rounded p-3' key={index}>
                      {item}
                    </div>
                    <br />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartMatchh;
