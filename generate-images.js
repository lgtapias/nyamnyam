const sharp = require('sharp'); // Llibreria Sharp per processar imatges
const fs = require('fs'); // Llibreria per gestionar fitxers
const path = require('path'); // Llibreria per gestionar rutes

// Carpeta de les imatges originals
const inputFolder = '/Users/admin/Documents/pac1/src/assets/';

// Carpeta de destí per guardar les imatges optimitzades
const outputFolder = '/Users/admin/Documents/pac1/src/assets/optimized/';

// Resolucions desitjades
const resolutions = [
    { suffix: '1x', width: 400 },
    { suffix: '2x', width: 800 },
    { suffix: '3x', width: 1200 },
];

// Comprovar si la carpeta de destí existeix; si no, crear-la
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

// Llegir totes les imatges de la carpeta d'entrada
fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('Error llegint la carpeta d\'entrada:', err);
        return;
    }

    // Filtrar només fitxers d'imatges (jpg, jpeg, png)
    const imageFiles = files.filter(file =>
        /\.(jpg|jpeg|png)$/i.test(file)
    );

    // Processar cada imatge
    imageFiles.forEach(file => {
        const inputFilePath = path.join(inputFolder, file);

        resolutions.forEach(({ suffix, width }) => {
            const outputFilePath = path.join(
                outputFolder,
                `${path.parse(file).name}-${suffix}${path.extname(file)}`
            );

            // Redimensionar la imatge
            sharp(inputFilePath)
                .resize(width)
                .toFile(outputFilePath, (err) => {
                    if (err) {
                        console.error(`Error processant ${file} (${suffix}):`, err);
                    } else {
                        console.log(`Imatge generada: ${outputFilePath}`);
                    }
                });
        });
    });
});