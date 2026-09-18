// src/data/productMaterials/circles.js

import stain from "../../../public/images/stock/stainless-steel-circles.jpg";
import mach from "../../../public/images/stock/machined-forged-circles.jpg";
import ind from "../../../public/images/stock/specialty-industrial-circles.jpg";
import carbon from "../../../public/images/stock/carbon-steel-circles.jpg";
import alloy from "../../../public/images/stock/alloy-steel-circles.jpg";
import duplex from "../../../public/images/stock/duplex-steel-circles.jpg";
import superDuplex from "../../../public/images/stock/super-duplex-circles.jpg";
import nickel from "../../../public/images/stock/nickel-alloy-circles.jpg";
import titanium from "../../../public/images/stock/titanium-circles.jpg";

const circles = [
  {
    id: 1,
    slug: "stainless-steel-circles",
    image: stain,
    title: "Stainless Steel Circles",
    shortDescription:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L, Dual Certified Alloys.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L",
    forms: "Cold Rolled, Hot Rolled, Dual Certified",
    application:
      "Pressure vessels, cookware, fabrication, and engineering applications",
  },
  {
    id: 2,
    slug: "carbon-steel-circles",
    image: carbon,
    title: "Carbon Steel Circles",
    shortDescription:
      "ASTM A105, A350 LF2 Class 1/2, ASTM A516 Gr 70 Normalized Carbon Steel Circles for Pressure Vessels.",
    materialGroup: "Carbon Steel",
    standards: "ASTM A105, A350 LF2 Class 1/2, ASTM A516 Gr 70",
    forms: "Hot Rolled, Normalized, Annealed",
    application: "Pressure vessels, storage tanks, industrial fabrication",
  },
  {
    id: 3,
    slug: "alloy-steel-circles",
    image: alloy,
    title: "Alloy Steel Circles",
    shortDescription:
      "SAE 4140, 4340, ASTM A387 Gr 11/22, ASTM A182 F11/F22 Chrome-Moly High-Temperature Circles.",
    materialGroup: "Alloy Steel",
    standards: "SAE 4140, 4340, ASTM A387 Gr 11/22, ASTM A182 F11/F22",
    forms: "Forged, Hot Rolled, Heat Treated",
    application: "Steam boilers, refinery hydrotreaters, power plant equipment",
  },
  {
    id: 4,
    slug: "duplex-steel-circles",
    image: duplex,
    title: "Duplex Steel Circles",
    shortDescription:
      "ASTM A240 UNS S31803 / S32205 (2205) Duplex Steel Circles with Superior Chloride Stress Corrosion Resistance.",
    materialGroup: "Duplex",
    standards: "ASTM A240 UNS S31803 / S32205 (2205)",
    forms: "Hot Rolled, Solution Annealed",
    application: "Offshore platforms, desalination plants, chemical processing",
  },
  {
    id: 5,
    slug: "super-duplex-circles",
    image: superDuplex,
    title: "Super Duplex Circles",
    shortDescription:
      "ASTM A240 UNS S32750 (2507) / S32760 Super Duplex Circles for Subsea Oilfields and Seawater Systems.",
    materialGroup: "Super Duplex",
    standards: "ASTM A240 UNS S32750 (2507) / S32760",
    forms: "Hot Rolled, Solution Annealed",
    application: "Subsea oilfields, seawater systems, chemical plants",
  },
  {
    id: 6,
    slug: "nickel-alloy-circles",
    image: nickel,
    title: "Nickel Alloy Circles",
    shortDescription:
      "Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Incoloy 800/825, Hastelloy C276 High-Performance Circles.",
    materialGroup: "Nickel Alloy",
    standards:
      "Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Incoloy 800/825, Hastelloy C276",
    forms: "Hot Rolled, Forged, Solution Annealed",
    application: "Chemical reactors, marine engineering, nuclear applications",
  },
  {
    id: 7,
    slug: "titanium-circles",
    image: titanium,
    title: "Titanium Circles",
    shortDescription:
      "ASTM B265 Gr 1, Gr 2, Gr 5 (Ti-6Al-4V), Gr 7 High-Strength-to-Weight Corrosion-Immune Titanium Circles.",
    materialGroup: "Titanium",
    standards: "ASTM B265 Gr 1, Gr 2, Gr 5 (Ti-6Al-4V), Gr 7",
    forms: "Cold Rolled, Hot Rolled, Annealed",
    application: "Aerospace, marine, chemical processing, medical implants",
  },
  {
    id: 8,
    slug: "machined-forged-circles",
    image: mach,
    title: "Machined & Forged Circles",
    shortDescription:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, Alloy Steel SAE 4140/4340, Seamless Blind Flange Blocks & Dynamic Rotating Discs.",
    materialGroup: "Forged Discs",
    standards:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, Alloy Steel SAE 4140/4340",
    forms: "Seamless Blind Flange Blocks, Dynamic Rotating Discs",
    application: "Flanges, rings, heavy engineering, and industrial equipment",
  },
  {
    id: 9,
    slug: "specialty-industrial-circles",
    image: ind,
    title: "Specialty Industrial Circles",
    shortDescription:
      "Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex F51/UNS S31803, Super Duplex S32750, Titanium Grade 2/5.",
    materialGroup: "High Alloy Disks",
    standards:
      "Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex F51/UNS S31803, Super Duplex S32750, Titanium Grade 2/5",
    forms: "High Alloy Disks",
    application: "Demanding industrial applications across various industries",
  },
];

export default circles;
