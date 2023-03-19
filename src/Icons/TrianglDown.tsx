import * as React from 'react';
import { KemetContext } from '../KemetContext';
function SvgTrianglDown(
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
        d="M12.3763 15.57C12.1771 15.7976 11.8229 15.7976 11.6237 15.57L5.7256 8.82925C5.44271 8.50596 5.6723 8 6.10188 8L17.8981 8C18.3277 8 18.5573 8.50596 18.2744 8.82925L12.3763 15.57Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrianglDown);
export default ForwardRef;
