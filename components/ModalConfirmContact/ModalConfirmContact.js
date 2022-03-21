import React, { useRef } from 'react';
import styles from './ModalConfirmContact.module.scss';

export default function ModalConfirmContact() {

    const modalRef = useRef();

    const hideModal = () => {
        modalRef.current.parentNode.parentNode.firstChild.style.pointerEvents= 'auto';
        modalRef.current.parentNode.parentNode.firstChild.style.opacity= '1';
        modalRef.current.style.display = 'none';
    }

    return (
        <div ref={modalRef} className={styles.ModalConfirmContact}>
            <div className={styles.headModal}>
                <h2>Confirmation</h2>
                <svg onClick={() => hideModal()} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={styles.closeModal} viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <div className={styles.modalInfos}>
                <p>Merci de m'avoir contacté, je reviens vers vous au plus vite.</p>
                <br></br>
                <p>Cordialement,</p>
                <br></br>
                <p><b>Charles Cantin</b></p>
            </div>
        </div>
    )
}
