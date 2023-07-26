import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const { Text, Title } = Typography;
const { Option } = Select;


const News = ({simplified}) => {


const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory:'cryptocurrency', count: simplified ? 6 : 12 });
console.log(cryptoNews)

  return (
    <div>
      news
    </div>
  )
}

export default News
