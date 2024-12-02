// mixins/googleAnalytics.js
export default {
    initialize(googleAnalyticsId) {
        if (!googleAnalyticsId) {
            console.warn('O ID do Google Analytics não foi definido.');
            return;
        }
  
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
        document.head.appendChild(script);
  
        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', googleAnalyticsId);
        };
    },
};
  