import React, { useState, useEffect, useContext } from 'react';
import {NetworkContext} from './App';

const useRickAndMortyAPI = (uri) => {
  const { delay } = useContext(NetworkContext);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://rickandmortyapi.com/api${uri}`);

      if (delay) {
        await new Promise(resolve => setTimeout(resolve, delay))
      }

      const resp = await response.json();
      setLoading(false)
      setResponse(resp)
    }

    fetchData()
  }, [uri, delay, setResponse]);

  return [response, loading];
}

export default useRickAndMortyAPI;
