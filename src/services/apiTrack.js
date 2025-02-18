export async function fetchTracks(token) {
  try {
    const res = await fetch(
      `https://music-api-7p93.onrender.com/tracks/get-all-tracks`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData.message || `Request failed with status: ${res.status}`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw new Error(error.message || "Failed to login");
  }
}
