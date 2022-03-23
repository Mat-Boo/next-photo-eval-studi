import Container from '../components/Container/Container';
import '../styles/globals.scss';
import SimpleReactLightbox from 'simple-react-lightbox';
import { Provider } from 'react-redux';
import { store } from '../redux/redux';

function MyApp({ Component, pageProps }) {
    return (
            <Provider store={store}>
                <Container>
                        <SimpleReactLightbox>
                            <Component {...pageProps} />
                        </SimpleReactLightbox>
                </Container>
            </Provider>
    )
}

export default MyApp
