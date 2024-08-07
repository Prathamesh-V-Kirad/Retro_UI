import React from 'react';

const Screen3 = ({ activeTab }) => {
  return (
    <section id="screen-3" className={`tab-content ${activeTab === 'screen-3' ? 'active' : ''}`}>
      <article>
        <header>
          <h2>SCREEN 3</h2>
        </header>
        <div className="content">
          Fusce nec tellus sed augue semper porta. Mauris massa.
        </div>
      </article>
    </section>
  );
};

export default Screen3;
