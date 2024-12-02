import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './checkout.css';



const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+$/, 'Only alphabets are allowed')
                .required('First name is required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+$/, 'Only alphabets are allowed')
                .required('Last name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .matches(/\.[a-zA-Z]{2,}$/, 'Invalid email address')
                .required('Email is required'),
            phone: Yup.string()
                .matches(/^\d{10}$/, 'Phone number must be 10 digits')
                .required('Phone number is required'),
            address: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Address is required'),
        }),
        onSubmit: (values) => {
            dispatch(clearCart());
            navigate('/success');
        },
    });

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>
            <div className="group">
                <form onSubmit={formik.handleSubmit} className="checkout-form">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input className="input"
                               id="firstName"
                               type="text"
                               {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="error-message">{formik.errors.firstName}</div>
                        ) : null}

                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input className="input"
                               id="lastName"
                               type="text"
                               {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="error-message">{formik.errors.lastName}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="input"
                               id="email"
                               type="email"
                               {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error-message">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input className="input"
                               id="phone"
                               type="text"
                               {...formik.getFieldProps('phone')}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="error-message">{formik.errors.phone}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input className="input"
                               id="address"
                               type="text"
                               {...formik.getFieldProps('address')}
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <div className="error-message">{formik.errors.address}</div>
                        ) : null}
                    </div>

                    <button type="submit" className="checkout-button">
                        Submit
                    </button>
                </form>
            </div>


        </div>
    )
        ;
};

export default Checkout;
