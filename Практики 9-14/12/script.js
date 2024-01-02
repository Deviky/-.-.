document.addEventListener('DOMContentLoaded', function() {
    const notificationsIcon = document.getElementById('notifications-icon');
    const notificationCountElement = document.getElementById('notification-count');
    const notificationsContainer = document.getElementById('notifications-container');
    const notificationsContainerWrapper = document.getElementById('notifications-container-wrapper');
    let notificationCount = 0;
    let isPaused = false;

    function addNotification() {
        notificationCount++;
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-message">Новое уведомление #${notificationCount}</div>
            <button class="close-button">X</button>
        `;
        notificationsContainer.appendChild(notification);

        // Добавляем обработчик для кнопки закрытия
        const closeButton = notification.querySelector('.close-button');
        closeButton.addEventListener('click', function() {
            notificationsContainer.removeChild(notification);
            updateNotificationCount(); // Обновляем счетчик уведомлений после удаления
        });

        updateNotificationCount();
    }

    // Функция для обновления счетчика уведомлений
    function updateNotificationCount() {
        notificationCountElement.textContent = notificationCount;
    }

    function updateAndAddNotification() {
        if (!isPaused) {
            addNotification();
        }
    }

    // Обработчик нажатия на иконку с уведомлениями (кнопку)
    notificationsIcon.addEventListener('click', function() {
        if (!isPaused) {
            isPaused = true;
            setTimeout(function() {
                isPaused = false; // После 10 секунд снимаем паузу
            }, 10000);
        }
    });

    notificationsIcon.addEventListener('mouseenter', function() {
        notificationsContainer.style.display = 'block';
    });

    notificationsIcon.addEventListener('mouseleave', function() {
        if (!notificationsContainerWrapper.contains(event.relatedTarget)) {
            notificationsContainer.style.display = 'none';
        }
    });

    notificationsContainerWrapper.addEventListener('mouseenter', function() {
        notificationsContainer.style.display = 'block';
    });

    notificationsContainerWrapper.addEventListener('mouseleave', function(event) {
        if (!notificationsIcon.contains(event.relatedTarget)) {
            notificationsContainer.style.display = 'none';
        }
    });

    setInterval(updateAndAddNotification, 3000);
});

function showNotification(options) {
    const notification = document.createElement('div');
    notification.className = 'notification1';
    notification.innerHTML = `
        <div class="notification-message">${options.message}</div>
        <button class="close-button">X</button>
    `;
    document.body.appendChild(notification);
    notification.style.display = 'block';

    // Добавляем обработчик для кнопки закрытия
    const closeButton = notification.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        document.body.removeChild(notification);
    });

    setTimeout(function() {
        document.body.removeChild(notification);
    }, 1500);
}

showNotification({
    message: 'ЭЭЭ!'
});