import React from 'react';

import { SubHeading } from '../../components/index'
import images from '../../constants/images'

import './Header.css';

const Header = () => (
  <header className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor'/>
      <h1 className='app__header-h1'>The key tp Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt=''/>
    </div>
  </header>
);

export default Header;
