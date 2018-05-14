(function(){

    const socket = io()

    const drops = document.querySelector('.drops')
    if(drops) {
        window.addEventListener('hashchange', function() {
            if (window.location.hash == "#bacteria" || window.location.hash == "#collector" ) {
                drops.classList.remove('gone')
            } else {
                drops.classList.add('gone')
            }
        })
    }

    const bttnUsername = document.querySelector('.submitUsername')
    if(bttnUsername) {
        bttnUsername.addEventListener('click', function() {
            const form = document.querySelector('.usernameInput')
            const username = form.value
            socket.emit('username', username)
        })
    }

})()