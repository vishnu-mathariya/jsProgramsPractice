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

/////////////////////////////////////////

// Data hiding

function secret() {
  let data = "hidden";

  return function () {
    return data;
  };
}

const hiddenSecret = secret();
console.log(hiddenSecret());
