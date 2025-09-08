

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

export function bottleManager() {
    let bottles = [];
    
    function createBottle(name,
        isActive,
        lines = '',
        tpi,
        weight,
        width,
        depth,
        height,
        heightPalletization
        ) {
            const bottle = {};
            bottle.name = name;
            bottle.isActive = isActive;
            bottle.lines = lines;
            bottle.tpi = tpi;
            bottle.weight = weight;
            bottle.width = width;
            bottle.depth = depth;
            bottle.height = height;
            bottle.heightPalletization = heightPalletization;
            bottles.push(bottle);
        }
}