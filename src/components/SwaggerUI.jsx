// import React, { useState } from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";

// const SwaggerUIComponent = () => {
//   const [url, setUrl] = useState("/test.json");
//   const [inputUrl, setInputUrl] = useState("/test.json");

//   const handleUrlChange = (e) => {
//     setInputUrl(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUrl(inputUrl);
//   };

//   return (
//     <div className="swagger-container">
//       <div className="url-form">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               value={inputUrl}
//               onChange={handleUrlChange}
//               placeholder="Enter Swagger JSON URL"
//               className="url-input"
//             />
//             <button type="submit" className="load-button">
//               Load API
//             </button>
//           </div>
//         </form>
//       </div>
//       <div className="swagger-ui-container">
//         <SwaggerUI
//           key={url} // Force re-render when URL changes
//           url={url} // Use dynamic url state
//         />
//       </div>
//     </div>
//   );
// };

// export default SwaggerUIComponent;
import React, { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUIComponent = () => {
  const [url, setUrl] = useState("https://swaggertest-yw9i.onrender.com/api/test.json");
  const [inputUrl, setInputUrl] = useState("https://swaggertest-yw9i.onrender.com/api/test.json");

  const handleUrlChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(inputUrl);
  };

  // Intercepteur pour ajouter l’en-tête d’authentification
  const requestInterceptor = (req) => {
    req.headers["Authorization"] = "Bearer telesys2025";
    return req;
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
              placeholder="Entrez l’URL du JSON Swagger"
              className="url-input"
            />
            <button type="submit" className="load-button">
              Charger l’API
            </button>
          </div>
        </form>
      </div>
      <div className="swagger-ui-container">
        <SwaggerUI
          key={url}
          url={url}
          requestInterceptor={requestInterceptor} // Ajoute l’en-tête Authorization
        />
      </div>
    </div>
  );
};

export default SwaggerUIComponent;