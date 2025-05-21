import React, { useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const LocalSwaggerUI = () => {
    const [spec, setSpec] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const jsonSpec = JSON.parse(event.target.result);
                setSpec(jsonSpec);
            } catch (error) {
                alert('Invalid JSON file. Please provide a valid Swagger/OpenAPI JSON file.');
                console.error('Error parsing JSON:', error);
            }
        };

        reader.readAsText(file);
    };

    return (
        <div className="local-swagger-container">
            <div className="file-form">
                <div className="file-upload">
                    <label htmlFor="file-input" className="file-label">
                        <div className="upload-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 16.0002C4.79086 16.0002 3 14.2093 3 12.0002C3 9.87086 4.65165 8.1426 6.7477 8.01334C6.89768 5.19536 9.21204 3.0002 12 3.0002C14.4222 3.0002 16.4848 4.73885 17.1031 7.12822C19.2384 7.57449 20.8053 9.47229 20.8053 11.7502C20.8053 14.3743 18.679 16.5002 16.0549 16.5002H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 12.5002V20.5002M12 20.5002L9 17.5002M12 20.5002L15 17.5002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="upload-text">Upload Swagger JSON File</span>
                        <span className="upload-hint">Click to browse or drag and drop</span>
                    </label>
                    <input
                        id="file-input"
                        type="file"
                        accept=".json"
                        onChange={handleFileChange}
                        className="file-input"
                    />
                </div>
            </div>
            {spec && (
                <div className="swagger-ui-container local-spec">
                    <SwaggerUI spec={spec} 
                     
                     />
                </div>
            )}
        </div>
    );
};

export default LocalSwaggerUI;
