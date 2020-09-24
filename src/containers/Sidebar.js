import React, { useState, Fragment } from 'react';
import { store } from '../store';
import { setInfo } from '../actions';

const Sidebar = (props) => {

    const { photos } = props;

        return (
            <Fragment>
                 <aside className="vertical" data-aos="fade-right">
                    <ul className="photo-list">
                    <h4 className="photo-list-header">Photo Collection</h4>
                    {photos.map(photo => (
                        <a key={photo.id} className="nav-link" href={`#${ photo.href }`} onClick={(e) => props.handleSideBarClick(e, photo.id, photo.href)}>
                          <li className={ props.active === photo.href ? 'active' : ''}>{ photo.title }</li>
                        </a>
                    ))}                        
                    </ul>                    
                    <ul className="copyright-list">
                      <li>
                        <p className="copyright">Steven Pulido | &copy; 2020</p>                        
                        </li>
                        <li>
                        <p className="copyright">Built with React & Redux</p>
                      </li>
                    </ul>
                    </aside>
            </Fragment>
        ); 
}

export default Sidebar;
