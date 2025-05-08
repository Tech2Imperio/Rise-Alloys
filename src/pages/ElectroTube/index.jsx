import "./styles.css";
import React from "react";
import { DropDown, ContainerMetal } from "../../components";
import { elementsData } from "../../data";

export const ElectroTube = () => {
  const Electropolished_Comparison = [
    {
      feature: "Corrosion Resistance",
      Electropolished_Stainless_Steel: "Excellent",
      Standard_Stainless_Steel: "Good",
    },
    {
      feature: "Surface Finish",
      Electropolished_Stainless_Steel: "Mirror-like smooth",
      Standard_Stainless_Steel: "Rough or slightly matte",
    },
    {
      feature: "Biocompatibility",
      Electropolished_Stainless_Steel: "High",
      Standard_Stainless_Steel: "Medium",
    },
    {
      feature: "Cleanliness",
      Electropolished_Stainless_Steel: "Hygienic, Low Contamination",
      Standard_Stainless_Steel: "Prone to surface contamination",
    },
    {
      feature: "Durability",
      Electropolished_Stainless_Steel: "Enhanced resistance to fouling",
      Standard_Stainless_Steel: "Standard resistance to fouling",
    },
    {
      feature: "Aesthetic Appeal",
      Electropolished_Stainless_Steel: "Shiny, smooth surface",
      Standard_Stainless_Steel: "Dull finish",
    },
  ];

  const Electropolished_Forms = [
    {
      EN: "EN 10088-2",
      Available_Forms: "Tubes, Pipes, Sheets",
      Equivalent_Grades: "AISI 304, 316",
    },
    {
      EN: "EN 10216-5",
      Available_Forms: "Tubes, Seamless Pipes",
      Equivalent_Grades: "AISI 304L, 316L",
    },
    {
      EN: "EN 10217-7",
      Available_Forms: "Welded Tubes",
      Equivalent_Grades: "AISI 316Ti, 304Ti",
    },
    {
      EN: "EN 10294-1",
      Available_Forms: "Hollow Sections, Tubes",
      Equivalent_Grades: "AISI 321, 347",
    },
  ];

  return (
    <div className="containers">
      <DropDown position={5} />
      <div className="main-content">
        <ContainerMetal
          header="Electro Poslished Tube"
          image={elementsData["electroTube"][0]}
          contentHeader="Electro Poslished Products"
          content={elementsData["electroTube"][1]}
          button="Enquire Us"
        />
        <div className="extras">
          <div className="extras-divs">
            <h3 className="header">3A Sanitary Tube Fittings</h3>
            <p>
              The <strong>3A Sanitary Tube Fittings</strong> can be suited for{" "}
              <strong>clamp fittings</strong> or{" "}
              <strong>butt welding fittings</strong> and are designed for
              various <strong>processing connections</strong>. These fittings
              are widely used in the{" "}
              <strong>
                food, beverage, dairy, and pharmaceutical industries
              </strong>
              . The
              <strong> tri-clamp fittings</strong> can be{" "}
              <strong>quickly and easily assembled or disassembled</strong> for
              routine <strong>maintenance</strong> and{" "}
              <strong>inspection</strong>. They offer <strong>hygienic</strong>{" "}
              and <strong>secure</strong> connections to ensure the integrity of
              sanitary processing systems. If you need more details or
              specifications about our sanitary fittings, feel free to{" "}
              <strong>contact us</strong> for further assistance.
            </p>
          </div>
          <div className="extras-divs">
            <h3 className="header">
              Electropolished Tubes Composition and Properties
            </h3>
            <h5 className="sub-header">Electropolished Tube Specification</h5>
            <table className="copper-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Electropolished Stainless Steel</th>
                  <th>Standard Stainless Steel</th>
                </tr>
              </thead>
              <tbody>
                {Electropolished_Comparison.map((data, index) => (
                  <tr key={index}>
                    <th>{data.feature}</th>
                    <td>{data.Electropolished_Stainless_Steel}</td>
                    <td>{data.Standard_Stainless_Steel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h5 className="sub-header">Electropolished Tube Melting Point</h5>
            <p>
              Melting Point of Stainless Steel (commonly used for
              electropolishing) is approximately = 1400–1450ºC.
            </p>
            <h5 className="sub-header">
              Types of Stainless Steel for Electropolishing
            </h5>
            <ul className="copper-list">
              <li>Austenitic Stainless Steel (e.g., 304, 316)</li>
              <li>Ferritic Stainless Steel (e.g., 430)</li>
              <li>Martensitic Stainless Steel (e.g., 410)</li>
            </ul>
          </div>
          <div className="extras-divs">
            <h3 className="header">
              Electropolished Stainless Steel Chemical Properties
            </h3>
            <table className="copper-table">
              <thead>
                <tr>
                  <th>BS / EN</th>
                  <th>Available Forms</th>
                  <th>Equivalent Grades</th>
                </tr>
              </thead>
              <tbody>
                {Electropolished_Forms.map((data, index) => (
                  <tr key={index}>
                    <td>{data.EN}</td>
                    <td>{data.Available_Forms}</td>
                    <td>{data.Equivalent_Grades}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h5 className="sub-header">
              Applications of Electropolished Tubes
            </h5>
            <ul className="copper-list">
              <li>Pharmaceutical and Food Processing Equipment</li>
              <li>Medical Devices and Components</li>
              <li>Laboratory Equipment</li>
              <li>Semiconductor Manufacturing</li>
              <li>Water Treatment Systems</li>
              <li>Aerospace and Automotive Industries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
