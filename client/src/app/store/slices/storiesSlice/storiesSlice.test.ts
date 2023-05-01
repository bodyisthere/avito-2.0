import { storiesReducer, storiesActions } from "./storiesSlice";

describe("Тест stories-reducer", () => {
  test("Открытие или закрытие поп-апа со стори", () => {
    expect(storiesReducer({isOpen: false}, storiesActions
      .toggleOpen()))
      .toEqual({isOpen: true});

    expect(storiesReducer({isOpen: true}, storiesActions
      .toggleOpen()))
      .toEqual({isOpen: false});
  });
});