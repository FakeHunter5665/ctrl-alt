document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dataForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        sendData();
    });
});

async function sendData() {
    var inputData = document.getElementById('inputData').value;

    var data = {
        input_data: inputData
    };

    try {
        const response = await fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        console.log(responseData)
        // Display response on the website
        document.getElementById('result').innerHTML = responseData.compound;
    } finally{}
}

