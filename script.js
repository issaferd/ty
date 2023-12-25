// Declare an object to store input values for each button type
const inputValues = {
    closeby: [],
    healthy: [],
    dine: []
};

function generateRandomOption(buttonType) {
    const options = inputValues[buttonType];

    if (options.length > 0) {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOption = options[randomIndex];
        displayRandomOption(randomOption);
    } else {
        displayRandomOption('No options available');
    }
}

function addItem(buttonType) {
    const inputElement = document.querySelector(`.${buttonType}-input`);
    const inputValue = inputElement.value;

    if (inputValue.trim() !== '') {
        inputValues[buttonType].push(inputValue);
        updateInputList(buttonType);
        inputElement.value = '';
    }
}

function displayRandomOption(option) {
    const placeholderElement = document.querySelector('.placeholder p.chip');
    placeholderElement.textContent = option;
}

function updateInputList(buttonType) {
    const inputListElement = document.querySelector(`.${buttonType}-list`);
    const options = inputValues[buttonType];

    // Clear existing items
    inputListElement.innerHTML = '';

    // Add each item to the list
    options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = option;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = () => deleteItem(buttonType, index);

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the input list
        inputListElement.appendChild(listItem);
    });
}

function deleteItem(buttonType, index) {
    // Remove the item at the specified index
    inputValues[buttonType].splice(index, 1);
    // Update the input list
    updateInputList(buttonType);
}
