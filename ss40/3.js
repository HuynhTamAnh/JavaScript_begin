function deletePlayer() {
    let playerName = document.getElementById('playerNameToDelete').value;
    if (playerName) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            if (value === playerName) {
                localStorage.removeItem(key);
                i--;
            }
        }
        displayPlayers();
    }
}

function displayPlayers() {
    let playersDiv = document.getElementById('players2');
    playersDiv.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        playersDiv.innerHTML += `<p>${key}: ${value}</p>`;
    }
}

window.onload = displayPlayers;