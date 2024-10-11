link.href = 'mickhand.ttf';  // Since it's in the root directory
document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement('a');
    link.href = 'mickhand.ttf';  // Correct relative path to the file
    link.download = 'mickhand.ttf';
    link.click();
});
