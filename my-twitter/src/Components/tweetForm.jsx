import React from "react";

function TweetForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {};
        formData['body'] = event.target.elements.body.value;
        formData['user_id'] = localStorage.getItem('id');
        //console.log(formData);
        const response = await fetch("http://localhost:8080/Controller/controllerPost.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }



    return(
        <>
        <form onSubmit={handleSubmit}>
            <h2>Form de tweet</h2>
            <input type="text" className="border" placeholder="tweet ici!" name="body"></input>
            <button type="submit" className="border">rfgt</button>
        </form>
    
    </>
    )
}
export default TweetForm;