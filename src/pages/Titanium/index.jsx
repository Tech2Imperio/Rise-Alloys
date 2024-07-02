import "./styles.css";
import React from "react";
import { DropDown, ContainerMetal } from "../../components";
import {
  Titanium_Alloys_Chemical_Element,
  Titanium_Alloys_Melting_point,
  Titanium_Standards,
  Titanium_Steel_Mechanical_Properties,
  elementsData,
} from "../../data";

export const Titanium = () => {
  return (
    <div className="containers">
      <DropDown position={1} />
      <div className="main-content">
        <ContainerMetal
          header="Titanium Alloys"
          image={elementsData["titanium"][0]}
          contentHeader="Titanium Alloys Products"
          content={elementsData["titanium"][1]}
          button="Enquire Us"
        />
        <div className="extras">
          <div className="extras-divs">
            <p>
              The Grade 5 Titanium is the most preferred titanium grade. This
              grade equates to half the titanium worldwide. This sheet is used
              in various systems as a barrier to resist heat transfer throughout
              the entire assembly. The Titanium Grade 2 is the purest and
              versatile grade of titanium available in the market. This grade
              can be drawn in different shapes and possess superior dimensional
              accuracy. All our products can be customized as per your needs in
              different shapes and sizes.
            </p>
            <p>
              The Titanium Steel has good formability and enhanced creep-rupture
              properties. These products can be used in both high and
              low-pressure systems. They also possess superior fatigue and crack
              propagation. The Titanium Price Per Kg depends on the grade of
              titanium, its size, chemical make-up, and the thickness of the
              material of your choosing. Visit any of our outlets in the country
              and get a quote on our products. Our experienced manufacture all
              our products following all international and national standards.
              To find out more about our products, contact us to know more.
            </p>
          </div>
          <div className="extras-divs">
            <h2 className="header">Titanium Standards</h2>
            <h4 className="sub-header">
              Check Titanium Price Per Kg in India, ASTM/ ASME standard,
              equivalent and specification chart
            </h4>
            <table className="titanium-table">
              <tbody>
                {Titanium_Standards.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th>{value["standards"]}</th>
                      <td>{value["information"]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="extras-divs">
            <h2 className="header">Titanium Alloys Chemical Element</h2>
            <table className="titanium-table">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                {Titanium_Alloys_Chemical_Element.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{value["grade"]}</td>
                      <td>{value["information"]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="extras-divs">
            <h2 className="header">Titanium Alloys Mechanical Properties</h2>
            <table className="titanium-table">
              <thead>
                <tr>
                  <th></th>
                  <th colSpan={2}>Ultimate Tensile Strength minimum</th>
                  <th colSpan={2}>Yield Strength minimum</th>
                  <th>Elongation minimum</th>
                </tr>
              </thead>
              <tbody>
                {Titanium_Steel_Mechanical_Properties.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{value["grade"]}</td>
                      <td>{value["UTSMksi"]}</td>
                      <td>{value["UTSMmpa"]}</td>
                      <td>{value["YSMksi"]}</td>
                      <td>{value["YSMmpa"]}</td>
                      <td>{value["Elongation"]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="extras-divs">
            <h2 className="header">Titanium Alloys Melting point</h2>
            <table className="titanium-table">
              <tbody>
                {Titanium_Alloys_Melting_point.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th>{value["feature"]}</th>
                      <td>{value["value"]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
