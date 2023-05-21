import { basic, fsibl, mgbl, ncc, rbl, sjibl } from "@/public";
import { BoothComponent } from "../components";
import {
  basicBoothList,
  fsiblBoothList,
  mgblBoothList,
  nccBoothList,
  rblBoothList,
  sjiblBoothList,
} from "../constants/atmBooth";
import styles from "../styles/style";

export default function AtmList() {
  return (
    <div
      id="boothlist"
      className={`${styles.boxWidth} ${styles.paddingX} mx-auto my-5 atm-bg `}
    >
      <h2
        className={`text-center ${styles.heading2} ${styles.paddingY} qpay-gradient`}
      >
        ATM Booth List
      </h2>
      <BoothComponent boothList={rblBoothList} bankImage={rbl} />
      <BoothComponent boothList={nccBoothList} bankImage={ncc} />
      <BoothComponent boothList={fsiblBoothList} bankImage={fsibl} />
      <BoothComponent boothList={sjiblBoothList} bankImage={sjibl} />
      <BoothComponent boothList={mgblBoothList} bankImage={mgbl} />
      <BoothComponent boothList={basicBoothList} bankImage={basic} />
    </div>
  );
}
