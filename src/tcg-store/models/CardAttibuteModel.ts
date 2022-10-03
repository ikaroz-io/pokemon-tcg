

export interface CardSet {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: {
    unlimited: string
  }
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: {
    symbol: string
    logo: string
  }
}

export interface IPagination<T> {
  data: T[]
  page?: number
  pageSize?: number
  count?: number
  totalCount?: number
}

export interface CardRarity {
  data: string[]
}

export interface CardType {
  data: string[]
}