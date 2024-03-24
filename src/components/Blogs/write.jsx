import './write.css';
import { useState } from 'react';
import axios from 'axios';


export default function Write() {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {username: 'admin', title, description};
        //console.log(newPost);
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.image = filename;
       
        try {
           await axios.post('http://localhost:3010/upload', data);
        } catch (err) {
            console.log(err);
        }
         }
        try {
            const res = await axios.post('http://localhost:3010/blog', newPost);
           window.location.replace('/blog/' + res.data._id);
           console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='write'>
            {file && (
                <img className='writeImg' src={URL.createObjectURL(file)} alt=''/>
            )}
          
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className='writeIcon fas fa-plus'></i>
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}} onChange={e=>setFile(e.target.files[0])} />
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true}
                        onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className='writeFormGroup'>
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' 
                        onChange={e=>setDesc(e.target.value)}></textarea>
                    
                </div>
                <button className='writeSubmit'type='submit' >Publish</button>
                
            </form>
        </div>
    )
}   