import { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Data has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        try {
            const response = await axios.post('/contact', formData);
            console.log('Form submitted:', response.data);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="max-w-lg text-white mx-auto bg-gray-700 my-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <Helmet>
                <title>YouFlix || Form</title>
            </Helmet>
            <form className='text-white' onSubmit={handleSubmit}>
                <div className="mb-4">
                    <div>
                        <h1 className='text-2xl text-white'>Contract Form</h1>
                    </div>

                    <div className="divider"></div>
                    <div>
                        <p>Please Provide Correct Information About you</p>
                    </div>
                    <div className="divider"></div>
                    <label className="block text-sm font-bold mb-2" htmlFor="name">
                        Your Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">
                        Your Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block  text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="6"
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
