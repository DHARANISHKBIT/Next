import { ImTextColor } from "react-icons/im";
import {create} from "zustand"

type  StoreItem = {
    sort:string;
    tittle:string;
    emp:string;
    pro:number;
    color:string[],
    col:string,
    key:number;
    num:string;
    bgcolor:string;
    textcolor:string

}

type GapStore = {
    store: StoreItem[];
};

const Usegap = create((set) => ({
   store : [
    {
        key:5,
        num:"5 / Pages",
        sort:"FD",
        tittle:"Front-end Developer",
        emp:"2.6 Employees",
        pro:80,
        bgcolor: "bg-[#EDF5FD)]",
        textcolor:"text-[#0B6BCB]",
        color:[ "bg-gray-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",]
    },
    {
        key:10,
        num:"10 / Pages",
        sort:"BD",
        tittle:"Back-end Developer",
        emp:"1.3 Employees",
        pro:80,
        color:[ "bg-gray-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",]
    },
    {
        key:15,
        num:"15 / Pages",
        sort:"fD",
        tittle:"Full-stack developer",
        emp:"360 Employees",
        pro:75,
        bgcolor: "bg-[#EDF5FD)]",
        textcolor:"text-[#65686F]",
        color:[ "bg-gray-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",]
    },
    {
        key:20,
        num:"20 / Pages",
        sort:"WD",
        tittle:"Web developer",
        emp:"2K Employees",
        pro:80,
        bgcolor: "bg-[#EDF5FD)]",
        textcolor:"text-[#0B6BCB]",
        color:[ "bg-gray-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",]
    },
    {
        sort:"DOE",
        tittle:"DevOps engineer",
        emp:"4.2 Employees",
        pro:80,
        col: "bg-[#C98E4B]",
        color:[ "bg-gray-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",]
    },
    {
        sort:"WAS",
        tittle:"Web application  engineer",
        emp:"3.6 Employees",
        pro:75,
        col: "bg-[col: bg-[#498F49]",
        color:[ "bg-gray-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",]
    },
    {
        sort:"WD",
        tittle:"WordPress developer",
        emp:"1.1K Employees",
        pro:75,
        col: "bg-[col: bg-[#0B6BCB]",
        color:[ "bg-gray-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",]
    },
    {
        sort:"MW",
        tittle:"Mobile web developer",
        emp:"160 Employees",
        pro:80,
        col: "bg-[col: bg-[#C98E4B]",
        color:[ "bg-gray-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500", 
            "bg-red-500", 
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            
        ]
    },
   ]

}))
export default Usegap