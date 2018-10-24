import React from 'react';
import RouteEditor from '../components/RouteEditor.js';

const EditRoute = ({ doc }) => (
  <div className="EditRoute">
    <h4 className="page-header">Editing "{ doc.title }"</h4>
    <RouteEditor doc={ doc } />
  </div>
);

EditRoute.propTypes = {
  doc: React.PropTypes.object,
};

export default EditRoute;
