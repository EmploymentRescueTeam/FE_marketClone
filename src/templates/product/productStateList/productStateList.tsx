import 'src/styles/templates/product/productStateList.scss';

export default function ProductStateList({
  onChangeList,
}: {
  onChangeList: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <div className="productStateList">
        <div className="productState active">
          <button
            onClick={(e) => {
              const productStates = document.querySelectorAll('.productState');
              onChangeList('all');
              productStates.forEach((product) => {
                product.classList.remove('active');
              });
              e.currentTarget.closest('.productState')?.classList.add('active');
            }}>
            전체
          </button>
        </div>
        <div className="productState">
          <button
            onClick={(e) => {
              const productStates = document.querySelectorAll('.productState');
              onChangeList('sale');
              productStates.forEach((product) => {
                product.classList.remove('active');
              });
              e.currentTarget.closest('.productState')?.classList.add('active');
            }}>
            판매중
          </button>
        </div>
        <div className="productState">
          <button
            onClick={(e) => {
              const productStates = document.querySelectorAll('.productState');
              onChangeList('completed');
              productStates.forEach((product) => {
                product.classList.remove('active');
              });
              e.currentTarget.closest('.productState')?.classList.add('active');
            }}>
            거래완료
          </button>
        </div>
      </div>
    </>
  );
}
