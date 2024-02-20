import ErrorComponent from "./ErrorComponent";
import styles from "./WineComponent.module.css";
import { PropTypes } from "prop-types";
function WineComponent({ containerData, searchValid }) {
  const { pairedWines, pairingText, pairingTitle, pairingImage, productPrice } =
    { ...containerData };

  if (!searchValid) {
    return <ErrorComponent />;
  }
  if (!pairingText) {
    return (
      <div className={styles.placeHolderContainer}>
        <h2>Your meal is waiting for a partner!</h2>
        <img alt="wine-placeholder" src="../../images/wine.png" />
      </div>
    );
  }
  return (
    <div className={styles.wineComponentMain}>
      <div className={styles.wineMainContainer}>
        <div className={styles.wineMainContainerLeft}>
          <div className={styles.wineLeftPaired}>
            {pairedWines.map((wine, index) => (
              <p key={index} className={styles.wineDisplay}>
                {wine}
              </p>
            ))}
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
            <p>${parseFloat(productPrice).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
WineComponent.propTypes = {
  containerData: PropTypes.shape({
    pairedWines: PropTypes.string,
    pairingText: PropTypes.string,
    pairingTitle: PropTypes.string,
    pairingImage: PropTypes.string,
    productPrice: PropTypes.string,
  }),
  searchValid: PropTypes.bool,
};
export default WineComponent;
