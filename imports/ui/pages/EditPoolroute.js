import React from 'react';
import PoolrouteEditor from '../components/PoolrouteEditor.js';

const EditPoolroute = ({ doc }) => (
  <div className="EditPoolroute">
    <h4 className="page-header">Editing "{ doc.title }"</h4>
    <PoolrouteEditor doc={ doc } />
  </div>
);

EditPoolroute.propTypes = {
  doc: React.PropTypes.object,
};

export default EditPoolroute;
