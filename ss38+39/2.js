let searchBar = document.getElementById('searchBar');
let act = document.getElementById('act');

searchBar.addEventListener('click', function() {
    searchBar.parentElement.style.width = '200px';
    searchBar.placeholder = 'Search...';
    searchBar.style.color='black';
});

searchBar.addEventListener('blur', function() {
    searchBar.parentElement.style.width = '50px';
    searchBar.placeholder = '';
});

act.addEventListener('click',function(){
    act.parentElement.style.width = '200px';
    act.placeholder = 'Search...';
    act.style.color='black';
})