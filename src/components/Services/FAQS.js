import React, { useState } from 'react';
import styles from './Services.module.css';
import faqimage from '../../../src/assets/images/ServicesPhotos/FAQs-amico.svg'
const accordionData = [
    {
        question: 'What is insurance?',
        answer: 'Insurance is a contractual agreement between an individual and an insurance company, whereby the individual pays premiums in exchange for the promise of compensation for specified losses, damages, or liabilities.',
    },
    {
        question: 'Why do I need insurance?',
        answer: 'Insurance helps to protect you against unexpected events and provides financial security in case of accidents, illnesses, or other covered losses. It can also help you meet legal requirements and protect your assets.',
    },
    {
        question: 'How does insurance work?',
        answer: 'When you purchase insurance, you pay premiums to an insurance company, which pools your premiums with those of other policyholders. If a covered loss occurs, the insurance company uses the pooled funds to pay for the losses of the affected policyholders.',
    },
    {
        question: 'How do I choose the right insurance coverage for me?',
        answer: 'Choosing the right insurance coverage depends on your individual needs, budget, and risk tolerance. Consider your assets, potential risks, and the likelihood of experiencing a loss when selecting coverage.',
    },
    {
        question: 'What factors affect the cost of insurance?',
        answer: 'The cost of insurance is influenced by various factors, such as the type and amount of coverage, your age, driving record, credit history, and the likelihood of experiencing a loss.',
    },
    {
        question: 'How long does it take to process an insurance claim?',
        answer: 'The length of time it takes to process an insurance claim varies depending on the type of claim, the insurance company, and the complexity of the claim. Simple claims can be processed quickly, while more complex claims can take longer.',
    },
    {
        question: 'What is the difference between comprehensive and collision coverage?',
        answer: 'Comprehensive coverage typically covers damage to your vehicle caused by incidents other than collisions, such as theft, vandalism, or natural disasters. Collision coverage pays for damage to your vehicle if you collide with another vehicle or object.',
    },
    // Add other accordion sections similarly
];

const FAQS = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className={styles.faqs}>
            <div className={styles.faqdeesc}>
                <img src={faqimage} alt="FAQs" />
            </div>
            <div className={styles.questr}>
                <div className={styles.layout}>
                    {accordionData.map((item, index) => (
                        <div className={`${styles.accordion} ${activeIndex === index ? styles.active : ''}`} key={index}>
                            <div className={styles.accordion__question} onClick={() => toggleAccordion(index)}>
                                <p>{item.question}</p>
                            </div>
                            <div className={styles.accordion__answer}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.socialIcons}>
                    <div>
                        <h3>Follow us on:</h3>
                    </div>
                    <a href="#" class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook-f"></i></a>
                    <a href="#" class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="btn btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></a>
                    <a href="#" class="btn btn-social-icon btn-youtube"><i class="fa fa-youtube"></i></a>
                </div>
            </div>
        </div>
    );
}

export default FAQS;
