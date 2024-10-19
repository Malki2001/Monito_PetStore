import React from 'react'

import dog1 from '../images/dogs/image 1.png';
import dog2 from '../images/dogs/image 2.png';
import dog3 from '../images/dogs/image 3.png';
import dog4 from '../images/dogs/image 4.png';
import dog5 from '../images/dogs/image 5.png';
import dog6 from '../images/dogs/image 6.png';
import dog7 from '../images/dogs/image 7.png';
import dog8 from '../images/dogs/image 8.png';

function Newones() {
    const dogs =[

        {image:dog1 ,type: 'MO231 - Pomeranian White', price: '6.900.000 VND',gene:'Male',age:'2 months' },
        {image:dog2 ,type: 'MO502 - Poodle Tiny Yellow', price: '3.900.000 VND',gene:'Female',age:'2 months'  },
        {image:dog3 ,type: 'MO102 - Poodle Tiny Sepia', price: '4.000.000 VND' ,gene:'Male',age:'2 months' },
        {image:dog4 ,type: 'MO512 - Alaskan Malamute Grey', price: '8.900.000 VND',gene:'Male',age:'2 months'  },
        {image:dog5 ,type: 'MO231 - Pembroke Corgi Cream', price: '7.900.000 VND',gene:'Male',age:'2 months'  },
        {image:dog6 ,type: 'MO502 - Pembroke Corgi Tricolor', price: '9.000.000 VND',gene:'Female',age:'2 months'  },
        {image:dog7 ,type: 'MO231 - Pomeranian White', price: '6.500.000 VND',gene:'Female',age:'2 months'  },
        {image:dog8 ,type: 'MO512 - Poodle Tiny Dairy Cow', price: '5.000.000 VND' ,gene:'Male',age:'2 months' },

    ];
    return (
        <div className='new-ones'>
            <p className='new-ones-p'>Whats new ?</p>
            <div className='text_and_viewmore'>
                <h3> Take A Look At Some Of Our Pets</h3>
                <button>View More</button>
            </div>

            <div className='dog-grid'>
                {dogs.map((dog, index)=>(
                    <div key={index} className='dog-card'>
                        <img src={dog.image} className='dog-image'/>
                        <div className='dog-info'>
                            <h4>{dog.type}</h4>
                            <div className='dog-gene-age'>
                                <p>Gene: {dog.gene}</p>
                                <p>Age: {dog.age}</p>
                            </div>
                            <p>{dog.price}</p>
                        </div>
                    </div>
                ))}
            </div>





        </div>
    )
}

export default Newones