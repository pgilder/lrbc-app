import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removePoolroute } from '../../api/poolroutes/methods.js';


const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removePoolroute.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Poolroute deleted!', 'success');
        browserHistory.push('/poolroutes');
      }
    });
  }
  function myFunction() {
    var element = poolroute.getElementById("myDIV");

    if (element.classList) {
        element.classList.toggle("mystyle");
    } else {
        var classes = element.className.split(" ");
        var i = classes.indexOf("mystyle");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("mystyle");
            element.className = classes.join(" ");
    }
  }
};



const ViewPoolroute = ({ doc }) => !doc ? <div>This customer either doesn't exist or you don't have permission to see it</div> : (
  <div className="card ViewPoolroute">
    <div className="backIcon">
      <a href="/">
        <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </a>
      <h4 className="pagetitle">{ doc.title } Profile</h4>
    </div>
    <div className="page-header clearfix">
      <div className="profile-box">
        <img className="profile-pic" src="/img/avatar.jpg"></img>
      </div>
      <h4 className="pull-left">{ doc.title }</h4>
      <div className="ItemBody">{ doc.body }</div>
      <div className="ItemBalance">{ doc.balance }</div>
      <ButtonToolbar className="pull-right">
        <ButtonGroup bsSize="small">
          <Button href={`/poolroutes/${doc._id}/edit`}>
            <svg aria-hidden="true" data-prefix="fas" data-icon="pencil-alt" class="svg-inline--fa fa-pencil-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>
          </Button>
          <Button onClick={ () => handleRemove(doc._id) } className="text-danger">
            <svg aria-hidden="true" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272  68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"></path></svg>
          </Button>
          <Button className="text-add" href={`/poolroutes/new`}>
            <svg aria-hidden="true" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>

    <div className="card">
      <h4>Job Description</h4>
      <div className="divider"></div>
      <div className="jobdescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className="divider"></div>
    </div>
    <div className="card brand-bg">
      <h4>Toolbar</h4>
      <h4 className="jobstatus">In Poolroute</h4>
      <div className="divider"></div>
      <div className="jobtoolbar">
        <Button className="btn-onpoolroute active" href={`#`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
        </Button>
        <Button className="btn-startjob" href={`#`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </Button>
        <Button className="btn-stopjob" href={`#`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>
        </Button>
      </div>
    <div className="divider"></div>
    </div>
    <div className="card">
      <h4>When: { doc.status }</h4>
      <div className="divider"></div>
      <div className="jobdate">
        <h5 className="jobdatedetail">{ doc.createdAt.toLocaleString() }<br/></h5>
        <h5 className="jobdatedetail"><b>Thur Dec 4</b>   1-00p - 3:00p<br/></h5>
        <h5 className="jobdatedetail"><b>Thur Jan 2</b>   2-00p - 4:00p<br/></h5>

      </div>
      <div className="divider"></div>
    </div>
    <div className="card">
      <div className="jobtech">
        <h4>Who</h4>
        <div className="divider"></div>
        <ul>
          <li>
            <img className="tech-pic" src="/img/avatar.jpg"></img>
              <h5 className="techName">Jackson Stugart</h5>
              <div className="contact-links">
                <Button className="btn-call" href={`#`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                </Button>
                <Button className="btn-message" href={`#`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </Button>
              </div>
          </li>
          <li>
            <img className="tech-pic" src="/img/avatar.jpg"></img>
              <h5 className="techName">John Stugart</h5>
                <div className="contact-links">
                  <Button className="btn-call" href={`#`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                  </Button>
                  <Button className="btn-message" href={`#`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                  </Button>
                </div>
          </li>
          <li>
            <img className="tech-pic" src="/img/avatar.jpg"></img>
              <h5 className="techName">Jennifer Stugart</h5>
                <div className="contact-links">
                  <Button className="btn-call" href={`#`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                  </Button>
                  <Button className="btn-message" href={`#`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                  </Button>
                </div>
          </li>
        </ul>
        <div className="divider"></div>
      </div>
    </div>
    <div className="card">
      <div className="jobitems">
        <h4>Job Items</h4>
        <div className="divider"></div>
        <ol>
          <li>
            <h5 className="jobitemtitle">Install Water Pump</h5>
            <p className="jobitemdescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          </li>
          <li>
            <h5 className="jobitemtitle">Drain Swimming Pool</h5>
            <p className="jobitemdescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          </li>
          <li>
            <h5 className="jobitemtitle">Add Extra Tabs</h5>
            <p className="jobitemdescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          </li>
          <li>
            <h5 className="jobitemtitle">Flush Drain SYstem</h5>
            <p className="jobitemdescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          </li>
        </ol>
        <div className="divider"></div>
      </div>
    </div>

    <div className="card">
      <h4>History</h4>
      <div className="divider"></div>
        <b>Created:</b> { doc.createdAt.toLocaleString() }
        <br/>
        <b>Modified:</b> { doc.modifiedAt.toLocaleString() }
        <br/><br/>
      <div className="divider"></div>
    </div>

  </div>
);

// ViewPoolroute.propTypes = {
//   doc: React.PropTypes.object.isRequired, // commented out to allow null value for doc
// };

export default ViewPoolroute;
