const markRead = document.getElementById('markRead');
const notificationsAmount = document.getElementById('notificationsAmount');
const messages = document.querySelectorAll(".message");

function removeUnread(message) {
    message.classList.remove('unread');
    const svgElement = message.querySelector('.svg');
    if (svgElement) {
        svgElement.remove();
    }
}

messages.forEach(message => {
    message.addEventListener('click', () => {
        removeUnread(message);
    });
});

markRead.addEventListener('click', () => {
    messages.forEach(message => {
        removeUnread(message);
    });
});
