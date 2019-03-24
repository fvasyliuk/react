import React from 'react';
import { Image } from 'semantic-ui-react'
import './Header.css';
import HeaderMenu from '../menu/HeaderMenu';

const Header = ()=>{
    
    // fetch('http://localhost:3001/api/v1/questions')
    // .then(response => response.json())
    // .then(json => console.log('json',json.question))

    
    
      
    return (
        <div id='header'>
            <div className='first-header'>            
                <div className= 'logo'>
                    <Image className= 'logo' src='' />
                </div>
                <div>                
                    va,bps,pb,sds;d,b;ls,db;,sdlsadb;ls
                </div>
                <div>
                    egbweahg4weh
                </div>
            </div>
            <HeaderMenu />
        </div>

    )
}

export default Header ;