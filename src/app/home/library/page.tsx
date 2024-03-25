"use client"

import React, { useRef, useState } from 'react';
import axios from '../../../../extends/axios';
import { useRouter } from 'next/navigation';

const Library = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (fileInputRef.current?.files) {
            const audioFiles = Array.from(fileInputRef.current.files).filter(file => file.type.startsWith('audio/'));
            if (audioFiles.length > 0) {
                const formData = new FormData();
                audioFiles.forEach(file => formData.append('audioFiles', file));
                axios.post('/upload', formData)
                    .then(response => {
                        console.log(response.data)
                        console.log("Song uploaded successfully!");
                        router.push('/home');
                    })
                    .catch(error => {
                        // Handle error
                        console.error(error);
                    });

            }
        }
    };

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setSelectedFiles(files);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="audio/*" ref={fileInputRef} multiple onChange={handleFileChange} />
                <button type="submit">Submit</button>
            </form>
            {selectedFiles.length > 0 && (
                <div>
                    <h3>Selected Files:</h3>
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );


};


export default Library;