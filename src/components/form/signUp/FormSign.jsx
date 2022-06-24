import React from 'react'
import { Link } from 'react-router-dom';
import CountryDropdown from 'country-dropdown-with-flags-for-react';  
import validate from './validateInfo';
import useForm from './useForm';

export default function FormSign({submitForm}) {
    const { 
        handleChange, handleSubmit, values,
         errors } = useForm(
        submitForm,
        validate
      );
  return (
      <div className='form-right'>
            <div className='form-content-right'>
                <h3>Create your Merchant account</h3>
                <form onSubmit={handleSubmit}  className='form' >
                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='text'
                        name='first-name'
                        placeholder='First Name'
                        value={values.first_name}
                        onChange={handleChange}
                    />
                    {errors.first_name && <p>{errors.first_name}</p>}
                    </div>
                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='text'
                        name='last-name'
                        placeholder='Last Name'
                        value={values.last_name}
                        onChange={handleChange}
                    />
                    {errors.last_name && <p>{errors.last_name}</p>}

                    </div>
                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='company-name'
                        name='company-name'
                        placeholder='Company Name'
                        value={values.company_name}
                        onChange={handleChange}
                    />
                        {errors.company_name && <p>{errors.company_name}</p>}
                    </div>
                    <CountryDropdown  id="UNIQUE_ID" className='country' preferredCountries={['ng', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>   

                    <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={values.password}
                        onChange={handleChange}
                    />
                        {errors.password && <p>{errors.password}</p>}
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
