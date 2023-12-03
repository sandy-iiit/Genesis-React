import React from 'react';
import styles from './Services.module.css';
import insurancephoto from '../../assets/images/ServicesPhotos/Insurance-bro.svg'
function QueryGenerator() {
  return (
    <div className={styles.querygen}>
      <div className={styles.imaw}>
        <img src={insurancephoto} alt="qutt" />
      </div>
      <div className={styles.qrygen}>
        <h2>Grab a Quote</h2>
        <form className={styles.quoteform} id="myForm1">

          <input type="text" placeholder="name" name="quotnam" id="quotnam" />
          <span id="quotnamError" className={styles.error}></span>

          <input type="text" placeholder="email" name="quotemail" id="quotemail" />
          <span id="quotemailError" className={styles.error}></span>

          <input type="text" placeholder="insurance type" name="quotinsurance" id="quotinsurance" />
          <span id="quotinsuranceError" className={styles.error}></span>

          <input type="text" placeholder="zip code" name="quotzip" id="quotzip" />
          <span id="quotzipError" className={styles.error}></span>

          <input type="text" placeholder="age" name="quotage" id="quotage" />
          <span id="quotageError" className={styles.error}></span>

          <input type="text" placeholder="coverage limit" name="quotcoverage" id="quotcoverage" />
          <span id="quotcoverageError" className={styles.error}></span>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default QueryGenerator;
