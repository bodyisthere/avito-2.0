export interface IChooseChapter {
  setActiveSubChapter: React.Dispatch<React.SetStateAction<number | null>> 
  setCategory: React.Dispatch<React.SetStateAction<string[] | []>>
  activeChapter: number | null
  activeCategory: number | null
  setActiveChapter: React.Dispatch<React.SetStateAction<number | null>>
}