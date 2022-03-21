import React, { useRef } from 'react'
import styles from './PrivacyPolicy.module.scss'

export default function PrivacyPolicy() {

    const policyRef = useRef();

    const hidePolicy = () => {
        policyRef.current.style.display = 'none';
    }

    return (
        <div ref={policyRef} className={styles.privacyPolicy}>
            <div className={styles.policyHead}>
                <h2>Politique de confidentialité des données</h2>
                <svg onClick={() => hidePolicy()} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className={styles.closePolicy} viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <div className={styles.policyText}>
                    <p>Cette politique de confidentialité a pour objectif de vous informer sur mes politiques et pratiques concernant la collecte, l'utilisation et la divulgation de toute information que vous soumettez via mon site internet ou fotostudio.io (plateforme de gestion spécialisée pour les photographes professionnels).</p>
                    <h3>Responsabilité pour le traitement des données</h3>
                    <p>Charles Cantin Photographe, Charles Cantin, 15 rue de là-bas, 62000 Arras, France, SIREN: 123 456 789, SIRET: 12345678900012,  est responsable du traitement de vos données collectées sur son site Internet www.charlescantin.fr (formulaire de contact, questionnaire et signature de contrat).</p>
                    <h3>Finalités des données</h3>
                    <p>Les données que vous me communiquez ne seront utilisées que pour la bonne gestion de notre relation client-prestataire (organisation de votre séance, remise de devis, facture, ...). Elles ne sont enregistrées que dans ce but.</p>
                    <p>Je collecte également les informations que vous me fournissez dans vos emails ou de vive voix. Ces informations sont collectées pour m'aider à fournir un service de qualité selon vos attentes.</p>
                    <h3> Formulaire de contact</h3>
                    <p>Lorsque vous soumettez une demande de contact depuis mon site internet, je collecte vos données telles que votre nom et prénom, votre adresse e-mail et les informations précisées dans le message.</p>
                    <h3>Signature d'un contrat</h3>
                    <p>Il vous sera demandé de signer un contrat pour valider votre commande soit de manière manuscrite soit via fotostudio.io. Ce contrat reprendra vos données personnelles ainsi que les informations relatives à la prestation (date et lieu de la séance, tarif, ...).</p>
                    <h3>Questionnaire</h3>
                    <p>Je vous soumets des questionnaires pour m'aider à mieux comprendre vos attentes et ainsi réaliser une prestation qui répond à vos attentes. Vous n'êtes nullement obligé de répondre à toutes les questions si vous souhaitez éviter de fournir certaines informations.</p>
                    <h3>Divulgation de vos données</h3>
                    <p>Charles Cantin Photographe ne vend pas, ne loue pas et ne partage pas vos informations avec des tiers. Aucune information que vous transmettez ne sera divulguée.</p>
                    <h3>Droit d'Accès et réclamation</h3>
                    <p>En tant que détenteur des données, vous avez le droit d'accéder, de mettre à jour, de corriger des données inexactes ou de demander la suppression des données. Vous avez aussi le droit de faire une réclamation concernant toute question relative au traitement de ces données.</p>
                    <p>Vous pouvez exercer ces droits en envoyant un mail à charlescantint@exemple.com</p>
                    <h3>Sécurité de vos données</h3>
                    <p>Charles Cantin Photographe s'engage à prendre toutes les mesures en son pouvoir pour protéger les données mises à sa disposition par ses clients. La solution fotostudio.io a été choisie dans ce sens pour stocker vos données. Il s'agit d'une plateforme professionnelle et sécurisée.</p>
                    <h3>Durée de conservation de vos données</h3>
                    <p>Je conserve vos informations aussi longtemps que nécessaire pour fournir les services que vous avez demandé ou pour d'autres raisons essentielles telles que le respect des obligations légales, la résolution des litiges et l'application de mes politiques.</p>
                    <h3>Statistiques et mesures d’audience</h3>
                    <p>Des cookies enregistrent votre navigation à des fins statistiques. Ils me permettent par exemple de mesurer la fréquentation de mon site et d'analyser votre parcours sur celui-ci avant de vous offrir une meilleure expérience.</p>
            </div>
        </div>
    )
}
