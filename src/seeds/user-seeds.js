const User = require("../models/User");

const users = [
  {
    firstName: "Amy",
    lastName: "Johnson",
    email: "amyjohnson@hotmail.co.uk",
    password: "12312fsdf",
    profileImageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    firstName: "James",
    lastName: "Hamilton",
    email: "jimhamilton@email.com",
    password: "qwerty;123!",
    profileImageUrl:
      "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80",
  },
  {
    firstName: "Komi",
    lastName: "Shoko",
    email: "komishoko@gmail.com",
    password: "djfhsdjfdbjvd",
    profileImageUrl:
      "https://images.unsplash.com/photo-1573496800808-56566a492b63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmVzZSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    firstName: "Hugh",
    lastName: "Williams",
    email: "hughwilliams@email.com",
    password: "hand;grey5",
    profileImageUrl:
      "https://images.unsplash.com/photo-1628890917334-bc50dcb5cc73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlkZGxlJTIwYWdlZCUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    firstName: "Hudson",
    lastName: "Wilson",
    email: "HudsonTWilson@gmail.com",
    password: "Password123",
    profileImageUrl:
      "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const seedUsers = async () => {
  await User.destroy({
    where: {},
  });

  const promises = users.map((user) => User.create(user));

  await Promise.all(promises);

  console.log("✅ users");
};

module.exports = seedUsers;
