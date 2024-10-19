import React from 'react'

import P1 from '../images/products/P1.png';
import P2 from '../images/products/P2.png';
import P3 from '../images/products/P3.png';
import P4 from '../images/products/P4.png';
import P5 from '../images/products/P5.png';
import P6 from '../images/products/P6.png';
import P7 from '../images/products/P7.png';
import P8 from '../images/products/P8.png';



function Newproducts() {
    const dogs =[

        {image:P1 ,type: 'Reflex Plus Adult Cat Food Salmon', price: '140.000 VND',product:'Dog Food',size:'385gm' },
        {image:P2 ,type: 'Reflex Plus Adult Cat Food Salmon', price: '165.000 VND',product:'Cat Food',size:'1.5kg'  },
        {image:P3 ,type: 'Cat scratching ball toy kitten sisal rope ball', price: '1.100.000 VND' ,product:'Dog Food',size:'385gm' },
        {image:P4 ,type: 'Cute Pet Cat Warm Nest', price: '8.900.000 VND',product:'Dog Food',size:'385gm'  },
        {image:P5 ,type: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil', price: '7.900.000 VND',product:'Dog Food',size:'385gm'  },
        {image:P6 ,type: 'Costumes Fashion Pet Clother Cowboy Rider', price: '9.000.000 VND',product:'Dog Food',size:'385gm' },
        {image:P7 ,type: 'Costumes Chicken Drumsti ck Headband', price: '6.500.000 VND',product:'Dog Food',size:'385gm'  },
        {image:P8 ,type: 'Plush Pet Toy', price: '6.500.000 VND',product:'Dog Food',size:'385gm'  },
       

    ];
    return (
        <div className='new-ones'>
            <p className='new-ones-p'>Hard to choose right products for your pets?</p>
            <div className='text_and_viewmore'>
                <h3> Our Products</h3>
                <button>View More</button>
            </div>

            <div className='dog-grid'>
                {dogs.map((dog, index)=>(
                    <div key={index} className='dog-card'>
                        <img src={dog.image} className='dog-image'/>
                        <div className='dog-info'>
                            <h4>{dog.type}</h4>
                            <div className='dog-gene-age'>
                                <p>Product: {dog.product}</p>
                                <p>Size: {dog.size}</p>
                            </div>
                            <p>{dog.price}</p>
                        </div>
                    </div>
                ))}
            </div>





        </div>
    )
}


export default Newproducts
