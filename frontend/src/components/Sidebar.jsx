

import { useEffect, useState } from "react";
import { useChatStore } from "../zustand/useChatStore.js";
import { useAuthStore } from "../zustand/useAuthStore.js";

import { Users } from "lucide-react";
import SidebarSkeleton from "./skeleton/SidebarSkeleton.jsx";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const { onlineUsers } = useAuthStore();

  const [Fusers, setFUsers] = useState([]); // Local state for reordered users

  // Fetch users on component mount
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    setFUsers(users);
  }, [users]);

  // Reorder users when onlineUsers changes
  useEffect(() => {
    setFUsers((prevUsers) => {
      if (!prevUsers || prevUsers.length === 0) {
        console.warn("No users to reorder."); 
        return [];
      }
      const online = prevUsers.filter((user) => onlineUsers.includes(user._id));
      const offline = prevUsers.filter(
        (user) => !onlineUsers.includes(user._id)
      );
      const reorderedUsers = [...online, ...offline];
      setFUsers(reorderedUsers); // Persist the reordered list locally
      console.log("Reordered users:", reorderedUsers); 
      return reorderedUsers;
    });
  }, [onlineUsers]);

  // Function to move a user to the top of the list
  const moveUserToTop = (userId) => {
    setFUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user._id !== userId);
      const movedUser = prevUsers.find((user) => user._id === userId);
      const newOrder = [movedUser, ...updatedUsers];
      setFUsers(newOrder);
      return [movedUser, ...updatedUsers];
    });
  };

  // Handle user selection
  const handleUserClick = (user) => {
    setSelectedUser(user);
   
    moveUserToTop(user._id);
  };

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        {Fusers.length > 0 ? (
          Fusers.map((user) => (
            <button
              key={user._id}
              onClick={() => handleUserClick(user)}
              className={`w-full p-3 flex items-center gap-3 hover:bg-base-300 transition-colors ${
                selectedUser?._id === user._id
                  ? "bg-base-300 ring-1 ring-base-300"
                  : ""
              }`}
            >
              <div className="relative mx-auto lg:mx-0">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.name}
                  className="size-12 object-cover rounded-full"
                />
                {onlineUsers.includes(user._id) && (
                  <span
                    className="absolute bottom-0 right-0 size-3 bg-green-500 
                    rounded-full ring-2 ring-zinc-900"
                  />
                )}
              </div>
              {/*only visible on larger screens */}
              <div className="hidden lg:block text-left min-w-0">
                <div className="font-medium truncate">{user.fullName}</div>
                <div className="text-sm text-zinc-400">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="text-center text-sm text-zinc-400">
            No users available.
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
