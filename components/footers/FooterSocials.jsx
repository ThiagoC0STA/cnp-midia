import React from "react";

export default function FooterSocials() {
  const socials = [
    {
      name: "Facebook",
      icon: "fa-facebook",
      url: "https://www.facebook.com/people/Cnp-Midia/61563886701335/?mibextid=LQQJ4d&rdid=T7AIfTJBTXHIQo0t&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FzqzhurBrDXbaugDy%2F%3Fmibextid%3DLQQJ4d",
    },
    {
      name: "Instagram",
      icon: "fa-instagram",
      url: "https://www.instagram.com/cnpmidia/",
    },
    {
      name: "LinkedIn",
      icon: "fa-linkedin",
      url: "https://www.linkedin.com/company/cnpmidia/",
    },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <i className={social.icon} /> {social.name}
          </a>
        </li>
      ))}
    </>
  );
}
