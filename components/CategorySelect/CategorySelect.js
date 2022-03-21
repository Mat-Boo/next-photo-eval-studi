import React from 'react';
import styles from './CategorySelect.module.scss';

export default function CategorySelect({categoryName, categorySlug, handlerCategory}) {
  return (
    <p onClick={handlerCategory} id={categorySlug} className={styles.categoryName}>{categoryName}</p>
  )
}
