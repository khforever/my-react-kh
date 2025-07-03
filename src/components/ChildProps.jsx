 
export default function ChildProps(props) {
  console.log(props);

  const add = () => {
    props.setCount(props.count + 1);
  };

  return (
    <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}>
      <h1>{props.count}</h1>
      <button className="btn" onClick={add}>+</button>
    </div>
  );
}