import React, { useState } from 'react'

const Prices = ({ bpi }) => {
  const [currency, setCurrecy] = useState('USD')

  const renderCurrencyList = () => Object.keys(bpi).map(currency => (
    <option value={currency}>{currency}</option>
  ))

  return (
    <div>
      <div class="form-group">
        <select className="custom-select" onChange={e => setCurrecy(e.target.value)}>
          {renderCurrencyList()}
        </select>
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {bpi[currency].description} : 
          <span className="badge badge-primary mx-2">
            {bpi[currency].code}
          </span>
          <strong>
            {bpi[currency].rate}
          </strong>
        </li>
      </ul>
    </div>
  )
}


export default Prices
