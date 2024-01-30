import styles from "./WineComponent.module.css";
function WineComponent() {
  return (
    <div className={styles.wineComponentMain}>
      <div className={styles.wineMainContainer}>
        <div className={styles.wineMainContainerLeft}>
          <div className={styles.wineLeftPaired}>
            <ul className={styles.wineLeftPairedList}>
              <li>merlot</li>
              <li>cabernet sauvignon</li>
              <li>pinot noir</li>
            </ul>
          </div>
          <div className={styles.wineLeftPairedDescription}>
            <p>
              Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for
              Steak. After all, beef and red wine are a classic combination.
              Generally, leaner steaks go well with light or medium-bodied reds,
              such as pinot noir or merlot, while fattier steaks can handle a
              bold red, such as cabernet sauvingnon. The Sterling Vineyards
              Merlot with a 5 out of 5 star rating seems like a good match. It
              costs about 29 dollars per bottle.
            </p>
          </div>
        </div>
        <div className={styles.wineMainContainerRight}>
          <div className={styles.containerRightImage}>
            <img
              src="https://spoonacular.com/productImages/428278-312x231.jpg"
              alt="wine-image"
            />
          </div>
          <div className={styles.containerRightDescription}>
            <h2 className={styles.descriptionTitle}>
              Sterling Vineyards Merlot
            </h2>
            <p className={styles.descriptionRating}>
              Rating: 5 <span></span>
            </p>
            <p className={styles.descriptionPrice}>$28.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineComponent;
