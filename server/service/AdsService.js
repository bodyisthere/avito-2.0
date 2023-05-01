import { ApiError } from "../exceptions/ApiError.js";
import AutoNewModel from "../models/ads/transport/Auto/AutoNewModel.js";
import AutoRunModel from "../models/ads/transport/Auto/AutoRunModel.js";

const tags = [
  {
    tag: ['Транспорт', 'Автомобили', 'С пробегом'],
    model: AutoRunModel,
  },
  {
    tag: ['Транспорт', 'Автомобили', 'Новый'],
    model: AutoNewModel,
  },
]


const findCategory = (t) => {
  let iCount = 0;
  let result = false;
  while(tags.length - 1 >= iCount && !result) {
    if(JSON.stringify(tags[iCount].tag) === JSON.stringify(t)) {
      let result = true;
      result = tags[iCount];
      return result.model;
    }
    iCount += 1;
    return result;
  }
}

class AdsService {
  async post(body, userId) {
    const model = findCategory(body.tags);
    if(!model) throw ApiError.BadRequest('Тегов, которые вы указали не существует');

    body.meetingPoint = '321'
    const form = {
      data: body,
      owner: userId,
    };
    const result = await model.create(form)

  }
}

export default new AdsService();