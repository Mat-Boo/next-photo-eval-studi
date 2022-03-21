import React from 'react';
import styles from '../styles/test.module.scss'
import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

export default function Test() {
  return (
    <div className={styles.test}>Test</div>
  )
}

export async function getstaticProps({params}) {
  // On va utiliser le module fs pour lire un fichier markdown
	// 
	// On va recuperer le slug pour connaitre le fichier à lire
  const presta = fs.readFileSync(`./data/prestations/${params.slug}.md`, 'utf-8')
  // Graymatter va nous permettre de sortir les meta données de l'entete du fichier markdown et le contenu
  const {titre_de_la_prestation,soustitre} = matter(presta);

    return {
      // on va retourner en props le contenu et data
        props: {
          titre_de_la_prestation, 
          soustitre
        }
    }
}

export function getStaticPaths() {
	// On lit le dossier
	const files = fs.readdirSync(`data/prestations/`, "utf-8");

	// on récupère tous les fichiers markdown dans ce dossier et on génère les paths et on les retourne à la fin de la fonction.
	const paths = files.map(file =>  {
		const slug = file.split('.')[0];
		return {params : {slug: slug}
	}});

	return {
		paths: paths,
		fallback: false
	}
}