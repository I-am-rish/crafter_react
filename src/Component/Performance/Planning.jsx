import React, { useEffect, useState, useContext } from "react";
// import AppointmentsScheduler from "./AppointmentsScheduler";
import Scheduler from "./Calendar";
import Draggable from "devextreme-react/draggable";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../LanguageContext";
import "./Planing.css";
import styled from "styled-components";

function Planning() {
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(LanguageContext);
  const [showCalendar, setShowCalendar] = useState("Calendar");

  return (
    <div>
      <div className="big-container bg-1">
        <div className="small-container">
          <div className="same-as-head">
            <ul>
              <li>
                <Link to="/planning" className="actives">
                  {t("Planning")}
                </Link>
              </li>
              <li>
                <Link to="/projects">{t("Projects")}</Link>
              </li>
              <li>
                <Link to="/orders">{t("Work Orders")}</Link>
              </li>
              <li>
                <Link to="/action">{t("Action")}</Link>
              </li>
              <li>
                <Link to="/gps">GPS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-2">
        <Container>
          <button onClick={setShowCalendar("Calendar")}>Calendar</button>
          <button onClick={setShowCalendar("Projects")}>Projects</button>
          <button onClick={setShowCalendar("Team")}>Team</button>
        </Container>
        {showCalendar === "Calendar" && <Scheduler />}
        {/* {showCalendar === "Projects" && <Scheduler />} //// for  projects components
        {showCalendar === "Team" && <Scheduler />} ////for team components */}
      </div>
      <div className="dx-viewport demo-container">
        {/* <div id="scroll">
          <div id="list">
            {tasks &&
              tasks.map((value) =>
                // <h4>{value.text}</h4>
                createItemElement(value)
              )}
          </div>
        </div> */}
        <div id="scheduler"></div>
      </div>
    </div>
  );
}

export default Planning;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin: 3px 0px;

  button {
    border: 1px solid gray;
    padding: 3px 6px;
    cursor: pointer;
    border-radius: 2px;
    font-size: 1rem;
    color: gray;
  }
`;
