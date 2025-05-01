
document.querySelectorAll('.gallery-box').forEach(function(box) {
    const images = box.querySelectorAll('img');
    if (images.length === 2) {
        images.forEach(function(img) {
            img.style.width = '45%'; // Set both images to 50% width
            img.style.height = 'auto';
            img.style.objectFit = 'cover';
            img.style.padding = '1vh 0 0 0';
        });

    }
});