import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Headers.css';





const Header = ( props ) => {


    

    return (
            <div className="Headers">
            <Button>
                <NavLink 
                    to='/add-todo' exact 
                    style={{
                        color: 'white',
                        textDecoration: 'inherit'
                    }}
                    activeStyle={{  color: '#FFD801',
                                    textDecoration: 'inherit',
                                }}>Home</NavLink>
            </Button>
            
            <Button>
                <NavLink 
                    to='/done-lists'
                    style={{
                        color: 'white',
                        textDecoration: 'inherit'
                    }}
                    activeStyle={{  color: '#FFD801',
                                    textDecoration: 'inherit'
                                }}
                     >Done Lists</NavLink>
            </Button>
            
            <Button>
                <NavLink 
                    to='/history'
                    style={{
                        color: 'white',
                        textDecoration: 'inherit'
                    }}
                    activeStyle={{  color: '#FFD801',
                                    textDecoration: 'inherit'
                                }}>History </NavLink> 
            </Button>
            </div>
    )
};

export default Header;