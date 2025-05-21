import React, { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUIComponent = () => {
  const [url, setUrl] = useState("/test.json");
  const [inputUrl, setInputUrl] = useState("/test.json");

  const handleUrlChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(inputUrl);
  };

  return (
    <div className="swagger-container">
      <div className="url-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={inputUrl}
              onChange={handleUrlChange}
              placeholder="Enter Swagger JSON URL"
              className="url-input"
            />
            <button type="submit" className="load-button">
              Load API
            </button>
          </div>
        </form>
      </div>
      <div className="swagger-ui-container">
        <SwaggerUI
          url="/test.json" // passe par le proxy vite
      
        />
      </div>
    </div>
  );
};

export default SwaggerUIComponent;
