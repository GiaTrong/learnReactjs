import { useEffect, useState } from "react";
function List() {
  const [data, setData] = useState({});

  // USE EFFECT: chờ giao diện load hết để có thể dùng các câu lệnh query

  // NẾU KHÔNG CÓ DEPENDENCE => cứ render lại giao diện => call back lại được gọi lại
  // DEPENDENCE => chỉ gọi 1 LẦN khi giao diện được render lại
  useEffect(() => {
    const fetchApi = async () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setData(data.products);
        });
    };
    fetchApi();
  }, []);

  console.log(data);
  return (
    <>
      <div className="product_list">
        {data.map((item) => (
          <div className="product_item" key={item.id}>
            <div className="product_image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h3 className="product_title">{item.title}</h3>
            <div className="product_price">{item.price}$</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
