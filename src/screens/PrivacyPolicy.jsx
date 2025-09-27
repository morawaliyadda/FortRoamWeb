import React from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import PrivacyPolicyCard from "../components/PrivacyPolicyCard/PrivacyPolicyCard";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <div className="main-container">
        <h1 className="main-text">
          Privacy <strong>Policy</strong>
        </h1>
        <div>
          <PrivacyPolicyCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
