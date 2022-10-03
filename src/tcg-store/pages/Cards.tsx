/** @jsxImportSource theme-ui */

import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../models/CardModel";
import CardApi from "../apis/CardApi";
import ProductItem from "../components/ProductItem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Header from "../../app/components/Header";
import Selector from "../../app/components/Selector";
import { CardSet } from "../models/CardAttibuteModel";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import {
  filterCardSet,
  filterRarity,
  filterType,
  addCart,
} from "../reducer/StoreSlice";
import CartDrawer from "../components/CartDrawer";

const DEFAULT_PAGE_NO = 1;
const DEFAULT_PAGE_SIZE = 20;

const Cards: FunctionComponent = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardSetList, setCardSetList] = useState<any[]>([]);
  const [cardRarityList, setCardRarityList] = useState<any[]>([]);
  const [cardTypeList, setCardTypeList] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [searchParam, setSearchParams] = useSearchParams();

  // I store all filter value in same object to Redux store
  // and keep tracking the value, if the value have chage 
  // useEffect will be execute and call to the api.
  // this way of storeing filter value in the Redux make life easier when splitting 
  // the input in other component
  const filter = useSelector((state: any) => state.store.storeFilter);
  const dispatch = useDispatch();

  // Call Only FIRST TIME to retrieve all `Select` options
  useEffect(() => {
    console.log("searchParam", searchParam);
    CardApi.getCardList(
      Number(searchParam.get("pageNo")),
      DEFAULT_PAGE_SIZE
    ).then((data) => {
      setCards(data.data);
    });

    //init card set selector options
    CardApi.getCardSetList(DEFAULT_PAGE_NO, DEFAULT_PAGE_SIZE).then(
      (data: CardSet[]) => {
        const cardSetOption = data.map((d) => ({ key: d.name, value: d.id }));
        setCardSetList([{ key: "Set", value: "" }, ...cardSetOption]);
      }
    );

    //init card rarity selector options
    CardApi.getRarityList(DEFAULT_PAGE_NO, DEFAULT_PAGE_SIZE).then(
      (data: String[]) => {
        const cardRarityOption = data.map((d) => ({ key: d, value: d }));
        setCardRarityList([{ key: "Rarity", value: "" }, ...cardRarityOption]);
      }
    );

    //init card type selector options
    CardApi.getCardTypeList().then((data: String[]) => {
      const cardTypeOption = data.map((d) => ({ key: d, value: d }));
      setCardTypeList([{ key: "Type", value: "" }, ...cardTypeOption]);
    });
  }, []);

  //Call API to get the card list whenever the filter have changed
  useEffect(() => {
    searchHandler(filter);
  }, [filter]);

  const searchHandler = async (filter: any) => {
    // compose the search query
    let searchTerm = "";
    if (filter?.cardSetFilter)
      searchTerm = searchTerm + `set.id:${filter.cardSetFilter} `;
    if (filter?.rarityFilter) searchTerm += `rarity:"${filter.rarityFilter}" `;
    if (filter?.typeFilter) searchTerm += `types:"${filter.typeFilter}" `;
    if (filter?.nameFilter) searchTerm += `name:${filter.nameFilter}* `;

    CardApi.getCardList(DEFAULT_PAGE_NO, DEFAULT_PAGE_SIZE, searchTerm).then(
      (data) => {
        setCards(data.data);
      }
    );
  };

  // dispatch action to Redux Store to add a item to cart
  const handleAddCart = (
    id: number,
    name: string,
    price: number,
    image: string
  ) => {
    dispatch(addCart({ id, name, price, image, qty: 1 }));
  };

  return (
    <div className="store-wrapper w-full sm:w-5/6 mx-auto px-4 sm:px-12 pb-12">
      <Header
        searchHandler={searchHandler}
        onShowCart={() => setShowCart(true)}
      />
      <hr style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }} />
      <div className="flex flex-row flex-wrap sm:flex-nowrap">
        <h2 className="py-6 sm:py-12 block flex-auto sm:flex-1">
          Choose Card!
        </h2>
        <div className="flex flex-row gap-4">
          <Selector
            style={{ maxWidth: "150px" }}
            value={filter?.cardSetFilter}
            onChange={(e: any) => {
              dispatch(filterCardSet(e.target.value));
            }}
            className="my-auto"
            options={cardSetList}
          />
          <Selector
            value={filter?.rarityFilter}
            onChange={(e: any) => {
              dispatch(filterRarity(e.target.value));
            }}
            className="my-auto"
            options={cardRarityList}
          />
          <Selector
            value={filter?.typeFilter}
            onChange={(e: any) => {
              dispatch(filterType(e.target.value));
            }}
            className="my-auto"
            options={cardTypeList}
          />
        </div>
      </div>
      <div className="list-container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {" "}
        {cards.map((item) => {
          return <ProductItem item={item} handleAddCart={handleAddCart} />;
        })}{" "}
      </div>
      <Drawer
        open={showCart}
        onClose={() => {
          setShowCart(false);
        }}
        direction="right"
        size={396}
      >
        <CartDrawer
          onClose={() => {
            setShowCart(false);
          }}
        />
      </Drawer>
    </div>
  );
};

export default Cards;
