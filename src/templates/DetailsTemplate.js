import React from 'react';
import {Link } from 'react-router-dom';
import UserTemplate from 'templates/UserTemplate';


const DetailsTemplate  = () => (
    <UserTemplate>
<h1>Note</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, tempora nobis cumque doloremque natus nostrum repellendus minus eveniet! Aspernatur recusandae, quisquam in beatae odit mollitia quo cum culpa voluptatum pariatur!</p>
<Link to='/notes'>Back to home</Link>
</UserTemplate>
)
export default DetailsTemplate;