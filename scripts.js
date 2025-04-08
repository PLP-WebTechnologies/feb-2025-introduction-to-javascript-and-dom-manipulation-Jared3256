// Function to change text content
function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'The text has been changed!';
}

// Function to modify CSS styles
function changeStyle() {
    const textElement = document.getElementById('styledText');
    textElement.style.backgroundColor = '#ffeb3b';
    textElement.style.color = '#333';
    textElement.style.fontWeight = 'bold';
}

// Function to add a new element
function addElement() {
    const container = document.getElementById('elementContainer');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new element.';
    container.appendChild(newElement);
}

// Function to remove the last element
function removeElement() {
    const container = document.getElementById('elementContainer');
    const lastElement = container.lastElementChild;
    if (lastElement) {
        container.removeChild(lastElement);
    }
}

// Event Listeners
document.getElementById('changeTextBtn').addEventListener('click', changeText);
document.getElementById('styleBtn').addEventListener('click', changeStyle);
document.getElementById('addElementBtn').addEventListener('click', addElement);
document.getElementById('removeElementBtn').addEventListener('click', removeElement);
