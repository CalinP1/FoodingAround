import styles from "./WineComponent.module.css";
function WineComponent({ containerData }) {
  const { pairedWines, pairingText, pairingTitle, pairingImage, productPrice } =
    { ...containerData };

  if (!pairingText) {
    return (
      <div className={styles.placeHolderContainer}>
        <h2>Your meal is waiting for your search</h2>
        <img alt="wine-placeholder" src="../../images/wine.png" />
      </div>
    );
  }
  return (
    <div className={styles.wineComponentMain}>
      <div className={styles.wineMainContainer}>
        <div className={styles.wineMainContainerLeft}>
          <div className={styles.wineLeftPaired}>
            <p className={styles.wineLeftPairedList}>{pairedWines}</p>
          </div>
          <div className={styles.wineLeftPairedDescription}>
            <p>{pairingText}</p>
          </div>
        </div>
        <div className={styles.wineMainContainerRight}>
          <div className={styles.containerRightImage}>
            <img src={pairingImage} alt="wine-image" />
          </div>
          <div className={styles.containerRightDescription}>
            <h2 className={styles.descriptionTitle}>{pairingTitle}</h2>
            <p className={styles.descriptionPrice}>
              ${parseFloat(productPrice).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineComponent;
