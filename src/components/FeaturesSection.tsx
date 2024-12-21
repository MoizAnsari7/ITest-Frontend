import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion
import "./FeaturesSection.css";

const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>("html");

  // Mock content for each feature
  const featureContent: Record<string, string> = {
    coding: "<div><h1>Coding Assessment</h1><p>Write efficient code...</p></div>",
    "multiple-choice": "<div><h1>MCQ Test</h1><p>Select the right answer...</p></div>",
    "fill-blanks": "<div><h1>Fill in the Blanks</h1><p>Complete the missing words...</p></div>",
    descriptive: "<div><h1>Descriptive Test</h1><p>Write detailed answers...</p></div>",
    video: "<div><h1>Video Assessment</h1><p>Record your answers...</p></div>",
    html: "<div><h1>Responsive Navbar</h1><p>HTML code...</p></div>",
  };

  return (
    <motion.section
      className="features-container container"
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 5 }} // Animation on load (fade in + move up)
      transition={{ duration: 1 }} // Duration of the animation
    >
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
            <motion.button
              key={feature}
              className={`feature-button ${selectedFeature === feature ? "active" : ""}`}
              onClick={() => setSelectedFeature(feature)}
              whileHover={{ scale: 1.1 }} // Slight scaling effect on hover
              whileTap={{ scale: 0.9 }}  // Slight shrinking effect on tap
            >
              <i className={`icon ${feature}`}></i>{" "}
              {feature.replace("-", " ").toUpperCase()}
            </motion.button>
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
              <motion.div
                className="code-preview"
                dangerouslySetInnerHTML={{
                  __html: featureContent[selectedFeature],
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="preview-pane">
            <span>Preview</span>
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
