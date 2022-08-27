import React from 'react'
import './Products.css'
import chair from '../Images/chair.jpg'
import sofa from '../Images/sofa.jpg'
import fridge from '../Images/fridge.jpg'
import Product from './Product'

const Products = () => {

  return (
    <div>
        <div className='product__uplaod'>
           <form>
            <input type='text' placeholder='Enter a product name...'  />
            <div className='upload_file'>
              <input type='file' />
              <p>Upload</p>
            </div>
            <input type='text' placeholder='Price/$'/>
            <button type='submit'>Publish</button>
           </form>
        </div>
        <hr />
        <div className='product__dashboard'>
            <div className='product__filtering'>
            <div className='price__filtering'>
                <p>Price</p>
            </div>
            <select>
              <option value="volvo">Home</option>
              <option value="saab">Gym & fitness</option>
              <option value="mercedes">Kitchen</option>
              <option value="audi">Vehicles</option>
            </select>
          </div>
        <div className='products'>
           <Product image={sofa} product__title='Sofa set in kitchener' price='100' />
           <Product image={chair} product__title='Two set of chair' price='100' />
           <Product image={sofa} product__title='One sofa set' price='100' />
           <Product image={fridge} product__title='2 year old fridge' price='120' />
           <Product image={chair} product__title='Three chair set' price='40' />
           <Product image={sofa} product__title='Two set of chair and one sofa' price='100' />
           <Product image={sofa} product__title='One sofa set' price='100' />
           <Product image={chair} product__title='Sofa set in kitchener' price='100' />
           <Product image={chair} product__title='Sofa set in kitchener' price='100' />
           <Product image={chair} product__title='Two set of chair' price='100' />
           <Product image={sofa} product__title='One sofa set' price='100' />
           <Product image={fridge} product__title='2 year old fridge' price='120' />
           <Product image={sofa} product__title='Sofa set in kitchener' price='100' />

        </div>
        </div>
    </div>
  )
}

export default Products