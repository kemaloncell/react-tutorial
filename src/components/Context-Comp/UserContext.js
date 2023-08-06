import React from 'react';

const UserContext = React.createContext('default-context-props '); // 1. create context and it may be default value
// and if you don't use provider, this default value will be used

const UserProvider = UserContext.Provider // 2. create provider
const UserConsumer = UserContext.Consumer // 3. create consumer

export { UserConsumer, UserProvider } // 4. export provider and consumer without default keyword
export default UserContext // Other exp; step 1. export context with default keyword and it may be used in other components


