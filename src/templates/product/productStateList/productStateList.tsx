import 'src/styles/templates/product/productStateList.scss';

export default function ProductStateList() {
  return (
    <>
      <div className="productStateList">
        <div className="productState active">
          <p>전체</p>
        </div>
        <div className="productState">
          <p>판매중</p>
        </div>
        <div className="productState">
          <p>거래완료</p>
        </div>
      </div>
    </>
  );
}
