import * as Icons from "kemet-icons-react";
import { useState, useRef } from "react";
import githublogo from "./assets/githublogo.svg";
import kemet from "./assets/kemet.svg";

const { KemetProvider, KemetContext, KemetContextValue, ...justIcons } = Icons;

const IconPreview = ({ iconName, Icon }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const svgRef = useRef(null);

  const handleCopyClick = () => {
    const svgElement = svgRef.current;
    if (svgElement) {
      const svg = svgElement.cloneNode(true);
      svg.setAttribute("width", "24px");
      svg.setAttribute("height", "24px");
      const svgString = new XMLSerializer().serializeToString(svg);
      navigator.clipboard.writeText(svgString);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <div class="flex flex-col items-center gap-2 border rounded-lg py-10  pb-0  max-w-xs ">
      <Icon ref={svgRef} width="24px" height="24px" color="#1c1917" />
      <div class="flex   flex-col items-center grow gap-2">
        <p class="text-sm text-zinc-600">{iconName}</p>
      </div>

      <div className=" flex w-full mt-3    max-w-xs min-w-full">
        <button
          class={` bg-zinc-100  text-gray-500 w-full text-sm border rounded-b-lg rounded-t-none

            px-3 py-1 focus:outline-none ${
              copySuccess ? " text-slate-600 bg-green-500" : ""
            }`}
          onClick={handleCopyClick}
        >
          {copySuccess ? "Copied!" : "Copy SVG"}
        </button>{" "}
      </div>
    </div>
  );
};

function App() {
  const iconNames = Object.keys(justIcons);

  const iconPreviews = iconNames.map((iconName) => {
    const Icon = justIcons[iconName];
    return <IconPreview key={iconName} iconName={iconName} Icon={Icon} />;
  });

  return (
    <div className="App">
      <header class=" mb-8 mt-6 flex flex-col items-center justify-items-center align-middle ">
        <img className="mb-24" src={kemet} alt="github Repo" />{" "}
        <h1 className=" text-stone-800 font-bold mb-8">Kemet Icons React</h1>
        <div>
          <a href="https://github.com/Hazemmahdyx/kemet-icons-react">
            <img src={githublogo} alt="github Repo" />{" "}
          </a>
        </div>
      </header>
      <div class="grid grid-cols-4 auto-rows-fr gap-7	w-[80vw] max-w-7xl max-md:w-[93vw] max-md:grid max-md:grid-cols-3 mt-16 mb-32">
        {iconPreviews}
      </div>
    </div>
  );
}

export default App;
