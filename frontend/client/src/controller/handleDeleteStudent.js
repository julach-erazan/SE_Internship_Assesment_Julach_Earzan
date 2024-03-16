import axios from "axios";

const handleDeleteStudent = async (
  id
) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8001/deletestudent", {
        id
      });

    if(response.status === 201){
      alert(response.data.message);
      window.location.reload();
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { handleDeleteStudent };