import React from 'react'

const Footer = () => {
    return (
        <div className="main-footer" style={{backgroundColor:'#2D3139', height:'20rem', overflow:'hidden'}}>
            <div className="cantainer">
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <h4 style={{color:'white'}}>Lorem ipsum</h4>
                        <ul className='list-unstyled' style={{color:'white'}} >
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4 style={{color:'white'}}>Lorem ipsum</h4>
                        <ul className='list-unstyled' style={{color:'white'}}>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4 style={{color:'white'}}>Lorem ipsum</h4>
                        <ul className='list-unstyled' style={{color:'white'}}>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4 style={{color:'white'}}>Lorem ipsum</h4>
                        <ul className='list-unstyled' style={{color:'white'}}>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom' style={{color:'white'}}>
                    <p className='text-xs-center' >
                        &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                    </p>
                </div>

            </div>
        </div>
        
    )
}

export default Footer
