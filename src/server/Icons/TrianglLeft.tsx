import * as React from 'react';
function SvgTrianglLeft(
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
        d="M7.43004 12.3763C7.20238 12.1771 7.20238 11.8229 7.43004 11.6237L14.1707 5.72559C14.494 5.44271 15 5.6723 15 6.10188L15 17.8981C15 18.3277 14.494 18.5573 14.1707 18.2744L7.43004 12.3763Z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrianglLeft);
export default ForwardRef;
