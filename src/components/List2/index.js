import { useEffect, useState } from "react";
function List2() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(0);

  // DEPENDENCE => chỉ gọi 1 LẦN khi giao diện được render lại
  // nếu truyền giá trị vào DEPENDENCE
  // giá trị đó được thay đổi => callback được gọi lại
  useEffect(() => {
    const fetchApi = async () => {
      const urlApi = `https://dummyjson.com/products?skip=${pagination}&limit=10`;
      fetch(urlApi)
        .then((res) => res.json())
        .then((data) => {
          setData(data.products);
        });
    };

    fetchApi();
  }, [pagination]);

  const changePagination = (pagePagination) => {
    setPagination(pagePagination);
    console.log("hello");
    console.log(pagePagination);
  }

  return (
    <>
      <ul>
        <li onClick={() => {changePagination(6)}}>1</li>
        <li onClick={() => {changePagination(10)}}>2</li>
        <li onClick={() => {changePagination(15)}}>3</li>
      </ul>

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

export default List2;
