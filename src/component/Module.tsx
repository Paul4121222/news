import React, { useEffect, FC, ReactElement } from "react";
import ReactDOM from "react-dom";

interface ModuleProps {
  open: () => void;
  renderNav: () => ReactElement;
}

//組件
const Module: FC<ModuleProps> = (props) => {
  const module = document.querySelector("#module") as HTMLElement;

  useEffect(() => {
    const body = document.querySelector("body") as HTMLElement;
    const menu = document.querySelector(".menu") as HTMLElement;
    const modal = document.querySelector(".modal") as HTMLElement;

    body.classList.add("nos-scroll");
    modal.childNodes.forEach((item) => {
      item.addEventListener("click", props.open);
    });

    return () => {
      body.classList.remove("nos-scroll");
      menu.classList.remove("menu-open");
    };
  }, [props.open]);

  return ReactDOM.createPortal(
    <div className="modal-bg" onClick={props.open}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {props.renderNav()}
      </div>
    </div>,
    module
  );
};

export default Module;
