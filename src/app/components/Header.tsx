/** @jsxImportSource theme-ui */
import { Flex, Box } from "theme-ui";
import { useEffect, useState } from "react";
import { Input } from "theme-ui";
import useDebounce from "../utils/useDebounce";
import { useDispatch } from 'react-redux'
import { filterName } from '../../tcg-store/reducer/StoreSlice'
import './header.scss'


// Header components for card store
const Header = ( props: any) => {
  const {searchHandler} = props
  const [searchName, setSearchName] = useState("");
  const debouncedSearchName = useDebounce(searchName, 500);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    if(debouncedSearchName && searchName !== ""){
      console.log('searchName',searchName)
      searchHandler(searchName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchName])


// Create custom function for debounce in put (delay api call for xx ms.)
  function useDebounce(value:any, delay:number) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
  }

  return (
    <div className="flex flex-row flex-wrap">
      <Box py={30} color="white" className="flex-auto sm:flex-1">
        <p className="title">Pokémon market</p>
      </Box>

      <div className="header-elem w-full sm:w-auto">
        <div className="relative w-full text-white focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input
            type="search"
            name="searchName"
            className="search-box py-4 text-sm text-gray-500 bg-transparent rounded-md pl-10 focus:outline-none focus:border-white focus:text-white placeholder:text-white"
            placeholder="Search by Name"
            onChange={(e)=>{dispatch(filterName(e.target.value))}}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="cart-btn">
        <button onClick={props.onShowCart} sx={{variant: 'buttons.primary', borderRadius:'8px', width:'48px', height:'48px'}}>
          <img className="mx-auto" src={require('../../assets/shopping-bag.png')} />
        </button>
        
      </div>
    </div>
  );
};

export default Header;
