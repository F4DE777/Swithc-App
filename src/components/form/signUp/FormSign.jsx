import React from 'react'
import { Link } from 'react-router-dom';
import CountryDropdown from 'country-dropdown-with-flags-for-react';  


export default function FormSign() {

  return (
      <div className='form-right'>
            <div className='form-content-right'>
                <h3>Create your Merchant account</h3>
                <form    className='form' noValidate>
                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='text'
                        name='first-name'
                        placeholder='First Name'
                    />
                    </div>
                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='text'
                        name='last-name'
                        placeholder='Last Name'
                    />
                    </div>
                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Email'

                    />
                    </div>
                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='company-name'
                        name='company-name'
                        placeholder='Company Name'
  
                    />
                    </div>
                    <CountryDropdown  id="UNIQUE_ID" className='country' preferredCountries={['ng', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>   

                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    </div>
                    <span className='agree'>
                        <input type="checkbox" name="" id="" />
                        <p>I agree that Switch App may contact me at the email address or phone number above.</p>
                    </span>
                    <button className='form-input-btn' type='submit'>
                        Create Merchant Account
                    </button>
                    <span className='form-input-login'>
                            Already have an account?  <Link to='#'>Sign in</Link>
                    </span>
                </form>
            </div>
      </div>
        

  )
}
