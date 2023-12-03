async function fetchRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const user = await response.json();
    return user.results[0];
}

function displayError(error) {
    const p = document.createElement('p');
    p.textContent = error.message;
    p.style.color = 'red';
    document.querySelector('.container').appendChild(p);
}

async function onPageLoadOrRefresh() {
    try {
        const user = await fetchRandomUser();
        displayUser(user);
    } catch (error) {
        displayError(error);
    }
}

let handleClick = document.querySelector('#btn').addEventListener('click', async () => {
    try {
        const user = await fetchRandomUser();
        displayUser(user);

    } catch (error) {
        displayError(error);
    }
});

function displayUser(user) {
    const userDetails = document.querySelector('.user-details');
    userDetails.innerHTML = `
                <img src="${user.picture.large}" class="user-img" />
                <p>User name ${user.name.first.toUpperCase()} ${user.name.last}</p>
                <p>Gender: ${user.gender.toUpperCase()}</p>
                <p>Country: ${user.location.country.toUpperCase()}</p>
            `;
}

// when page loads on browser event fire
window.onload = onPageLoadOrRefresh;


// Example: Remove click event listener after the first click
document.querySelector('#btn').addEventListener('click', function removeClickListener() {
    // Remove click event listener
    document.querySelector('#btn').removeEventListener('click', handleClick);

    // Additional code if needed
    console.log('Click event listener removed after the first click.');
});