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
        
        console.log(responseData);

        // Check if the compound value is negative
        if (responseData.compound < 0) {
            document.getElementById('result').innerHTML = "Mood not OK";
        } else if ( responseData.compund <0.3 && responseData.compund > -0.3 )
            { document.getElementById('result').innerHTML = "Mood is Nuetral";}
        else {
            document.getElementById('result').innerHTML = "Mood is pretty well";
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
