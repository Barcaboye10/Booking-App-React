import React from "react";
import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="lsTitle">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label htmlFor="">Destination</label>
                <input type="text" placeholder={destination} />
              </div>
              <div className="lsItem">
                <label htmlFor="">Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "dd/MM/yyyy"
                )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />
                )}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="text" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="text" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adults</span>
                    <input
                      type="number"
                      className="lsOptionInput"
                      placeholder={options.adults}
                      min={1}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      className="lsOptionInput"
                      placeholder={options.children}
                      min={0}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Rooms</span>
                    <input
                      type="number"
                      className="lsOptionInput"
                      placeholder={options.rooms}
                      min={1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
