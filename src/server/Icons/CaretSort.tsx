import * as React from 'react';
function SvgCaretSort(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
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
        d="M16 9L12 5L8 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16 15L12 19L8 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCaretSort);
export default ForwardRef;
