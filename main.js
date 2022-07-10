
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('config/service-worker.js');
};


function registerEvent(button) {
    Notification.requestPermission().then((result) => {
        if (result === 'granted') {
            sendNotification(button.dataset.type);
        }
    });
}

function sendNotification(type) {

    let notifTitle, notifBody, time = 10;
    switch (type) {
        case 'eye-care':
            notifTitle = 'Eye Care';
            notifBody = 'As per this rule, every 20 minutes, take your eyes off your computer and look at something 20 feet away for at least 20 seconds.';
            time = 20;
            break;
        case 'rehydration':
            notifTitle = 'Rehydration';
            notifBody = 'It can take just 5 minutes to begin rehydrating your body. On the other hand, if you drink water while eating, your body will prioritize digesting food before water. This often takes up to 120 minutes to digest water and rehydrate your body';
            time = 60;
            break;
        case 'exercise':
            notifTitle = 'Exercise';
            notifBody = 'Sit in your chair, with your palms gripping the seat for balance and your legs extended out straight and off the floor. Move your legs as far as you can to the right, keeping your feet together. Switch sides by moving your legs as far as you can to the left. Repeat at least 20 times.';
            time = 45;
            break;
    }
    const notifImg = '';
    const options = {
        body: notifBody,
        icon: notifImg,
    };
    new Notification(notifTitle, options);
    setTimeout(() => { sendNotification(type) }, time * 1000);
}