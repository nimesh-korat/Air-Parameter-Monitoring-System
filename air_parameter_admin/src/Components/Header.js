import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const logout = async (e) => {
    try {
      await axios.get("http://localhost:5000/logout");
      window.location.reload(false);
    } catch (error) {
      console.log(" Error: ", error);
    }
  };
  return (
    <>
      <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <Link className="navbar-brand" to="/">
            Pollution Control
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-right-top">
              <li className="nav-item">
                <div id="custom-search" className="top-search-bar">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search.."
                  />
                </div>
              </li>
              <li className="nav-item dropdown notification">
                <Link
                  className="nav-link nav-icons"
                  to="#"
                  id="navbarDropdownMenuLink1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-fw fa-bell" />
                  <span className="indicator" />
                </Link>
                <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                  <li>
                    {/* <div className="notification-title">Notification</div> */}
                    {/* <div class="notification-list">
                <div class="list-group"> */}
                    {/* <Link
                    to="#"
                    class="list-group-item list-group-item-action active"
                  > */}
                    {/* <div class="notification-info"> */}
                    {/* <div class="notification-list-user-img">
                        <img
                          src="assets/images/avatar-2.jpg"
                          alt=""
                          class="user-avatar-md rounded-circle"
                        />
                      </div> */}
                    {/* <div class="notification-list-user-block">
                        <span class="notification-list-user-name"
                          >Jeremy Rakestraw</span
                        >accepted your invitation to join the team.
                        <div class="notification-date">2 min ago</div>
                      </div> */}
                    {/* </div> */}
                    {/* </Link> */}
                    {/* <Link
                    to="#"
                    class="list-group-item list-group-item-action"
                  > */}
                    {/* <div class="notification-info">
                      <div class="notification-list-user-img">
                        <img
                          src="assets/images/avatar-3.jpg"
                          alt=""
                          class="user-avatar-md rounded-circle"
                        />
                      </div>
                      <div class="notification-list-user-block">
                        <span class="notification-list-user-name"
                          >John Abraham </span
                        >is now following you
                        <div class="notification-date">2 days ago</div>
                      </div>
                    </div> */}
                    {/* </Link>
                  <Link
                    to="#"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="notification-info">
                      <div class="notification-list-user-img">
                        <img
                          src="assets/images/avatar-4.jpg"
                          alt=""
                          class="user-avatar-md rounded-circle"
                        />
                      </div>
                      <div class="notification-list-user-block">
                        <span class="notification-list-user-name"
                          >Monaan Pechi</span
                        >
                        is watching your main repository
                        <div class="notification-date">2 min ago</div>
                      </div>
                    </div>
                  </Link> */}
                    {/* <Link
                    to="#"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="notification-info">
                      <div class="notification-list-user-img">
                        <img
                          src="assets/images/avatar-5.jpg"
                          alt=""
                          class="user-avatar-md rounded-circle"
                        />
                      </div>
                      <div class="notification-list-user-block">
                        <span class="notification-list-user-name"
                          >Jessica Caruso</span
                        >accepted your invitation to join the team.
                        <div class="notification-date">2 min ago</div>
                      </div>
                    </div>
                  </Link> */}
                    {/* </div>
              </div> */}
                  </li>
                  {/* <li>
                    <div className="list-footer">
                      <Link to="#">View all notifications</Link>
                    </div>
                  </li> */}
                </ul>
              </li>
              {/* <li class="nav-item dropdown connection">
          <Link
            class="nav-link"
            to="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-fw fa-th"></i>
          </Link>
          <ul
            class="dropdown-menu dropdown-menu-right connection-dropdown"
          >
            <li class="connection-list">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <Link to="#" class="connection-item"
                    ><img src="assets/images/github.png" alt="" />
                    <span>Github</span></Link
                  >
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <Link to="#" class="connection-item"
                    ><img src="assets/images/dribbble.png" alt="" />
                    <span>Dribbble</span></Link
                  >
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <Link to="#" class="connection-item"
                    ><img src="assets/images/dropbox.png" alt="" />
                    <span>Dropbox</span></Link
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <Link to="#" class="connection-item"
                    ><img src="assets/images/bitbucket.png" alt="" />
                    <span>Bitbucket</span></Link
                  >
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <Link to="#" class="connection-item"
                    ><img
                      src="assets/images/mail_chimp.png"
                      alt=""
                    /><span>Mail chimp</span></Link
                  >
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <Link to="#" class="connection-item"
                    ><img src="assets/images/slack.png" alt="" />
                    <span>Slack</span></Link
                  >
                </div>
              </div>
            </li>
            <li>
              <div class="conntection-footer"><Link to="#">More</Link></div>
            </li>
          </ul>
        </li> */}
              <li className="nav-item dropdown nav-user">
                <Link
                  className="nav-link nav-user-img"
                  to="#"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/avatar-1.jpg"
                    alt=""
                    className="user-avatar-md rounded-circle"
                  />
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right nav-user-dropdown"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  {/* <div class="nav-user-info">
              <h5 class="mb-0 text-white nav-user-name">John Abraham</h5>
              <span class="status"></span
              ><span class="ml-2">Available</span>
            </div> */}
                  {/* <Link className="dropdown-item" to="#">
                    <i className="fas fa-user mr-2" />
                    Account
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="fas fa-cog mr-2" />
                    Setting
                  </Link> */}
                  <Link
                    onClick={() => logout()}
                    className="dropdown-item"
                    to="/login.html"
                  >
                    <i className="fas fa-power-off mr-2" />
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
