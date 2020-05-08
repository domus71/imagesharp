const express = require('express');
const sharp = require('sharp');
const config = require('./config.json');
const port = config.port;

const app = express();

//Disable file/memory caching
sharp.cache(false);

app.get('/', function(req, res) {
    res.send('Sharp Image Processing System')
})

app.get('/generate', async (req,res) => {
    try{
        let source = req.query.source;
        let dest = req.query.dest;
        let width = (req.query.width=='0')?null:parseInt(req.query.width);
        let height = (req.query.height=='0')?null:parseInt(req.query.height);
        let fileExt = dest.split('.').pop();
        let quality = parseInt(req.query.quality) || 80;
        let lossless = (strToBool(req.query.lossless)) ? true : false;
        let progressive = (strToBool(req.query.progressive)) ? true : false;

        const image = sharp(source);

        await image.withMetadata()
		if( width != null || height != null )await image.resize(width,height)
        switch(fileExt){
            case 'png':
                await image.png({quality: quality, progressive: progressive});
                break;
            case 'jpg':
                await image.jpeg({quality: quality, progressive: progressive});
                break;
            case 'webp':
                await image.webp({quality: quality, lossless: lossless});
                break;
        }
                
        await image.toFile(dest);
        res.send(dest);
        // console.log(source +' -> '+ dest);
    }catch(e){
        res.send(e.message);
        // console.error(e);
    }
});

app.listen(port, console.log.bind(console, 'Listening on port ' + port));

function strToBool(s) {
    // will match one and only one of the string 'true','1', or 'on' regardless
    // of capitalization and regardless off surrounding white-space.
    let regex=/^\s*(true|1|on)\s*$/i;
    return regex.test(s);
}
