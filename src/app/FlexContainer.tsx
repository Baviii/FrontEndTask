import flexObject from './flexObject'
import React from 'react'

export default function FlexContainer() {
  return (
    <div className='container'>
      {
        flexObject.map((flexObject: { isLight: number }, index: number) => {
          return (
            <div className='flexbox' style={{ backgroundColor: (flexObject.isLight) ? '#cfcecc' : '#8c8b88' }} >
              {index + 1}
            </div>
          )
        })
      }
    </div>
  );
}
