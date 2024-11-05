export default async function Handler(req, res) {
  try {
    try {
      let path = atob(req.query.media)
      res.sendFile(path, {root: '.'})
    } catch (e) {
      res.sendFile(req.query.media, {root: '.'})
    }
  } catch (e) {
    console.log(e)
    res.status(500)
  }
}