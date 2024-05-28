document.getElementById('google-form-clone').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        if (!Object.prototype.hasOwnProperty.call(data, key)) {
            data[key] = value;
            return;
        }
        if (!Array.isArray(data[key])) {
            data[key] = [data[key]];
        }
        data[key].push(value);
    });
    console.log('Form Data Submitted:', data);
});

