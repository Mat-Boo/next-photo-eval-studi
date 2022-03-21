import Container from '../components/Container/Container';
import '../styles/globals.scss';
import SimpleReactLightbox from 'simple-react-lightbox';
import ContextProvider from '../context/context';

function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <ContextProvider>
                <SimpleReactLightbox>
                    <Component {...pageProps} />
                </SimpleReactLightbox>
            </ContextProvider>
        </Container>
    )
}

export default MyApp
