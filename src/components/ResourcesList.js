import React from 'react';

class ResourcesList extends React.Component {
  render(){
    return(
      <div>{this.props.resource}</div>
    )
  };
};

export default ResourcesList;