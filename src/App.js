import React from 'react';

import Profile from './components/profile/Profile'
import user from './components/profile/user.json'

import FriendsList from './components/friendlist/FriendList'
import friends from './components/friendlist/friends-list.json'
import FriendListItem from './components/friendlist/FriendListItem'

import Statistics from './components/statistics/Statistics'
import stats from './components/statistics/statistics-data.json'

import TransactionsHistory from './components/transactions/Transactions'
import transactions from './components/transactions/transactions.json'


export default function App () {
    return (
        <>
            <Profile 
            avatar={user.avatar}
            name={user.name}
            tag={user.tag}
            location={user.location}
            follovers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
            />

            <FriendsList>
                <FriendListItem friends={friends}></FriendListItem>
            </FriendsList>

            <Statistics title={"Upload stats"} stats={stats}/>

            <TransactionsHistory items={transactions}/>
        </>
    )
}