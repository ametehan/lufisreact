import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div class="container">
      <body>
        <div class="footer-dark">
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href="#">Web design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Hosting</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 item text">
                  <h3>Lufis Productions</h3>
                  <p>
                    Wir sind ein junges und kleines Unternehmen, aber unsere
                    Ziele sind derart groß!
                  </p>
                </div>
                <div class="col item social">
                  <a href="#">
                    <i class="icon ion-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-snapchat"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-instagram"></i>
                  </a>
                </div>
              </div>
              <p class="copyright">Lufis Productions ©2022</p>
            </div>
          </footer>
        </div>
      </body>
    </div>
  );
};
export default Footer;
