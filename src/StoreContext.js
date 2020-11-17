import React from 'react';

const StoreContext = React.createContext({
  clearMessage: () => {},
  fetchResults: () => {},
  results: [],
  error: null,
  loading: false
})

export default StoreContext;