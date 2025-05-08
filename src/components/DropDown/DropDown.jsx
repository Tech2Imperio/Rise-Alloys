// import "./styles.css";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export const DropDown = ({ position }) => {
//   let temp = [0, 0, 0, 0, 0, 0];
//   const [isOpen, setIsOpen] = useState(
//     temp.map((num, index) => (index === Number(position) ? 1 : 0))
//   );
//   const handleDropdownClick = (dropDownNum) => {
//     var temp = [...isOpen];
//     temp[dropDownNum] = temp[dropDownNum] ? 0 : 1;
//     setIsOpen(temp);
//   };
//   const DropAluminum = ({ index }) => {
//     return (
//       <div className="dropdown">
//         <button
//           className="dropbtn"
//           style={{ borderRadius: !isOpen[index] && "20px" }}
//           onClick={() => handleDropdownClick(index)}
//         >
//           <div className="dropbtn-text Raleway">Aluminium Alloy</div>
//           <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
//         </button>
//         <div
//           className="dropdown-table-content"
//           style={{ display: isOpen[index] ? "block" : "none" }}
//         >
//           <Link to="/aluminium-alloy">AA 2014A</Link>
//           <Link to="/aluminium-alloy">AA 2024</Link>
//           <Link to="/aluminium-alloy">AA 2124</Link>
//           <Link to="/aluminium-alloy">AA 5082</Link>
//           <Link to="/aluminium-alloy">AA 5083</Link>
//           <Link to="/aluminium-alloy">AA 6061</Link>
//           <Link to="/aluminium-alloy">AA 6082</Link>
//           <Link to="/aluminium-alloy">AA 7010</Link>
//           <Link to="/aluminium-alloy">AA 7075</Link>
//           <Link to="/aluminium-alloy">AA 3003</Link>
//           <Link to="/aluminium-alloy">AA 5052</Link>
//           <Link to="/aluminium-alloy">L63</Link>
//           <Link to="/aluminium-alloy">1200 TH14</Link>
//           <Link to="/aluminium-alloy">1200 TH14</Link>
//           <Link to="/aluminium-alloy">6351T6 (HINDALCO)</Link>
//         </div>
//       </div>
//     );
//   };
//   const DropTitanium = ({ index }) => {
//     return (
//       <div className="dropdown">
//         <button
//           className="dropbtn"
//           style={{ borderRadius: !isOpen[index] && "20px" }}
//           onClick={() => handleDropdownClick(index)}
//         >
//           <div className="dropbtn-text">Titanium Alloy</div>
//           <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
//         </button>
//         <div
//           className="dropdown-table-content"
//           style={{ display: isOpen[index] ? "block" : "none" }}
//         >
//           <Link to="/titanium-alloy">GRADE 1</Link>
//           <Link to="/titanium-alloy">GRADE 2</Link>
//           <Link to="/titanium-alloy">GRADE 5</Link>
//           <Link to="/titanium-alloy">GRADE 9</Link>
//           <Link to="/titanium-alloy">GRADE 5 ELI</Link>
//           <Link to="/titanium-alloy">AMS A5.16M-2004</Link>
//           <Link to="/titanium-alloy">TITANIUM FOIL</Link>
//         </div>
//       </div>
//     );
//   };
//   const DropStainless = ({ index }) => {
//     return (
//       <div className="dropdown">
//         <button
//           className="dropbtn"
//           style={{ borderRadius: !isOpen[index] && "20px" }}
//           onClick={() => handleDropdownClick(index)}
//         >
//           <div className="dropbtn-text">Stainless Steel</div>
//           <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
//         </button>
//         <div
//           className="dropdown-table-content"
//           style={{ display: isOpen[index] ? "block" : "none" }}
//         >
//           <Link to="/stainless-steel">13-8 MO</Link>
//           <Link to="/stainless-steel">15-5 PH</Link>
//           <Link to="/stainless-steel">17-4 PH</Link>
//           <Link to="/stainless-steel">A286</Link>
//           <Link to="/stainless-steel">304/304L</Link>
//           <Link to="/stainless-steel">316/316L</Link>
//           <Link to="/stainless-steel">321</Link>
//           <Link to="/stainless-steel">347</Link>
//           <Link to="/stainless-steel">355</Link>
//           <Link to="/stainless-steel">
//             STEEL X4CRNI 13-4 NO 1.4313 (SS 415)
//           </Link>
//         </div>
//       </div>
//     );
//   };
//   const DropCopper = ({ index }) => {
//     return (
//       <div className="dropdown">
//         <button
//           className="dropbtn"
//           style={{ borderRadius: !isOpen[index] && "20px" }}
//           onClick={() => handleDropdownClick(index)}
//         >
//           <div className="dropbtn-text">Copper & Alloys</div>
//           <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
//         </button>
//         <div
//           className="dropdown-table-content"
//           style={{ display: isOpen[index] ? "block" : "none" }}
//         >
//           <Link to="/copper-alloy">Copper C101</Link>
//           <Link to="/copper-alloy">Copper C102</Link>
//           <Link to="/copper-alloy">C103</Link>
//           <Link to="/copper-alloy">C110</Link>
//           <Link to="/copper-alloy">COPPER ETP</Link>
//           <Link to="/copper-alloy">CAA110</Link>
//           <Link to="/copper-alloy">COPPER ZICRONIUM</Link>
//         </div>
//       </div>
//     );
//   };
//   const DropNickel = ({ index }) => {
//     return (
//       <div className="dropdown">
//         <button
//           className="dropbtn"
//           style={{ borderRadius: !isOpen[index] && "20px" }}
//           onClick={() => handleDropdownClick(index)}
//         >
//           <div className="dropbtn-text">Nickel Alloys</div>
//           <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
//         </button>
//         <div
//           className="dropdown-table-content"
//           style={{ display: isOpen[index] ? "block" : "none" }}
//         >
//           <Link to="/nickel-alloy">Alloy 188</Link>
//           <Link to="/nickel-alloy">Alloy 230</Link>
//           <Link to="/nickel-alloy">Alloy 263</Link>
//           <Link to="/nickel-alloy">Alloy 600</Link>
//           <Link to="/nickel-alloy">Alloy 601</Link>
//           <Link to="/nickel-alloy">Alloy 617</Link>
//           <Link to="/nickel-alloy">Alloy 625</Link>
//           <Link to="/nickel-alloy">Alloy 718</Link>
//           <Link to="/nickel-alloy">Alloy X-750</Link>
//           <Link to="/nickel-alloy">Alloy X</Link>
//           <Link to="/nickel-alloy">Waspaloy</Link>
//           <Link to="/nickel-alloy">Invar 36</Link>
//           <Link to="/nickel-alloy">Alloy 42</Link>
//           <Link to="/nickel-alloy">Alloy 25/L-605</Link>
//           <Link to="/nickel-alloy">Alloy 80A</Link>
//           <Link to="/nickel-alloy">Mu-Metal</Link>
//           <Link to="/nickel-alloy">Alloy 82</Link>
//         </div>
//       </div>
//     );
//   };
//   //   const DropOther = ({ index }) => {
//   //     return (
//   //       <div className="dropdown">
//   //         <button
//   //           className="dropbtn"
//   //           style={{ borderRadius: !isOpen[index] && "20px" }}
//   //           onClick={() => handleDropdownClick(index)}
//   //         >
//   //           <div className="dropbtn-text">Other Metal</div>
//   //           <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
//   //         </button>
//   //         <div
//   //           className="dropdown-table-content"
//   //           style={{ display: isOpen[index] ? "block" : "none" }}
//   //         >
//   //           <Link to="/other-alloy">TUNGSTEN</Link>
//   //           <Link to="/other-alloy">YTTRIUM</Link>
//   //           <Link to="/other-alloy">LANTHANUM</Link>
//   //           <Link to="/other-alloy">SAMARIUM</Link>
//   //           <Link to="/other-alloy">YTTERBIUM</Link>
//   //           <Link to="/other-alloy">VANADIUM</Link>
//   //           <Link to="/other-alloy">COBALT</Link>
//   //           <Link to="/other-alloy">TANTALUM</Link>
//   //           <Link to="/other-alloy">ZIRCONIUM</Link>
//   //           <Link to="/other-alloy">MOLYBDENUM</Link>
//   //           <Link to="/other-alloy">Tin Ingot</Link>
//   //           <Link to="/other-alloy">ALLOY STEEL</Link>
//   //           <Link to="/other-alloy">ALLOY STEEL</Link>
//   //           <Link to="/other-alloy">AFK</Link>
//   //           <Link to="/other-alloy">ALUMINIUM BRONZE C63000</Link>
//   //           <Link to="/other-alloy">BERYLLIUM COPPER</Link>
//   //           <Link to="/other-alloy">CARBON FIBRE</Link>
//   //           <Link to="/other-alloy">COBALT ALLOY(KRAL)</Link>
//   //           <Link to="/other-alloy">COBALT ALLOY 25/L-605</Link>
//   //           <Link to="/other-alloy">CHROMIUM</Link>
//   //           <Link to="/other-alloy">FERRO COBALT</Link>
//   //           <Link to="/other-alloy">HIGH PURITY TUNGSTEN METAL</Link>
//   //           <Link to="/other-alloy">INCONEL ALLOY 82</Link>
//   //           <Link to="/other-alloy">INCONEL ALLOY 625</Link>
//   //           <Link to="/other-alloy">INCONEL ALLOY 600</Link>
//   //           <Link to="/other-alloy">NB (C-103)</Link>
//   //           <Link to="/other-alloy">NB-1-ZR-05C</Link>
//   //           <Link to="/other-alloy">NIMONIC ALLOY 80A</Link>
//   //           <Link to="/other-alloy">NIMONIC ALLOY C-263</Link>
//   //           <Link to="/other-alloy">NIMONIC ALLOY 90 BS</Link>
//   //           <Link to="/other-alloy">NIMONIC ALLOY 75</Link>
//   //           <Link to="/other-alloy">NIOBIUM ALLOY C-103</Link>
//   //           <Link to="/other-alloy">NIOBIUM ALLOY</Link>
//   //           <Link to="/other-alloy">ROTELLOY GRADE 8</Link>
//   //           <Link to="/other-alloy">STEEL ALLOY A286</Link>
//   //           <Link to="/other-alloy">SUPER METAL</Link>
//   //           <Link to="/other-alloy">TANTALUM</Link>
//   //           <Link to="/other-alloy">TUNGSTEN</Link>
//   //           <Link to="/other-alloy">TUNGSTEN COPPER</Link>
//   //         </div>
//   //       </div>
//   //     );
//   //   };
//   const rendering = (position) => {
//     const dropdowncomponents = [
//       DropAluminum,
//       DropTitanium,
//       DropStainless,
//       DropCopper,
//       DropNickel,
//       //   DropOther,
//     ];
//     return (
//       <>
//         {dropdowncomponents.map((Dropdowncomponent, index) => {
//           if (index === position) {
//             return <Dropdowncomponent key={index} index={index} />;
//           } else {
//             return null;
//           }
//         })}
//         {dropdowncomponents.map((Dropdowncomponent, index) => {
//           if (index !== position) {
//             return <Dropdowncomponent key={index} index={index} />;
//           } else {
//             return null;
//           }
//         })}
//       </>
//     );
//   };

