import Link from "next/link";
import { helpMenuLink } from "../constants";

const HelpMegaMenu = () => {
  return (
    <>
      <div
        className={` p-6 help-mega-menu mb-4 sm:mb-0  shadow-sm shadow-qpaytwo bg-white rounded-xl`}
      >
        <div className="container m-auto w-full flex flex-wrap justify-between items-center ">
          {helpMenuLink.map((item) => (
            <div key={item.title} className="text-black">
              <Link
                href={`/help${item.link}`}
                className="hover:text-qpayone active:text-black text-black mt-10"
              >
                <h4>{item.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HelpMegaMenu;
