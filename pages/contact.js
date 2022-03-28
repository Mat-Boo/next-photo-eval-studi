import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/contact.module.scss';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import emailjs from '@emailjs/browser';
import ModalConfirmContact from '../components/ModalConfirmContact/ModalConfirmContact';
import fs from 'fs';
import matter from 'gray-matter';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact(props) {

    const [selectedPrestation, setSelectedPrestation] = useState('')
    const reduxPresta = useSelector((state) => state.presta)

    const [verifiedCaptcha, setVerifiedCaptcha] = useState(false)
    const recaptchaRef = useRef()

    const policyRef = useRef();
    const formRef = useRef();
    const firstnameRef = useRef();
    const modalRef = useRef();

    useEffect(() => {
        setSelectedPrestation(reduxPresta)
    }, [reduxPresta])


    const displayPolicy = () => {
        policyRef.current.childNodes[0].style.display = 'block';
        document.body.style.overflow= 'hidden';
    }

    const hidePolicy = (e) => {
        if(e.target.id === 'contact') {
            policyRef.current.childNodes[0].style.display = 'none';
            document.body.style.overflow= 'auto';
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_EMAIL_TEMPLATE, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          formRef.current.reset();
          modalRef.current.childNodes[0].style.display = 'block';
          formRef.current.style.pointerEvents= 'none';
          formRef.current.style.opacity = '0.3';
        recaptchaRef.current.reset();
        onReCAPTCHAChange();
        setSelectedPrestation('');
    };

    const onReCAPTCHAChange = (captchaCode) => {
        setVerifiedCaptcha(!verifiedCaptcha)
    }

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>CONTACT | Charles Cantin - Photographe</title>
                <meta name="description" content="Photographe professionnel, besoin de plus d'information, utilisez mon formulaire de contact et je répondrais le plus rapidement possible." />
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph meta for Facebook */}
                <meta property="og:title" content="CONTACT | Charles Cantin - Photographe" />
                <meta property="og:url" content="https://c-cantin-photo.netlify.app/" />
                <meta property="og:image" content="https://c-cantin-photo.netlify.app/resources/homeOg.png" />
                <meta property="og:description" content="Photographe professionnel, besoin de plus d'information, utilisez mon formulaire de contact et je répondrais le plus rapidement possible." />
                <meta property="og:site_name" content="Charles Cantin - Photographe" />
                <meta property="og:type" content="website" />
                {/* Card meta for Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ccantin_photo" />
                <meta name="twitter:title" content="CONTACT | Charles Cantin - Photographe" />
                <meta name="twitter:description" content="Photographe professionnel, besoin de plus d'information, utilisez mon formulaire de contact et je répondrais le plus rapidement possible." />
                <meta name="twitter:image:src" content="https://c-cantin-photo.netlify.app/resources/homeOg.png" />
            </Head>
            <div id='contact' className={styles.contact} onClick={(e) => hidePolicy(e)} onSubmit={sendEmail}>
                <h1>CONTACTEZ MOI</h1>
                <form ref={formRef} id="contact-form" className={styles.contactForm}>
                    <div className={styles.contactInfos}>
                        <h2>- PARLEZ-MOI DE L' EXPÉRIENCE PHOTO DE VOS RÊVES -</h2>
                        <p>
                            L'expérience de vos rêves se prépare et celle-ci doit être réservée bien en avance, 
                            le plus tôt possible.<br></br>Pour une expérience de qualité, il y a peu de créneaux disponibles, 
                            contactez-moi rapidement pour prendre rendez-vous.<br></br>
                            Merci
                        </p>
                    </div>
                    <label htmlFor='firstname'>Votre prénom <span style={{color: 'red'}}>*</span></label>
                    <input ref={firstnameRef} type="text" name="firstname" id='firstname' required/>
                    <label htmlFor='lastname'>Votre nom <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="lastname" id='lastname' required/>
                    <label htmlFor='email'>Votre adresse email <span style={{color: 'red'}}>*</span></label>
                    <input type="email" name="email" id='email' required/>
                    <label htmlFor='presta'>Quelle prestation vous intéresse ? <span style={{color: 'red'}}>*</span></label>
                    <select name="presta" id="presta" value={selectedPrestation} onChange={e => setSelectedPrestation(e.target.value)}>
                        <option value="">- Choisissez une option -</option>
                        {
                            props.prestations.map((prestation) => (
                                <option key={prestation.file} value={prestation.file}>{prestation.data.title}</option>
                            ))
                        }
                        <option value="other">Autre</option>
                    </select>
                    <label htmlFor='message'>Parlez-moi de l'expérience photo dont vous rêvez : <span style={{color:'red'}}>*</span></label>
                    <textarea name="message" id='message' rows="12" required></textarea>
                    <div className={styles.recaptcha}>
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onReCAPTCHAChange}
                            ref={recaptchaRef}
                        />
                    </div>
                    <button role='submit' disabled={!verifiedCaptcha} className={!verifiedCaptcha ? styles.disabledBtn:null}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.send} viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                        Envoyer
                    </button>
                    <p className={styles.textPolicy}>En soumettant ce formulaire, vous reconnaissez avoir pris connaissance de notre politique de confidentialité (traitement et utilisation des données) : <span onClick={() => displayPolicy()} className={styles.policyLink}>Cliquez ici</span></p>
                    <div ref={policyRef}>
                        <PrivacyPolicy />
                    </div>
                </form>
                <div ref={modalRef}>
                    <ModalConfirmContact />
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {

    const files = fs.readdirSync('data/prestations/', "utf-8");

    const prestations = files.map(file =>  (
        {
            file: file.split('.')[0],
            data: matter(fs.readFileSync(`./data/prestations/${file}`, 'utf-8')).data
        }
    ));

    return {
        props: {
            prestations
        }
    }
}
