import React from 'react';
import styles from './CategorySelect.module.scss';

export default function CategorySelect({categoryName, categoryId, handlerCategory}) {
  return (
    <p onClick={handlerCategory} id={categoryId} className={styles.categoryName}>{categoryName}</p>
  )
}
