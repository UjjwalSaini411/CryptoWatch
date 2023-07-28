import {React, useState, useEffect } from 'react'
import millify from 'millify'
import { Card, Row, Col, Input} from 'antd';
import { NavLink } from 'react-router-dom';
import { cryptoApi } from '../services/cryptoApi';
import Loader from './Loader';
const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data : cryptosList , isfetching} =cryptoApi.useGetCryptosQuery(count);
  const [cryptos , setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  console.log(cryptos)

  useEffect(() => {
  const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
  setCryptos(filteredData)
  }, [cryptosList, searchTerm]);

  if (isfetching) { return <Loader/>}


  return (
    <>
    {!simplified && (
      <div className='search-crypto'>
      <Input placeholder='search CryptoCurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
      )}
    <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
          <NavLink to={`/crypto/${currency.uuid}`}>
            <Card 
            title={`${currency.rank}. ${currency.name}`}
            extra={<img className='crypto-image' src={currency.iconUrl} />}
            hoverable
            >
            <p>
               <p>Price: {currency.price} $</p>
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
