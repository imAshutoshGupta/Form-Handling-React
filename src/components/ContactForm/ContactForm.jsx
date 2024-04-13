import React from 'react'
import styles from './ContactForm.module.css'
import { MdMessage } from 'react-icons/md'
import Button from '../Button/Button'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState("Ashutosh");
    const [email, setEmail] = useState("aguptaworkspace@gmail.com");
    const [text, setText] = useState("I would like to enquire about your github account");

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<FaPhone fontSize="24px" />} />
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdOutlineEmail fontSize="24px" />} />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_container}>
                        <label htmlFor='name'>Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={styles.form_container}>
                        <label htmlFor='email'>Email</label>
                        <input type="text" name='email' />
                    </div>
                    <div className={styles.form_container}>
                        <label htmlFor='text'>Text</label>
                        <textarea name='text' rows='8' />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>

                    <div>{name + " " + email + " " + text}</div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src='/images/heroimage.svg' alt='hero-image' />
            </div>
        </section>
    )
}

export default ContactForm