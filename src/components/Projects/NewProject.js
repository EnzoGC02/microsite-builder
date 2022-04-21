import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { firestore } from '../Firebase';

const NewProjectComponent = () => {
  const [project, setProject] = useState('');
  const [projDesc, setProjDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      title: project,
      description: projDesc,
    };
    firestore
      .collection('accounts')
      .doc(localStorage.getItem('accountId'))
      .collection('projects')
      .add(obj)
      .then((res) => {
        window.location.replace('/project/project?projectId=' + res.id);
      });
  };

  return (
    <>
      <div className='project'>
        <div className='container'>
          <div className='row'>
            <h4>Create a project</h4>
          </div>
          <div className='row justify-content-around'>
            <Form className='createProject' onSubmit={handleSubmit}>
              <Form.Group controlId='projName'>
                <Form.Control
                  type='text'
                  placeholder='Enter a name for your project'
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='projDesc'>
                <Form.Control
                  as='textarea'
                  rows={2}
                  placeholder='Enter a brief project description'
                  value={projDesc}
                  onChange={(e) => setProjDesc(e.target.value)}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProjectComponent;
