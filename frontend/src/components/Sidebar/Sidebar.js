import React, { useState } from 'react';
import "./Sidebar.css";
import Dropdown from "../Dropdown/Dropdown";
import data from "../Dropdown/data/animals.json";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const [value, setValue] = useState(null);
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <br/><br/><br/><br/>
          <h1>Keplar-452b</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <h1>Filters</h1>
        <h3>Product</h3>
        <div class="search-wrap">
                        <Dropdown 
                            options={data} 
                            id='id'
                            label='name'
                            prompt='Enter Product' 
                            value={value}
                            onChange={val => setValue(val)}
                        />
                    </div>
                    <br/>
                    <h3>Retailer ID</h3>
                    <div class="search-wrap">
                        <Dropdown 
                            options={data} 
                            id='id'
                            label='name'
                            prompt='Enter Retailer ID' 
                            value={value}
                            onChange={val => setValue(val)}
                        />
                    </div>
        <form>
         
          <label for="start" className="form-label text-light m-4">
            Start Date:
          </label>
          <input type="date" id="start" name="start"></input>
          <label for="end" className="form-label text-light m-4">
            End Date:
          </label>
          <input type="date" id="end" name="end"></input>
          <button type="submit" className="btn btn-primary m-4">
            Show Results
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
