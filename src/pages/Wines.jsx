import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import WineComponent from "../components/WineComponent";
import styles from "./Wines.module.css";

const BASE_URL = "https://api.spoonacular.com/food/wine/pairing";
function Wine() {
  const [foodSearch, setfoodSearch] = useState("");
  const [containerData, setContainerData] = useState({});
  const [change, setChange] = useState(false);
  const [searchValid, setSearchValid] = useState(true);
  function handelSubmit(e) {
    e.preventDefault();
    setChange(!change);
    setSearchValid(true);
  }

  function workingData(data) {
    if (data.productMatches && data.productMatches.length > 0) {
      setContainerData((containerData) => ({
        ...containerData,
        pairedWines: data.pairedWines,
        pairingText: data.pairingText,
        pairingTitle: data.productMatches[0].title,
        pairingImage: data.productMatches[0].imageUrl,
        productPrice: data.productMatches[0].price.slice(1),
      }));
    } else {
      setContainerData({});
      setSearchValid(false);
    }
  }

  useEffect(
    function () {
      async function fetchWine() {
        try {
          const res = await fetch(
            `${BASE_URL}?apiKey=39e199267dc14acc94501a7d7793d279&food=${foodSearch}`
          );
          const data = await res.json();
          workingData(data);
        } catch {
          throw new Error("error");
        }
      }
      if (change) {
        fetchWine();
        setChange(false);
      }
    },
    [change, foodSearch]
  );
  return (
    <div>
      <Navbar />
      <Pagelist />
      <div className={styles.wineMainContainer}>
        <h2 className={styles.wineHeader}>
          Find the perfect wine pairing for your meal!
        </h2>
        <form className={styles.wineFormContainer} onSubmit={handelSubmit}>
          <h3 className={styles.wineFormHeader}>
            Search for a meal or a cuisine.
          </h3>
          <input
            type="search"
            placeholder="ex:chicken, steak, italian.."
            className={styles.wineFormInput}
            value={foodSearch}
            onChange={(e) => setfoodSearch(e.target.value)}
          />
          <button className={styles.wineFormButton}>search</button>
        </form>
        <div className={styles.wineComponentContainer}>
          <WineComponent
            containerData={containerData}
            searchValid={searchValid}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Wine;
