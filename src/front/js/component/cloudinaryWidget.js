import React, { useEffect, useContext, useState } from "react";
import cloudinary from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

 const CloudinaryWidget = () => {
  function showUploadWidget() {
    cloudinary.openUploadWidget(
      {
        cloudName: "bernardo-lloret",
        uploadPreset: "ml_default",
        sources: [
          "url",
          "image_search",
          "google_drive",
          "facebook",
          "dropbox",
          "instagram",
          "shutterstock",
          "getty",
          "local",
          "camera",
        ],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: true,
        cropping: true,
        multiple: false,
        defaultSource: "url",
        styles: {
          palette: {
            window: "#ffffff",
            sourceBg: "#f4f4f5",
            windowBorder: "#90a0b3",
            tabIcon: "#000000",
            inactiveTabIcon: "#555a5f",
            menuIcons: "#555a5f",
            link: "#0433ff",
            action: "#339933",
            inProgress: "#0433ff",
            complete: "#339933",
            error: "#cc0000",
            textDark: "#000000",
            textLight: "#fcfffd",
          },
          fonts: { default: null, "sans-serif": { url: null, active: true } },
        },
      },
      (err, info) => {
        if (!err) {
          console.log("Upload Widget event - ", info);
        }
      }
    );
  }

  return (
    <div className="container">
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
    </div>
  );
};
