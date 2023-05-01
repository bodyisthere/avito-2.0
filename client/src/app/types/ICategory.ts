type TChapter = {
  title: string,
  subchapter: string[],
}

export interface ICategory {
  _id: string,
  category: string,
  chapter: TChapter[]
}