
import './App.css';
import Profile from './components/Profile';
import FriendList from './components/FriendList';
import userData from "./userData.json";
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./transactions.json";


   const App = () => {
      return (
        <>
          <div>
            <Profile
              name={userData.username}
              tag={userData.tag}
              location={userData.location}
              image={userData.avatar}
              stats={userData.stats}
            />
          </div>

          <div>  <FriendList friends={friends} /></div>
          <div>
            <TransactionHistory items={transactions} /></div>
        </>
      );
    };
      
  


export default App
