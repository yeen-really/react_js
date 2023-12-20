import React, { useState } from "react";
import { LinkRouter, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header
        id="header"
        className="px-5 xl:px-24 lg:px-16 md:px-14 sm:px-10 z-50 mx-auto text-black"
      >
        <div className="flex space-x-5 py-3">
        <Link to="/13" className="font-bold hover:text-lime py-2">
            Задание 13
          </Link>
          <Link to="/" className="font-bold hover:text-lime py-2">
            Главная
          </Link>

          <Link to="/users" className="font-bold hover:text-lime py-2">
            Галерея
          </Link>
        </div>
      </header>
    </>
  );
}

export default NavBar;
