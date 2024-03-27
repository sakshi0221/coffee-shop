import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone (optional)</label>
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="mb-3"> <label htmlFor="phone" className="form-label">Map location (optional)</label>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"

                            width="100%" height="200" style={{ borderRadius: "4px" }} allowfullscreen="" loading="lazy"></iframe>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
