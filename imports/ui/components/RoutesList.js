import React from 'react';
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';

const RoutesList = ({ routes, userName }) => (
  <div>
    <div className="page-header clearfix">
      <h3 className="pull-left">{ userName } Routes</h3>
      <Button
        bsStyle="success"
        className="pull-right btn-add"
        href="/routes/new"
      >New Route</Button>
    </div>
    { routes.length > 0 ? <ListGroup className="RoutesList">
      {routes.map(({ _id, title, body, balance, status, createdAt }) => (
        userName === 'My' ?
        <ListGroupItem key={ _id } href={`/routes/${_id}`}>
          <img className="avatar" src="img/avatar.jpg"></img>
          <h5 className="agencyTitle">{ title }</h5>
          <h5 className="agencyBody">{}</h5>
          <h5 className="agencyBalance">{ balance }</h5>
          <a className="pull-right btn btn-edit" href={`/routes/${_id}/edit`}>Edit</a>
          <h5 className="agencyStatus">{ status }</h5><br/>
          <h5 className="submitDate">{ `12 Days Ago` }</h5>
        </ListGroupItem> :
        <ListGroupItem key={ _id }>{ title }
        </ListGroupItem>
      ))}
    </ListGroup> :
    <Alert bsStyle="warning">No Routes yet.</Alert> }
  </div>
);

RoutesList.propTypes = {
  routes: React.PropTypes.array,
  userName: React.PropTypes.string,
};

export default RoutesList;

        // <i> by </i>{ Object.prototype.hasOwnProperty.call(userobject.profile.name, 'first') ?
        // `${userobject.profile.name.first} ${userobject.profile.name.last}`
        // : `${userobject.profile.name}` }
