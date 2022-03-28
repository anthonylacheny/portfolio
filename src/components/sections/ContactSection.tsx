import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactSection.css';

interface PropsType {
    storeMessage: (data: { email: string; name: string; msg: string }) => Promise<void>;
    translate: (key: string, config?: any) => string;
}

const ContactSection: React.FC<PropsType> = ({ translate, storeMessage }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setSuccess(false);
        setError('');
        setLoading(true);

        if (email.length < 5) {
            setError('merci de renseigner votre email');
            setLoading(false);
            return;
        }

        if (name.length < 3) {
            setError('merci de renseigner votre nom');
            setLoading(false);
            return;
        }

        try {
            storeMessage({ email, name, msg: message });
            setSuccess(true);
        } catch (err) {
            console.error(err);
            setError('une erreur est survenue');
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setEmail('');
        setName('');
        setMessage('');
        setError('');
        setSuccess(false);
    };

    return (
        <section className="ContactSection" id="Contact">
            <h2 className="ContactSection-title">
                <FontAwesomeIcon icon="envelope" className="ContactSection-icon" />
                Me contacter
            </h2>
            <div className="ContactSection-wrapper">
                <div className="ContactSection-head">
                    <FontAwesomeIcon icon="user" className="ContactSection-head-icon" />
                </div>

                {loading ? (
                    <div>Loading</div>
                ) : success ? (
                    <div>
                        Success
                        <button onClick={reset}>Recharger le formulaire</button>
                    </div>
                ) : (
                    <ContactForm
                        name={name}
                        email={email}
                        message={message}
                        error={error}
                        onNameChange={setName}
                        onEmailChange={setEmail}
                        onMessageChange={setMessage}
                        onSubmit={handleSubmit}
                        translate={translate}
                    />
                )}
            </div>
        </section>
    );
};

interface ContactFormProps {
    name: string;
    email: string;
    message: string;
    error: string;
    onNameChange: (name: string) => void;
    onEmailChange: (email: string) => void;
    onMessageChange: (message: string) => void;
    onSubmit: () => void;
    translate: (key: string, config?: any) => string;
}

const ContactForm: React.FC<ContactFormProps> = ({
    name,
    email,
    message,
    error,
    onNameChange,
    onEmailChange,
    onMessageChange,
    onSubmit,
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="ContactForm">
            <div className="ContactForm-desc">
                Indiquer vos coordonnées et votre message, je vous contacterai prochainement
            </div>

            {error.length > 0 && (
                <div className="ContactForm-error">
                    <FontAwesomeIcon icon="exclamation-circle" className="ContactForm-error-icon" />
                    <span>{error}</span>
                </div>
            )}

            <div className="ContactForm-group">
                <label className="ContactForm-label">Name</label>
                <input
                    className="ContactForm-text"
                    type="text"
                    onChange={(e) => onNameChange(e.target.value)}
                    value={name}
                />
            </div>

            <div className="ContactForm-group">
                <label className="ContactForm-label">Email</label>
                <input
                    type="email"
                    className="ContactForm-text"
                    onChange={(e) => onEmailChange(e.target.value)}
                    value={email}
                />
            </div>

            <div className="ContactForm-group">
                <label className="ContactForm-label">Message</label>
                <textarea
                    className="ContactForm-textarea"
                    value={message}
                    onChange={(e) => onMessageChange(e.target.value)}
                />
            </div>

            <button type="submit" className="ContactForm-submit">
                Envoyer
            </button>
        </form>
    );
};

export default ContactSection;
