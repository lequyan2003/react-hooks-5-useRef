import { useEffect, useRef, useState } from 'react';

function App() {
  // const countRef = useRef(0);
  
  // // const obj = {
  // //   current: 0
  // // }

  // const [count, setCount] = useState(0);
  
  // /**
  //  * {
  //  *  current: 0
  //  * }
  //  * 
  //  * countRef /// obj
  //  */

  // const handleClick = () => {
  //   setCount(count + 1);
  //   countRef.current = countRef.current + 1;
  //   // obj.current = obj.current + 1;
  // };

  // // console.log({
  // //   count,
  // //   countRef,
  // //   // obj
  // // });

  // useEffect(() => {
  //   setInterval(() => {
  //     // setCount(count + 1);
  //     countRef.current = countRef.current + 1;
  //     // console.log({ count });
  //     console.log({ countRef : countRef.current })
  //   }, 1000);
  // }, []);

  const ref = useRef(null);

  console.log({ ref });
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <input type='text' ref={ref} />
      {/* <button onClick={handleClick}>CLICK BUTTON</button> */}
    </>
  );
}

export default App;
