function displayLocalStorageData() {
    let localStorageDataDiv = document.getElementById('localStorageData');
    localStorageDataDiv.innerHTML = '<h2>Dữ liệu từ Local Storage:</h2>';

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        localStorageDataDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
}

window.onload = displayLocalStorageData;
