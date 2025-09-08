

const fileInput = document.querySelector('#fileInput');
fileInput.value = '';

let fileContent = "";

function readFile() {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        fileContent = reader.result;
        console.log(fileContent);
    },
    false,
    );

    if (file) {
        reader.readAsText(file);
    }
}

const loadDataButton = document.querySelector('#loadData');
loadDataButton.addEventListener('click', () => {
    readFile();
})

function Bottle(name, isActive, lines, tpi, weight, width, depth, height,
    heightPalletization) {
        this.name = name;
        this.isActive = isActive;
        this.lines = lines;
        this.tpi = tpi;
        this.weight = weight; // in grams
        this.width = width; // in inches
        this.depth = depth; // in inches
        this.height = height; // in inches
        this.heightPalletization = heightPalletization; // in inches
}
