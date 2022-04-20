import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactSection.css';
import { translate } from '../adapters/intl';

const TEXT_AREA_LIMIT = 500;

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
    const [counter, setCounter] = useState(0);

    const handleSubmit = async () => {
        setSuccess(false);
        setError('');
        setLoading(true);

        if (email.length < 5) {
            setError(translate('contact.errors.email'));
            setLoading(false);
            return;
        }

        if (email.trim().length > 150) {
            setError(translate('contact.errors.email'));
            setLoading(false);
            return;
        }

        if (name.trim().length < 3) {
            setError(translate('contact.errors.name'));
            setLoading(false);
            return;
        }

        if (name.trim().length > 150) {
            setError(translate('contact.errors.name'));
            setLoading(false);
            return;
        }

        if (message.trim().length < 10) {
            setError(translate('contact.errors.message'));
            setLoading(false);
            return;
        }

        try {
            await storeMessage({ email: email.trim(), name: name.trim(), msg: message.trim() });
            setSuccess(true);
        } catch (err) {
            setError(translate('contact.errors.other'));
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setCounter(0);
        setEmail('');
        setName('');
        setMessage('');
        setError('');
        setSuccess(false);
    };

    const onMessageChange = (message: string) => {
        setCounter(message.length);
        setMessage(message);
    };

    return (
        <section className="ContactSection" id="Contact">
            <h2 className="ContactSection-title">
                <FontAwesomeIcon icon="envelope" className="ContactSection-icon" />
                {translate('navigation.contact')}
            </h2>
            <div className="ContactSection-wrapper">
                <div className="ContactSection-head">
                    <FontAwesomeIcon icon="user" className="ContactSection-head-icon" />
                </div>

                {loading ? (
                    <div className="ContactSection-loading">
                        <span>{translate('contact.sending')}</span>
                    </div>
                ) : success ? (
                    <div className="ContactSection-confirm">
                        <span>{translate('contact.confirm')}</span>
                        <FontAwesomeIcon icon="check" className="ContactSection-confirm-icon" />
                        <button onClick={reset}>{translate('contact.reload')}</button>
                    </div>
                ) : (
                    <ContactForm
                        counter={counter}
                        name={name}
                        email={email}
                        message={message}
                        error={error}
                        onNameChange={setName}
                        onEmailChange={setEmail}
                        onMessageChange={onMessageChange}
                        onSubmit={handleSubmit}
                        translate={translate}
                    />
                )}
            </div>
        </section>
    );
};

interface ContactFormProps {
    counter: number;
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
    counter,
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
            <div className="ContactForm-desc">{translate('contact.desc')}</div>

            {error.length > 0 && (
                <div className="ContactForm-error">
                    <FontAwesomeIcon icon="exclamation-circle" className="ContactForm-error-icon" />
                    <span>{error}</span>
                </div>
            )}

            <div className="ContactForm-group">
                <label className="ContactForm-label">{translate('contact.name')}</label>
                <input
                    className="ContactForm-text"
                    type="text"
                    onChange={(e) => onNameChange(e.target.value)}
                    value={name}
                />
            </div>

            <div className="ContactForm-group">
                <label className="ContactForm-label">{translate('contact.email')}</label>
                <input
                    type="email"
                    className="ContactForm-text"
                    onChange={(e) => onEmailChange(e.target.value)}
                    value={email}
                />
            </div>

            <div className="ContactForm-group">
                <label className="ContactForm-label">{translate('contact.message')}</label>
                <textarea
                    maxLength={TEXT_AREA_LIMIT}
                    className="ContactForm-textarea"
                    value={message}
                    onChange={(e) => onMessageChange(e.target.value)}
                />
                <label className="ContactForm-textarea-counter">
                    {counter}/{TEXT_AREA_LIMIT}
                </label>
            </div>

            <button type="submit" className="ContactForm-submit">
                {translate('contact.send')}
            </button>
        </form>
    );
};

export default ContactSection;
