import Image from "next/image";
import { banks } from "../constants";
import styles from "../styles/style";

const Banks = () => {
  return (
    <div className="bank-bg">
      <section id="banks" className={` ${styles.boxWidth} mx-auto`}>
        <h2
          className={`text-center ${styles.heading2} ${styles.paddingY} qpay-gradient`}
        >
          Bank & Financial Institite
        </h2>

        <div className={` ${styles.flexStart}  flex-row flex-wrap`}>
          {banks.map((bank) => (
            <div key={bank.alt}>
              <div className="p-1 w-[190px] h-[120px] shadow-xl hover:shadow-md  mx-2 rounded-md my-3 flex  justify-center items-center flex-col">
                <Image
                  src={bank.img}
                  className=" object-contain"
                  alt={bank.alt}
                  priority
                />
                <h1>{bank.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banks;
