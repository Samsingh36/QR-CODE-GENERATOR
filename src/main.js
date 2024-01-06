// main.js

document.getElementById('qrForm').addEventListener('submit', function (event) {
    event.preventDefault();
    generateQRCode();
});

function generateQRCode() {
    const url = document.getElementById('urlInput').value;

    // Call your Node.js script or API to generate QR code
    // You can use fetch() or any other method to communicate with your Node.js backend

    // For the sake of simplicity, assume the QR code is generated on the server
    const qrCodeImage = `path/to/qr_img.png`;

    // Display the generated QR code
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = `<img src="${qrCodeImage}" alt="QR Code">`;
}
