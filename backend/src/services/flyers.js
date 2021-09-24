import { readFromCsv } from '../utils/readFromCsv';
import path from 'path';

const DATA_SRC_PATH = path.join(__dirname, '../../data/', 'flyers_data.csv');

export default {
  getAll: async (page, limit, date) => {
    const { parsedData, count } = await readFromCsv(DATA_SRC_PATH, page, limit, date);
    
    return {
      data: parsedData,
      paging: {
        page,
        limit,
        lastPage: Math.ceil(count/limit)
      }
    }
  }
}