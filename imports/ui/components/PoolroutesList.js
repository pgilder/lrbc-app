import React from 'react';
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';

const PoolroutesList = ({ poolroutes, userName }) => (
  <div>
    <div className="page-header clearfix">
      <h3 className="pull-left">{ userName } Poolroutes</h3>
      <Button
        bsStyle="success"
        className="pull-right btn-add"
        href="/poolroutes/new"
      >New Poolroute</Button>
    </div>
    { poolroutes.length > 0 ? <ListGroup className="PoolroutesList">
      {poolroutes.map(({ _id, title, body, balance, status, createdAt }) => (
        userName === 'My' ?
        <ListGroupItem key={ _id } href={`/poolroutes/${_id}`}>
          <img className="avatar" src="img/avatar.jpg"></img>
          <h5 className="agencyTitle">{ title }</h5>
          <h5 className="agencyBody">{}</h5>
          <h5 className="agencyBalance">{ balance }</h5>
          <a className="pull-right btn btn-edit" href={`/poolroutes/${_id}/edit`}>Edit</a>
          <h5 className="agencyStatus">{ status }</h5><br/>
          <h5 className="submitDate">{ `12 Days Ago` }</h5>
        </ListGroupItem> :
        <ListGroupItem key={ _id }>{ title }
        </ListGroupItem>
      ))}
    </ListGroup> :
    <Alert bsStyle="warning">No Poolroutes yet.</Alert> }
  </div>
);

PoolroutesList.propTypes = {
  poolroutes: React.PropTypes.array,
  userName: React.PropTypes.string,
};

export default PoolroutesList;

        // <i> by </i>{ Object.prototype.hasOwnProperty.call(userobject.profile.name, 'first') ?
        // `${userobject.profile.name.first} ${userobject.profile.name.last}`
        // : `${userobject.profile.name}` }
