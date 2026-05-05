const outer = () => {
  let count = 0;

  const inner = () => {
    count++;

    console.log(count);
  };

  return inner;
};

const fn = outer();
fn();
fn();
fn();
