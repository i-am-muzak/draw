import "./Header.scss";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

import { useState } from "react";

export default function Header() {
  const [selectedTool, setSelectedTool] = useState("pencil");

  return (
    <div className="tools-header-section">
      <Tooltip id="hand-move" className="tooltip-tool-icon" />
      <Tooltip id="pencil" className="tooltip-tool-icon" />
      <Tooltip id="eraser" className="tooltip-tool-icon" />
      <Tooltip id="highlight" className="tooltip-tool-icon" />
      <Tooltip id="circle-square" className="tooltip-tool-icon" />
      <Tooltip id="file" className="tooltip-tool-icon" />

      <div className="flex items-center">
        <div
          className={`flex items-center justify-center tool-icon-container ${selectedTool === 'hand-move' ? 'selected' : ''}`}
          data-tooltip-id="hand-move"
          data-tooltip-content="Hand Mode"
          data-tooltip-place="bottom"
          onClick={() => {setSelectedTool("hand-move")}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-hand-move"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"></path>
            <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"></path>
            <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"></path>
            <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
            <path d="M2.541 5.594a13.487 13.487 0 0 1 2.46 -1.427"></path>
            <path d="M14 3.458c1.32 .354 2.558 .902 3.685 1.612"></path>
          </svg>
        </div>
        <div
          className={`flex items-center justify-center tool-icon-container ${selectedTool === 'pencil' ? 'selected' : ''}`}
          data-tooltip-id="pencil"
          data-tooltip-content="Pencil"
          data-tooltip-place="bottom"
          onClick={() => {setSelectedTool("pencil")}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-pencil"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
            <path d="M13.5 6.5l4 4"></path>
          </svg>
        </div>
        <div
          className={`flex items-center justify-center tool-icon-container ${selectedTool === 'eraser' ? 'selected' : ''}`}
          data-tooltip-id="eraser"
          data-tooltip-content="Eraser"
          data-tooltip-place="bottom"
          onClick={() => {setSelectedTool("eraser")}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-eraser"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3"></path>
            <path d="M18 13.3l-6.3 -6.3"></path>
          </svg>
        </div>
        <div
          className={`flex items-center justify-center tool-icon-container ${selectedTool === 'highlight' ? 'selected' : ''}`}
          data-tooltip-id="highlight"
          data-tooltip-content="Highlight"
          data-tooltip-place="bottom"
          onClick={() => {setSelectedTool("highlight")}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-highlight"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
            <path d="M12.5 5.5l4 4"></path>
            <path d="M4.5 13.5l4 4"></path>
            <path d="M21 15v4h-8l4 -4z"></path>
          </svg>
        </div>
        <div
          className={`flex items-center justify-center tool-icon-container ${selectedTool === 'circle-square' ? 'selected' : ''}`}
          data-tooltip-id="circle-square"
          data-tooltip-content="Shape Generator"
          data-tooltip-place="bottom"
          onClick={() => {setSelectedTool("circle-square")}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-square"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9.5 9.5m-6.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0"></path>
            <path d="M10 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z"></path>
          </svg>
        </div>
        <div
          className={`flex items-center justify-center tool-icon-container ${selectedTool === 'file' ? 'selected' : ''}`}
          data-tooltip-id="file"
          data-tooltip-content="New Page"
          data-tooltip-place="bottom"
          onClick={() => {setSelectedTool("file")}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-file"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
