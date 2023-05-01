import { categoryReducer, categoryActions } from "./categorySlice";
import { ICategory } from "../../../types/ICategory";


describe("Тест category-reducer", () => {
  let categoryArray: ICategory[];

  beforeAll(() => {
    categoryArray = [
      {
        _id: "321321321",
        category: "тест",
        chapter: [
          {title: "тест", subchapter: ["тест", "тест"]},
          {title: "тест", subchapter: ["тест", "тест"]},
        ],
      },
      {
        _id: "51521521",
        category: "тест2",
        chapter: [
          {title: "тест2", subchapter: ["тест2", "тест2"]},
          {title: "тест2", subchapter: ["тест2", "тест2"]},
        ],
      },
    ];
  });
  
  test("Тест с пустым массивом", () => {
    expect(categoryReducer([], categoryActions.setCategories([]))).toHaveLength(0);
  });

  test("Тест с заполненным массивом", () => {
    expect(categoryReducer([], categoryActions.setCategories(categoryArray))).toHaveLength(2);
  });

});