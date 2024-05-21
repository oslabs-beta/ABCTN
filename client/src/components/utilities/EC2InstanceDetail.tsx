import React from 'react';

interface EC2InstanceDetailProps {
  instance: {
    InstanceId: string;
    Name: string;
    InstanceType: string;
    State: string;
    // add other necessary fields
  };
}

const EC2InstanceDetail: React.FC<EC2InstanceDetailProps> = ({ instance }) => {
  return (
    <div>
      <h2>{instance.Name}</h2>
      <p>ID: {instance.InstanceId}</p>
      <p>Type: {instance.InstanceType}</p>
      <p>Status: {instance.State}</p>
      {/* Render other instance details */}
    </div>
  );
};

export default EC2InstanceDetail;