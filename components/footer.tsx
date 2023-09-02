import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-stone-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 - Made with ❤︎ by Peter Jun Park.
      </small>
      <p className="text-xs">
        <span className="font-semibold">See the source code here: </span>
        <a
          href="https://github.com/qkr0wns/portfolio"
          className="hover:underline focus:underline active:underline"
        >
          github.com/qkr0wns/portfolio
        </a>
      </p>
    </footer>
  );
}
