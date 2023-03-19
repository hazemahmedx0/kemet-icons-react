import * as React from 'react';
import { KemetContext } from '../KemetContext';
function SvgTrianglRight(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(KemetContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M16.57 11.6237C16.7976 11.8229 16.7976 12.1771 16.57 12.3763L9.82925 18.2744C9.50596 18.5573 9 18.3277 9 17.8981L9 6.10188C9 5.6723 9.50596 5.44271 9.82925 5.72559L16.57 11.6237Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrianglRight);
export default ForwardRef;
