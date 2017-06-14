import React from 'react';
import {Grid} from 'react-bootstrap';

import Header from './header';
import FilterableResourceTable from './filterableResourceTable';
import resources from '../utils/resources';
import {parseResources} from '../utils/helperFunctions';

class App extends React.Component {
    render() {
        return (
            <Grid fluid={true}>
                <Header
                    appName='East Asian Resources'
                />
                <FilterableResourceTable
                    resources={parseResources(resources)}
                />
            </Grid>
        );
    }
}

export default App;
