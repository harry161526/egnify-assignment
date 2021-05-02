import React, { Component } from 'react';
import './FilterForm.css'

class FilterForm extends Component {

    render()
    {
        return(
            <div className="filterform">
                <form>
                    <input className="input-element" type="text" name="keyword" placeholder="keyword"/>
                    {/* <input  type="range" /> */}
                    <select>
                       <option>All Cities</option>
                       <option>Individual</option>
                       <option>Room</option>
                       <option>Apartment</option>
                    </select>
                    <select>
                        <option>All Categories</option>
                        <option>Individual</option>
                       <option>Room</option>
                       <option>Apartment</option>
                    </select>
                    <select>
                        <option>All Offers</option>
                       <option>Individual</option>
                       <option>Room</option>
                       <option>Apartment</option>
                    </select>
                    <select>
                        <option>All Listings</option>
                       <option>Individual</option>
                       <option>Room</option>
                       <option>Apartment</option>
                    </select>
                    <select>
                        <option>BedRooms</option>
                       <option>Individual</option>
                       <option>Room</option>
                       <option>Apartment</option>
                    </select>
                    <select>
                        <option>BathRooms</option>
                       <option>Individual</option>
                       <option>Room</option>
                       <option>Apartment</option>
                    </select>
                    <input  type="range" />
                    <input className="input-element" type="range" />
                    <div className="search-wrapper">
                        <p>+ More Filters</p>
                        <input type="submit" value="Search"/>

                    </div>
                </form>
            </div>
        )
       
    }
}

export default FilterForm;