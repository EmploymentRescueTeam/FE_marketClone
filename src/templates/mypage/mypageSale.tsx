'use client';
import 'src/styles/templates/mypage/mypageSales.scss'
import { useEffect, useState, Fragment } from 'react';
import { getProducts } from '@/api/service';
import Header from '@/components/header';
import ProductItem from '@/components/productItem';
import ProductState from '@/components/productState';
import ProductStateList from '@/templates/product/productStateList/productStateList';
import { AXIOSResponse, IProduct } from '@/types/interface';

export default function MypageSale() {
  const [data, setData] = useState<IProduct[]>([]);
  const [hi, setHi] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const res: AXIOSResponse<IProduct[]> = await getProducts();
      if (res.statusCode === 200) {
        setData(res.data);
      }
    };

    fetchData();
  }, []);

  const test = data.filter((product) => product.status === '판매중');
  console.log('all');

  return (
    <>
      <Header goBack={true} border={true} title={'판매내역'} />
      <ProductStateList />
      <ul className='product-list'>
      {test.map((product) => (
        <Fragment key={product.id}>
          <ProductItem product={product} />
          <ProductState />
        </Fragment>
      ))}
      </ul>
    </>
  );
}
