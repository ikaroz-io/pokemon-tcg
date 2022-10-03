export type ElementType =
  "Colorless" |
  "Water" |
  'Fire' |
  'Grass' |
  'Fairy' |
  'Darkness' |
  'Psychic' |
  'Dragon' |
  'Lightning' |
  'Fighting' |
  'Metal'

export interface CardList {
  data: Card[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export interface Card {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  level: number
  hp: number
  types: string[]
  evolvesFrom: string
  abilities: Ability[]
  attacks: Attack[]
  weaknesses: Weakness[]
  retreatCost: ElementType[]
  convertedRetreatCost: number
  set: CardSet
  number: number
  artist: string
  rarity: string
  flavorText: string
  nationalPokedexNumbers: number[]
  legalities: {
    unlimited: string[]
  }
  images: {
    small: string
    large: string
  }
  tcgplayer: TcgPlayer
  cardmarket: CardMarket
}

export interface Ability {
  name: String
  text: String
  type: String
}

export interface Attack {
  name: String
  cost: String[]
  convertedEnergyCost: number
  damage: number
  text: String
}

export interface Weakness {
  type: string
  value: string
}

export interface CardSet {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: {
    unlimited: string[]
  }
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: {
    symbol: string
    logo: string
  }
}

export interface TcgPlayer {
  url: string
  updatedAt: string
  prices: {
    holofoil: {
      low: number
      mid: number
      high: number
      market: number
      directLow: number
    }
  }
}

export interface CardMarket {
  url: string
  updatedAt: string
  prices: {
    averageSellPrice: number
    lowPrice: number
    trendPrice: number
    reverseHoloTrend: number
    lowPriceExPlus: number
    avg1: number
    avg7: number
    avg30: number
    reverseHoloAvg1: number
    reverseHoloAvg7: number
    reverseHoloAvg30: number
  }
}
