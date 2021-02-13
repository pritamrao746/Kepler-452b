import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <br/><br/><br/><br/>
          <h1>Keplar-452b</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Filters</a>
        </div>
        <form>
         
          <label for="start" className="form-label text-light m-4">
            Start Date:
          </label>
          <input type="date" id="start" name="start"></input>
          <label for="end" className="form-label text-light m-4">
            End Date:
          </label>
          <input type="date" id="end" name="end"></input>
          <button type="submit" className="btn btn-primary m-4">
            Show Results
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
