// import * as Cardfrom '../models/CardModel'
import { CardList, CardSet } from "../models/CardModel"
import { CardRarity, CardSet as CardSetDetail, CardType} from '../models/CardAttibuteModel'
import { get } from '../../app/network/HttpConnection'
import { IPagination } from "../models/CardAttibuteModel"

export default class CardApi {
  // a set of URL endpoint
  static URL = {
    GET_CARD_LIST: 'https://api.pokemontcg.io/v2/cards',
    GET_CARD_RARITY: 'https://api.pokemontcg.io/v2/rarities',
    GET_CARD_TYPE: 'https://api.pokemontcg.io/v2/types',
    GET_CARD_SET: 'https://api.pokemontcg.io/v2/sets',
  }

  public static async getCardList(pageNo:number, pageSize:number, searchTerm?:string) : Promise<CardList> {
    const params = {
      page: pageNo < 1 ? 1 : pageNo,
      pageSize: pageSize < 1 ? 1 : pageSize,
      q: searchTerm && searchTerm !== "" ? searchTerm : ""
    }
    const res = await get<CardList>(this.URL.GET_CARD_LIST, { params })
    return res.data
  }

  public static async getRarityList(pageNo:number, pageSize:number, searchTerm?:string) : Promise<String[]> {
    const params = {
      pageNo: pageNo < 1 ? 1 : pageNo,
      pageSize: pageSize < 1 ? 1 : pageSize,
      q: searchTerm && searchTerm !== "" ? searchTerm : ""
    }
    const res = await get<CardRarity>(this.URL.GET_CARD_RARITY, { params })
    return res.status === 200 ? res.data.data : [] 
  }

  public static async getCardSetList(pageNo:number, pageSize:number, searchTerm?:string) : Promise<CardSetDetail[]> {
    const params = {
      pageNo: pageNo < 1 ? 1 : pageNo,
      pageSize: pageSize < 1 ? 1 : pageSize,
      q: searchTerm && searchTerm !== "" ? searchTerm : ""
    }
    const res = await get<IPagination<CardSetDetail>>(this.URL.GET_CARD_SET, { params })
    return res.status === 200 ? res.data.data : []
  }

  public static async getCardTypeList() : Promise<string[]> {
    const res = await get<CardType>(this.URL.GET_CARD_TYPE, { })
    return res.status === 200 ? res.data.data : []
  }
}
