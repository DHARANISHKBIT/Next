"use client"
import Trend from "./Component/Trend";
import useTrend from "../../../compentents/Store/Zustand";

export default function Page() {
  
  const { store } = useTrend();

  // console.log(store);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {store.map((item, index) => (
        <Trend
          key={index}
          title={item.title}
          des={item.des}
          duration={item.duration}
          day={item.day}
          can={item.can}
          skillgap={item.skillgap}
          per={item.per}
          img={item.img}
        />
      ))}
    </div>
  );
}
