import React from 'react';
import Image from 'next/image';
import styles from './PictureGallery.module.scss';
import { SRLWrapper } from 'simple-react-lightbox';

export default function PictureGallery({categories}) {


    let arrayGallery = [];
    let nb;

    categories.map((categorie) => {
        for (let i = 1 ; i <= categorie.nbPictures ; i++) {
            switch(i.toString().length) {
                case 1:
                    nb = '000' + i;
                    break;
                case 2:
                    nb = '00' + i;
                    break;
                case 3:
                    nb = '0' + i;
                    break;
                default:
                    nb =  i;
            }
            arrayGallery.push(
                {
                    pictureName: categorie.slug + '-' + nb + '.jpg',
                    pictureCategory: categorie.slug
                })
        }
    })

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

    console.log(arrayGallery)

    return (
        <SRLWrapper options={options}>
            <ul className={styles.picturesList}>
                {arrayGallery.map((picture) => {
                    return (
                        <li  onClick={(e) => console.log('li' + e)} key={arrayGallery.indexOf(picture)} className={styles.pictureItem}>
                            <a  onClick={(e) => console.log('a ' + e)} href={'./resources/gallery/' + picture.pictureCategory + '/' + picture.pictureName} data-lightbox='models' data-title='Caption1'>
                                <div className={styles.picture} onClick={(e) => console.log('div ' + e)}>
                                    <Image src={'/resources/gallery/' + picture.pictureCategory + '/' + picture.pictureName} alt={picture.pictureName} width='1920' height='1280'/>
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
