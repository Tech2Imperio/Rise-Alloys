import "./styles.css";
import "./styles2.css";
import React from "react";
import { DropDown, ContainerMetal } from "../../components";
import {
  aluminumMechProperties,
  aluminumChemProperties,
  aluminumMeltingPoint,
  elementsData,
} from "../../data";

export const Aluminum = () => {
  return (
    <div className="containers">
      <DropDown position={0} />
      <div className="main-content">
        <ContainerMetal
          header="Aluminum Alloy"
          image={elementsData["aluminum"][0]}
          contentHeader="Aluminum Alloy Products"
          content={elementsData["aluminum"][1]}
          button="Enquire Us"
        />
        <div className="extras">
          <div className="extras-divs">
            <h3 className="header Raleway">Aluminum Alloy Products</h3>
            <p>
              Aluminum alloys can be classified into different series based on
              their composition and properties. For instance, the 1000 series
              primarily consists of pure aluminum, while the 6000 series
              contains silicon and magnesium, offering good formability and
              weldability. One of the popular alloys is Aluminum Alloy 6061,
              known for its excellent machinability and structural strength. It
              has a density of about 2.70 g/cm³, a tensile strength ranging from
              124-290 MPa, and a yield strength of 55-240 MPa depending on the
              temper.
            </p>
            <p>
              Aluminum alloys can be classified into different series based on
              their composition and properties. For instance, the 1000 series
              primarily consists of pure aluminum, while the 6000 series
              contains silicon and magnesium, offering good formability and
              weldability. One of the popular alloys is Aluminum Alloy 6061,
              known for its excellent machinability and structural strength. It
              has a density of about 2.70 g/cm³, a tensile strength ranging from
              124-290 MPa, and a yield strength of 55-240 MPa depending on the
              temper.s
            </p>
            <p>
              In terms of pricing, the cost of aluminum per pound fluctuates
              based on market demand, supply chain dynamics, and global economic
              conditions. As of now, the price range for Aluminum Alloys in
              India varies from Rs 150 to Rs 200 per kilogram, but it's
              advisable to check current market rates for accurate pricing
              information.
            </p>
          </div>
          <div className="extras-divs">
            <h3 className="header">Aluminum Alloy Mechanical Properties</h3>
            <table className="aluminum-table">
              <thead>
                <tr>
                  <th>Aluminum Alloy Type </th>
                  <th>Density (g/cm³)</th>
                  <th>Thermal Conductivity (W/mK)</th>
                  <th>Electrical Conductivity (%IACS)</th>
                  <th>Coefficient of Thermal Expansion (10^-6/K)</th>
                  <th>Specific Heat Capacity (J/kg K)</th>
                </tr>
              </thead>
              <tbody>
                {aluminumMechProperties.map((data, index) => (
                  <tr key={index}>
                    <td>{data.Type}</td>
                    <td>{data.Density}</td>
                    <td>{data.ThermalConductivity}</td>
                    <td>{data.ElectricalConductivity}</td>
                    <td>{data.CoefficientOfThermalExpansion}</td>
                    <td>{data.SpecificHeatCapacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="extras-divs">
            <h3 className="header">
              Aluminum Alloy Composition and Chemical Properties
            </h3>
            <table className="aluminum-table">
              <thead>
                <tr>
                  <th>Aluminum Alloy Type </th>
                  <th>Composition</th>
                  <th>Corrosion Resistance</th>
                  <th>Weldability</th>
                  <th>Machinability</th>
                  <th>Anodizing Response</th>
                </tr>
              </thead>
              <tbody>
                {aluminumChemProperties.map((data, index) => (
                  <tr key={index}>
                    <td>{data.Type}</td>
                    <td>{data.Composition}</td>
                    <td>{data.CorrosionResistance}</td>
                    <td>{data.Weldability}</td>
                    <td>{data.Machinability}</td>
                    <td>{data.AnodizingResponse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="extras-divs">
            <h3 className="header">Aluminum Alloy Melting Points</h3>
            <table className="aluminum-table">
              <thead>
                <tr>
                  <th>Aluminum Alloy Type</th>
                  <th>Celsius</th>
                  <th>Fahrenheit</th>
                </tr>
              </thead>
              <tbody>
                {aluminumMeltingPoint.map((data, index) => (
                  <tr key={index}>
                    <td>{data.Type}</td>
                    <td>{data.MeltingPoint_Celsius}</td>
                    <td>{data.MeltingPoint_Celsius}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4 className="sub-header">Aluminum Alloy Melting Points</h4>
            <ul className="aluminum-list">
              <li>Pure aluminum</li>
              <li>Aluminum-copper alloys (2000 series)</li>
              <li>Aluminum-manganese alloys (3000 series)</li>
              <li>Aluminum-silicon alloys (4000 series)</li>
              <li>Aluminum-magnesium alloys (5000 series)</li>
              <li>Aluminum-magnesium-silicon alloys (6000 series)</li>
              <li>Aluminum-zinc alloys (7000 series)</li>
            </ul>
            <h4 className="sub-header">Application of Aluminum</h4>
            <ul className="aluminum-list">
              <li>Automobile parts and bodies</li>
              <li>Aircraft structures and components</li>
              <li>
                Building and construction materials (e.g., windows, doors,
                roofing)
              </li>
              <li>Educational and industrial equipment</li>
              <li>Electrical transmission lines and conductors</li>
              <li>Food and beverage packaging (e.g., cans, foils)</li>
              <li>Household items (e.g., utensils, furniture)</li>
              <li>Marine and offshore structures</li>
              <li>Medical devices and equipment</li>
              <li>Sports and recreational equipment (e.g., bicycles, boats)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
