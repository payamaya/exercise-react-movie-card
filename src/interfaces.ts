export interface IAddMovie {
  title: string
  rating: number
  select: string
  textarea: string
  image: File | null // Add image field
}

export interface IOption {
  lable: string
  value: string
  id: number
}
