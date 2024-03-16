import * as yup from "yup";

export const studentUpdateSchema = yup.object().shape({
    studentId: yup.string().required("Required"),
    studentName: yup.string().required("Required"),
    imagePath: yup.mixed().required("Required"),
    age: yup.number().min(4).required("Required"),
    status: yup.string().required("Required"),
});