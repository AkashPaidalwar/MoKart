import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContainerLeft">
        <h1 className="footerLogo">MoKart</h1>
        <p className="footerDescription">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="footerSocialContainer">
          <div
            className="footerIconContainer"
            style={{ backgroundColor: "#3B5999" }}
          >
            <Facebook className="footerIcon" />
          </div>
          <div
            className="footerIconContainer"
            style={{ backgroundColor: "#E4405F" }}
          >
            <Instagram className="footerIcon" />
          </div>
          <div
            className="footerIconContainer"
            style={{ backgroundColor: "#55ACEE" }}
          >
            <Twitter className="footerIcon" />
          </div>
          <div
            className="footerIconContainer"
            style={{ backgroundColor: "#E60023" }}
          >
            <Pinterest className="footerIcon" />
          </div>
        </div>
      </div>
      <div className="footerContainerCenter">
        <h3 className="footerUsefulLinkTitle">Useful Links</h3>
        <ul className="footerUsefulLinkList">
          <li className="footerUsefulLinkListItem">Home</li>
          <li className="footerUsefulLinkListItem">Cart</li>
          <li className="footerUsefulLinkListItem">Men Fashion</li>
          <li className="footerUsefulLinkListItem">Women Fashion</li>
          <li className="footerUsefulLinkListItem">Accessories</li>
          <li className="footerUsefulLinkListItem">My Account</li>
          <li className="footerUsefulLinkListItem">Order Tracking</li>
          <li className="footerUsefulLinkListItem">Wishlist</li>
          <li className="footerUsefulLinkListItem">Terms</li>
        </ul>
      </div>
      <div className="footerContainerRight">
        <h3>Contact</h3>
        <p>
          <Room style={{ marginRight: "10px" }} /> Moshi, Pune - 412105
        </p>
        <p>
          <Phone style={{ marginRight: "10px" }} />
          +91 - 9923525658
        </p>
        <p>
          <MailOutline style={{ marginRight: "10px" }} />
          paidalwar.akash@gmail.com
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFqXrDKVFTrNlm65XT6oToj3smGMJFFjNOw&usqp=CAU"
          alt=""
          style={{ marginLeft: "-12px" }}
        />
      </div>
    </div>
  );
}
