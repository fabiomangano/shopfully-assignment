import parse from 'csv-parse';
import moment from 'moment';
import fs from 'fs';


export const createParser = (path, date) => {
  return fs
    .createReadStream(path)
    .pipe(parse({
      columns: true,
      on_record: (record) =>
        ((record.is_published !== '0') && 
        moment(record.end_date,"YYYY-MM-DD")
        .utc()
        .isAfter(moment(date,"YYYY-MM-DD").utc()))
        ? record : null
    }));
};

export const readFromCsv = async (path, page, limit, date) => {
  const start_pointer = (page - 1) * limit;
  const end_pointer = start_pointer + limit;
  let current_pointer = 1;
 
  const records = [];
  const parser = createParser(path, date);

  for await (const record of parser) {
    if ((current_pointer > start_pointer) && (current_pointer <= end_pointer)) {
      records.push(record);
    };
    current_pointer++;
  };

  parser.destroy();

  return {
    parsedData: records,
    count: current_pointer,
  };
};
