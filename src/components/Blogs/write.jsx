import './write.css';
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default function Write() {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { username: 'admin', title, description };
        //console.log(newPost);
        if (file) {
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

            {/* {file && (
                <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
            )} */}


            <form className='writeForm' onSubmit={handleSubmit}>
                <div className='writeFormGroupmain'>
                    <h1 className='writeTitle'>Write Your Blog Here</h1>
                    <div className='fileInputbox'>
                        <h4>add a image...</h4>
                        <label htmlFor='fileInput'>
                            <FontAwesomeIcon icon={faPlus} className='writeIcon' />
                        </label>
                        {file && (
                            <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
                        )}
                        <input type='file' id='fileInput' style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
                    </div>

                </div>
                <div className='writeFormGroup'>
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true}
                        onChange={e => setTitle(e.target.value)} />
                    <button className='writeSubmit' type='submit' >Publish</button>
                </div>
                <div >
                    <textarea placeholder='Tell your story...' type='text' className='writeText'
                        onChange={e => setDesc(e.target.value)}></textarea>

                </div>
            </form>
        </div>
    )
}   