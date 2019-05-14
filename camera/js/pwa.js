if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('js/service-worker.js')
          .then((reg) => {
            console.log('Service worker registered.', reg);
          });
    });
  }