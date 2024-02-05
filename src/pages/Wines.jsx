import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagelist from "../components/Pagelist";
import WineComponent from "../components/WineComponent";
import styles from "./Wines.module.css";

const BASE_URL = "https://api.spoonacular.com/food/wine/pairing";
function About() {
  const [foodSearch, setfoodSearch] = useState("");
  const [containerData, setContainerData] = useState({});
  const [change, setChange] = useState(false);
  function handelSubmit(e) {
    e.preventDefault();
    console.log(foodSearch);
    setChange(!change);
  }

  function workingData(data) {
    setContainerData((containerData) => ({
      ...containerData,
      pairedWines: data.pairedWines,
      pairingText: data.pairingText,
      pairingTitle: data.productMatches[0].title,
      pairingImage: data.productMatches[0].imageUrl,
      productPrice: data.productMatches[0].price.slice(1),
    }));
  }
  //pairedWines, pairingText, productMatches.title, productMatches.imageUrl, productMatches.price
  useEffect(
    function () {
      async function fetchWine() {
        try {
          const res = await fetch(
            `${BASE_URL}?apiKey=39e199267dc14acc94501a7d7793d279&food=${foodSearch}`
          );
          const data = await res.json();
          workingData(data);
          console.log(data);
        } catch {
          throw new Error("EROAREEE");
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
            placeholder="ex: chicken, steak, italian.."
            className={styles.wineFormInput}
            value={foodSearch}
            onChange={(e) => setfoodSearch(e.target.value)}
          />
          <button className={styles.wineFormButton}>search</button>
        </form>
        <div className={styles.wineComponentContainer}>
          <WineComponent containerData={containerData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
