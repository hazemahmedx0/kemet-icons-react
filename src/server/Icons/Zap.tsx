import * as React from 'react';
function SvgZap(
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
        d="M7.39024 22L19.9698 11.2522C20.3231 10.9504 20.1096 10.3721 19.6451 10.3721H13.0976L16.6098 2L4.03016 12.7478C3.67693 13.0496 3.89035 13.6279 4.35495 13.6279H10.9024L7.39024 22Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgZap);
export default ForwardRef;
