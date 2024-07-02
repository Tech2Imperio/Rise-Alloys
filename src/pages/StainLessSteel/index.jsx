import "./styles.css";
import React from "react";
import { DropDown, ContainerMetal } from "../../components";
import {
  materialData1,
  materialData2,
  materialData3,
  materialData4,
  materialData5,
  materialData6,
  materialData7,
  elementsData,
} from "../../data";
import { steelImg } from "../../assets";

export const StainLessSteel = () => {
  return (
    <div className="containers">
      <DropDown position={2} />

      <div className="main-content">
        <ContainerMetal
          header="Stainless Steel"
          image={elementsData["stainLessSteel"][0]}
          contentHeader="Stainless Steel Products"
          content={elementsData["stainLessSteel"][1]}
          button="Enquire Us"
        />
        <div className="extras">
          <div className="extras-divs">
            <h3 className="header">
              Austenitic Stainless Steel Seamless Tube and Ferritic Round Pipes
              supplier in India
            </h3>
            <p>
              The Martensitic & Ferritic Stainless Steel Seamless Tube both
              belong to the stainless steel family. The ferritic welded pipes
              are produced with low carbon and no nickel content. They are not
              heat treatable but still possess excellent corrosion resistance.
              The martensitic welded pipes are heat treated but while welding
              they may crack if a matching filler metal is used. SS ERW Pipe can
              be used to transport oil, natural gas, or subsequent liquid-vapor
              objects. These pipes are manufactured using both low and
              high-frequency resistance.
            </p>
            <p>
              All pipes of stainless steel are available in round, rectangular
              and square shapes. The Stainless Steel Tube can be easily fitted
              in buildings across tight spaces in basements, bends, and corners.
              For construction or high-stress requirements, the Stainless Steel
              Round Pipe is preferred. These pipes are designed with high
              deformability, superior toughness, and excellent corrosion
              resistance. Super ferritic steels are specially designed for
              seawater corrosion resistance The Super Ferritic SS Tubing are
              widely used in condensers, feedwater heaters, drilling, etc.
            </p>
            <p>
              The ASME SA 312 SS Schedule 40 Pipe is used for high pressure and
              temperature applications. Depending on the thickness of the pipe
              the workability decreases at high-temperatures e.g. a pipe of 1
              inch has workability of 2205 at 100 degrees C. As the temperature
              increases to 750 degrees C the workability reduces to 1664. The
              Polished Chromium Nickel Seamless Stainless Steel Pipe is highly
              versatile and can be used in food packing, beverages, chemical,
              and architectural applications.
            </p>
            <p>
              The ASME B36.19 Stainless Steel Pipe covers both welded and
              seamless types of pipes. All our products are manufactured using
              the best raw materials and cutting-edge technology. The SS Pipe
              Price list depends on the grade and the thickness of the pipe. We
              are the largest stockist in Mumbai who can customize all our
              products as per your requirements. For more information about our
              products or the Stainless Steel Pipe, Contact our outlets to know
              more.
            </p>
          </div>
          <div className="extras-divs">
            <h3 className="header">Stainless Steel Pipe/ Tube Specification</h3>
            <div>
              <strong>Product Name: </strong>
              Stainless Steel Pipe, SS Tube, SS Tubing
            </div>
            <div>
              <strong>SS Pipe Outside Diameter: </strong>
              6.00 mm OD up to 914.4 mm OD, Sizes up to 24” NB available
              Ex-stock, OD Size Steel Tubes available Ex-stock
            </div>
            <div>
              <strong>SS Pipe Thickness Range: </strong>
              0.3mm - 50 mm, SCH 5, SCH10, SCH 10S, SCH 40, SCH 80, SCH 80S, SCH
              160, SCH XXS, SCH XS
            </div>
            <div>
              <strong>SS Pipe Length: </strong>
              Single Random, Double Random & Required Length End: Plain End,
              Beveled End, Threaded
            </div>
            <div>
              <strong>Type: </strong>
              SS Seamless Pipes | SS ERW Pipes | SS Welded Pipes | SS Fabricated
              Pipes | SS CDW Tubes | SS Honed Tubes
            </div>
            <div>
              <strong>SS Pipe Outside Finish: </strong>
              2B, No.4, No.1, No.8 Mirror Finish for Stainless Steel Pipes,
              Finish as per customer Requirements
            </div>
            <div>
              We can also cut, thread, and groove SS Tube to meet your
              specifications.
            </div>
            <div>
              <strong>Our Network: </strong> Mumbai, Chennai, Bangalore,
              Gujarat, India, Malaysia, Singapore, Saudi Arabia
            </div>
          </div>
          <div className="extras-divs">
            <h3 className="header">Types of Stainless Steel Pipe/ Tube</h3>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Tubing suppliers
              </h4>
              <p>
                SS Square Tubing, SS A312 Tubing, SS Round Tubing manufacturers
                in India
              </p>
              <div>
                <strong>
                  Available ASTM A312 Stainless Steel Tubing product forms
                </strong>
                <ul>
                  <li>ASTM A312 Stainless Steel Straight Tubing</li>
                  <li>ASTM A312 Stainless Steel Seamless Tubing</li>
                </ul>
              </div>
              <div>
                <strong>SS Tubing Typical manufacturing specifications</strong>
                <ul>
                  <li>ASTM A312</li>
                  <li>ASTM A213</li>
                  <li>ASTM A249</li>
                  <li>ASTM A554</li>
                  <li>Also individual customer specifications.</li>
                </ul>
              </div>
              <div>
                <strong>End Protection:</strong>
                Plastic Caps
              </div>
              <div>
                <strong>Delivery Condition:</strong>
                Annealed and Pickled, Polished, Bright Annealed, Cold Drawn
              </div>
              <div>
                <strong>Inspection, Test Reports:</strong>
                Mill Test Certificates, EN 10204 3.1, Chemical Reports,
                Mechanical Reports, PMI Test Reports, Visual Inspection Reports,
                Third Party Inspection Reports, NABL Approved Lab Reports,
                Destructive Test Report, Non Destructive Test Reports
              </div>
              <div>
                <strong>ASTM A312 Stainless Steel Tubing Type:</strong>
                Seamless / ERW / Welded / Fabricated / LSAW Pipes / Seam-welded
                / Redrawn
              </div>
              <h3 className="sub-header">
                ASTM A213 cold drawn seamless stainless steel tubing
                manufacturers in India
              </h3>
              <table className="stainless-Steel-table">
                <tbody>
                  {materialData1.map((data, index) => {
                    const header = Object.keys(data)[0];
                    let value = data[header];
                    if (Array.isArray(value)) {
                      value = value.map((item, indexs) => (
                        <li key={indexs}>{item}</li>
                      ));
                      value = <ul>{value}</ul>;
                    }
                    return (
                      <tr key={index} className={"row" + index}>
                        <th>{header}</th>
                        <td>{value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="sub-header">
                SS Tubing sizes in regular stock:
              </div>
              <div>
                <strong>Round Stainless Steel Pipe:</strong>
                <p>
                  16, 17, 18, 19, 20, 21, 22, 23, 25, 28, 31.8, 35, 36, 38.1,
                  48, 50.8, 60, 63.5, 76.2, 89, 101, 114 mm
                </p>
              </div>
              <div>
                <strong>Square Stainless Steel Pipe:</strong>
                <p>17, 18, 19, 20, 21, 22, 23, 24, 25, 28, 30, 36, 38, 50 mm</p>
              </div>
              <div>
                <strong>Rectangle Stainless Steel Pipe:</strong>
                <p>
                  10*30, 10*40, 10*50, 20*10, 23*11, 24*12, 25*13, 28*25, 28*13,
                  29*14, 30*15, 30*20, 30*22, 34*22, 36*23, 50*25, 60*30, 75*45,
                  95*45 mm
                </p>
              </div>
              <div>
                <strong>Thickness:</strong>
                <p>
                  Exact 0.25, 0.28, 0.32, 0.37, 0.41, 0.51, 0.61, 0.71, 0.91,
                  1.11, 1.15, 1.41 mm
                </p>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                Decorative Stainless Steel Tube, ASTM A554 Tube manufacturers in
                India
              </h6>
              <div>
                <strong>Trade Name & size:</strong>
                <ul>
                  <li>
                    Seamless stainless steel tube with ASTM A269 ASTM A213
                  </li>
                  <li>Corrugated stainless steel tube</li>
                  <li>
                    Auto part precision CNC stainless steel NCT bending tube
                  </li>
                  <li>ASTM A269 A213 stainless steel coiled tube</li>
                  <li>Small Diameter Stainless Steel Tubes</li>
                  <li>Inox square tubes</li>
                  <li>Inox rectangular tubes</li>
                  <li>Capillary stainless steel tube</li>
                  <li>AISI DIN JIS stainless steel tubes</li>
                  <li>28mm Diameter Stainless Steel Tube</li>
                </ul>
              </div>
              <table className="stainless-Steel-table">
                <tbody>
                  {materialData2.map((data, index) => {
                    const header = Object.keys(data)[0];
                    let value = data[header];
                    if (Array.isArray(value)) {
                      value = value.map((item, indexs) => (
                        <li key={indexs}>{item}</li>
                      ));
                      value = <ul>{value}</ul>;
                    }
                    return (
                      <tr key={index} className={"row" + index}>
                        <th>{header}</th>
                        <td>{value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Pipe suppliers
              </h4>
              <h6 className="sub-sub-header">
                Stainless Steel Seamless Pipe, Stainless Steel Welded Pipe,
                Round Stainless Steel Pipe, Stainless Steel Pipe Manufacturers
                In India
              </h6>
              <p>
                Steel Tubes India is the only company in India who awarded by
                Indian Government for Export Excellence for 6 consecutive Years.
              </p>
              <div>
                <strong>2018 We offer Best price on</strong>
                <ul>
                  <li>Small Diameter Stainless Steel pipes</li>
                  <li>2 Inch Seamless Stainless Steel Pipe</li>
                  <li>Welded Sanitary Stainless Steel Pipe</li>
                  <li>Bus Handrail Welded Stainless Steel Pipes</li>
                  <li>BA Seamless Stainless Steel Pipe</li>
                  <li>Fabricate pipe stainless steel</li>
                  <li>PED Approved stainless steel pipe</li>
                  <li>Stainless steel pipe outside polished</li>
                  <li>Heat resistant braided flexible stainless steel pipe</li>
                  <li>
                    Large Diameter stainless steel pipe For Heat Exchanger
                  </li>
                </ul>
              </div>
              <div>
                <strong>Origin Standard:</strong>
                American Standard, Russia Standard, Janpanese Standard, European
                Standard
              </div>
              <div>
                <strong>SHORTEST Possible Delivery:</strong>
                Shutdown / Emergency/ Project Rush Demands
              </div>
              <div>
                <strong>Certification:</strong>
                ISO EN 10204 3.1/ 3.1B/ 3.2, PED, DNV, TUV.
              </div>
              <div>
                <strong>End:</strong>
                Plain End, Beveled End, Threaded
              </div>
              <div>
                <strong>Manufacturers:</strong>
                <ul>
                  <li>Sumitomo Metals, Japan</li>
                  <li>Nippon Steel Corporation, Japan</li>
                  <li>Kobe Special Tube, Japan</li>
                  <li>Sanyo Special Steel, Japan</li>
                  <li>Tubacex Tubos Inoxidables S.A., Spain</li>
                  <li>Schoeller Bleckmann, Austria</li>
                  <li>Seah Steel Corporation, Korea</li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Seamless pipe suppliers
              </h4>
              <h6 className="sub-sub-header">
                SS Seamless pipe, ASTM A312 UNS S30400 Seamless pipe, A312 UNS
                S30400 Seamless pipe manufacturers in India
              </h6>
              <p>
                Steel Tubes India is first company in India who awarded by
                Indian Government for Export Excellence for 6 consecutive Years.
              </p>
              <div>
                <strong>
                  In 2018 Special offer, get 10% flat discount, India Factory:
                </strong>
                <ul>
                  <li>Seamless stainless steel pipe</li>
                  <li>Thick Wall Seamless Stainless Steel Pipe</li>
                  <li>2 Inch Seamless Stainless Steel Pipe</li>
                  <li>
                    ERW welded polished seamless annealed embossed stainless
                    steel Pipe
                  </li>
                  <li>Galvanized stainless steel seamless pipe</li>
                  <li>ASTM A554 Seamless Stainless Steel Pipe</li>
                  <li>
                    Cold drawn precision seamless stainless steel pipe with
                    clean smooth surface
                  </li>
                </ul>
              </div>
              <div>
                <strong>Clients reference list:</strong>
                ISC (Japan), ISC (Iran), BHEL (India), Media air-conditioning,
                SUMSUNG (Korea), GNG Co., Ltd. (Korea), and ZAN (Japan). GE
                (USA) etc.
              </div>
              <div>
                <strong>Specification:</strong>
                ASTM A-213 / ASME SA-213, ASTM A-269 / ASME SA-269, ASTM A312 /
                ASME SA312, EN10216-5, DIN17458
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Seamless tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                Sanitary Polish welded/ seamless Stainless Steel tube for food
                grade, Stainless Steel Seamless Tubes manufacturers in India,
                Stainless Steel Seamless Tubes Suppliers
              </h6>
              <p>
                SA213 long steel tubes, make to U bend tubes for boilers and
                heat exchangers. With strong wood structure box packing by
                containers loading and shipping.
              </p>
              <p>
                Heater tubes U TUBES with Stainless steel grade available, 23mm
                Seamless Stainless Steel Exhaust Perforated Tube, Beveled end
                seamless stainless steel tube, small diameter seamless stainless
                steel tube from Steel Tubes India
              </p>
              <div>
                <strong>Marking:</strong>
                All Stainless Steel ASTM A312 Stainless Steel tubes are marked
                as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or
                according to the customer’s request.)
              </div>
              <table className="stainless-Steel-table">
                <tbody>
                  {materialData3.map((data, index) => {
                    const header = Object.keys(data)[0];
                    let value = data[header];
                    if (Array.isArray(value)) {
                      value = value.map((item, idx) => (
                        <React.Fragment key={item}>
                          {item}
                          {idx !== value.length - 1
                            ? header === "Grade"
                              ? " / "
                              : ", "
                            : "."}
                        </React.Fragment>
                      ));
                    }
                    return (
                      <tr key={index} className={"row" + index}>
                        <th>{header}</th>
                        <td>{value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Welded pipe suppliers
              </h4>
              <h6 className="sub-sub-header">
                SS Welded pipe, Jindal Welded pipe Stainless Steel
              </h6>
              <div>
                <strong>Dealer & distributor of:</strong>
                <ul>
                  <li>Polish Round Welded Stainless Steel Pipe</li>
                  <li>Manufacture stainless steel welded flexible pipe tube</li>
                  <li>Inox square stainless steel welded pipe</li>
                  <li>Inox rectangular stainless steel welded pipe</li>
                  <li>Welded Sanitary Stainless Steel Pipe</li>
                  <li>18 inch welded stainless steel pipe</li>
                </ul>
              </div>
              <div>
                <strong>SS Tube Specifications:</strong>
                <p>
                  ASTM A312 Standard Specification for Seamless, Welded, and
                  Heavily Cold Worked Austenitic Stainless Steel Pipes
                </p>

                <p>
                  ASTM A790 Standard Specification for Seamless and Welded
                  Ferritic/Austenitic Stainless Steel Pipe
                </p>
                <p>
                  ASME SA213 Seamless Ferrite and Austenitic Alloy Steel Pipe
                  for Boiler, Superheater and Heat Exchanger
                </p>
                <p>
                  ASME SA249 Standard Specification for Welded Austenitic Steel
                  Boiler, Superheater, Heat-Exchanger, and Condenser Tubes
                </p>
                <p>
                  ASME SA789 Standard Specification for Welded Austenitic Steel
                  Boiler, Superheater, Heat-Exchanger, and Condenser Tubes
                </p>
                <p>
                  GB/T14976-2002 Stainless steel seamless tubes for fluid
                  transport
                </p>
                <p>
                  GB/T12771-2008 Stainless steel welded tubes for fluid
                  transport
                </p>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Welded tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                SS Welded tube, SS Round tube, SS Square tube manufacturers in
                India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Welded tube Trade Name & Size:
                </strong>
                <ul>
                  <li>Polish Round Welded Stainless Steel Tube</li>
                  <li>Manufacture stainless steel welded flexible Tube</li>
                  <li>Inox square stainless steel welded Tube</li>
                  <li>Inox rectangular stainless steel welded Tube</li>
                  <li>Welded Sanitary Stainless Steel Tube</li>
                  <li>18 inch welded stainless steel Tube</li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Protection tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                Steel Protection tube, SS Protection tube manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Protection tube Trade Name & Size:
                </strong>
                <ul>
                  <li>Capillary welded stainless steel pipe</li>
                  <li>Thermocouple protection Tube</li>
                  <li>
                    Braided cable protection corrugated stainless steel tube
                  </li>
                  <li>
                    Custom-made Stainless steel protection tube thread
                    thermowell
                  </li>
                  <li>
                    Thermowell thermocouple protection stainless steel tube
                    manufacturer
                  </li>
                  <li>
                    ASTM A312 Stainless Steel Protection tube Size: 6.35 mm OD
                    To 152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Cold Drawn Seamless pipe suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Cold Drawn Seamless pipe, ASTM A312 Cold Drawn Seamless
                pipe, A312 CDS pipe manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Cold Drawn Seamless pipe Trade Name
                  & Size:
                </strong>
                <ul>
                  <li>Polish Round Welded Stainless Steel Tube</li>
                  <li>Manufacture stainless steel welded flexible Tube</li>
                  <li>Inox square stainless steel welded Tube</li>
                  <li>Inox rectangular stainless steel welded Tube</li>
                  <li>Welded Sanitary Stainless Steel Tube</li>
                  <li>18 inch welded stainless steel Tube</li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Cold Drawn Seamless tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Cold Drawn Seamless tube, ASTM A312 Cold Drawn Seamless
                tube manufacturers in India, Offer Great Price.
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Extruded Seamless Tube Trade Name &
                  Size:
                </strong>
                <ul>
                  <li>ASTM A312 Cold Drawn Seamless tube suppliers</li>
                  <li>
                    ASTM A312 Stainless Steel Cold Drawn Seamless tube
                    Manufacturer
                  </li>
                  <li>Stainless Steel Cold Drawn Seamless tube</li>
                  <li>CDS tube</li>
                  <li>
                    ASTM A312 Stainless Steel Cold Drawn Seamless tube Size:
                    6.35 mm OD To 152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Extruded Seamless Pipe suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Extruded Seamless Pipe, ASTM A312 UNS S30400 Extruded
                Seamless Pipe, A312 UNS S30400 Extruded Seamless Pipe
                manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Extruded Seamless Pipe Trade Name &
                  Size:
                </strong>
                <ul>
                  <li>ASTM A312 Cold Drawn Seamless tube suppliers</li>
                  <li>
                    ASTM A312 Stainless Steel Cold Drawn Seamless tube
                    Manufacturer
                  </li>
                  <li>Stainless Steel Cold Drawn Seamless tube</li>
                  <li>CDS tube</li>
                  <li>
                    ASTM A312 Stainless Steel Cold Drawn Seamless tube Size:
                    6.35 mm OD To 152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Round Tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Round Tube, ASTM A312 UNS S30400 Round Tube, A312 UNS
                S30400 Round Tube manufacturers in India.
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Round Tube Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Extruded Seamless Tube suppliers</li>
                  <li>
                    ASTM A312 Stainless Steel Extruded Seamless Tube
                    Manufacturer
                  </li>
                  <li>
                    ASTM A312 UNS S30400 Extruded Seamless Tube distributor in
                    Turkey
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Extruded Seamless Tube</li>
                  <li>SS Extruded Seamless Tube</li>
                  <li>UNS S30400 Extruded Seamless Tube</li>
                  <li>
                    ASTM A312 Stainless Steel Extruded Seamless Tube Size: 6.35
                    mm OD To 152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Square Tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Square Tube, ASTM A312 UNS S30400 Square Tube, A312 UNS
                S30400 Square Tube manufacturers in India.
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Square Tube Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Square Tube suppliers</li>
                  <li>ASTM A312 Stainless Steel Square Tube Manufacturer</li>
                  <li>
                    ASTM A312 UNS S30400 Square Tube distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Square Tube</li>
                  <li>SS Square Tube</li>
                  <li>UNS S30400 Square Tube</li>
                  <li>
                    ASTM A312 Stainless Steel Square Tube Size: 6.35 mm OD To
                    152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Coiled Tubing suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Coiled Tubing, ASTM A312 UNS S30400 Coiled Tubing, A312 UNS
                S30400 Coiled Tubing manufacturers in India.
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Coiled Tubing Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Coiled Tubing suppliers</li>
                  <li>ASTM A312 Stainless Steel Coiled Tubing Manufacturer</li>
                  <li>
                    ASTM A312 UNS S30400 Coiled Tubing distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Coiled Tubing</li>
                  <li>SS Coiled Tubing</li>
                  <li>UNS S30400 Coiled Tubing</li>
                  <li>
                    ASTM A312 Stainless Steel Coiled Tubing Size: 6.35 mm OD To
                    152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Rectangular Tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Rectangular Tube, ASTM A312 UNS S30400 Rectangular Tube,
                A312 UNS S30400 Rectangular Tube manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Rectangular Tube Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Rectangular Tube suppliers</li>
                  <li>
                    ASTM A312 Stainless Steel Rectangular Tube Manufacturer
                  </li>
                  <li>
                    ASTM A312 UNS S30400 Rectangular Tube distributor in
                    Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Rectangular Tube</li>
                  <li>SS Rectangular Tube</li>
                  <li>UNS S30400 Rectangular Tube</li>
                  <li>
                    ASTM A312 Stainless Steel Rectangular Tube Size: 6.35 mm OD
                    To 152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Tubing bends suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Tubing bends, ASTM A312 UNS S30400 Tubing bends, A312 UNS
                S30400 Tubing bends manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Tubing bends Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Tubing bends suppliers</li>
                  <li>ASTM A312 Stainless Steel Tubing bends Manufacturer</li>
                  <li>
                    ASTM A312 UNS S30400 Tubing bends distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Tubing bends</li>
                  <li>SS Tubing bends</li>
                  <li>UNS S30400 Tubing bends</li>
                  <li>
                    ASTM A312 Stainless Steel Tubing bends Size: 6.35 mm OD To
                    152 mm OD
                  </li>
                </ul>
              </div>
              <div>
                <strong>Finish:</strong>
                2B MIll Finish , No.4 finish, BA Finish, 400 Grit Finish, 550
                Grit Finish, 600 Grit Finish
              </div>
              <div>
                <strong>Thickness:</strong>
                0.5mm, 0.6mm, 0.7mm, 0.8mm, 1.0mm, 1.2mm, 1.5mm, 1.6mm, 2.0mm,
                2.5mm, 3.0mm
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel High temperature alloy tubing
                suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI High temperature alloy tubing, ASTM A312 UNS S30400 High
                temperature alloy tubing, A312 UNS S30400 High temperature alloy
                tubing manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel High temperature alloy tubing Trade
                  Name & Size:
                </strong>
                <ul>
                  <li>
                    ASTM A312 UNS S30400 High temperature alloy tubing suppliers
                  </li>
                  <li>
                    ASTM A312 Stainless Steel High temperature alloy tubing
                    Manufacturer
                  </li>
                  <li>
                    ASTM A312 UNS S30400 High temperature alloy tubing
                    distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel High temperature alloy tubing</li>
                  <li>SS High temperature alloy tubing</li>
                  <li>UNS S30400 High temperature alloy tubing</li>
                  <li>
                    ASTM A312 Stainless Steel High temperature alloy tubing
                    Size: 6.35 mm OD To 152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Tubería suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Tubería, ASTM A312 UNS S30400 Tubería, A312 UNS S30400
                Tubería manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Tubería Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Tubería suppliers</li>
                  <li>ASTM A312 Stainless Steel Tubería Manufacturer</li>
                  <li>ASTM A312 UNS S30400 Tubería distributor in Malaysia</li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Tubería</li>
                  <li>SS Tubería</li>
                  <li>UNS S30400 Tubería</li>
                  <li>
                    ASTM A312 Stainless Steel Tubería Size: 6.35 mm OD To 152 mm
                    OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Tubo suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Tubo, ASTM A312 UNS S30400 Tubo, A312 UNS S30400 Tubo
                manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Tubo Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Tubo suppliers</li>
                  <li>ASTM A312 Stainless Steel Tubo Manufacturer</li>
                  <li>ASTM A312 UNS S30400 Tubo distributor in Malaysia</li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Tubo</li>
                  <li>SS Tubo</li>
                  <li>UNS S30400 Tubo</li>
                  <li>
                    ASTM A312 Stainless Steel Tubo Size: 6.35 mm OD To 152 mm OD
                  </li>
                </ul>
              </div>
              <div>
                <strong>Material:</strong>
                TP201, TP202, XM-19, TP304, TP304L, TP304H, TP304N, TP304LN,
                TP309S, TP309H, TP309Cb, TP309HCb, TP310S, TP310H, TP310Cb,
                TP310S, TP310H, TP310Cb, TP310HCb, TP310HCbN, TP310HCbLN, TP316,
                TP316L, TP316H, TP316Ti, TP316N, TP316LN, TP317, TP317L, TPLM,
                TP317LMN, TP321, TP321H, TP347, TP347H, TP347HFG, TP347LN,
                TP348, TP348H, XM-15, TP444
              </div>
              <div>
                <strong>Shapes:</strong>
                Round Polished Pipes, Square Polished Pipes, Rectangular
                Polished Pipes, Special Shapes Polished Pipes
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Precision tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Precision tube, ASTM A312 UNS S30400 Precision tube, A312
                UNS S30400 Precision tube manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Precision tube Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Precision tube suppliers</li>
                  <li>ASTM A312 Stainless Steel Precision tube Manufacturer</li>
                  <li>
                    ASTM A312 UNS S30400 Precision tube distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Precision tube</li>
                  <li>SS Precision tube</li>
                  <li>UNS S30400 Precision tube</li>
                  <li>
                    ASTM A312 Stainless Steel Precision tube Size: 6.35 mm OD To
                    152 mm OD
                  </li>
                </ul>
              </div>
              <div>
                <strong>Standard:</strong>
                ASTM A213 /ASME SA 213, ASTM A269/ASME SA269 , A312, A511, A789,
                A790, A376, EN 10216-5, EN 10297,DIN 17456, DIN 17458, GOST
                9941, GOST 9940, JIS G3446 JIS G3447 JISG3448 JIS G3459 JIS
                G3463 JIS G 3468
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Capillary tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Capillary tube, ASTM A312 UNS S30400 Capillary tube, A312
                UNS S30400 Capillary tube manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Capillary tube Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Capillary tube suppliers</li>
                  <li>ASTM A312 Stainless Steel Capillary tube Manufacturer</li>
                  <li>
                    ASTM A312 UNS S30400 Capillary tube distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Capillary tube</li>
                  <li>SS Capillary tube</li>
                  <li>UNS S30400 Capillary tube</li>
                  <li>
                    ASTM A312 Stainless Steel Capillary tube Size: 6.35 mm OD To
                    152 mm OD
                  </li>
                </ul>
              </div>
              <div>
                <strong>Material:</strong> TP304/304L/304H, 316/316L, 321/321H,
                317/317L, 347/347H, 309S, 310S, S31803, S32205, S2570, S32760,
                S32304, 904L, 08X18H10, 03X18H11, 08X18H10T, 12X18H10T,
                08X17H14M2, 03X17H14M2, 10X17H13M2T, 20X23H18, SUS304TP,
                SUS304LTP, SUS304HTP, SUS316TP, SUS316LTP, SUS316HTP, SUS321TP,
                SUS321HTP, SUS347TP, SUS347HTP, SUS310STP, SUS317TP, SUS890LTP,
                EN1.4301, 1.4306, 1.4948, 1.4401, 1.4404, 1.4571, 1.4541,
                1.4833, 1.4878, 1.4550, 1.4462, 1.4438, 1.4845.
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Hot finished seamless tubing (HFS)
                suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Hot finished seamless tubing (HFS), ASTM A312 UNS S30400
                Hot finished seamless tubing (HFS), A312 UNS S30400 Hot finished
                seamless tubing (HFS) manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Hot finished seamless tubing (HFS)
                  Trade Name & Size:
                </strong>
                <ul>
                  <li>
                    SS Hot finished seamless tubing (HFS) suppliersASTM A312 UNS
                    S30400 Hot finished seamless tubing (HFS) suppliers
                  </li>
                  <li>
                    ASTM A312 Stainless Steel Hot finished seamless tubing (HFS)
                    Manufacturer
                  </li>
                  <li>
                    ASTM A312 UNS S30400 Hot finished seamless tubing (HFS)
                    distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Hot finished seamless tubing (HFS)</li>
                  <li>SS Hot finished seamless tubing (HFS)</li>
                  <li>UNS S30400 Hot finished seamless tubing (HFS)</li>
                  <li>
                    ASTM A312 Stainless Steel Hot finished seamless tubing (HFS)
                    Size: 6.35 mm OD To 152 mm OD
                  </li>
                </ul>
              </div>
              <div>
                <strong>Nominal Dia:</strong> 1/2" to 32" NB for seamless pipe
              </div>
              <div>
                <strong>Schedules:</strong> 5S, 10S, 40S, 80S, 10, 20, 30...120,
                140, 160, XXS
              </div>
              <div>
                All dimensions are in accordance with ANSI B36.19 and ANSI
                B36.10
              </div>
              <div>
                <strong>Size Range for tubing:</strong>
                OD: 1/4" (6.25mm) to 8" (203mm), WT 0.02" (0.5mm) to 0.5"(12mm)
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Cold drawn seamless tubing (CDS)
                suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Cold drawn seamless tubing (CDS), ASTM A312 UNS S30400 Cold
                drawn seamless tubing (CDS), A312 UNS S30400 Cold drawn seamless
                tubing (CDS) manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Cold drawn seamless tubing (CDS)
                  Trade Name & Size:
                </strong>
                <ul>
                  <li>
                    ASTM A312 UNS S30400 Cold drawn seamless tubing (CDS)
                    suppliers
                  </li>
                  <li>
                    ASTM A312 Stainless Steel Cold drawn seamless tubing (CDS)
                    Manufacturer
                  </li>
                  <li>
                    ASTM A312 UNS S30400 Cold drawn seamless tubing (CDS)
                    distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Cold drawn seamless tubing (CDS)</li>
                  <li>SS Cold drawn seamless tubing (CDS)</li>
                  <li>UNS S30400 Cold drawn seamless tubing (CDS)</li>
                  <li>
                    ASTM A312 Stainless Steel Cold drawn seamless tubing (CDS)
                    Size: 6.35 mm OD To 152 mm OD
                  </li>
                </ul>
              </div>
              <div>
                <strong>ASTM:</strong> A213, A269, B163, B167, B668, A632, A789,
                A790
                <br />
                <strong>ASME:</strong> SA213, SB163, SB167, SB668, SA789, SA790
                <br />
                <strong>NACE:</strong> MR0175
                <br />
                <strong>EN:</strong> 10216-5 TCI
                <br />
                <strong>DIN:</strong> 17458 TCI
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Electric resistance welded (ERW)
                suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Electric resistance welded (ERW), ASTM A312 UNS S30400
                Electric resistance welded (ERW), A312 UNS S30400 Electric
                resistance welded (ERW) manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Electric resistance welded (ERW)
                  Trade Name & Size:
                </strong>
                <ul>
                  <li>
                    ASTM A312 UNS S30400 Electric resistance welded (ERW)
                    suppliers
                  </li>
                  <li>
                    ASTM A312 Stainless Steel Electric resistance welded (ERW)
                    Manufacturer
                  </li>
                  <li>
                    ASTM A312 UNS S30400 Electric resistance welded (ERW)
                    distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Electric resistance welded (ERW)</li>
                  <li>SS Electric resistance welded (ERW)</li>
                  <li>UNS S30400 Electric resistance welded (ERW)</li>
                  <li>
                    ASTM A312 Stainless Steel Electric resistance welded (ERW)
                    Size: 6.35 mm OD To 152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Drawn over mandrel (DOM) suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Drawn over mandrel (DOM), ASTM A312 UNS S30400 Drawn over
                mandrel (DOM), A312 UNS S30400 Drawn over mandrel (DOM)
                manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Drawn over mandrel (DOM) Trade Name
                  & Size:
                </strong>
                <ul>
                  <li>
                    ASTM A312 UNS S30400 Drawn over mandrel (DOM) suppliers
                  </li>
                  <li>
                    ASTM A312 Stainless Steel Drawn over mandrel (DOM)
                    Manufacturer
                  </li>
                  <li>
                    ASTM A312 UNS S30400 Drawn over mandrel (DOM) distributor in
                    Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Drawn over mandrel (DOM)</li>
                  <li>SS Drawn over mandrel (DOM)</li>
                  <li>UNS S30400 Drawn over mandrel (DOM)</li>
                  <li>
                    ASTM A312 Stainless Steel Drawn over mandrel (DOM) Size:
                    6.35 mm OD To 152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Heat Exchanger Tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Heat Exchanger Tube, ASTM A312 UNS S30400 Heat Exchanger
                Tube, A312 UNS S30400 Heat Exchanger Tube manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Heat Exchanger Tube Trade Name &
                  Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Heat Exchanger Tube suppliers</li>
                  <li>
                    ASTM A312 Stainless Steel Heat Exchanger Tube Manufacturer
                  </li>
                  <li>
                    ASTM A312 UNS S30400 Heat Exchanger Tube distributor in
                    Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Heat Exchanger Tube</li>
                  <li>SS Heat Exchanger Tube</li>
                  <li>UNS S30400 Heat Exchanger Tube</li>
                  <li>
                    ASTM A312 Stainless Steel Heat Exchanger Tube Size: 6.35 mm
                    OD To 152 mm OD
                  </li>
                </ul>
              </div>
            </div>
            <div className="stainlessSteel">
              <h4 className="sub-header">
                ASTM A312 Stainless Steel Finned Tube suppliers
              </h4>
              <h6 className="sub-sub-header">
                AISI Finned Tube, ASTM A312 UNS S30400 Finned Tube, A312 UNS
                S30400 Finned Tube manufacturers in India
              </h6>
              <div>
                <strong>
                  ASTM A312 Stainless Steel Finned Tube Trade Name & Size:
                </strong>
                <ul>
                  <li>ASTM A312 UNS S30400 Finned Tube suppliers</li>
                  <li>ASTM A312 Stainless Steel Finned Tube Manufacturer</li>
                  <li>
                    ASTM A312 UNS S30400 Finned Tube distributor in Malaysia
                  </li>
                  <li>Stainless Steel ASTM A312 TP Material suppliers</li>
                  <li>Stainless Steel Finned Tube</li>
                  <li>SS Finned Tube</li>
                  <li>UNS S30400 Finned Tube</li>
                  <li>
                    ASTM A312 Stainless Steel Finned Tube Size: 6.35 mm OD To
                    152 mm OD
                  </li>
                </ul>
              </div>
              <div>
                <strong>Test:</strong> Direct-reading Spectrograph, Hydrostatic
                testing machine, X-ray detector, UI trasonic flaw detector,
                Magnetic particle detector
              </div>
              <div>
                <strong>Process:</strong> Cold drawn, Cold rolled, Precision
                Rolled for Seamless Pipe or Tube
              </div>
              <div>
                <strong>Equipment:</strong> Press machine, Bending machine,
                Pushing Machine, electric bevelling machine Sand-blasting
                machine, etc
              </div>
              <div>
                <strong>Stainless Steel Pipe/ Tube Origin:</strong> West Europe
                / Japanese / Indian / USA / Korean / American / European
              </div>
              <div>
                <strong>
                  Test Certificates for Stainless Steel Pipe/ Tube:
                </strong>{" "}
                Manufacturer Test Certificate as per EN 10204 / 3.1B, Raw
                Materials Certificate, 100% Radiography Test Report, Third Party
                Inspection Report
              </div>
            </div>
          </div>
          <div className="extras-divs">
            <h3 className="header">
              Stainless Steel Pipe/ Tube Latest Price List
            </h3>
            <div>
              Stainless Steel Pipe Price IN INDIA Best Prices Straight from
              Stock, Low Quotes from Mfg. Mills
            </div>
            <table className="stainless-Steel-table" style={{ border: "none" }}>
              <thead>
                <tr>
                  <th>STAINLESS STEEL SEAMLESS PIPE</th>
                  <th>STAINLESS STEEL ERW PIPE</th>
                  <th>STAINLESS STEEL ROUND PIPE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    SIZE: 12 NB X SCH 40S <br />
                    FOB Price (INR): 47382/- Per MTR
                  </td>
                  <td>
                    SIZE: DN 50 x SCH, 40S <br />
                    FOB Price (INR): 2483/- Per MTR
                  </td>
                  <td>
                    SIZE: DN 40 x SCH, 40S <br />
                    FOB Price (INR): 2156/- Per MTR
                  </td>
                </tr>

                <tr>
                  <th>STAINLESS STEEL WELDED PIPE</th>
                  <th>STAINLESS STEEL SQUARE PIPE</th>
                  <th>JINDAL STAINLESS STEEL PIPE</th>
                </tr>
                <tr>
                  <td>
                    SIZE: DN 25 x SCH, 40S <br />
                    FOB Price (INR): 1155/- Per MTR
                  </td>
                  <td>
                    SIZE: DN 15 x SCH, 40S <br />
                    FOB Price (INR): 583/- Per MTR
                  </td>
                  <td>
                    SIZE: 3/4 NB X SCH 80S <br />
                    FOB Price (INR): 4544/- Per MTR
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              The market price for nickel has become very volatile in recent
              months. As a result, we cannot provide exact online pricing for
              these items, please contact us to get the final price within 2
              hours.
              <ul>
                <li>
                  Austenitic Stainless Steel Welded Pipes, ASTM A269-10 Duplex
                  Steel Pipes
                  <br />
                  FOB price: US $1500-6000 / Ton
                </li>
                <li>
                  ASTM A312, Stainless Steel 3inch sch40 seamless water line
                  stainless steel pipe
                  <br />
                  FOB price: US $2500-6000 / Ton
                </li>
                <li>
                  ASTM A312 Stainless Steel stainless steel welded pipe
                  <br />
                  FOB price: US $6-12 / Kilogram
                </li>
                <li>
                  astm a312 Stainless Steel stainless steel seamless pipe
                  <br />
                  FOB price: US $1000-6000 / Ton
                </li>
                <li>
                  asme b36.19m seamless stainless steel pipes
                  <br />
                  FOB price: US $1-10 / Piece
                </li>
                <li>
                  ASTM A312 Stainless Steel welded stainless steel pipe
                  <br />
                  FOB price: US $700-1600 / Ton
                </li>
                <li>
                  Wall thickness 1.4 mm astm a312 Stainless Steel stainless
                  steel seamless pipe
                  <br />
                  FOB price: US $1000-3000 / Ton
                </li>
                <li>
                  best quality ASTM A312 Stainless Steel large size seamless
                  pipes used in power plant
                  <br />
                  FOB price: US $580.0-650.0 / Tons
                </li>
                <li>
                  Stainless Steel ASTM A312 cold drawn seamless stainless steel
                  heat exchanger tubes/pipes
                  <br />
                  FOB price: US $1100-1600 / Ton
                </li>
                <li>
                  Stainless Steel Pipe for Oil & Gas
                  <br />
                  FOB price: US $300-550 / Ton
                </li>
                <li>
                  Stainless Steel ASTM A312 wiredrawing seamless stainless steel
                  heat exchanger tubes/pipes
                  <br />
                  FOB price: US $500-1100 / Ton
                </li>
              </ul>
            </div>
          </div>
          <div className="extras-divs">
            <h3 className="header">
              Stainless Steel Pipe/ Tube composition and properties
            </h3>
            <h4 className="sub-header">
              Gujarat Delhi, stockist and distributor of ASME SA 312 Stainless
              Steel Pipe in schedules: 40, 5, 5S, 10, 20, 30, 60, 80, 100, 120,
              140, 160, STD, XS and XXS.
            </h4>
            <table className="stainless-Steel-table">
              <tbody>
                {materialData4.map((data, index) => {
                  var keys = Object.keys(data);
                  var value = keys.map((key, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        {index === 0 ? (
                          <th>{data[key]}</th>
                        ) : (
                          <td>{data[key]}</td>
                        )}
                      </React.Fragment>
                    );
                  });

                  return (
                    <tr key={index} className={"row" + index}>
                      {value}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="extras-divs">
            <h3 className="header">SS Pipes Chemical Composition</h3>
            <table className="stainless-Steel-table">
              <thead>
                <tr className={"row0"}>
                  <th colSpan={9}>Chemical Composition %</th>
                </tr>
              </thead>
              <tbody>
                {materialData5.map((data, index) => {
                  var keys = Object.keys(data);
                  var value = keys.map((key, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        {index === 0 ? (
                          <th>{data[key]}</th>
                        ) : (
                          <td>{data[key]}</td>
                        )}
                      </React.Fragment>
                    );
                  });

                  return (
                    <tr key={index} className={"row" + index}>
                      {value}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="extras-divs">
            <h3 className="header">
              Stainless Steel Tube Mechanical Properties
            </h3>
            <table className="stainless-Steel-table">
              <tbody>
                {materialData6.map((data, index) => {
                  var keys = Object.keys(data);
                  var value = keys.map((key, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        {index === 0 || idx === 0 ? (
                          <th>{data[key]}</th>
                        ) : (
                          <td>{data[key]}</td>
                        )}
                      </React.Fragment>
                    );
                  });

                  return (
                    <tr key={index} className={"row" + index}>
                      {value}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="extras-divs">
            <h3 className="header">SS Pipe Dimension</h3>
            <h4 className="sub-header">
              Searching Stainless Steel Pipe suppliers in India? Exporter of SS
              elliptical, oval and ornamental tubes in desired finish and
              coating with MTC EN 10204 3.1/ PED 2014/68/EU / ISO 10474
            </h4>
            <h6 className="sub-sub-header">
              Dimensions of Stainless Steel ASTM A312 Stainless Steel Round Tube
            </h6>
            <table className="stainless-Steel-table">
              <thead>
                <tr>
                  <th colSpan={2}>Outside Diameter </th>
                  <th> Qty/B </th>
                  <th> 0.6 </th>
                  <th> 0.7</th>
                  <th> 0.8</th>
                  <th> 0.9 </th>
                  <th> 1.0 </th>
                  <th> 1.2 </th>
                  <th> 1.5</th>
                  <th> 2.0</th>
                  <th> 3.0</th>
                  <th> 4.0</th>
                  <th> 5.0</th>
                  <th> 6.0</th>
                </tr>
              </thead>
              <tbody>
                {materialData7.map((data, index) => {
                  var keys = Object.keys(data);
                  var value = keys.map((key, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        {index === 0 ? (
                          <th>{data[key]}</th>
                        ) : (
                          <td>{data[key]}</td>
                        )}
                      </React.Fragment>
                    );
                  });

                  return (
                    <tr key={index} className={"row" + index}>
                      {value}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="extras-divs">
            <h3 className="header">
              Stainless Steel Pipes & Tubes Manufacturing Process
            </h3>
            <img
              src={steelImg}
              alt="steel alloys"
              style={{ mixBlendMode: "multiply" }}
              loading="lazy"
            />
          </div>
          <div className="extras-divs">
            <h3 className="header">SS Pipe and Tube Application</h3>
            <ul>
              <li>Chemicals</li>
              <li>Dairies And Breweries</li>
              <li>Paper And Pulp Industry</li>
              <li>Power Plants</li>
              <li>Nuclear</li>
              <li>Pharmaceuticals</li>
              <li>Automobiles</li>
              <li>Heat Exchangers & Condensers</li>
              <li>Chilling Plants</li>
              <li>Sugar Mills</li>
              <li>Railways</li>
              <li>Textile Machineries</li>
              <li>Instrumentation</li>
              <li>Thermocouples</li>
              <li>Architectural Applications</li>
              <li>Heating Elements</li>
              <li>Refineries</li>
              <li>Food & Beverages</li>
              <li>Desalination Plants</li>
              <li>Fertilizer Plants</li>
              <li>Submersible Pumps</li>
              <li>Pharmaceutical Machinery</li>
              <li>Water Pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
