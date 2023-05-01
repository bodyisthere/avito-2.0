export interface IChooseCategory {
  setActiveCategory: React.Dispatch<React.SetStateAction<number | null>>
  setActiveChapter: React.Dispatch<React.SetStateAction<number | null>> 
  setCategory: React.Dispatch<React.SetStateAction<string[] | []>>
  activeCategory: number | null
}