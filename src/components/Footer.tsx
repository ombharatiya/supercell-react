import React from "react";
import "../styles/colors.css";
import "../styles/styles.css";

const socialMediaList = [
  {
    name: "youtube",
    image:
      "https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/some_youtube.png",
    link: "https://www.youtube.com/supercell",
  },
  {
    name: "facebook",
    image:
      "https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/some_facebook.png",
    link: "http://www.facebook.com/supercell",
  },
  {
    name: "instagram",
    image:
      "https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/some_instagram.png",
    link: "https://www.instagram.com/supercell/",
  },
  {
    name: "twitter",
    image:
      "https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/some_twitter.png",
    link: "http://www.twitter.com/supercell",
  },
  {
    name: "linkedin",
    image:
      "https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/some_linkedin.png",
    link: "http://www.linkedin.com/company/supercell",
  },
  {
    name: "glassdoor",
    image:
      "https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/some_glassdoor.png",
    link:
      "https://www.glassdoor.com/Overview/Working-at-Supercell-EI_IE511675.11,20.htm",
  },
];

const downloadList = [
  {
    name: "supr",
    image:
      "https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/footer_appstore.png",
    link: "https://supr.cl/appstorescgames",
  },
  {
    name: "play",
    image:
      "https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/footer_googleplay.png",
    link: "https://play.google.com/store/apps/dev?id=6715068722362591614&hl=en",
  },
];

const secondaryList = [
  {
    text: "News",
    link: "https://supercell.com/en/news/",
  },
  {
    text: "For Media",
    link: "https://supercell.com/en/for-media/",
  },
  {
    text: "Terms of Service",
    link: "https://supercell.com/en/terms-of-service/",
  },
  {
    text: "Privacy Policy",
    link: "https://supercell.com/en/privacy-policy/",
  },
  {
    text: "Parent's Guide",
    link: "https://supercell.com/en/parents/",
  },
  {
    text: "Safe and Fair Play",
    link: "https://supercell.com/en/safe-and-fair-play/",
  },
  {
    text: "Investments",
    link: "https://supercell.com/en/investments/",
  },
];

export const Footer = (props: any) => (
  <div className="container-fluid bg-dark px-5 text-light small">
    <div className="row">
      <div className="col-sm-6 socialMedia">
        <h5>Follow us on</h5>
        <ul>
          {socialMediaList.map((socialMedia: any, index: number) => (
            <li key={index}>
              <a href={socialMedia.link} id="link" className="social-link">
                <img src={socialMedia.image} alt={socialMedia.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-sm-6 download-link">
        <h5>Download our games from</h5>
        <div>
          {downloadList.map((socialMedia: any, index: number) => (
            <a
              href={socialMedia.link}
              id="link"
              key={index}
              className="social-link"
            >
              <img src={socialMedia.image} width="150" alt={socialMedia.name} />
            </a>
          ))}
        </div>
      </div>
      <div className="col-sm-12">
        <div className="secondary-link">
          {secondaryList.map((list: any, index: number) => (
            <a href={list.link} id="link" key={index} className="social-link">
              {list.text}
            </a>
          ))}
        </div>
      </div>
      <div className="col-sm-12 footer-address-container d-flex flex-direction-row justify-content-space-between">
        <address className="footer-address">
          <span>Supercell Oy</span>
          <span>Itämerenkatu 11-13</span>
          <span>00180 Helsinki</span>
          <span>Finland</span>
        </address>
        <div>
          <a href="https://supercell.com/en" id="link" className="social-link">
            <img
              width="50"
              src="https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/logo_supercell@2x.png"
              alt="supercell"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  // <div className="container-fluid  ">
  //   <div className="rows">
  //     <div className="col-sm-12">
  //       <h3>Column 2</h3>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  //       <p>
  //         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
  //       </p>
  //     </div>
  //     <div className="col-sm-12">
  //       <h3>Column 2</h3>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...
  //         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
  //       </p>
  //     </div>
  //   </div>
  // </div>
);

// export const Footer = (props: any) => (
//   <div className="footer">
//     <div className="footer-link">
//       <div className="socialMedia">
//         <h5>Follow us on</h5>
//         <ul>
//           {socialMediaList.map((socialMedia: any, index: number) => (
//             <li key={index}>
//               <a href={socialMedia.link} id="link" className="social-link">
//                 <img src={socialMedia.image} alt={socialMedia.name} />
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="downloadLink">
//         {downloadList.map((socialMedia: any, index: number) => (
//           <a
//             href={socialMedia.link}
//             id="link"
//             key={index}
//             className="social-link"
//           >
//             <img src={socialMedia.image} width="150" alt={socialMedia.name} />
//           </a>
//         ))}
//       </div>
//     </div>
//     <div className="secondary-link">
//       {secondaryList.map((list: any, index: number) => (
//         <a href={list.link} id="link" key={index} className="social-link">
//           {list.text}
//         </a>
//       ))}
//     </div>
//     <div className="footer-end">
//       <address className="footer-address">
//         {/* <address> */}
//         <span>Supercell Oy</span>
//         <span>Itämerenkatu 11-13</span>
//         <span>00180 Helsinki</span>
//         <span>Finland</span>
//         {/* </address> */}
//       </address>
//       <div className="logo">
//         <a href="https://supercell.com/en" id="link" className="social-link">
//           <img
//             width="50"
//             src="https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/logo_supercell@2x.png"
//             alt="supercell"
//           />
//         </a>
//       </div>
//     </div>
//   </div>
// );

export default Footer;

/* <div className="col-sm-6 socialMedia2">
        <h5>Follow us on</h5>
        <ul>
          {socialMediaList.map((socialMedia: any, index: number) => (
            <li key={index}>
              <a href={socialMedia.link} id="link" className="social-link">
                <img src={socialMedia.image} alt={socialMedia.name} />
              </a>
            </li>
          ))}
        </ul>
      </div> 
       <div className="col-sm-6">
        <div className="downloadLink2">
          {downloadList.map((socialMedia: any, index: number) => (
            <a
              href={socialMedia.link}
              id="link"
              key={index}
              className="social-link"
            >
              <img src={socialMedia.image} width="150" alt={socialMedia.name} />
            </a>
          ))}
        </div>
      </div> */
