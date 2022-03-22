import React from 'react';
import Image from 'next/image';
import styles from './PictureGallery.module.scss';
import { SRLWrapper } from 'simple-react-lightbox';

export default function PictureGallery({gallery}) {

    const options = {
        buttons: {
            showDownloadButton: false
        },
        caption: {
            showCaption: false
        },
        progressBar: {
            backgroundColor: '#47555E'
        }
    }

    return (
        <SRLWrapper options={options}>
            <ul className={styles.picturesList}>
                {gallery.data.pictures.map((picture) => {
                    return (
                        <li key={gallery.data.pictures.indexOf(picture)} className={styles.pictureItem}>
                            <a  href={picture} data-lightbox='models' data-title='Caption1'>
                                <div className={styles.picture}>
                                    <Image src={picture} alt={gallery.file + '_' + gallery.data.pictures.indexOf(picture)} width='1920' height='1280'/>
                                </div>
                            </a>
                        </li>
                    )
                })  
                }
            </ul>
        </SRLWrapper>
    )
}
