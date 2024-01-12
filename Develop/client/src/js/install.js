const butInstall = document.getElementById('buttonInstall');
const staticCacheName = 'site-static';

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    // const installPromptEvent = event;

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {


});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {


});
