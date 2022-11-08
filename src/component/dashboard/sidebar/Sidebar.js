import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Asset/logo.png";
import UserImg from "..//Asset/user.PNG";
import RoutesConstant from "../RoutesConstant";

const Sidebar = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="#" className="brand-link">
          <img
            src={Logo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">BRAND</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={UserImg}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link to="#" className="d-block">
                Usama Hanif
              </Link>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fa fa-cubes" />
                  <p>
                    Products
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/dashboard/addproduct" className="nav-link">
                      <i
                        className="nav-icon fa fa-plus-circle"
                        aria-hidden="true"
                      />
                      <p>Add Product</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={`/dashboard${RoutesConstant.ViewProduct}`}
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-cube" aria-hidden="true" />
                      <p>View Product</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="fas fa-sitemap nav-icon" />
                  <p>
                    Categories
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link
                      to={`/dashboard${RoutesConstant.AddCategory}`}
                      className="nav-link"
                    >
                      <i className="fa fa-plus-circle nav-icon" />
                      <p>Add Category</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={`/dashboard${RoutesConstant.ViewCategories}`}
                      className="nav-link"
                    >
                      <i className="fas fa-sitemap nav-icon" />
                      <p>View Categories</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-user-alt" />
                  <p>
                    Users
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                 
                  <li className="nav-item">
                    <Link to="/dashboard/viewuser" className="nav-link">
                      <i className="fas fa-user-alt nav-icon" />

                      <p>View User</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
