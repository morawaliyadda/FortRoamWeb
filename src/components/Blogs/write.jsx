import React, { useState, useEffect, useContext } from 'react';
import './write.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../context/Context';
import Footer from '../Footer/Footer';
import { UserContext } from '../../userContext';


export default function Write() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [existingImage, setExistingImage] = useState('');
    const {currentUser} = useContext(UserContext);

    useEffect(() => {
        if (id) {
            const getPost = async () => {
                try {
                    const res = await axios.get(`https://fortroam-server.onrender.com/blog/${id}`);
                    setTitle(res.data.title);
                    setDesc(res.data.description);
                    setExistingImage(res.data.imageURL);
                } catch (error) {
                    console.error('Error fetching post:', error);
                }
            };
            getPost();
        }
    }, [id]);

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('username', currentUser.name || 'Anonymous');
        if (file) {
            formData.append('file', file);
        }
    
        try {
            let url;
            if (id) {
                url = `https://fortroam-server.onrender.com/blog/update/${id}`;
                const response = await axios.put(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).then((result) => {
                    console.log(result);
                    alert("Blog successfully updated!");
                })
            } else {
                url = 'https://fortroam-server.onrender.com/blog';
                const response = await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).then((result) => {
                    console.log(result);
                    alert("Blog successfully added!");
                })
            }

            navigate('/myblogs');

        } catch (err) {
            console.error(err);
            alert("Blog submission failed!");
        }
    };
    
    return (
        <div>
            <div className='write'>

                <form className='writeForm' onSubmit={handleSubmit}>
                    <div className='writeFormGroupmain'>
                        <h1 className='writeTitle'>Write Your Blog Here</h1>
                        <div className='fileInputbox'>
                            <div >
                                <label htmlFor='fileInput' className='addimage-text'>
                                    <FontAwesomeIcon icon={faImage} className='writeIcon' />
                                    <h4>Add Image</h4>
                                </label>
                            </div>

                            {(file || existingImage) && (
                                <img
                                    className='writeImg'
                                    src={file ? URL.createObjectURL(file) : existingImage}
                                    alt=''
                                />
                            )}
                            <input type='file' id='fileInput' style={{ display: 'none' }} onChange={handleFileChange} />

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



