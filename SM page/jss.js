const menuItems = document.querySelectorAll('.menu-item');

//remove item from active
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    });
}

const messageNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

/////////////////////

const theme = document.querySelector('#theme');
const themeModal = document.querySelector(".customize-theme");

const fontSizes = document.querySelectorAll('.choose-size span');









menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != "notifications") {
            document.querySelector('.notification-popup').style.display = "none";
        }
        else {
        document.querySelector('.notification-popup').style.display = "block"
            document.querySelector('#notifications .notification-count').style.display = "none";
        }
    }) 
})

//MESSAGES
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageNotification.querySelector("#messages-notification .notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 2000);
})


const searchMessage = () => {
    const val = messageSearch.value.toLocaleLowerCase();
    // console.log(val);
    message.forEach(
        chat => {
            let name = chat.querySelector('h5').textContent.toLowerCase();
            if (name.indexOf(val) != -1) {
                chat.style.display = "flex";
            }
            else {
                chat.style.display = "none";
            }
        }
    )
    
}

messageSearch.addEventListener("keydown", searchMessage);


//THEME CUSTOMIZATION


const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = "none";
    }
}






//CLOSE MODAL
themeModal.addEventListener('click', closeThemeModal);



theme.addEventListener('click', openThemeModal);



//fontsizes

