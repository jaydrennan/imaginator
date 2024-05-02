import React from "react";
import axios from "axios";

export default function ImageGenerator({ setImages, prompt, setIsLoading }) {
  const fetchImages = async (prompt) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jaydrennan--generation-scaling-web-dev.modal.run/gen_6_img",
        { prompt: prompt },
      );
      setImages(response.data.image_data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchImages(prompt);
  };

  return (
    <button onClick={handleSubmit} className="btn btn-accent">
      Generate
    </button>
  );
}
