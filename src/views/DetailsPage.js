import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes/index';

export default class DetailsPage extends React.Component  {
    state = {
        pageType: 'notes',
    }
   
    componentDidMount(){
        const { match } = this.props;

        switch (match.path) {
            case routes.notes:
            this.setState({
                pageType: 'notes',
            })
                        break;
             case routes.twitter:
            this.setState({
                pageType: 'twitters',
            })
                        break;
            case routes.article:
                    this.setState({
                        pageType: 'articles',
                    })
                        break; 
                        
            default:
                        break;
       
        }
    }

    render() {
        const { pageType} = this.state;

        return(
            <DetailsTemplate pageType={pageType}>
                <p>{pageType}</p>
            </DetailsTemplate>
        )
    }
}
    
 
    
