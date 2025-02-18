export async function fetchLogin({ email, password }) {
  try {
    const res = await fetch(`https://music-api-7p93.onrender.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

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

export async function fetchSignUp({
  email,
  password,
  confirmPassword,
  profileName,
}) {
  console.log(email, password, confirmPassword, profileName);
  try {
    const res = await fetch(`https://music-api-7p93.onrender.com/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstName: profileName,
        lastName: profileName,
        password: password,
        passwordRepeat: confirmPassword,
        role: "admin",
      }),
    });

    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during signUp:", error.message);
    throw new Error("Failed to SignUp");
  }
}

export async function getUser({ userId, token }) {
  console.log(token, userId);
  try {
    const res = await fetch(
      `https://music-api-7p93.onrender.com/auth/user/${userId}`,
      // `https://music-api-7p93.onrender.com/auth/user`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch profile: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during signUp:", error.message);
    throw new Error("Failed to SignUp");
  }
}
