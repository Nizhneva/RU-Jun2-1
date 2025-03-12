import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const reactLogoData = {
  href: "https://react.dev",
  className: "logo react",
  src: reactLogo,
  alt: "React logo"
};
const viteLogoData = {
  href: "https://vite.dev",
  className: "logo",
  src: viteLogo,
  alt: "Vite logo"
};

function LogoImg({ data }) {
  return createElement(
    'img',
    {
      className: data.className,
      src: data.src,
      alt: data.alt
    }
  );
};

function LogoLink({ data }) {
  return createElement(
    'a',
    {
      href: data.href,
      target: "_blank"
    },
    createElement(LogoImg, { data: data })
  );
};

function LogosContainer() {
  return createElement(
    'div',
    {},
    [
      createElement(LogoLink, { data: viteLogoData, key: "viteLogo" }),
      createElement(LogoLink, { data: reactLogoData, key: "reactLogo" })
    ]
  );
};

function Title() {
  return createElement(
    'h1',
    {},
    "Vite + React"
  );
};

function Button() {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    setCount(count + 1);
  }

  return createElement(
    'button',
    {
      onClick: () => increaseCount()
    },
    [
      "count is ",
      count
    ]
  );
};

function Code() {
  return createElement(
    'code',
    {},
    "src/App.jsx"
  );
};

function CardText() {
  return createElement(
    'p',
    {},
    [
      "Edit ",
      createElement(Code, { key: "Code" }),
      " and save to test HMR"
    ]
  );
};

function Card() {
  return createElement(
    'div',
    {},
    [
      createElement(Button, { key: "Button" }),
      createElement(CardText, { key: "CardText" })
    ]
  );
};

function ReadTheDocsText() {
  return createElement(
    'p',
    {},
    "Click on the Vite and React logos to learn more"
  );
};

function Year() {
  return createElement(
    'div',
    {},
    new Date().getFullYear()
  );
};

export default function App() {
  return createElement(
    'div',
    {},
    [
      createElement(LogosContainer, { key: "LogosContainer" }),
      createElement(Title, { key: "Title" }),
      createElement(Card, { key: "Card" }),
      createElement(ReadTheDocsText, { key: "ReadTheDocsText" }),
      createElement(Year, { key: "Year" })
    ]
  );
}