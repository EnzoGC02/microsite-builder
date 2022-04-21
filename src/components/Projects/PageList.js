import React from 'react';
import Table from 'react-bootstrap/Table';

import PageListItem from './PageListItem';

const PageList = ({ data }) => {
  return (
    <>
      <Table striped hover>
        <thead>
          <tr>
            <th>Page</th>
            <th>Author</th>
            <th>Created</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <PageListItem key={idx} data={item} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PageList;
