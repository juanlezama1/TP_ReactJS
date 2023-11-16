import React from 'react';
import './listCategories.css'
import { Card } from 'antd';
import { Meta } from 'antd/es/list/Item';
import { Link } from 'react-router-dom';

const ListCategories = () => {

    return (

      <div className='row m-4 categories'>

        <div className='col-6'>
          <Link to={'/category/consoles'} className='Card text-center text-decoration-none'>
            <Card hoverable cover={<img className='category_image' alt="consolas" src='/public/images/consolas2.webp' />}>
            <Meta title="Juegos por consola" description={`Playstation 5, Xbox Series X/S, PC, Nintendo Switch, etc.`} />
            <p className='more_info text-decoration-underline'>Ver juegos!</p>
            </Card>
          </Link>
        </div>

        <div className='col-6'>
          <Link to={'/category/genres'} className='Card text-center text-decoration-none'>
              <Card hoverable cover={<img className='category_image' alt="consolas" src='/public/images/genres.webp' />}>
              <Meta title="Juegos por género" description={`Acción, Aventura, RPG, Puzzle, etc.`} />
              <p className='more_info text-decoration-underline'>Ver juegos!</p>
              </Card>
            </Link>
        </div>

        <div className='col-6'>
          <Link to={'/category/peripherals'} className='Card text-center text-decoration-none'>
              <Card hoverable cover={<img className='category_image' alt="perifericos" src='/public/images/peripherals.webp' />}>
              <Meta title="Periféricos" description={`Teclados, mouse, auriculares, etc.`} />
              <p className='more_info text-decoration-underline'>Ver periféricos!</p>
              </Card>
          </Link>
        </div>

      </div>
    )
}

export default ListCategories