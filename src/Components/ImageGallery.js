import React from "react";
import "../styles/ImageGallery.css"; // Import the CSS file
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import leaflog from '../assets/leaflog.jpeg';
import webforum from '../assets/webforum.jpg';
import cluster from '../assets/cluster.png';

function ImageGallery() {
  // Dummy image data, replace with actual image URLs and project links
  const images = [
    { id: 1, url: proj2, text: "Solar Step Application", link: "https://github.com/atishay2305-hub/SolarStep" },
    { id: 2, url: leaflog, text: "LeafLog Plant Care Application", link: "https://github.com/atishay2305-hub/LeafLog" },
    { id: 3, url: proj1, text: "Social Media Application for College", link: "https://github.com/atishay2305-hub/CS-546-Final-Project" },
    { id: 4, url: webforum, text: "Web Server in Python & Bash", link: "https://github.com/atishay2305-hub/WebForum" },
    { id: 5, url: cluster, text: "K-Mean Clustering Algorithm Project", link: "https://github.com/atishay2305-hub/Clustering-Project" },
  ];

  return (
    <div className="image-gallery-container">
      <h2 className="gallery-heading">Projects</h2>
      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="image-column">
            <a href={image.link} target="_blank" rel="noopener noreferrer" className="image-link">
              <div className="image-card">
                {/* Use dynamic image URL */}
                <img src={image.url} alt={image.text} />
                <p className="image-text">{image.text}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export the ImageGallery component as default
export default ImageGallery;
