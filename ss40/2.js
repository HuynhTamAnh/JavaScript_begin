let id = 0;

function addPlayer() {
    let playerName = document.getElementById('playerName').value;
    if (playerName) {
        localStorage.setItem(`player${id}`, playerName);
        id++;
        displayPlayers();
    }
}

function displayPlayers() {
    let playersDiv = document.getElementById('players');
    playersDiv.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        playersDiv.innerHTML += `<p>${key}: ${value}</p>`;
    }
}

window.onload = displayPlayers;