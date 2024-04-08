export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((v, i) => (
        <div className="food" key={i}>
          <h4>{v}</h4>
        </div>
      ))}
    </div>
  );
}
