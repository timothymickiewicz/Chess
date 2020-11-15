import React from 'react';

function Outline(props) {

    React.useEffect(() => {
    })

  return (
    <div className="outline">
        <div dangerouslySetInnerHTML={{ __html: props.code }} className='shadow'></div>
        {props.piece}
    </div>
  );
}

export default Outline;