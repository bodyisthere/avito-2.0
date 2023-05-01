export interface IChooseSubchapter {
  setActiveSubChapter: React.Dispatch<React.SetStateAction<number | null>> 
  setCategory: React.Dispatch<React.SetStateAction<string[] | []>>
  activeChapter: number | null
  activeCategory: number | null
  activeSubChapter: number | null
  submitCategory: () => void
}