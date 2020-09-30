import React from 'react';
import {Link } from 'react-router-dom';
import UserTemplate from 'templates/UserTemplate';
import {routes} from 'routes/index';


const DetailsTemplate  = ({children, pageType}) => (
<UserTemplate pageType={pageType}>
{children}
<Link to={routes.notes}>Back to home</Link>
</UserTemplate>
)
export default DetailsTemplate;