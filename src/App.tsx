import React from 'react';
import ChatsList from './components/ChatListScreen/ChatsList';
import ChatsNavbar from './components/ChatListScreen/ChatsNavbar';

const App: React.FC = () => {
  return (
    <>
      <ChatsNavbar />
      <ChatsList />
    </>
  );
};
export default App;
