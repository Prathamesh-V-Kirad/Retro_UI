import React from 'react';

const Screen1 = ({ activeTab }) => {
  return (
    <section id="screen-1" className={`tab-content ${activeTab === 'screen-1' ? 'active' : ''}`}>
      <article>
        <header>
          <h2>SCREEN 1</h2>
        </header>
        <div className="content">
          <table className="status-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>
              <tr className="alert">
                <td>Oxygen Levels</td>
                <td>21</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>22</td>
                <td>°C</td>
              </tr>
              <tr>
                <td>Power Usage</td>
                <td>75</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Structural Integrity</td>
                <td>80</td>
                <td>%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
};

export default Screen1;
