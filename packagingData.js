

const fileInput = document.querySelector('#fileInput');
fileInput.value = '';

let fileContent = "";

function readFile() {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        fileContent = reader.result;
        contentArr = fileContent.split('\r\n'); // split on new line
        var bottles = []; // empty array to hold all objects
        var headers = contentArr[0].split(','); // set headers array
        for(var i = 1; i < contentArr.length; i++) {
            var data = contentArr[i].split(','); // split each line by comma
            var obj = {};
            for (var j = 0; j < data.length; j++) {
                obj[headers[j]] = data[j];
            }
            bottles.push(obj);
        }
        console.log(bottles);
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

/* function bottleManager() {
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
    };

    function getBottles() {
        return [...bottles];
    };

    return { createBottle, getBottles};
}
 */
