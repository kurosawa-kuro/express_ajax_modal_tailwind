document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    const modal = document.getElementById('myModal');

    // Get the button that opens the modal
    const btn = document.getElementById('openModalBtn');

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal
    btn.onclick = () => {
        modal.style.display = 'block';
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = () => {
        modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Add new item via Ajax
    document.querySelector('#addItemForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const newItem = document.querySelector('#newItem').value;

        if (newItem) {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ item: newItem }),
            });

            if (response.ok) {
                const ul = document.querySelector('ul');
                const li = document.createElement('li');
                li.textContent = newItem;
                ul.appendChild(li);
                modal.style.display = 'none';
                document.querySelector('#newItem').value = '';
            } else {
                alert('Error: Unable to add new item.');
            }
        } else {
            alert('Error: Please enter a new item.');
        }
    });
});
