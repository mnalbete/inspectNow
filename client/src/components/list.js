import '../App.css';
// import Button from "@material-ui/core/Button"
import api from '../utils/api';
import {useAuthenticatedUser} from '../utils/auth';
import { useHistory } from 'react-router-dom';



function List() {
  const user = useAuthenticatedUser();
  const history = useHistory();
  return (
 
       
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">12345 NE 123rd ST Kirkland Wa</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">12345 NE 123rd ST Kirkland Wa</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">12345 NE 123rd ST Kirkland Wa</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>
          </div>
 )};


export default List;