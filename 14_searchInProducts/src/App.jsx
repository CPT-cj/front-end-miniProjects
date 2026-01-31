import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import SearchInput from "./components/search-input";
import Products from "./components/products";
import productsData from "./../data/products.js";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([...productsData]);
  const [debouncedValue, setDebouncedValue] = useState("");

  // const clearSearchResult = () => {
  //   setSearchValue("");
  //   setProducts([...productsData]);
  // };

  // const handleSearch = () => {
  //   const foundedProducts = productsData.filter((product) =>
  //     product.title.includes(searchValue)
  //   );

  //   setProducts(foundedProducts);
  // };

  // useEffect(() => {
  //   handleSearch();
  // }, [searchValue]);

  // -------------------------------------------------debounced---------------------------------------------

  const clearSearchResult = () => {
    setSearchValue("");
    setProducts([...productsData]);
  };

  const handleSearch = () => {
    const foundedProducts = productsData.filter((product) =>
      product.title.includes(searchValue),
    );

    setProducts(foundedProducts);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearch();
    }, 250);

    return () => clearTimeout(handler); // return ==> unmounting
  }, [searchValue]);

  return (
    <div id="content">
      <Header />

      <SearchInput
        inputValue={searchValue}
        onChange={(value) => {
          setSearchValue(value);
        }}
      />

      <Products
        products={products}
        isSearchedSomething={String(searchValue).length}
        onClearSearchResult={clearSearchResult}
      />

      <Footer />
    </div>
  );
}
