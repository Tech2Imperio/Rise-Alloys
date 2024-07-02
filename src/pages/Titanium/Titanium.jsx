import "./styles.css";
import "./styles2.css";
import React from "react";
import { ContainerMetal, DropDown } from "../../components";
import { elementsData } from "../../data/element";
import {
  Titanium_Alloys_Chemical_Element,
  Titanium_Alloys_Melting_point,
  Titanium_Standards,
  Titanium_Steel_Mechanical_Properties,
} from "./data";

export const Titanium = () => {
  return (
    <div className="titanium-container">
      <DropDown position={1} />
      <div className="titanium-main-content">
        <ContainerMetal
          header="Titanium Alloys"
          image={elementsData["titanium"][0]}
          contentHeader="Titanium Alloys Products"
          content={elementsData["titanium"][1]}
          button="Enquire Us"
        />
        <div className="titanium-extras">
          <div className="titanium-extras-divs">
            <p>
              Grade 5 Titanium is widely regarded as the top choice among
              titanium grades, constituting half of the world's titanium
              production. This grade is extensively utilized in diverse systems
              as a heat transfer barrier across entire assemblies, ensuring
              exceptional resistance. On the other hand, Titanium Grade 2 stands
              out as the purest and most versatile titanium grade available in
              the market. It boasts superior dimensional accuracy and can be
              easily formed into various shapes, making it a highly sought-after
              option. At<strong> Rise Alloys </strong> we offer a range of
              customizable titanium products tailored to your specific needs,
              available in different shapes and sizes. Explore our catalog to
              discover how our premium titanium solutions can elevate your
              projects.
            </p>
            <p>
              Titanium Steel is renowned for its excellent formability and
              enhanced creep-rupture properties, making it a versatile choice
              for various applications. These products are suitable for use in
              both high and low-pressure systems, offering superior fatigue
              resistance and crack propagation capabilities. The Titanium Price
              Per Kg is influenced by factors such as the grade of titanium,
              size, chemical composition, and material thickness. Visit any of
              our nationwide outlets to receive a personalized quote on our
              high-quality titanium products. Our experienced manufacturing team
              adheres to stringent international and national standards,
              ensuring top-notch quality. Contact us today to learn more about
              our comprehensive range of titanium solutions tailored to meet
              your specific requirements.
            </p>
          </div>
          <div className="titanium-extras-divs">
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
          <div className="titanium-extras-divs">
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
          <div className="titanium-extras-divs">
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
          <div className="titanium-extras-divs">
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
