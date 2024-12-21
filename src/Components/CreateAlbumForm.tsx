import React from 'react';
import { useMutation } from '@apollo/client';
import { FormEvent, useRef } from 'react';
import { CREATE_ALBUM } from '../Queries/Mutations.ts';
import { Button, Form } from 'react-bootstrap';

const CreateAlbumForm: React.FC = () => {
    const [createAlbum, { data, error, loading }] = useMutation(CREATE_ALBUM);

    const inputTitle = useRef<HTMLInputElement>(null);
    const inputUserId = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputTitle.current && inputUserId.current) {
            createAlbum({
                variables: {
                    title: inputTitle.current.value,
                    userId: inputUserId.current.value,
                },
            });
            inputTitle.current.value = "";
            inputUserId.current.value = "";
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>Create Album</h1>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter title"
                        ref={inputTitle}
                    />
                </Form.Group>

                <Form.Group controlId="formUserId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter User ID"
                        ref={inputUserId}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Album
                </Button>
            </Form>
            {data && data.createAlbum && (
                <div>
                    <h2>Newly created album:</h2>
                    <p>ID: {data.createAlbum.id}</p>
                    <p>Title: {data.createAlbum.title}</p>
                    <p>User ID: {data.createAlbum.user.id}</p>
                    <p>User Name: {data.createAlbum.user.name}</p>
                </div>
            )}
        </div>
    );

};

export default CreateAlbumForm;