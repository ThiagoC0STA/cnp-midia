"use client";
import { portfolios1 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function RelatedProject10({ excludeId }) {
  // Get 4 random items excluding the specified ID
  const getRandomItems = () => {
    let availableItems = excludeId
      ? portfolios1.filter((item) => item.id !== excludeId)
      : [...portfolios1];

    let randomItems = [];
    for (let i = 0; i < 4; i++) {
      if (availableItems.length === 0) break;
      const randomIndex = Math.floor(Math.random() * availableItems.length);
      randomItems.push(availableItems[randomIndex]);
      availableItems.splice(randomIndex, 1);
    }
    return randomItems;
  };

  const randomProjects = getRandomItems();

  return (
    <div className="container relative">
      <div className="text-center mb-60 mb-sm-40">
        <h2 className="section-title-small">Related Projects</h2>
      </div>
      <Gallery>
        <ul className="works-grid work-grid-4 work-grid-gut hover-white work-grid-hover-alt">
          {randomProjects.map((item, index) => (
            <li key={index} className={"work-item   "}>
              <Link href={`/portfolio/${item.id}`} className={"work-ext-link"}>
                <div className="work-img project-image">
                  <div className="work-img-bg " />
                  {item.videoSrc ? (
                    <video
                      src={item.videoSrc}
                      alt={item.imgAlt}
                      data-wow-delay={item.delay}
                      className="project-images"
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
                      className="project-images"
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
        </ul>{" "}
      </Gallery>
    </div>
  );
}
