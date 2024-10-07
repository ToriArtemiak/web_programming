const nameInput = document.getElementById("name-input");
const priceInput = document.getElementById("price-input");
const colorInput = document.getElementById("color-input");
const itemsContainer = document.getElementById("items-to-list");
const manageCheckBox = document.getElementById("checkbox");

export const getInputValue = () => {
    return {
        name: nameInput.value,
        price: priceInput.value,
        color: colorInput.value,
    };
};

export const clearInputs = () => {
    nameInput.value = "";
    priceInput.value = "";
    colorInput.value = "";
};

export const renderItems = (items) => {
    itemsContainer.innerHTML = "";
    let sortedItems = items.slice(); // Create a shallow copy of the array

    if (manageCheckBox.checked) {
        // Sort items by color alphabetically
        sortedItems.sort((a, b) => a.color.localeCompare(b.color));
    }

    // Render the sorted items
    for (const item of sortedItems) {
        addItemToPage(item);
    }
};

const itemTemplate = ({name, price, color}) =>
    `<li class="plane-card">
        <h5>T-shirt</h5>
        <span>${name}</span> <br>
        <span>${price}</span> <br>
        <span>${color}</span> <br>
    </li>`;

export const addItemToPage = ({name, price, color}) => {
    itemsContainer.insertAdjacentHTML("afterbegin",
        itemTemplate({name, price, color}));
};
