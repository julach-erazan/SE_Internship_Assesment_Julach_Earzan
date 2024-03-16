import axios from "axios";

const handleUpdateStudent = async (
  id,
  studentId,
  studentName,
  image,
  age,
  status
) => {
  try {

    const formData = new FormData();
    formData.append("id", id);
    formData.append("studentId", studentId);
    formData.append("studentName", studentName);
    formData.append("imagePath", image);
    formData.append("age", age);
    formData.append("status", status);

    const response = await axios //Send data to Backend
      .post("http://localhost:8001/updatestudent", formData);

    if (response.status === 201) {
      alert(response.data.message);
      window.location.reload();
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { handleUpdateStudent };