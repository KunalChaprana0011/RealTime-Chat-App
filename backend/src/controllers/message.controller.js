import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in getUsers controller", error.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: receiverUserId } = req.params;
    const senderUserId = req.user._id;

    const messages = await Message.find({
      $or: [
        {
          senderId: senderUserId,
          receiverId: receiverUserId,
        },
        {
          senderId: receiverUserId,
          receiverId: senderUserId,
        },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getMessages controller", error.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const sendMessages = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverUserId } = req.params;
    const senderUserId = req.user._id;

    let imageUrl;

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId : senderUserId,
      receiverId : receiverUserId,
      text,
      image: imageUrl,
    });

    await newMessage.save();


    res.status(201).json(newMessage);

    //socket.io realtime functionality 
  } catch (error) {
    console.log("error in sendMessages controller", error.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
