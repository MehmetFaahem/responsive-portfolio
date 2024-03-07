// components/DownloadButton.js

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      // Replace '/api/download' with the actual path to your serverless function
      const response = await fetch("/api/download");

      // Check if the request was successful
      if (response.ok) {
        // Trigger the browser to download the file
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf"; // Set the desired filename
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to download file");
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div>
      <p>Click the button to download the file:</p>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
};

export default DownloadButton;
