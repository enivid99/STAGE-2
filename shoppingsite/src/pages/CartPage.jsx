import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import "../components/CartPage/CartPage.css"

const CartPage = () => {

    const [activeSection, setActiveSection] = useState(null);

    const sections = {
        description: "Looking to spice up your kitchen game? Say hello to our Blue Cookware Set! This all-in-one, stackable set comes with a resistant lid and ergonomic handles that make cooking a breeze. And guess what? It's non-stick, so you can kiss those stubborn food residues goodbye. Perfect for whipping up your favorite dishes, this set combines style and functionality in one size that fits all your cooking needs. Upgrade your kitchen today with the Blue Cookware Set!",
        reviews: [
            "1. This cookware set is a game-changer! Love the non-stick feature. Highly recommend! - Alex R.",
            "2. Stylish and functional. The stackable design is a lifesaver for my small kitchen! - Jamie L.",
            "3. Cooking has never been easier. The handles are comfy, and cleanup is a snap. - Casey M.",
            "4. Absolutely love the blue color! It's a great addition to my kitchen. - Taylor S.",
            "5. Fantastic set! Durable, easy to use, and looks great. Couldn't be happier. - Morgan P."
        ].join('\n\n'),
        additionalInfo: "Material: High-quality aluminum for even heat distribution\n\nColor: Elegant blue that adds a pop of color to your kitchen\n\nCompatibility: Suitable for all stovetops, including induction\n\nDishwasher Safe: Yes, for easy cleaning\n\nSet Includes: 1 saucepan, 1 frying pan, 1 stockpot, and 1 lid\n\nWarranty: 2-year warranty for peace of mind"
    };

    const handleClick = (section) => {
        setActiveSection(prevSection => prevSection === section ? null : section);
    };

  return (
    <div>
        <div>
            <Navbar />
            <div className='cart2_container'>
                <div className='newarrivals_header'>
                    <h3>Your cart summary</h3>
                </div>
                <div className='cart_summary_container'>
                    <div className='cart_img p6'></div>
                    <div className='cart_desc'>
                        <div className='desc_top'>
                            <h1>Blue Cookware Set <p>(Your Kitchen's New Best Friend!)</p></h1>
                            <p>Meet your new kitchen essential! This stackable Blue 
                                Cookware Set features a resistant lid, ergonomic 
                                handles, and a non-stick surface for easy cooking 
                                and cleaning. Perfect for all your culinary 
                                adventures!</p>
                        </div>
                        <div className='desc_bottom'>
                            <h1>Price: $67.84</h1>
                            <p>Category: Pots and pans</p>
                            <p>Available: 16 in stock</p>
                            <div className='cart_buttons'>
                                <div className='cart_add_button'>
                                    <div className='subtract_button'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15.8334 10.8334H4.16671C3.94569 10.8334 3.73373 10.7456 3.57745 10.5893C3.42117 10.4331 3.33337 10.2211 3.33337 10.0001C3.33337 9.77907 3.42117 9.56711 3.57745 9.41083C3.73373 9.25455 3.94569 9.16675 4.16671 9.16675H15.8334C16.0544 9.16675 16.2663 9.25455 16.4226 9.41083C16.5789 9.56711 16.6667 9.77907 16.6667 10.0001C16.6667 10.2211 16.5789 10.4331 16.4226 10.5893C16.2663 10.7456 16.0544 10.8334 15.8334 10.8334Z" fill="#262626"/>
                                        </svg>
                                    </div>
                                    <div className='numbering'>1</div>
                                    <div className='add_button'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15.8334 9.16659H10.8334V4.16659C10.8334 3.94557 10.7456 3.73361 10.5893 3.57733C10.433 3.42105 10.2211 3.33325 10 3.33325C9.77903 3.33325 9.56707 3.42105 9.41079 3.57733C9.2545 3.73361 9.16671 3.94557 9.16671 4.16659V9.16659H4.16671C3.94569 9.16659 3.73373 9.25438 3.57745 9.41066C3.42117 9.56694 3.33337 9.7789 3.33337 9.99992C3.33337 10.2209 3.42117 10.4329 3.57745 10.5892C3.73373 10.7455 3.94569 10.8333 4.16671 10.8333H9.16671V15.8333C9.16671 16.0543 9.2545 16.2662 9.41079 16.4225C9.56707 16.5788 9.77903 16.6666 10 16.6666C10.2211 16.6666 10.433 16.5788 10.5893 16.4225C10.7456 16.2662 10.8334 16.0543 10.8334 15.8333V10.8333H15.8334C16.0544 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.4329 16.6667 10.2209 16.6667 9.99992C16.6667 9.7789 16.5789 9.56694 16.4226 9.41066C16.2663 9.25438 16.0544 9.16659 15.8334 9.16659Z" fill="#262626"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='other_buttons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M24.5 7.00006H18.6667V5.05173C18.6393 4.30485 18.3169 3.5993 17.7702 3.08974C17.2235 2.58018 16.497 2.30819 15.75 2.3334H12.25C11.5031 2.30819 10.7766 2.58018 10.2299 3.08974C9.68314 3.5993 9.36074 4.30485 9.33337 5.05173V7.00006H3.50004C3.19062 7.00006 2.89388 7.12298 2.67508 7.34177C2.45629 7.56056 2.33337 7.85731 2.33337 8.16673C2.33337 8.47615 2.45629 8.77289 2.67508 8.99169C2.89388 9.21048 3.19062 9.3334 3.50004 9.3334H4.66671V22.1667C4.66671 23.095 5.03546 23.9852 5.69183 24.6416C6.34821 25.298 7.23845 25.6667 8.16671 25.6667H19.8334C20.7616 25.6667 21.6519 25.298 22.3082 24.6416C22.9646 23.9852 23.3334 23.095 23.3334 22.1667V9.3334H24.5C24.8095 9.3334 25.1062 9.21048 25.325 8.99169C25.5438 8.77289 25.6667 8.47615 25.6667 8.16673C25.6667 7.85731 25.5438 7.56056 25.325 7.34177C25.1062 7.12298 24.8095 7.00006 24.5 7.00006ZM11.6667 5.05173C11.6667 4.86506 11.9117 4.66673 12.25 4.66673H15.75C16.0884 4.66673 16.3334 4.86506 16.3334 5.05173V7.00006H11.6667V5.05173ZM21 22.1667C21 22.4761 20.8771 22.7729 20.6583 22.9917C20.4395 23.2105 20.1428 23.3334 19.8334 23.3334H8.16671C7.85729 23.3334 7.56054 23.2105 7.34175 22.9917C7.12296 22.7729 7.00004 22.4761 7.00004 22.1667V9.3334H21V22.1667Z" fill="#3D3D3D"/>
                                        <path d="M10.5 19.8333C10.8095 19.8333 11.1062 19.7103 11.325 19.4915C11.5438 19.2728 11.6667 18.976 11.6667 18.6666V13.9999C11.6667 13.6905 11.5438 13.3938 11.325 13.175C11.1062 12.9562 10.8095 12.8333 10.5 12.8333C10.1906 12.8333 9.89388 12.9562 9.67508 13.175C9.45629 13.3938 9.33337 13.6905 9.33337 13.9999V18.6666C9.33337 18.976 9.45629 19.2728 9.67508 19.4915C9.89388 19.7103 10.1906 19.8333 10.5 19.8333Z" fill="#3D3D3D"/>
                                        <path d="M17.5 19.8333C17.8095 19.8333 18.1062 19.7103 18.325 19.4915C18.5438 19.2728 18.6667 18.976 18.6667 18.6666V13.9999C18.6667 13.6905 18.5438 13.3938 18.325 13.175C18.1062 12.9562 17.8095 12.8333 17.5 12.8333C17.1906 12.8333 16.8939 12.9562 16.6751 13.175C16.4563 13.3938 16.3334 13.6905 16.3334 13.9999V18.6666C16.3334 18.976 16.4563 19.2728 16.6751 19.4915C16.8939 19.7103 17.1906 19.8333 17.5 19.8333Z" fill="#3D3D3D"/>
                                    </svg>
                                    <button>Add to cart</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='other_desc_wrapper'>
                    <div className='other_desc'>
                        <div className={`desc_header ${activeSection === 'description' ? 'active' : ''}`} onClick={() => handleClick('description')}>
                            <h1>Description</h1>
                        </div>
                        <div className={`desc_header ${activeSection === 'reviews' ? 'active' : ''}`} onClick={() => handleClick('reviews')}>
                            <h1>Customer’s Review</h1>
                        </div>
                        <div className={`desc_header ${activeSection === 'additionalInfo' ? 'active' : ''}`} onClick={() => handleClick('additionalInfo')}>
                            <h1>Additional Information</h1>
                        </div>
                    </div>
                    <div className='section_text_wrapper'>
                        <p>{activeSection && sections[activeSection]}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default CartPage