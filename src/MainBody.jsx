import { useEffect, useState } from "react";

let MainBody = () => {
  let [AllData, UpdateData] = useState([]);
  let [filter, UpdateFilter] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
    )
      .then((res) => {
        return res.json();
      })
      .then((objs) => {
        UpdateData(objs.data);
      });
  }, []);

 
  let DataToDisplay=AllData;
  if(filter!=="")
  {
    DataToDisplay=AllData.filter((obj)=>{

      return  obj.keyword.toLowerCase().includes( filter.toLowerCase());
    });
  }

  return (
    <div className="MainBody">
      <div className="MainBodyTools">
        <p class="AddKeyword">Add Anonther Keyword</p>
        <p class="MainBodyTools-p2">1/3</p>
        <p>UPGRADE</p>
        <p class="Advance">Advance search</p>
      </div>
      <div className="MainBodyInput">
        <label htmlFor="input">
          <span class="material-icons  ">search</span>
        </label>
        <input
          type="search"
          placeholder="Enter your filters here"
          onChange={(e) => {
            console.log(e.currentTarget.value);
            UpdateFilter(e.currentTarget.value);
          }}
        />
        <button>Save Filters</button>
      </div>

      <div className="table-div">
        <table>
          <tr>
            <th>Keyword</th>
            <th>Goals</th>
            <th>Matches</th>
            <th>Search Status</th>
            <th>Delete KeyWord</th>
          </tr>
          {DataToDisplay.map((obj) => {
            return (
              <tr id={obj.id}>
                <td>
                  {obj.keyword}
                  <span class="material-icons td-search">search</span>
                </td>
                <td>{obj.goal}</td>
                <td>{obj.matches}</td>
                <td>{obj.search_status}</td>
                <td
                  onClick={() => {
                    let tempArr = AllData.filter((element) => {
                      return element.id !== obj.id;
                    });

                    UpdateData(tempArr);
                  }}
                >
                  <span class="material-icons">delete</span>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <button className="submit">View Results</button>
    </div>
  );
};

export default MainBody;
