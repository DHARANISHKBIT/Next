import { create } from "zustand";


type StoreItem = {
  title: string;
  des: string;
  duration: string;
  day: string;
  can: string;
  circle: string;
  skillgap: string;
  per: string;
};

type TrendStore = {
  store: StoreItem[];
};

const useTrend = create<TrendStore>((set) => ({
  store: [
    {
      title: "React.js",
      des: "Learn to build dynamic web applications using React.js, focusing on component-based architecture and interactive user interfaces.",
      duration: "90 Days",
      day: "4 hrs / day",
      can: "40 Candidates",
      circle: "/path-to-circle-icon.svg",
      skillgap: "35%",
      per: "30-35%",
    },
    // {
    //   title: "React.js",
    //   des: "Learn to build dynamic web applications using React.js, focusing on component-based architecture and interactive user interfaces.",
    //   duration: "90 Days",
    //   day: "4 hrs / day",
    //   can: "40 Candidates",
    //   circle: "/path-to-circle-icon.svg",
    //   skillgap: "35%",
    //   per: "30-35%",
    // },
  ],
}));

export default useTrend;
