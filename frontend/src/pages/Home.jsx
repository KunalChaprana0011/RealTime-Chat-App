import ChatContainer from "../components/ChatContainer.jsx";
import NoChatContainer from "../components/NoChatContainer.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useChatStore } from "../zustand/useChatStore";

const Home = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen bg-base-300">
      <div className="flex items-center justify-center pt-20  ">
        <div className="bg-base-100  shadow-xl w-full max-w-full h-[calc(100vh-5rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatContainer /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
