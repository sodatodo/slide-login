import React, { ReactNode } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import style from "./styles.css";
// 用户可以使用 ReactNode 但是只识别 SlideItem 这种带有type的
interface SlideContainerProps {
  children: ReactNode[];
  convert: boolean;
}
function SlideContainer({ children, convert }: SlideContainerProps) {
  if (!children) return <></>;

  let leftChild = null;
  let rightChild = null;
  let overlayLeftChild = null;
  let overlayRightChild = null;

  children.forEach((child, index) => {
    const type = get(child, "props.type", "");
    switch (type) {
      case "left":
        leftChild = child;
        break;
      case "right":
        rightChild = child;
        break;
      case "overlay-left":
        overlayLeftChild = child;
        break;
      case "overlay-right":
        overlayRightChild = child;
        break;
      default:
        console.error(`${type} is not SlideItem type`);
        break;
    }
  });

  let leftChildStyle = "";
  let rightChildStyle = "";
  let leftOverlayStyle = "";
  let rightOverlayStyle = "";
  let overlayContainerStyle = "";
  let overlayStyle = "";

  if (convert) {
    leftChildStyle = `${style.containeritem} ${style.itemvisiable} ${style.slideright}`;
    rightChildStyle = `${style.containeritem} ${style.itemunvisiable}  ${style.slideright}`;
    leftOverlayStyle = `${style.overlayitem} ${style.overlayleft}`;
    rightOverlayStyle = `${style.overlayitem} ${style.overlayright} ${style.overlayrighthide}`;
    overlayContainerStyle = `${style.overlaycontainer} ${style.overlayslide}`;
    overlayStyle = `${style.overlay}  ${style.overlayslide}`
  } else {
    leftChildStyle = `${style.containeritem}  ${style.itemunvisiable}`;
    rightChildStyle = `${style.containeritem}  ${style.itemvisiable}`;
    leftOverlayStyle = `${style.overlayitem} ${style.overlayleft} ${style.overlaylefthide}`;
    rightOverlayStyle = `${style.overlayitem} ${style.overlayright}`;
    overlayContainerStyle = `${style.overlaycontainer}`;
    overlayStyle = `${style.overlay}`
  }
  return (
    <div className={style.container}>
      <div className={leftChildStyle}>{leftChild}</div>
      <div className={rightChildStyle}>{rightChild}</div>
      <div className={overlayContainerStyle}>
        <div className={overlayStyle}>
          <div className={leftOverlayStyle}>{overlayLeftChild}</div>
          <div className={rightOverlayStyle}>{overlayRightChild}</div>
        </div>
      </div>
    </div>
  );
}

SlideContainer.propTypes = {
  children: PropTypes.node
};

export default SlideContainer;
