import * as React from "react"
import { SVGProps } from "react"
const ColComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <circle cx={12} cy={12} r={12} fill="#FF5072" fillOpacity={0.08} />
    <path
      fill="#FF5072"
      d="M12.25 6A6.257 6.257 0 0 0 6 12.25a6.257 6.257 0 0 0 6.25 6.25 6.257 6.257 0 0 0 6.25-6.25A6.257 6.257 0 0 0 12.25 6Zm0 .938a5.305 5.305 0 0 1 5.313 5.312 5.305 5.305 0 0 1-5.313 5.313 5.305 5.305 0 0 1-5.313-5.313 5.305 5.305 0 0 1 5.313-5.313Zm-.476 1.555a.469.469 0 0 0-.461.476v3.437c0 .125.049.244.137.332l1.562 1.562a.468.468 0 1 0 .663-.663l-1.425-1.425V8.97a.469.469 0 0 0-.476-.476Z"
    />
  </svg>
)
export default ColComponent
