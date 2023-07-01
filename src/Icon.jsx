import React from "react";
import { ReactComponent as IconBall } from "./icon-ball.svg";
import { ReactComponent as IconBus } from "./icon-bus.svg";
import { ReactComponent as IconCamera } from "./icon-camera.svg";
import { ReactComponent as IconClock } from "./icon-clock.svg";
import { ReactComponent as IconMac } from "./icon-macbook.svg";
import { ReactComponent as IconStar } from "./icon-star.svg";

export const Icon = ({ name, className, size }) => {
  if (name === "ball")
    return <IconBall className={className} width={size} height={size} />;
  if (name === "bus")
    return <IconBus className={className} width={size} height={size} />;
  if (name === "camera")
    return <IconCamera className={className} width={size} height={size} />;
  if (name === "clock")
    return <IconClock className={className} width={size} height={size} />;
  if (name === "mac")
    return <IconMac className={className} width={size} height={size} />;
  if (name === "star")
    return <IconStar className={className} width={size} height={size} />;
};
