import { create } from "zustand";

const useTrend = create((set) => ({
  store: [
    {
      id:1,
      name: "React.js",
      des: "Learn to build dynamic web applications using React.js, focusing on component-based architecture and interactive user interfaces.",
      duration: "90 Days",
      day: "4 hrs / day",
      can: "40 Candidates",
      skillgap: "35%",
      per: "30-35%",
    },
    {
      id:2,
      name: "Next.js",
      des: "Learn to build dynamic web applications using Next.js, focusing on component-based architecture and interactive user interfaces.",
      duration: "90 Days",
      day: "4 hrs / day",
      can: "40 Candidates",
      skillgap: "35%",
      per: "30-35%",
    },
    {
      id:3,
      name: "ORM",
      des: "Learn to build dynamic web applications using React.js, focusing on component-based architecture and interactive user interfaces.",
      duration: "90 Days",
      day: "4 hrs / day",
      can: "40 Candidates",
      skillgap: "35%",
      per: "30-35%",
    },
  ],
}));

export default useTrend;
