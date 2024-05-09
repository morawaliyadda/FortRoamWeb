import React, { useState, useEffect, useContext } from 'react';
import './write.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../context/Context';
import Footer from '../Footer/Footer';

export default function Write() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    useEffect(() => {
        if (id) {
            const getPost = async () => {
                try {
                    const res = await axios.get(`http://localhost:3010/blog/${id}`);
                    setTitle(res.data.title);
                    setDesc(res.data.description);
                } catch (error) {
                    console.error('Error fetching post:', error);
                }
            };
            getPost();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { username: "user.username", title, description };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.image = filename;

            try {
                await axios.post('http://localhost:3010/blog', data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            if (id) {
                await axios.put(`http://localhost:3010/blog/update/${id}`, newPost);
                window.location.replace('/blog');
            } else {
                const res = await axios.post('http://localhost:3010/blog', newPost);
                window.location.replace('/blog/' + res.data._id);
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className='write'>

                <form className='writeForm' onSubmit={handleSubmit}>
                    <div className='writeFormGroupmain'>
                        <h1 className='writeTitle'>Write Your Blog Here</h1>
                        <div className='fileInputbox'>
                            <div className='addimage-text'>
                                <label htmlFor='fileInput'>
                                    <FontAwesomeIcon icon={faPlus} className='writeIcon' />
                                </label>
                                <h4>add a image...</h4>
                            </div>

                            {file && (
                                <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
                            )}
                            <input type='file' id='fileInput' style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />

                        </div>


                    </div>
                    <div className='writeFormGroup'>
                        <input type='text' placeholder='Title' className='writeInput' autoFocus={true}
                            value={title} onChange={e => setTitle(e.target.value)} />
                        <button className='writeSubmit' type='submit' >Publish</button>
                    </div>
                    <div className='writeTextbox'>
                        <textarea placeholder='Tell your story...' type='text' className='writeText'
                            value={description} onChange={e => setDesc(e.target.value)}></textarea>

                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
