import React from 'react';
import './Navbar.css';
import Banner from '../ProductListingPage/Banner';

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <div className='search_container'>
                    <input type="text" placeholder='Search for items here'/>
                    <button>
                        Search
                    </button>
                </div>
                <div className='cart_container'>
                    <div className='cart_icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M2.33337 2.33333H3.85723C4.14425 2.33333 4.28776 2.33333 4.40325 2.38611C4.50503 2.43262 4.59128 2.50742 4.65172 2.6016C4.7203 2.70846 4.74059 2.85053 4.78118 3.13467L5.33337 6.99999M5.33337 6.99999L6.56058 16.02C6.71631 17.1646 6.79418 17.7369 7.06782 18.1677C7.30895 18.5473 7.65464 18.8492 8.06329 19.0369C8.52705 19.25 9.10464 19.25 10.2598 19.25H20.244C21.3437 19.25 21.8935 19.25 22.3428 19.0521C22.739 18.8777 23.0789 18.5965 23.3244 18.2399C23.6028 17.8355 23.7057 17.2954 23.9114 16.2152L25.4557 8.10797C25.5281 7.72777 25.5643 7.53767 25.5118 7.38908C25.4658 7.25873 25.3749 7.14896 25.2555 7.07935C25.1194 6.99999 24.9258 6.99999 24.5388 6.99999H5.33337ZM11.6667 24.5C11.6667 25.1443 11.1444 25.6667 10.5 25.6667C9.85571 25.6667 9.33337 25.1443 9.33337 24.5C9.33337 23.8557 9.85571 23.3333 10.5 23.3333C11.1444 23.3333 11.6667 23.8557 11.6667 24.5ZM21 24.5C21 25.1443 20.4777 25.6667 19.8334 25.6667C19.189 25.6667 18.6667 25.1443 18.6667 24.5C18.6667 23.8557 19.189 23.3333 19.8334 23.3333C20.4777 23.3333 21 23.8557 21 24.5Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='badges'>2</div>
                    </div>
                    <div className='cart_desc'>
                        <p>My Cart<br />$160.68</p>
                    </div>
                </div>
            </div>

            <Banner />
        </>
        
    );
};

export default Navbar;
