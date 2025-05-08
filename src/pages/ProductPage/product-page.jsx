"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  materialData1,
  materialData2,
  materialData3,
  materialData4,
  materialData5,
  materialData6,
} from "../../data/stainLessSteel";
import { Copper_Comparison, Copper_Forms } from "../../data/copper";
import {
  aluminumMechProperties,
  aluminumChemProperties,
} from "../../data/aluminum";
import {
  Titanium_Standards,
  Titanium_Steel_Mechanical_Properties,
} from "../../data/titanium";
import { DropDown } from "../../components";
import "./product-page-styles.css";

export default function ProductPage() {
  const { productId } = useParams();
  const location = window.location.pathname;
  const category = location.split("/")[1];
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch or prepare data based on category and productId
    const fetchProductData = () => {
      setLoading(true);
      let data = {
        title: "",
        description: "",
        specifications: [],
        properties: [],
      };

      switch (category) {
        case "stainless-steel":
          if (productId === "304-304l") {
            data = {
              title: "Stainless Steel 304/304L",
              description:
                "Stainless Steel 304/304L is the most versatile and widely used stainless steel. It is known for excellent corrosion resistance, formability, and durability.",
              specifications: materialData1,
              properties: materialData5.filter(
                (item) => item.Grade === "304" || item.Grade === "304L"
              ),
            };
          } else if (productId === "316-316l") {
            data = {
              title: "Stainless Steel 316/316L",
              description:
                "Stainless Steel 316/316L offers improved corrosion resistance and higher strength at elevated temperatures compared to 304/304L.",
              specifications: materialData2,
              properties: materialData6,
            };
          } else {
            // Default or other stainless steel products
            data = {
              title: productId
                ? `Stainless Steel ${productId}`
                : "Stainless Steel Products",
              description:
                "Our high-quality stainless steel products offer exceptional corrosion resistance and durability for various applications.",
              specifications: materialData3,
              properties: materialData4,
            };
          }
          break;

        case "copper-alloy":
          data = {
            title: productId ? `Copper ${productId}` : "Copper & Alloys",
            description:
              "Copper alloys are known for their excellent thermal and electrical conductivity, corrosion resistance, and antimicrobial properties.",
            specifications: Copper_Forms,
            properties: Copper_Comparison,
          };
          break;

        case "aluminium-alloy":
          data = {
            title: productId ? `Aluminium ${productId}` : "Aluminium Alloys",
            description:
              "Aluminium alloys are lightweight yet strong materials with excellent corrosion resistance and thermal conductivity.",
            specifications: aluminumMechProperties,
            properties: aluminumChemProperties,
          };
          break;

        case "titanium-alloy":
          data = {
            title: productId ? `Titanium ${productId}` : "Titanium Alloys",
            description:
              "Titanium alloys offer an exceptional strength-to-weight ratio, corrosion resistance, and biocompatibility.",
            specifications: Titanium_Standards,
            properties: Titanium_Steel_Mechanical_Properties,
          };
          break;

        case "nickel-alloy":
          data = {
            title: productId ? `Nickel ${productId}` : "Nickel Alloys",
            description:
              "Nickel alloys provide outstanding corrosion resistance and high-temperature strength for demanding applications.",
            specifications: [],
            properties: [],
          };
          break;
        case "electro-polished-tube":
          data = {
            title: productId
              ? `Electro Polished Tube - ${productId}`
              : "Electro Polished Tube",
            description:
              "Explore our range of precision electro polished tubes suitable for clean and sanitary environments.",
            specifications: [],
            properties: [],
          };
          break;

        default:
          data = {
            title: "Metal Products",
            description:
              "Browse our comprehensive range of high-quality metal products for various industrial applications.",
            specifications: [],
            properties: [],
          };
      }

      setProductData(data);
      setLoading(false);
    };

    fetchProductData();
  }, [category, productId]);

  if (loading) {
    return <div className="loading">Loading product information...</div>;
  }

  if (!productData) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-page">
      <DropDown position={0} />
      <div className="container">
        <div className="product-header">
          <h1>{productData.title}</h1>
          <p className="product-description">{productData.description}</p>
        </div>

        {productData.specifications.length > 0 && (
          <div className="product-section">
            <h2>Specifications</h2>
            <div className="specifications-table">
              <table>
                <tbody>
                  {productData.specifications.map((spec, index) => (
                    <tr key={index}>
                      {Object.entries(spec).map(([key, value], i) => (
                        <React.Fragment key={i}>
                          {index === 0 ? (
                            <th>{key}</th>
                          ) : (
                            <>
                              <td className="spec-key">{key}</td>
                              <td className="spec-value">
                                {Array.isArray(value)
                                  ? value.map((item, j) => (
                                      <div key={j}>{item}</div>
                                    ))
                                  : value}
                              </td>
                            </>
                          )}
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {productData.properties.length > 0 && (
          <div className="product-section">
            <h2>Properties</h2>
            <div className="properties-table">
              <table>
                <thead>
                  <tr>
                    {Object.keys(productData.properties[0]).map(
                      (key, index) => (
                        <th key={index}>{key}</th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {productData.properties.slice(1).map((prop, index) => (
                    <tr key={index}>
                      {Object.values(prop).map((value, i) => (
                        <td key={i}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
