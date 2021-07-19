import fs from 'fs';

class PicturesController {
    async create(req, res) {
        try {
            const { files } = req;
            const quantity = files.length;   
    
            if(quantity === 0) 
            return res.status(400).send({ 
                error: 'Check if the file was sent or check the accepted file formats which are: png or jpeg'
            });
            
            const path = files[0].path;

            const contents = fs.readFileSync(`${path}`, {encoding: 'base64'});
            fs.unlinkSync(path);
            return res.status(200).send({ base64: contents});         

        } catch (error) {
            res.status(400).send({ error: error.message});
        }
    }
}

export { PicturesController }