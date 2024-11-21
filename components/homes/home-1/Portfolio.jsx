"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { portfolios1 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
const filters = [
  { name: "Recentes", category: "all" },
  { name: "Sites", category: "website" },
  { name: "Design", category: "design" },
  { name: "Edicão de vídeo", category: "video" },
];
export default function Portfolio() {
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
    
    // Adicionar pequeno delay para garantir que as imagens foram carregadas
    setTimeout(() => {
      isotope.current.arrange({
        filter: val === "all" ? "*" : "." + val,
      });
      isotope.current.layout();
    }, 100);
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);

  const getFilteredPortfolios = () => {
    const filteredItems = currentCategory === "all"
      ? portfolios1
      : portfolios1.filter((item) => item.className.includes(currentCategory));
      
    return filteredItems.slice(0, 6);
  };

  useEffect(() => {
    initIsotop();

    // Recarregar o layout quando a categoria mudar
    if (isotope.current) {
      isotope.current.layout();
    }
  }, [currentCategory]);

  return (
    <div className="container">
      <div className="row mb-60 mb-md-40">
        <div className="col-lg-5">
          <h2 className="section-caption mb-xs-10">Nosso Portfólio</h2>
          <h3 className="section-title mb-0">
            <AnimatedText text="Transformando ideias em experiências digitais extraordinárias." />
          </h3>
          <a
            className="btn btn-mod btn-w btn-large btn-round btn-hover-anim mt-4"
            href="/portfolio"
          >
            <span>Ver Portfólio completo</span>
          </a>
        </div>
        <div className="col-lg-7">
          {/* Works Filter */}
          <div className="works-filter text-md-left text-lg-end mt-50 mt-md-30">
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
        </div>
      </div>
      {/* Works Grid */}
      <ul
        ref={isotopContainer}
        className="works-grid work-grid-3 work-grid-gut-lg masonry"
        id="work-grid"
      >
        {/* Work Item (Lightbox) */}
        <Gallery>
          {getFilteredPortfolios().map((item, index) => (
            <li key={index} className={item.className}>
              <Link
                href={`/portfolio/${item.id}`}
                className={item.linkClassName}
              >
                <div className="work-img">
                  <div className="work-img-bg" />
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
        {/* End Work Item */}
      </ul>
      {/* End Works Grid */}
    </div>
  );
}
