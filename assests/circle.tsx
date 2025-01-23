import * as React from "react"
import { SVGProps } from "react"
const CirComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#D9D9D9"
      d="M27.864 13.932c0 7.694-6.238 13.932-13.932 13.932S0 21.626 0 13.932 6.238 0 13.932 0s13.932 6.238 13.932 13.932Zm-23.065 0a9.132 9.132 0 1 0 18.265 0 9.132 9.132 0 0 0-18.265 0Z"
    />
    <path
      fill="#EA9A3E"
      d="M25.499 12.799c1.27-.124 2.42.809 2.333 2.082A13.931 13.931 0 1 1 .728 9.489c.406-1.21 1.826-1.631 2.951-1.03 1.126.6 1.519 2 1.212 3.238a9.313 9.313 0 1 0 18.249 3.63c.19-1.261 1.09-2.404 2.359-2.528Z"
    />
  </svg>
)
export default CirComponent
