let result = "";
for (let i = 1; i <= 100; i++) {
    if ((i % 2 === 0 || i % 3 === 0) && i < 100) {
        result += `${i}, `;
    } else if (i % 2 === 0 || i % 3 === 0) {
        result += `${i}.`;
    }
     

    }
    console.log(result);
  