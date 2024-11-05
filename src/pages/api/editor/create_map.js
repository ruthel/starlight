import {v2 as cloudinary} from 'cloudinary';
const Map = require('./../helpers/models/map')

export default async function Handler(req, res) {
  try {
    let object = req.body
    const imgObj = await cloudinary.uploader.upload(object.data, {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    })
    object.data = imgObj.url
    let result = JSON.parse(JSON.stringify(await Map.create(object)));
    return res.status(201).json(result)
  } catch (e) {
    console.log(e)
    return res.status(500)
  }
}