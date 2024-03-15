import axios from "axios";

const handleRegister = async (
  firstName,
  lastName,
  phoneNumber,
  email,
  password
) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8001/register", {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

    if(response.status === 201){
      alert(response.data.message);
      window.location = "/"
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { handleRegister };
