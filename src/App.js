import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Компонент обновлен');
  });

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}
export default MyComponent;
//В этом примере хук useEffect используется для выполнения побочных эффектов при каждом обновлении компонента. В данном случае, при каждом обновлении компонента, в консоль будет выводиться сообщение "Компонент обновлен". 