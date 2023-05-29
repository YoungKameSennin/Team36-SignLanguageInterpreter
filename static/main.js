let currentImage;

function chooseImage() {
    document.getElementById('fileInput').click();
}

function handleFileSelect(event) {
    const imageFile = event.target.files[0];

    if (imageFile) {
        const imageElement = document.getElementById('imageElement');
        imageElement.src = URL.createObjectURL(imageFile);
        imageElement.style.display = 'block'

        const uploadButton = document.getElementById('upload')
        uploadButton.style.display = 'block'

        const resultElement = document.getElementById("result")
        resultElement.textContent = imageFile.name

        currentImage = imageFile
    }
}

function uploadImage() {
    const formData = new FormData();

    formData.append('file', currentImage);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Handle successful response
            console.log('Image uploaded successfully');
            return response.text(); // Return the response text
        } else {
            // Handle error response
            console.error('Error uploading image');
            throw new Error('Image upload failed');
        }
    })
    .then(data => {
        console.log(data); // Access the response text
        
        const resultElement = document.getElementById("result")
        resultElement.textContent = data
    })
    .catch(error => {
        // Handle network or other errors
        console.error('Error:', error);
    });
}