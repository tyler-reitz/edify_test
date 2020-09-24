import React, { useState, useEffect, useContext } from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {NetworkContext} from './App';

const CharacterListFilters = () => {
  const { delay, setDelay } = useContext(NetworkContext);
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [name, setName] = useState(params.get('name'));
  const [status, setStatus] = useState(params.get('status'));

  name ? params.set('name', name) : params.delete('name');
  status ? params.set('status', status) : params.delete('status');

  useEffect(() => {
    history.push(`?${params.toString()}`)
  }, [name, status])

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        value={params.get('name') || ''}
        type="text"
        onChange={e => setName(e.currentTarget.value)}
      />
      <label htmlFor="status">Status: </label>
      <select
        value={status || ''}
        name="status"
        id="status"
        onChange={e => setStatus(e.currentTarget.value)}
      >
        <option value="alive">alive</option>
        <option value="dead">dead</option>
      </select>
      <label htmlFor="network-delay">Simulate Network Delay (ms): </label>
      <input
        value={delay}
        onChange={e => setDelay(e.target.value)}
        name="network-delay"
        id="network-delay"
        type="number"
        step={100}
      />
    </div>
  );
}

export default CharacterListFilters;
