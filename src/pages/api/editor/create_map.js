const Map = require('./../helpers/models/map')
const {Jimp} = require('jimp');
const path = require('path');
const fs = require('fs');

export default async function Handler(req, res) {
  try {
    let object = req.body
    // const base64Data = object.data?.replace(/^data:image\/\w+;base64,/, '') || '';
    // const buffer = Buffer.from(base64Data, 'base64');
    // const folderPath = path.join('.', 'uploads');
    // if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
    // let image = await Jimp.fromBuffer(buffer)
    // let file_path = path.join(folderPath, `map_${Date.now()}.png`)
    // image.write(file_path).then()
    // object.data = file_path
    // object.data = buffer
    let result = JSON.parse(JSON.stringify(await Map.create(object)));
    return res.status(201).json(result)
  } catch (e) {
    console.log(e)
    return res.status(500)
  }
}