document.querySelector('#image-form').addEventListener('submit', onSubmit);


function showSpinner() {
    document.querySelector('#generate-button').style.display = 'block'; // added this to show the element
}

function removeSpinner() {
    document.querySelector('#generate-button').style.display = 'none'; // added this disable element
}

//remoe spinner on pageload
removeSpinner();

function onSubmit(e) {
    e.preventDefault();

    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if (prompt === '') {
        alert('Please add some text');
        return;
    }

    generateImageRequest(prompt, size);

    showSpinner();
}


async function generateImageRequest(prompt, size) {
    try {
        showSpinner();

        const response = await fetch('/openai/generateimage', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',

            body: JSON.stringify({
                prompt,
                size,
            }),
        });

        if (!response.ok) {
            removeSpinner();
            throw new Error('That image could not be generated');
        }

        const data = await response.json();
        console.log(data);

        const imageUrl = data.data;

        document.querySelector('#image').src = imageUrl;

        removeSpinner();
    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}


