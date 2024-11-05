const {sendProduct} = require("./../helpers/mail");
const Map = require('./../helpers/models/map')
export default async function Handler(req, res) {
  let map = JSON.parse(JSON.stringify(await Map.findOne({where: {id: req.body.id}})))
  let mail = await sendProduct(map)
  console.log(map.data)
  res.status(200).json(mail)
}