let SideBar = () => {




  return (
    <div className="sidebar">
      <div className="logo">
        <img
          className="img"
          alt="termMonitor Logo"
          src="https://s3-alpha-sig.figma.com/img/58d1/4412/47e26c7697a61869f91f4f62fbf2e2c9?Expires=1629072000&Signature=dY1JM2LmtQlUkoY9Kher-sBykvu4aUnbR99jvwhKF6D8P2K58trin~awu54o8pxh3MLJHJgKP4cmUKsRqIH9YSOcuQKCt4MNy6cS1sriO93tLU1SaVS4rnxyVrL7OJUQ~q8yzqNWa0ZHwMvGa~GCu77MHX6cK-U~7x6aci0ChRGz3p7EDqxjjPLrhGHbTOroffw3rjxkdIls1QAXQVUznb3N-~bzcxGXBonooCshk8qJbs0dEmkugQ-WbdvWlsaHMFdtFf3vkrKkBO6Gp92yTynZKwSkSjS6aiRwt-whsgYjeA0iYeGhKo0aRIyYG4d8jGADcvy3nYYz2PKEenrS8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <p className="plogo">
          <span className="term">Term </span>
          <span className="monitor"> Monitor</span>
        </p>
      </div>
      <ul  >
        <li className="keyWord Selected">Add Keyword</li>
        <li className="Matches">Matches</li>
        <li>Integration</li>
        <li>Manage Resources</li>
        <li>Alert</li>
        <li className="setting">
          Settings
          <select></select>
        </li>
      </ul>
      <p className="billing">Billings</p>
    </div>
  );
};
export default SideBar;
