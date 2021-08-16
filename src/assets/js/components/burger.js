
    // Close the dropdown menu if the user clicks outside of it


// let window = document.querySelector('window'); 
console.log(window);
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        const dropdown = document.querySelector("#myDropdown");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
})