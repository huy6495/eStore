import React from "react";
import "./_topMenu.scss";

const menu = ["Home", "Women", "Men", "Kids", "Best Seller"];

export default function TopMenu() {
  return (
    <header className="menuHeader">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <nav className="menu">
              <ul>
                {menu.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
