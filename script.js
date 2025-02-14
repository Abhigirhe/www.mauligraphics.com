const uploadButton = document.getElementById('uploadButton');
const imageUpload = document.getElementById('imageUpload');
const gallery = document.querySelector('.gallery');

document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const file = imageUpload.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      // Create a new gallery item with the uploaded image
      const newItem = document.createElement('div');
      newItem.classList.add('item');

      const newImage = document.createElement('img');
      newImage.src = e.target.result;
      newImage.alt = 'User Uploaded Design';

      const newCaption = document.createElement('p');
      newCaption.textContent = 'User Design';

      newItem.appendChild(newImage);
      newItem.appendChild(newCaption);
      gallery.appendChild(newItem);

      // Reset the form after the upload
      document.getElementById('uploadForm').reset();
    };

    // Read the image file
    reader.readAsDataURL(file);
  } else {
    alert('Please select an image first!');
  }
});
