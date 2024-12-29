document.getElementById('qr-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const qrInput = document.getElementById('qr-input').value;
    generateQRCode(qrInput);
});

function generateQRCode(text) {
    const qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = '';
    const qrCode = new QRCode(qrCodeContainer, {
        text: text,
        width: 128,
        height: 128
    });
}
