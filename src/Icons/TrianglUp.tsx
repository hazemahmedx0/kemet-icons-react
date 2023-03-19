import * as React from 'react';
import { KemetContext } from '../KemetContext';
function SvgTrianglUp(
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
        d="M11.6237 7.43004C11.8229 7.20238 12.1771 7.20238 12.3763 7.43004L18.2744 14.1707C18.5573 14.494 18.3277 15 17.8981 15L6.10188 15C5.6723 15 5.44271 14.494 5.7256 14.1707L11.6237 7.43004Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrianglUp);
export default ForwardRef;
