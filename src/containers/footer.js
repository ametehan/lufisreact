import React from "react";
import Footer from "../components/footer";
import Icon from "../components/footer/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Marketing</Footer.Link>
            <Footer.Link href="#">Consulting</Footer.Link>
            <Footer.Link href="#">Development</Footer.Link>
            <Footer.Link href="#">Design</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Developer</Footer.Title>
            <Footer.Link href="#">Numan Erter</Footer.Link>
            <Footer.Link href="#">Metehan Altundal</Footer.Link>
            <Footer.Link href="#">Kristijan Mladenovic</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fa-brands fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fa-brands fa-twitter" />
              Twitter
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fa-brands fa-facebook" />
              Facebook
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
