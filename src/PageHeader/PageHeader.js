import React, { Component } from 'react';
import './PageHeader.css';

class PageHeader extends Component {
    render()
    {
        return(
        
            <div className="header">
                <div className="number-cards">
                    <div>01</div>
                    <div>02</div>
                    <div className="make-black">03</div>
                </div>
                <div className="header-name-container">
                    <div className="header_name">
                        SEARCH FOR YOUR HOME
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PageHeader;