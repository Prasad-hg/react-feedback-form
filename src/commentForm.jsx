import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = ' username is Required';
   } if (!values.remarks) {
     errors.remarks = ' remarks is Required';
   } if (!values.rating) {
     errors.rating = ' rating is Required';
   }
   return errors;
}
export default function CommentsForm({addNewComment}){
//     let [formData, setFormData] = useState({
//         username:"",
//         remarks:"",
//         rating:5
// ,    });
const formik = useFormik({
  initialValues: {
    username: '',
    remarks: '',
    rating: '5',
  },
  validate,
  onSubmit: (values, { resetForm }) => {
    addNewComment(values); 
    resetForm();           
  },
});


// let handleInputChange = (event)=>{
//     let fieldName  = event.target.name;
//     let newValue = event.target.value;
//     setFormData((currData)=>{
//         currData[fieldName] = newValue;
//         return {...currData,[fieldName]:newValue};
//     });
//    };
//    let handleSubmit=(event)=>{
//     console.log(formData);
//     addNewComment(formData);
//     event.preventDefault();
//      setFormData({
//         username:"",
//         remarks:"",
//         rating:5,
//      });
//    };
    return (
        <div className="comment-form-wrapper">
        <div className="comment-form">
            <h2>Flash your Comment here!</h2>
            <form  onSubmit={formik.handleSubmit}>
            <label htmlFor="username">username</label>
            <input placeholder="username" type="text" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"></input>
            {formik.touched.username && formik.errors.username && ( <p style={{ color: 'red' }}>{formik.errors.username}</p>)}

            <br></br><br></br>
            <label htmlFor="remarks">Remarks</label>
            <textarea value={formik.values.remarks} placeholder="add few remarks" onChange={formik.handleChange} id="remarks" name="remarks">Remaks</textarea>
            {formik.touched.remarks && formik.errors.remarks && ( <p style={{ color: 'red' }}>{formik.errors.remarks}</p>)}


            <br></br><br></br>
            <label htmlFor="rating">Rating</label>
            <input placeholder="rating" type="number" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} id="rating" name="rating"></input>
            {formik.touched.rating && formik.errors.rating && ( <p style={{ color: 'red' }}>{formik.errors.rating}</p>)}


            <br></br><br></br>
            <button>Add comment</button>
            </form>
            </div>
            </div>
            
    )
}