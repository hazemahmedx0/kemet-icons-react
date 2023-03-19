import * as React from 'react';
import { KemetContext } from '../KemetContext';
function SvgHome(
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4,10.5V19c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-5
	c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v5c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-8.5c0-0.3-0.1-0.6-0.3-0.8l-7-6.1c-0.4-0.3-0.9-0.3-1.3,0
	l-7,6.1C4.1,9.9,4,10.2,4,10.5z"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHome);
export default ForwardRef;
