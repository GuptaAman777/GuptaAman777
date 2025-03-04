document.addEventListener('DOMContentLoaded', function() {
  // Fetch chapter images
  fetchChapterImages();
  
  // Update copyright year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});

async function fetchChapterImages() {
  try {
    const chaptersContent = document.getElementById('chaptersContent');
    
    // Example image paths; update these to match your actual image paths
    const imagePaths = [
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/001.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/002.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/003.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/004.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/005.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/006.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/007.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/008.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/009.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/010.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/011.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/012.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/013.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/014.jpg',
      'assets/what-do-you-do-when-you-suddenly-become-an-immortal/chapter182/015.jpg'
    ];
    
    if (imagePaths.length === 0) {
      chaptersContent.innerHTML = '<p class="no-chapters">No images available for this chapter.</p>';
      return;
    }
    
    let html = '';
    imagePaths.forEach((path, index) => {
      html += `<img src="${path}" alt="Page ${index + 1}" class="chapter-image" />`;
    });
    
    chaptersContent.innerHTML = html;
  } catch (error) {
    console.error('Error loading chapter images:', error);
    const chaptersContent = document.getElementById('chaptersContent');
    chaptersContent.innerHTML = '<p class="error">Failed to load chapter images. Please try again later.</p>';
  }
}
