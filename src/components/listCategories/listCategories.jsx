import React from 'react';
import './listCategories.css'
import { Card } from 'antd';
import { Meta } from 'antd/es/list/Item';
import { Link } from 'react-router-dom';

const ListCategories = () => {

    return (

      <div className='row m-4'>

        <Link to={'/category/consoles'} className='Card col-6 text-center'>
          <Card hoverable cover={<img className='category_image' alt="consolas" src='/public/images/consolas.webp' />}>
          <Meta title="Juegos por consola" description={`PS4/PS5, Xbox One/Series, PC, etc.`} />
          <p className='more_info text-decoration-underline'>Ver juegos!</p>
          </Card>
        </Link>


        <Link to={'/category/genres'} className='Card col-6 text-center'>
          <Card hoverable cover={<img className='category_image' alt="consolas" src='/public/images/game-genres.png' />}>
          <Meta title="Juegos por género" description={`Acción, Aventura, RPG, Puzzle, etc.`} />
          <p className='more_info text-decoration-underline'>Ver juegos!</p>
          </Card>
        </Link>

      </div>
    )
}

export default ListCategories