"use client";
import { pricing2 } from "@/data/pricing";

import Image from "next/image";
import React, { useState } from "react";

export default function Pricing({ items = pricing2 }) {
  const [isYearly, setIsYearly] = useState(false);
  const hasPrice = items.some((item) => item.price !== null);

  return (
    <>
      {/* Nav Tabs */}
      {hasPrice && (
        <div className="mb-60 mb-sm-40 text-center">
          <ul className="nav nav-tabs tpl-minimal-tabs animate" role="tablist">
            <li
              onClick={() => setIsYearly(false)}
              className="nav-item"
              role="presentation"
            >
              <a className={`nav-link ${!isYearly ? "active" : ""} `}>Mensal</a>
            </li>
            <li
              onClick={() => setIsYearly(true)}
              className="nav-item"
              role="presentation"
            >
              <a className={`nav-link ${isYearly ? "active" : ""} `}>Anual</a>
            </li>
          </ul>
          <div className="small text-gray mt-10">
            Economize até <strong>15%</strong> com o Plano Anual.
          </div>
        </div>
      )}
      {/* End Nav Tabs */}
      {/* Tab panes */}
      <div className="tab-content tpl-minimal-tabs-cont position-relative">
        {/* Decorative Waves */}
        <div
          className="decoration-10 d-none d-sm-block z-index-n1"
          data-rellax-y=""
          data-rellax-speed="-0.7"
          data-rellax-percentage="0.37"
        >
          <Image
            src="/assets/images/decoration-3.svg"
            className="svg-shape"
            width={148}
            height={148}
            alt=""
          />
        </div>
        {/* End Decorative Waves */}
        <div className="tab-pane show active" id="tab-annual" role="tabpanel">
          <div className="row mt-n30 center-items">
            {/* Pricing Item */}
            {items.map((item, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-4 mt-30 d-flex align-items-stretch"
              >
                <div className="pricing-item">
                  <div className="pricing-item-inner round">
                    <div className="pricing-wrap">
                      {/* <div className="pricing-icon mb-0">
                        <Image 
                          src={item.image}
                          width={148}
                          height={148}
                          alt={item.title}
                        />
                      </div> */}
                      <h4 className="pricing-title">{item.title}</h4>
                      {item.price !== null ? (
                        <>
                          <div className="pricing-num">
                            <sup>R$</sup>
                            {isYearly ? item.priceAnnual : item.price}
                          </div>
                          <div className="pr-per">
                            {isYearly ? (
                              <>
                                No plano anual
                                <div className="pricing-save">
                                  economia de R${item.price - item.priceAnnual}/mês
                                </div>
                              </>
                            ) : (
                              "por mês"
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="pricing-consult">
                          {item.consultPrice}
                        </div>
                      )}
                      <div className="pricing-features">
                        <ul className="pr-list">
                          {item.features?.map((elm, i) => (
                            <li key={i}>
                              <i className="mi-check" /> {elm}
                            </li>
                          ))}
                          {item.disabledFeatures?.map((elm, i) => (
                            <li key={i} className="opacity-055">
                              <i className="mi-close" /> {elm}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto local-scroll">
                        <a
                          href="/contact"
                          className="btn btn-mod btn-medium btn-white btn-round btn-hover-anim btn-full"
                          onClick={() => {
                            localStorage.setItem(
                              "selectedPlan",
                              JSON.stringify({
                                title: item.title,
                                period: isYearly ? "anual" : "mensal",
                              })
                            );
                          }}
                        >
                          <span>Contratar {item.title}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* End Pricing Item */}

            {/* End Pricing Item */}
          </div>
        </div>
      </div>
      {/* End Tab panes */}
    </>
  );
}
