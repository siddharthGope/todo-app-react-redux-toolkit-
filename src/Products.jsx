/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";

function Products({ age, data }) {
  const [a, b] = useState(true);
  return (
    <div>
      <div className={`${a === false ? "text-red-600" : "text-blue-600"}`}>
        {a === false ? "hi" : "hello"}
      </div>
      <button onClick={() => b(!a)}>click</button>
      <div>
        {data.age}
        {data.name}
      </div>
    </div>
  );
}

export default Products;
