/* DOWNLOAD FILE */

// Capture the div's text content

const pageContent = document.getElementsByClassName('page')[0];

// Utilize the File API to create a downloadable file.

const downloadButton = document.createElement('button');
downloadButton.innerText = 'Download'; // Set button text

// Create a Blob object with the content and MIME type

function downloadFile() {
  const blob = new Blob([pageContent.innerText], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'screenplay.txt';

  const pageContainer = document.querySelector('.page-container');
  pageContainer.appendChild(link);

  link.click();
  URL.revokeObjectURL(blob);
  pageContainer.removeChild(link); // Remove link after download
}

downloadButton.addEventListener('click', downloadFile);

// Add the button to your desired location in the UI (e.g., document.body)
document.body.appendChild(downloadButton);

/* FORMAT TEXT */

const formatButtons = document.querySelectorAll('toolbar button');
const pageElement = document.querySelector('.page');

formatButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selection = window.getSelection();
    if (selection.toString().trim() !== '') {
      // Extract format class from button ID
      const formatClass = button.id.split('-').pop();

      const span = document.createElement('span');
      span.classList.add(formatClass);

      // Wrap the selected text with the span
      selection.getRangeAt(0).surroundContents(span);
    }
  });
});