//   return <div className="left">{rendering(position)}</div>;
// };
"use client";

import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const DropDown = ({ position }) => {
  const temp = [0, 0, 0, 0, 0, 0];
  const [isOpen, setIsOpen] = useState(
    temp.map((num, index) => (index === Number(position) ? 1 : 0))
  );
  const handleDropdownClick = (dropDownNum) => {
    var temp = [...isOpen];
    temp[dropDownNum] = temp[dropDownNum] ? 0 : 1;
    setIsOpen(temp);
  };
  const DropAluminum = ({ index }) => {
    return (
      <div className="dropdown">
        <button
          className="dropbtn"
          style={{ borderRadius: !isOpen[index] && "20px" }}
          onClick={() => handleDropdownClick(index)}
        >
          <div className="dropbtn-text Raleway">Aluminium Alloy</div>
          <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
        </button>
        <div
          className="dropdown-table-content"
          style={{ display: isOpen[index] ? "block" : "none" }}
        >
          <Link to="/aluminium-alloy/aa-2014a">AA 2014A</Link>
          <Link to="/aluminium-alloy/aa-2024">AA 2024</Link>
          <Link to="/aluminium-alloy/aa-2124">AA 2124</Link>
          <Link to="/aluminium-alloy/aa-5082">AA 5082</Link>
          <Link to="/aluminium-alloy/aa-5083">AA 5083</Link>
          <Link to="/aluminium-alloy/aa-6061">AA 6061</Link>
          <Link to="/aluminium-alloy/aa-6082">AA 6082</Link>
          <Link to="/aluminium-alloy/aa-7010">AA 7010</Link>
          <Link to="/aluminium-alloy/aa-7075">AA 7075</Link>
          <Link to="/aluminium-alloy/aa-3003">AA 3003</Link>
          <Link to="/aluminium-alloy/aa-5052">AA 5052</Link>
          <Link to="/aluminium-alloy/l63">L63</Link>
          <Link to="/aluminium-alloy/1200-th14">1200 TH14</Link>
          <Link to="/aluminium-alloy/1200-th14">1200 TH14</Link>
          <Link to="/aluminium-alloy/6351t6-hindalco">6351T6 (HINDALCO)</Link>
        </div>
      </div>
    );
  };
  const DropTitanium = ({ index }) => {
    return (
      <div className="dropdown">
        <button
          className="dropbtn"
          style={{ borderRadius: !isOpen[index] && "20px" }}
          onClick={() => handleDropdownClick(index)}
        >
          <div className="dropbtn-text">Titanium Alloy</div>
          <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
        </button>
        <div
          className="dropdown-table-content"
          style={{ display: isOpen[index] ? "block" : "none" }}
        >
          <Link to="/titanium-alloy/grade-1">GRADE 1</Link>
          <Link to="/titanium-alloy/grade-2">GRADE 2</Link>
          <Link to="/titanium-alloy/grade-5">GRADE 5</Link>
          <Link to="/titanium-alloy/grade-9">GRADE 9</Link>
          <Link to="/titanium-alloy/grade-5-eli">GRADE 5 ELI</Link>
          <Link to="/titanium-alloy/ams-a5-16m-2004">AMS A5.16M-2004</Link>
          <Link to="/titanium-alloy/titanium-foil">TITANIUM FOIL</Link>
        </div>
      </div>
    );
  };
  const DropStainless = ({ index }) => {
    return (
      <div className="dropdown">
        <button
          className="dropbtn"
          style={{ borderRadius: !isOpen[index] && "20px" }}
          onClick={() => handleDropdownClick(index)}
        >
          <div className="dropbtn-text">Stainless Steel</div>
          <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
        </button>
        <div
          className="dropdown-table-content"
          style={{ display: isOpen[index] ? "block" : "none" }}
        >
          <Link to="/stainless-steel/13-8-mo">13-8 MO</Link>
          <Link to="/stainless-steel/15-5-ph">15-5 PH</Link>
          <Link to="/stainless-steel/17-4-ph">17-4 PH</Link>
          <Link to="/stainless-steel/a286">A286</Link>
          <Link to="/stainless-steel/304-304l">304/304L</Link>
          <Link to="/stainless-steel/316-316l">316/316L</Link>
          <Link to="/stainless-steel/321">321</Link>
          <Link to="/stainless-steel/347">347</Link>
          <Link to="/stainless-steel/355">355</Link>
          <Link to="/stainless-steel/415">
            STEEL X4CRNI 13-4 NO 1.4313 (SS 415)
          </Link>
        </div>
      </div>
    );
  };
  const DropCopper = ({ index }) => {
    return (
      <div className="dropdown">
        <button
          className="dropbtn"
          style={{ borderRadius: !isOpen[index] && "20px" }}
          onClick={() => handleDropdownClick(index)}
        >
          <div className="dropbtn-text">Copper & Alloys</div>
          <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
        </button>
        <div
          className="dropdown-table-content"
          style={{ display: isOpen[index] ? "block" : "none" }}
        >
          <Link to="/copper-alloy/copper-c101">Copper C101</Link>
          <Link to="/copper-alloy/copper-c102">Copper C102</Link>
          <Link to="/copper-alloy/c103">C103</Link>
          <Link to="/copper-alloy/c110">C110</Link>
          <Link to="/copper-alloy/copper-etp">COPPER ETP</Link>
          <Link to="/copper-alloy/caa110">CAA110</Link>
          <Link to="/copper-alloy/copper-zicronium">COPPER ZICRONIUM</Link>
        </div>
      </div>
    );
  };
  const DropNickel = ({ index }) => {
    return (
      <div className="dropdown">
        <button
          className="dropbtn"
          style={{ borderRadius: !isOpen[index] && "20px" }}
          onClick={() => handleDropdownClick(index)}
        >
          <div className="dropbtn-text">Nickel Alloys</div>
          <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
        </button>
        <div
          className="dropdown-table-content"
          style={{ display: isOpen[index] ? "block" : "none" }}
        >
          <Link to="/nickel-alloy/alloy-188">Alloy 188</Link>
          <Link to="/nickel-alloy/alloy-230">Alloy 230</Link>
          <Link to="/nickel-alloy/alloy-263">Alloy 263</Link>
          <Link to="/nickel-alloy/alloy-600">Alloy 600</Link>
          <Link to="/nickel-alloy/alloy-601">Alloy 601</Link>
          <Link to="/nickel-alloy/alloy-617">Alloy 617</Link>
          <Link to="/nickel-alloy/alloy-625">Alloy 625</Link>
          <Link to="/nickel-alloy/alloy-718">Alloy 718</Link>
          <Link to="/nickel-alloy/alloy-x-750">Alloy X-750</Link>
          <Link to="/nickel-alloy/alloy-x">Alloy X</Link>
          <Link to="/nickel-alloy/waspaloy">Waspaloy</Link>
          <Link to="/nickel-alloy/invar-36">Invar 36</Link>
          <Link to="/nickel-alloy/alloy-42">Alloy 42</Link>
          <Link to="/nickel-alloy/alloy-25-l-605">Alloy 25/L-605</Link>
          <Link to="/nickel-alloy/alloy-80a">Alloy 80A</Link>
          <Link to="/nickel-alloy/mu-metal">Mu-Metal</Link>
          <Link to="/nickel-alloy/alloy-82">Alloy 82</Link>
        </div>
      </div>
    );
  };
  const DropElectroTube = ({ index }) => {
    return (
      <div className="dropdown">
        <button
          className="dropbtn"
          style={{ borderRadius: !isOpen[index] && "20px" }}
          onClick={() => handleDropdownClick(index)}
        >
          <div className="dropbtn-text">Electro Polished Tube</div>
          <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
        </button>
        <div
          className="dropdown-table-content"
          style={{ display: isOpen[index] ? "block" : "none" }}
        >
          <Link to="/electro-polished-tube/12-7">Size 1/2" (OD 12.7 mm)</Link>
          <Link to="/electro-polished-tube/19-05">Size 3/4" (OD 19.05 mm)</Link>
          <Link to="/electro-polished-tube/25-4">Size 1" (OD 25.4 mm)</Link>
          <Link to="/electro-polished-tube/38-1">Size 1 1/2" (OD 38.1 mm)</Link>
          <Link to="/electro-polished-tube/50-8">Size 2" (OD 50.8 mm)</Link>
          <Link to="/electro-polished-tube/63-5">Size 2 1/2" (OD 63.5 mm)</Link>
          <Link to="/electro-polished-tube/76-2">Size 3" (OD 76.2 mm)</Link>
          <Link to="/electro-polished-tube/101-6">Size 4" (OD 101.6 mm)</Link>
        </div>
      </div>
    );
  };
  // const DropOther = ({ index }) => {
  //   return (
  //     <div className="dropdown">
  //       <button
  //         className="dropbtn"
  //         style={{ borderRadius: !isOpen[index] && "20px" }}
  //         onClick={() => handleDropdownClick(index)}
  //       >
  //         <div className="dropbtn-text">Other Metal</div>
  //         <i className={`fa fa-arrow-down ${isOpen[index] && "open"}`}></i>
  //       </button>
  //       <div
  //         className="dropdown-table-content"
  //         style={{ display: isOpen[index] ? "block" : "none" }}
  //       >
  //         <Link to="/other-alloy">TUNGSTEN</Link>
  //         <Link to="/other-alloy">YTTRIUM</Link>
  //         <Link to="/other-alloy">LANTHANUM</Link>
  //         <Link to="/other-alloy">SAMARIUM</Link>
  //         <Link to="/other-alloy">YTTERBIUM</Link>
  //         <Link to="/other-alloy">VANADIUM</Link>
  //         <Link to="/other-alloy">COBALT</Link>
  //         <Link to="/other-alloy">TANTALUM</Link>
  //         <Link to="/other-alloy">ZIRCONIUM</Link>
  //         <Link to="/other-alloy">MOLYBDENUM</Link>
  //         <Link to="/other-alloy">Tin Ingot</Link>
  //         <Link to="/other-alloy">ALLOY STEEL</Link>
  //         <Link to="/other-alloy">ALLOY STEEL</Link>
  //         <Link to="/other-alloy">AFK</Link>
  //         <Link to="/other-alloy">ALUMINIUM BRONZE C63000</Link>
  //         <Link to="/other-alloy">BERYLLIUM COPPER</Link>
  //         <Link to="/other-alloy">CARBON FIBRE</Link>
  //         <Link to="/other-alloy">COBALT ALLOY(KRAL)</Link>
  //         <Link to="/other-alloy">COBALT ALLOY 25/L-605</Link>
  //         <Link to="/other-alloy">CHROMIUM</Link>
  //         <Link to="/other-alloy">FERRO COBALT</Link>
  //         <Link to="/other-alloy">HIGH PURITY TUNGSTEN METAL</Link>
  //         <Link to="/other-alloy">INCONEL ALLOY 82</Link>
  //         <Link to="/other-alloy">INCONEL ALLOY 625</Link>
  //         <Link to="/other-alloy">INCONEL ALLOY 600</Link>
  //         <Link to="/other-alloy">NB (C-103)</Link>
  //         <Link to="/other-alloy">NB-1-ZR-05C</Link>
  //         <Link to="/other-alloy">NIMONIC ALLOY 80A</Link>
  //         <Link to="/other-alloy">NIMONIC ALLOY C-263</Link>
  //         <Link to="/other-alloy">NIMONIC ALLOY 90 BS</Link>
  //         <Link to="/other-alloy">NIMONIC ALLOY 75</Link>
  //         <Link to="/other-alloy">NIOBIUM ALLOY C-103</Link>
  //         <Link to="/other-alloy">NIOBIUM ALLOY</Link>
  //         <Link to="/other-alloy">ROTELLOY GRADE 8</Link>
  //         <Link to="/other-alloy">STEEL ALLOY A286</Link>
  //         <Link to="/other-alloy">SUPER METAL</Link>
  //         <Link to="/other-alloy">TANTALUM</Link>
  //         <Link to="/other-alloy">TUNGSTEN</Link>
  //         <Link to="/other-alloy">TUNGSTEN COPPER</Link>
  //       </div>
  //     </div>
  //   );
  // };
  const rendering = (position) => {
    const dropdowncomponents = [
      DropAluminum,
      DropTitanium,
      DropStainless,
      DropCopper,
      DropNickel,
      DropElectroTube,
      //   DropOther,
    ];
    return (
      <>
        {dropdowncomponents.map((Dropdowncomponent, index) => {
          if (index === position) {
            return <Dropdowncomponent key={index} index={index} />;
          } else {
            return null;
          }
        })}
        {dropdowncomponents.map((Dropdowncomponent, index) => {
          if (index !== position) {
            return <Dropdowncomponent key={index} index={index} />;
          } else {
            return null;
          }
        })}
      </>
    );
  };

  return <div className="left">{rendering(position)}</div>;
};
