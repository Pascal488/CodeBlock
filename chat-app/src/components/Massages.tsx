import React from 'react';

import Message from './Message';

const Massages = () => {
  return (
    <div>
        {
          [...Array(10)].map(item => 
            <Message key={item} />
          )
        }
    </div>
  )
}

export default Massages