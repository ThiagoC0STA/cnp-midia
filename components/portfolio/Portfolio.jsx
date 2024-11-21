"use client";

import { portfolios1 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
const filters = [
  { name: "Todos", category: "all" },
  { name: "Sites", category: "website" },
  { name: "Design", category: "design" },
  { name: "Edicão de vídeo", category: "video" },
];
export default function Portfolio({ gridClass = "" }) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".work-item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentCategory(val);
    isotope.current.arrange({
      filter: val == "all" ? "*" : "." + val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="container">
      {/* Works Filter */}
      <div className="works-filter text-center mb-60 mb-sm-40 z-index-1">
        {filters.map((elm, i) => (
          <a
            onClick={() => updateCategory(elm.category)}
            key={i}
            className={`filter ${
              currentCategory == elm.category ? "active" : ""
            }`}
          >
            {elm.name}
          </a>
        ))}
      </div>
      {/* End Works Filter */}
      {/* Works Grid */}
      <ul
        ref={isotopContainer}
        className={`works-grid ${gridClass} work-grid-gut-lg masonry`}
        id="work-grid"
      >
        <Gallery>
          {portfolios1.map((item, index) => (
            <li key={index} className={item.className}>
              <Link
                href={`/portfolio/${item.id}`}
                className={item.linkClassName}
              >
                <div className="work-img">
                  <div className="work-img-bg " />
                  {item.videoSrc ? (
                    <video
                      width={650}
                      height={773}
                      src={item.videoSrc}
                      alt={item.imgAlt}
                      data-wow-delay={item.delay}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      width={650}
                      height={773}
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      data-wow-delay={item.delay}
                    />
                  )}
                </div>
                <div className="work-intro text-start">
                  <h3 className="work-title">{item.title}</h3>
                  <div className="work-descr">{item.description}</div>
                </div>
              </Link>
            </li>
          ))}
        </Gallery>
      </ul>
      {/* End Works Grid */}
    </div>
  );
}
