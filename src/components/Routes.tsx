import { Route, BrowserRouter as Router } from 'react-router-dom';
import DreamDetails from './DreamDetails';

export default function Routes() {
    return (
        <Router>
            <div>
                <Route path='/statics' Component={DreamDetails}></Route>
            </div>
        </Router>
    );
}
