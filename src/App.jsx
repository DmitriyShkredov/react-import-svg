import "./App.css";

import iconBall from "./icon-ball.svg";
import iconBus from "./icon-bus.svg";
import iconCamera from "./icon-camera.svg";
import iconClock from "./icon-clock.svg";
import iconMac from "./icon-macbook.svg";
import iconStar from "./icon-star.svg";

import { ReactComponent as IconBall } from "./icon-ball.svg";
import { ReactComponent as IconBus } from "./icon-bus.svg";
import { ReactComponent as IconCamera } from "./icon-camera.svg";
import { ReactComponent as IconClock } from "./icon-clock.svg";
import { ReactComponent as IconMac } from "./icon-macbook.svg";
import { ReactComponent as IconStar } from "./icon-star.svg";

import { Icon } from "./Icon";

import { Icon2 } from "./Icon2";

function App() {
  return (
    <div className="App">
      <a href="https://google.com" className="light">
        <img src={iconBall} alt="" />
      </a>
      <a href="https://google.com" className="light">
        <img src={iconBus} alt="" />
      </a>
      <a href="https://google.com" className="light">
        <img src={iconCamera} alt="" />
      </a>
      <a href="https://google.com" className="dark">
        <img src={iconClock} alt="" />
      </a>
      <a href="https://google.com" className="dark">
        <img src={iconMac} alt="" />
      </a>
      <a href="https://google.com" className="dark">
        <img src={iconStar} alt="" />
      </a>

      <hr />

      <a href="https://google.com" className="ball">
        <svg
          className="normal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <g>
            <path
              className="red"
              d="M46.154,46.143c-4.369,4.373-5.616,10.631-3.869,16.141c4.51-1.523,8.763-4.053,12.358-7.652c3.6-3.596,6.128-7.848,7.652-12.357C56.785,40.529,50.528,41.773,46.154,46.143z"
            />
            <path
              className="red"
              d="M17.857,17.846c4.369-4.374,5.612-10.631,3.869-16.143c-4.51,1.524-8.763,4.053-12.362,7.653c-3.596,3.596-6.125,7.848-7.653,12.359C7.227,23.457,13.484,22.215,17.857,17.846z"
            />
            <path
              className="blue"
              d="M29.661,0.085c2.231,8.071,0.195,17.076-6.145,23.422c-6.343,6.336-15.348,8.373-23.419,6.141c-0.563,7.703,1.649,15.553,6.632,21.957L51.618,6.722C45.213,1.734,37.36-0.478,29.661,0.085z"
            />
            <path
              className="blue"
              d="M57.277,12.381L12.394,57.266c6.405,4.986,14.258,7.199,21.957,6.637c-2.231-8.07-0.199-17.076,6.145-23.42c6.343-6.34,15.349-8.375,23.419-6.141C64.478,26.639,62.265,18.787,57.277,12.381z"
            />
          </g>
        </svg>
      </a>

      <a href="https://google.com" className="bus">
        <svg
          className="normal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path d="M52,0H12C5.375,0,0,5.371,0,12v40c0,2.211,1.789,4,4,4h4v4c0,2.211,1.789,4,4,4h4c2.211,0,4-1.789,4-4v-4h24v4c0,2.211,1.789,4,4,4h4c2.211,0,4-1.789,4-4v-4h4c2.211,0,4-1.789,4-4V12C64,5.375,58.629,0,52,0z M16,44c-2.211,0-4-1.789-4-4s1.789-4,4-4s4,1.789,4,4S18.211,44,16,44z M48,44c-2.211,0-4-1.789-4-4s1.789-4,4-4s4,1.789,4,4S50.211,44,48,44z M56,24H8V12c0-2.211,1.789-4,4-4h40c2.211,0,4,1.789,4,4V24z" />
        </svg>
      </a>

      <a href="https://google.com" className="camera">
        <svg
          className="normal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <g>
            <path d="M60,10H49.656l-6.828-6.828C42.078,2.422,41.062,2,40,2H24c-1.062,0-2.078,0.422-2.828,1.172L14.344,10H4c-2.211,0-4,1.789-4,4v44c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V14C64,11.789,62.211,10,60,10z M32,50c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S40.836,50,32,50z" />
            <circle cx="32" cy="34" r="8" />
          </g>
        </svg>
      </a>

      <a href="https://google.com" className="clock">
        <svg
          className="normal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path d="M32,0C14.328,0,0,14.328,0,32s14.328,32,32,32s32-14.328,32-32S49.672,0,32,0z M42.844,42.844c-1.566,1.566-4.168,1.488-5.734-0.078l-7.934-7.934c-0.371-0.367-0.664-0.812-0.867-1.305C28.105,33.039,28,32.523,28,32V16c0-2.211,1.789-4,4-4s4,1.789,4,4v14.344l6.859,6.859C44.426,38.77,44.406,41.281,42.844,42.844z" />
        </svg>
      </a>

      <a href="https://google.com" className="mac">
        <svg
          className="normal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <g>
            <path
              className="monitor"
              d="M60,52H4c-2.211,0-4,1.789-4,4s1.789,4,4,4h56c2.211,0,4-1.789,4-4S62.211,52,60,52z"
            />
            <path
              className="keyboard"
              d="M60,8c0-2.211-1.789-4-4-4H8C5.789,4,4,5.789,4,8v40h56V8z"
            />
          </g>
        </svg>
      </a>

      <a href="https://google.com" className="star">
        <svg
          className="normal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z" />
        </svg>
      </a>

      <hr />

      <a href="https://google.com" className="ball">
        <IconBall className="normal" />
      </a>
      <a href="https://google.com" className="bus">
        <IconBus className="normal" />
      </a>
      <a href="https://google.com" className="camera">
        <IconCamera className="normal" />
      </a>
      <a href="https://google.com" className="clock">
        <IconClock className="normal" />
      </a>
      <a href="https://google.com" className="mac">
        <IconMac className="normal" />
      </a>
      <a href="https://google.com" className="star">
        <IconStar className="normal" />
      </a>

      <hr />

      <a href="https://google.com" className="ball">
        <Icon name="ball" size="32px" />
      </a>
      <a href="https://google.com" className="bus">
        <Icon name="bus" size="64px" />
      </a>
      <a href="https://google.com" className="camera">
        <Icon name="camera" size="100px" />
      </a>
      <a href="https://google.com" className="clock">
        <Icon name="clock" size="32px" />
      </a>
      <a href="https://google.com" className="mac">
        <Icon name="mac" size="64px" />
      </a>
      <a href="https://google.com" className="star">
        <Icon name="star" size="100px" />
      </a>

      <hr />

      <a href="https://google.com" className="light">
        <i className="icon icon-ball"></i>
      </a>
      <a href="https://google.com" className="light">
        <i className="icon icon-bus"></i>
      </a>
      <a href="https://google.com" className="light">
        <i className="icon icon-camera"></i>
      </a>
      <a href="https://google.com" className="dark">
        <i className="icon icon-clock"></i>
      </a>
      <a href="https://google.com" className="dark">
        <i className="icon icon-mac"></i>
      </a>
      <a href="https://google.com" className="dark">
        <i className="icon icon-star"></i>
      </a>

      <hr />

      <a href="https://google.com" className="light">
        <i className="icon2 icon2-ball"></i>
      </a>
      <a href="https://google.com" className="light">
        <i className="icon2 icon2-bus"></i>
      </a>
      <a href="https://google.com" className="light">
        <i className="icon2 icon2-camera"></i>
      </a>
      <a href="https://google.com" className="dark">
        <i className="icon2 icon2-clock"></i>
      </a>
      <a href="https://google.com" className="dark">
        <i className="icon2 icon2-mac"></i>
      </a>
      <a href="https://google.com" className="dark">
        <i className="icon2 icon2-star"></i>
      </a>

      <hr />

      <a href="https://google.com" className="red">
        <Icon2 name="ball" className="small" />
      </a>
      <a href="https://google.com" className="blue">
        <Icon2 name="bus" className="normal" />
      </a>
      <a href="https://google.com" className="green">
        <Icon2 name="camera" className="big" />
      </a>
      <a href="https://google.com" className="red">
        <Icon2 name="clock" className="small" />
      </a>
      <a href="https://google.com" className="blue">
        <Icon2 name="mac" className="normal" />
      </a>
      <a href="https://google.com" className="green">
        <Icon2 name="star" className="big" />
      </a>
    </div>
  );
}

export default App;
