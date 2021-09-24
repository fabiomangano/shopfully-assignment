import FlyerService from '../services/flyers';

export default {
  async getAllFlyers(req, res) {
    if (!req.query.page || !req.query.limit || !req.query.date) {
      return res.status(400).json("Malformed Request");
    }

    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const date = req.query.date;

      const data = await FlyerService.getAll(page, limit, date);

      res.status(200).json(data);

    } catch (err) {
      res.status(500).json("Internal Server Error");
    }
  },
}