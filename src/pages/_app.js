import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'swiper/css/bundle';
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { ToastContainer } from 'react-toastify';
// internal
import { store } from '../../redux/store';
import './index.scss';
import './globals.css'; // Tailwind CSS global styles
import '../../components/More/_subjectOffers.scss';
import '../../public/assets/css/mobile-nav.css';
import SEO from '../../components/seo';



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // Removed dispatches for deleted actions
  }, []);

  return (
    <React.Fragment>
      <SEO font="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
