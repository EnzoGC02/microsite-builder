import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import moment from 'moment';

const PageDetailsComponent = ({ data, handleEnableMicrobot }) => {
  const [pageTitle, setPageTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [created, setCreated] = useState('');

  useEffect(() => {
    setPageTitle(data.pageTitle);
    setAuthor(data.author);
    setCreated(
      'Page created on : ' + moment(data.created).format('Do MMM, YYYY hh:mm a')
    );
  }, [data]);

  return (
    <>
      <h5 className='title1'>Page Details</h5>
      <div className='container'>
        <Form>
          <div className='row'>
            <div className='col-6'></div>
            <div className='col-6'>
              <Form.Control
                type='text'
                className='inputPlain'
                name='pageTitle'
                value={created || ''}
                readOnly
                disabled
              />
            </div>
          </div>
          <div className='row mt5'>
            <div className='col-6'>
              <Form.Group controlId='pageTitle'>
                <Form.Label>Page Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Page Title'
                  name='pageTitle'
                  value={pageTitle || ''}
                  onChange={(e) => setPageTitle(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className='col-6'>
              <Form.Group controlId='author'>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Page Title'
                  name='author'
                  value={author || ''}
                  onChange={(e) => setAuthor(e.target.value)}
                  disabled
                />
              </Form.Group>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PageDetailsComponent;
