const searchInput = document.querySelector('.bold');
const searchButton = document.querySelector('.search');
const imageGallary = document.querySelector('#image');
const accessKey = 'wcAdqKxmkx5Z5L6OUsOQTvUCq8BwH93z8H7BifzLlrQ';


const fetchImages = async (query = '') => {
    let url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=50`;

    if (query) {      
        url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}&per_page=30`;
    }

    // const API_URL = 'https://api.unsplash.com/photos/random?client_id=${accessKey}&count=50'; // Example API URL

    // async function fetchImages() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)

        const images = query ? data.result : data;
        displayImages(images);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular; // Adjust based on the API response structure
        imgElement.alt = image.title || 'Image'; // Adjust based on the API response structure
        imageGallary.appendChild(imgElement);
    });
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    fetchImages(query);
})

fetchImages()

// const searchInput = document.querySelector('.bold');
// const searchButton = document.querySelector('.search');
// const imageGallary = document.querySelector('#image');
// const accessKey = 'wcAdqKxmkx5Z5L6OUsOQTvUCq8BwH93z8H7BifzLlrQ';

// const fetchPhotos = async (query = '') => {
//     let url = 'https://api.unsplash.com/photos/random?client_id=${accessKey}&count=50';

//     if (query) {
//         url = 'https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}&per_page=30';
// }

// try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     const images = query ? data.results : data;
//     displayImages(images)
// } catch (error) {
//     console.error('error fetching images:', error);
// }

// }



// let fetchCount = 0;
// let maxFetches = 10;

// const fetchInterval = (() => {
//     fetchPhotos()
//     fetchCount++;

//     if (fetchCount == maxFetches) {
//         clearInterval(fetchInterval);
//         console.log('Stop fetching photos after', maxFetches, 'fetches.');
//     }
// }, 5000);

// function displayImages(myImages) {
//     imageGallary.innerHTML = '';

//     myImages.forEach(image, () => {
//         const imgElement = document.createElement('img');
//         imgElement.scr = image.url.regular
//         imgElement.alt = 'lazy';

//         imageGallary.appendChild(imgElement);
//     })

// }

// searchButton.addEventListener('click', () => {
//     const query = searchInput.value.trim();
//     fetchPhotos(query);
// })