import React, { useState } from "react";
import "./FeaturesSection.css";

const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>("html");

  // Mock content for each feature
  const featureContent: Record<string, string> = {
    coding:
      "<div>\n  <h1>Coding Assessment</h1>\n  <p>Write efficient code...</p>\n</div>",
    "multiple-choice":
      "<div>\n  <h1>MCQ Test</h1>\n  <p>Select the right answer...</p>\n</div>",
    "fill-blanks":
      "<div>\n  <h1>Fill in the Blanks</h1>\n  <p>Complete the missing words...</p>\n</div>",
    descriptive:
      "<div>\n  <h1>Descriptive Test</h1>\n  <p>Write detailed answers...</p>\n</div>",
    video:
      "<div>\n  <h1>Video Assessment</h1>\n  <p>Record your answers...</p>\n</div>",
    html: "<div>\n  <h1>Responsive Navbar</h1>\n  <p>HTML code...</p>\n</div>",
  };

  return (
    <section className="features-container">
      {/* Heading */}
      <div className="features-header">
        <h1>
          Comprehensive <span className="highlight">job assessments</span>
        </h1>
        <p>
          Design multi-format tests for an accurate assessment of your
          candidate's knowledge, aptitude, and skills.
        </p>
      </div>

      {/* Content */}
      <div className="features-content">
        {/* Left Side - Options */}
        <div className="features-options">
          {Object.keys(featureContent).map((feature) => (
            <button
              key={feature}
              className={`feature-button ${
                selectedFeature === feature ? "active" : ""
              }`}
              onClick={() => setSelectedFeature(feature)}
            >
              <i className={`icon ${feature}`}></i>{" "}
              {feature.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>

        {/* Right Side - Preview */}
        <div className="features-preview">
          <div className="code-editor">
            <div className="code-header">
              <span>{selectedFeature.toUpperCase()}</span>
              <i className="icon-settings"></i>
            </div>
            <div className="code-content fade-in">
              <pre>
                <code>{featureContent[selectedFeature]}</code>
              </pre>
            </div>
          </div>
          <div className="preview-pane">
            <span>Preview</span>
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
