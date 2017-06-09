import React from 'react';

import Header from './header';
import FilterableResourceTable from './filterableResourceTable';
import resources from '../utils/resources';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header appName='East Asian Resources'/>
                <FilterableResourceTable resources={resources}/>
            </div>
        );
    }
}

export default App;
