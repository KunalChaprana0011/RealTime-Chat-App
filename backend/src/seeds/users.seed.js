import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "tony.stark@avengers.com",
    fullName: "Tony Stark",
    password: "iamironman",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg",
  },
  {
    email: "thor.odinson@avengers.com",
    fullName: "Thor Odinson",
    password: "godofthunder",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
  },
  {
    email: "bruce.banner@avengers.com",
    fullName: "Bruce Banner",
    password: "hulk123",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Edward_Norton_and_Mark_Ruffalo_as_Bruce_Banner_Hulk.jpg",
  },
  {
    email: "natasha.romanoff@avengers.com",
    fullName: "Natasha Romanoff",
    password: "blackwidow",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/f/f6/Scarlett_Johansson_as_Black_Widow.jpg",
  },
  {
    email: "clint.barton@avengers.com",
    fullName: "Clint Barton",
    password: "hawkeye",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/d/da/Jeremy_Renner_as_Hawkeye.jpg",
  },
  {
    email: "wanda.maximoff@avengers.com",
    fullName: "Wanda Maximoff",
    password: "scarletwitch",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/d/d9/Elizabeth_Olsen_as_Wanda_Maximoff.jpg",
  },
  {
    email: "vision@avengers.com",
    fullName: "Vision",
    password: "mindstone",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Paul_Bettany_as_Vision.jpg/330px-Paul_Bettany_as_Vision.jpg",
  },
  {
    email: "peter.parker@avengers.com",
    fullName: "Peter Parker",
    password: "spidey123",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/0/0f/Tom_Holland_as_Spider-Man.jpg",
  },
  {
    email: "stephen.strange@avengers.com",
    fullName: "Stephen Strange",
    password: "sorcerersupreme",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/1/18/Benedict_Cumberbatch_as_Doctor_Strange.jpeg",
  },

  {
    email: "scott.lang@avengers.com",
    fullName: "Scott Lang",
    password: "antman123",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/en/8/88/Paul_Rudd_as_Ant-Man.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding Avengers:", error);
  }
};

seedDatabase();
