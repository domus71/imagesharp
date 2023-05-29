const sharp = require("sharp");
const exif = require("exif-reader");
const source = "C:\\CostisWork\\NodeJS\\imagesharp\\demo\\generic.jpg";
const destanation =
  "C:\\CostisWork\\NodeJS\\imagesharp\\demo\\generic_exif.jpg";

(async () => {
  const image = await sharp(source)
    .withMetadata({
      exif: {
        IFD0: {
          Copyright: "EnergyPhotos.gr",
          Artist: "EnergyPhotos.gr",
          Software: "EnergyPhotos Processing Software",
        },
      },

      exifReplace: true,
    })
    .toFile(destanation);

  const metadata = await sharp(destanation).metadata();
  const exifData = await exif(metadata.exif);
  // console.log(metadata.exif.toString("ascii", 0, 5));
  console.log(exifData);
})();
