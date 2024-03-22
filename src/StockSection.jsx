import React from 'react';
import './StockSection.css';

const StockSection = () => {
  return (
    <div className="vertical-section">
      <h2>Currencies</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Current Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>$1.00</td>
            <td>+0.05%</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>€0.85</td>
            <td>-0.02%</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>£0.72</td>
            <td>+0.03%</td>
          </tr>
          <tr>
            <td>JPY</td>
            <td>¥110.02</td>
            <td>-0.01%</td>
          </tr>
          <tr>
            <td>AUD</td>
            <td>A$1.29</td>
            <td>+0.08%</td>
          </tr>
        </tbody>
      </table>

      <h2>Stocks</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Current Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Inc.</td>
            <td>$150.25</td>
            <td>+0.5%</td>
          </tr>
          <tr>
            <td>Microsoft Corporation</td>
            <td>$300.50</td>
            <td>-0.3%</td>
          </tr>
          <tr>
            <td>Google LLC</td>
            <td>$2500.75</td>
            <td>+0.8%</td>
          </tr>
          <tr>
            <td>Amazon.com, Inc.</td>
            <td>$3500.00</td>
            <td>-0.2%</td>
          </tr>
          <tr>
            <td>Facebook, Inc.</td>
            <td>$330.25</td>
            <td>+0.1%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StockSection;