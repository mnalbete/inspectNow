import '../App.css';

function Condo() {
  return (
    <div>
    <main>
      <nav>
        <div className="nav-header">
          <figure>
            <img src="/images/logo.png" alt="" />
          </figure>
        </div>
        <ul>
        <li><a href="#section-1">Section 1</a></li>
        <li><a href="#section-2">Section 2</a></li>
        <li><a href="#section-3">Section 3</a></li>
        <li><a href="#section-4">Section 4</a></li>
        <li><a href="#section-5">Section 5</a></li>
        <li><a href="#section-6">Section 6</a></li>
        <li><a href="#section-7">Section 7</a></li>
        <li><a href="#section-8">Section 8</a></li>
        <li><a href="#section-9">Section 9</a></li>
        </ul>
      </nav>
    </main>
    <header>Header Centered</header>
    <div className="container">
          <section id="section-1">
            <h1>Section 1</h1>
            </section>
          <section id="section-2">
            <h1>Section 2</h1>
            </section>
          <section id="section-3">
            <h1>Section 3</h1>
            </section>
          <section id="section-4">
            <h1>Section 4</h1>
            </section>
          <section id="section-5">
            <h1>Section 5</h1>
            </section>
          <section id="section-6">
            <h1>Section 6</h1>
            </section>
          <section id="section-7">
            <h1>Section 7</h1>
            </section>
          <section id="section-8">
            <h1>Section 8</h1>
            </section>
    </div>
  </div>
    );
  }

export default Condo;