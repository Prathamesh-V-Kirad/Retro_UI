import React from 'react';

const Screen2 = ({ activeTab }) => {
  return (
    <section id="screen-2" className={`tab-content ${activeTab === 'screen-2' ? 'active' : ''}`}>
      <article>
        <header>
          <h2>SCREEN 2</h2>
        </header>
        <div className="content">
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </div>
      </article>
    </section>
  );
};

export default Screen2;
