import {React, useState } from 'react'
import millify from 'millify'
import { Card, Row, Col, Input} from 'antd';
import { NavLink } from 'react-router-dom';
import { cryptoApi, useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {

  const {data : cryptosList , isfetching} =cryptoApi.useGetCryptosQuery();
  const [cryptos , setCryptos] = useState(cryptosList?.data?.coins)
  console.log(cryptos)


  return (
    <>
    <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
          <NavLink to={`/crypto/${currency.id}`}>
            <Card 
            title={`${currency.rank}. ${currency.name}`}
            extra={<img className='crypto-image' src={currency.iconUrl} />}
            hoverable
            >
            <p>
               <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
            </p>

            </Card>

          </NavLink>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies
