import { useState } from 'react';


const MyUpload = () => {

    //Preview
   const [file, setFile] = useState();
  function handleChange(e) {
      e.preventDefault()
        console.log(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    //Upload
    const uploadImage = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    console.log("OK");
  

  const formData = {};
  const elements = e.target.elements;

      formData['file'] = elements[0].value;
      console.log(formData["file"]);
    }
    
    return (
        <form action='upload.php' method="POST" encType="multipart/form-data">
            <input type="file" onChange={handleChange} name='fileUpdate' id='fileUpdate' />
            <div className="ml-12 mt-2 text-center">
                <input onSubmit={uploadImage} className="transition ease-out duration-700 w-3/12 border-2 rounded-xl border-blue-30. dark:hover:bg-red-300 hover:bg-blue-300 dark:hover:border-red-500 hover:border-blue-500 dark:hover:text-white mr-8" type="submit" value="Upload Image" name="submit"/>
            </div>
            <img src={file} className="logo w-1/5 m-auto" alt="monkey.jpeg" />
        </form>
    );
}

export default MyUpload;
  


                    
                
