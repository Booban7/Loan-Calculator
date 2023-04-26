import React from 'react';
import styles from './Calculation.module.scss';

function calculateInterest(loanAmount: number, durationYears: number): number {
    const interestRate = 0.099;
    const durationMonths = durationYears * 12;
    const monthlyInterestRate = interestRate / 12;
    const interest = loanAmount * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, durationMonths));
    return Math.round(interest);
}

const loanAmount = 100000;
const durationYears = 3;
const totalInterest = calculateInterest(loanAmount, durationYears);
console.log(totalInterest);




const Calculation = () => (
  <div className={styles.Calculation}>
    <h1>{totalInterest} SEK</h1>
  </div>
);

export default Calculation;
