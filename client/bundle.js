
/**
 * @imports
 */
import Client from 'C:/Users/ox_ha/Documents/CODE/webqit/webflo/modules/client/Client.js';

/**
 * -----------------
 * Client Build File
 * -----------------
 */

// >> Client-Side Routing:
const routes = {};

// >> Client Params
const params = {
   ROUTES: routes,
};

// >> Client Instantiation
Client.call(null, params);

// >> Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/worker.js', {scope: '/'}).then(async registration => {
            console.log('Service worker registered.');
            await /*SUPPORT_PUSH*/undefined ? new Push(registration, {
                REGISTRATION_URL: '',
                UNREGISTRATION_URL: '',
                PUBLIC_KEY: '',
            }) : null;
        });
    });
}

/**
navigator.serviceWorker.addEventListener('message', event => {
    if (event.data.isNotificationTargetEvent) {
        // NotificationClick event for this client
        console.log('NotificationClick event for this client', event.data);
    } else if (event.data.isNotificationUntargetEvent) {
        // NotificationClose event for this client
        console.log('NotificationClose event for this client', event.data);
    } else if (event.data.isMessageRelay) {
        // Message from other clients
        console.log('Message from other clients', event.data);
    }
});
*/
