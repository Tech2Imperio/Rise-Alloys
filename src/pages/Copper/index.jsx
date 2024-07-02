import "./styles.css";
import React from "react";
import { DropDown, ContainerMetal } from "../../components";
import { Copper_Comparison, Copper_Forms, elementsData } from "../../data";

export const Copper = () => {
  return (
    <div className="containers">
      <DropDown position={3} />
      <div className="main-content">
        <ContainerMetal
          header="Copper Alloy"
          image={elementsData["copper"][0]}
          contentHeader="Copper Alloy Products"
          content={elementsData["copper"][1]}
          button="Enquire Us"
        />
        <div className="extras">
          <div className="extras-divs">
            <h3 className="header">Cu ETP and Copper Tellurium Products</h3>
            <p>
              In marine conditions, these alloys are prone to selective
              corrosion. One of the alloys in this grade is the
              <strong> Copper Tellurium</strong>, which is also referred to as
              <strong> alloy 45</strong>. These alloys can be easily machined
              and fabricated. They have a melting point of about 1080 degrees C.
              In the
              <strong> Copper Alloy</strong> composition, copper is a major
              constituent. Apart from this nickel, tin, zinc, sulfur, silicon,
              aluminum, lead, phosphorous, tin, and antinomy are a few elements
              that can combine with copper in various systems.
            </p>
            <p>
              Cu Copper has a standard density of{" "}
              <strong>
                9.40 g/cm<sup>3</sup>
              </strong>
              . It has a minimum tensile strength of <strong>170Mpa</strong> and
              a minimum yield strength of <strong>83Mpa</strong>. It can be
              easily elongated by <strong>12%</strong> and used efficiently in
              various applications. A few of the Copper Products are{" "}
              <strong>pipes</strong>, <strong>tubes</strong>,{" "}
              <strong>wires</strong>, <strong>rods</strong>,{" "}
              <strong>cathodes</strong>, <strong>cables</strong>, etc. These
              products are very <strong>reliable</strong> and{" "}
              <strong>cost-efficient</strong>. They can be easily{" "}
              <strong>cleaned</strong> and have a{" "}
              <strong>long service life</strong>. The Copper Price Per Pound in
              India is between <strong>Rs 280</strong> to{" "}
              <strong>Rs 350</strong>. The price is dependent on the growth of
              the global economy so, it keeps on <strong>fluctuating</strong>{" "}
              every day. If you have any queries or want to know more about any
              of our grades or products, <strong>contact us</strong> for more
              information.
            </p>
          </div>
          <div className="extras-divs">
            <h3 className="header">
              Copper Alloy Composition and Mechanical Properties
            </h3>
            <h5 className="sub-header">Copper Specification</h5>
            <table className="copper-table">
              <thead>
                <tr>
                  <th></th>
                  <th>OFHC Copper</th>
                  <th>ETP Copper (IS 1897)</th>
                </tr>
              </thead>
              <tbody>
                {Copper_Comparison.map((data, index) => (
                  <tr key={index}>
                    <th>{data.feature}</th>
                    <td>{data.OFHC_Copper}</td>
                    <td>{data.ETP_Copper}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h5 className="sub-header">Copper Alloy Melting Point</h5>
            <p>Melting Point of Copper is = 1083ºC.</p>
            <h5 className="sub-header">Copper Tellurium Types</h5>
            <ul className="copper-list">
              <li>Brass</li>
              <li>Bronze alloys</li>
              <li>Gunmetals</li>
              <li>Copper Nickel</li>
              <li>Nickel silver alloys</li>
              <li>Beryllium-copper</li>
            </ul>
          </div>
          <div className="extras-divs">
            <h3 className="header">Cu Copper Chemical Element</h3>
            <table className="copper-table">
              <thead>
                <tr>
                  <th>BS / EN</th>
                  <th>Available forms</th>
                  <th>EQUIVALENTS BS (OLD) </th>
                </tr>
              </thead>
              <tbody>
                {Copper_Forms.map((data, index) => (
                  <tr key={index}>
                    <td>{data.EN}</td>
                    <td>{data.Available_forms}</td>
                    <td>{data.EQUIVALENTS_BS_OLD}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h5 className="sub-header">Application of Copper</h5>
            <ul className="copper-list">
              <li>Electrical cabling works</li>
              <li>To increase temperature</li>
              <li>Water pipes and piping connections</li>
              <li>Roofing / Cladding and Rainwater system</li>
              <li>Chemical, Oil and gas pipeline system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
