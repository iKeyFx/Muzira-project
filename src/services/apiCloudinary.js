const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

// Function to extract file ID from Google Drive link
const extractGoogleDriveFileId = (url) => {
  if (!url || !url.includes("drive.google.com")) return null;

  const fileIdMatch = url.match(/\/d\/([^/]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return fileIdMatch[1];
  }

  const idMatch = url.match(/[?&]id=([^&]+)/);
  return idMatch ? idMatch[1] : null;
};

export const convertViaCloudinary = async (
  googleDriveUrl,
  setIsLoading,
  urlCache,
  setUrlCache
) => {
  const fileId = extractGoogleDriveFileId(googleDriveUrl);
  if (!fileId) {
    console.error("Could not extract file ID from:", googleDriveUrl);
    return null;
  }

  // Check cache first
  if (urlCache[fileId]) {
    console.log("Using cached Cloudinary URL for:", fileId);
    return urlCache[fileId];
  }

  setIsLoading(true);

  try {
    // Direct download URL from Google Drive
    const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append("file", directUrl);
    formData.append("upload_preset", uploadPreset);
    formData.append("resource_type", "auto");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Cloudinary upload failed: ${response.statusText}`);
    }

    const data = await response.json();

    // Update cache
    setUrlCache((prev) => ({
      ...prev,
      [fileId]: data.secure_url,
    }));

    return data.secure_url;
  } catch (error) {
    console.error("Error converting via Cloudinary:", error);
    return null;
  } finally {
    setIsLoading(false);
  }
};
