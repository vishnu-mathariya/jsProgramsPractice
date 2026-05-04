const obj = {
  name: "Vishnu",
  address: {
    city: "Pune",
    pincode: 300011,
  },
};

const F1 = ({ name, address: { city: userCity } }) => {
  console.log(name, userCity);
};

F1(obj);
