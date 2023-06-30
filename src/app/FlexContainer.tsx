import flexObject from './flexObject'
import React from 'react'

export default function FlexContainer() {
  return (
    <div className='container'>
      {
        flexObject.map((flexObject: {id:number,isLight:number}[]) => {
          return (
            <div className='flexbox' style={{ backgroundColor: (flexObject.isLight) ? '#cfcecc' : '#8c8b88' }} >
              <div className='text'>{flexObject.id}</div>
            </div>
          )
        })
      }
    </div>
  );
}
