import React from 'react'
import { useState } from 'react';

import './PotsandPans.css';

const PotsandPans = () => {

const [isActive, setIsActive] = useState(false);   

const toggleFavourite = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
        
};

const iconClass = `favouriteIcon ${isActive ? 'active fa-solid' : 'fa-regular'} fa-heart`;


  return (
    <div>
        <div className='main_container'>
            <div className='potsandpans_header'>
                <h3>Pots and pans</h3>
            </div>
            <div className='products'>
                <div className='product_first_layer'>
                    <div className='product_cards'>
                        <div className='icon_container'>
                            <div className='add_favourite' onClick={toggleFavourite}>
                                <i className={iconClass}></i>
                            </div>
                        </div>
                        <div className='product_img_hover'>
                            <div className='product_img' alt="Hover"></div>
                        </div>
                        <div className='product_tags'>
                            <div className='product_rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                            </div>
                            <button>View in cart</button>
                        </div>
                        <div className='product_desc'>
                            <h3>stainless steel round Sauce pan </h3>
                            <p>$25.00</p>
                        </div>
                    </div>
                    
                    <div className='product_cards'>
                    <div className='icon_container'>
                            <div className='add_favourite' onClick={toggleFavourite}>
                                <i className={iconClass}></i>
                            </div>
                        </div>
                        <div className='product_img_hover'>
                            <div className='product_img p5' alt="Hover"></div>
                        </div>
                        <div className='product_tags'>
                            <div className='product_rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                            </div>
                            <button>View in cart</button>
                        </div>
                        <div className='product_desc'>
                            <h3>3-Quart Covered Steamer Set</h3>
                            <p>$32.00</p>
                        </div>
                    </div>

                    <div className='product_cards'>
                    <div className='icon_container'>
                            <div className='add_favourite' onClick={toggleFavourite}>
                                <i className={iconClass}></i>
                            </div>
                        </div>
                        <div className='product_img_hover'>
                            <div className='product_img p6' alt="Hover"></div>
                        </div>
                        <div className='product_tags'>
                            <div className='product_rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                            </div>
                            <button>View in cart</button>
                        </div>
                        <div className='product_desc'>
                            <h3>Blue Cookware Set</h3>
                            <p>$67.84</p>
                        </div>
                    </div>

                    <div className='product_cards'>
                    <div className='icon_container'>
                            <div className='add_favourite' onClick={toggleFavourite}>
                                <i className={iconClass}></i>
                            </div>
                        </div>
                        <div className='product_img_hover'>
                            <div className='product_img p7' alt="Hover"></div>
                        </div>
                        <div className='product_tags'>
                            <div className='product_rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                            </div>
                            <button>View in cart</button>
                        </div>
                        <div className='product_desc'>
                            <h3>Tramontina Nesting 6-pc</h3>
                            <p>$35.00</p>
                        </div>
                    </div>
                </div> 

                <div className='product_first_layer'>
                    <div className='product_cards'>
                    <div className='icon_container'>
                            <div className='add_favourite' onClick={toggleFavourite}>
                                <i className={iconClass}></i>
                            </div>
                        </div>
                        <div className='product_img_hover'>
                            <div className='product_img p8' alt="Hover"></div>
                        </div>
                        <div className='product_tags'>
                            <div className='product_rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                            </div>
                            <button>View in cart</button>
                        </div>
                        <div className='product_desc'>
                            <h3>Hammered Black 15 Piece Nonstick Cookware Set</h3>
                            <p>$87.00</p>
                        </div>
                    </div>
                    
                    <div className='product_cards'>
                    <div className='icon_container'>
                            <div className='add_favourite' onClick={toggleFavourite}>
                                <i className={iconClass}></i>
                            </div>
                        </div>
                        <div className='product_img_hover'>
                            <div className='product_img p9' alt="Hover"></div>
                        </div>
                        <div className='product_tags'>
                            <div className='product_rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                            </div>
                            <button>View in cart</button>
                        </div>
                        <div className='product_desc'>
                            <h3>Lid Non Stick in Brown _ Wayfair</h3>
                            <p>$44.00</p>
                        </div>
                    </div>

                    <div className='product_cards'>
                    <div className='icon_container'>
                            <div className='add_favourite' onClick={toggleFavourite}>
                                <i className={iconClass}></i>
                            </div>
                        </div>
                        <div className='product_img_hover'>
                            <div className='product_img p10' alt="Hover"></div>
                        </div>
                        <div className='product_tags'>
                            <div className='product_rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                            </div>
                            <button>View in cart</button>
                        </div>
                        <div className='product_desc'>
                            <h3>Tower Cerastone 28cm Forged Saute Pan With Glass</h3>
                            <p>$55.00</p>
                        </div>
                    </div>

                    <div className='product_cards'>
                    <div className='icon_container'>
                            <div className='add_favourite' onClick={toggleFavourite}>
                                <i className={iconClass}></i>
                            </div>
                        </div>
                        <div className='product_img_hover'>
                            <div className='product_img p11' alt="Hover"></div>
                        </div>
                        <div className='product_tags'>
                            <div className='product_rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.89998 11.8833L7.99998 10.6167L10.1 11.9L9.54998 9.5L11.4 7.9L8.96665 7.68333L7.99998 5.41667L7.03331 7.66667L4.59998 7.88333L6.44998 9.5L5.89998 11.8833ZM3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#F49D0C"/>
                                </svg>
                            </div>
                            <button>View in cart</button>
                        </div>
                        <div className='product_desc'>
                            <h3>OXO Pan with Lid Agility Ceramic Coated Aluminum</h3>
                            <p>$22.00</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default PotsandPans