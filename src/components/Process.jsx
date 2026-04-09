import { useRef } from 'react';
import useReveal from '../hooks/useReveal';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Selection',
    description: 'We source the finest raw materials, ensuring they meet our strict quality criteria for camphor production.',
  },
  {
    number: '02',
    title: 'Distillation',
    description: 'Precision steam distillation processes extract pure camphor while maintaining its natural aromatic properties.',
  },
  {
    number: '03',
    title: 'Refining',
    description: 'Multistage purification removes any remaining impurities, achieving a purity level of 99.5% or higher.',
  },
  {
    number: '04',
    title: 'Forming',
    description: 'Purified camphor is shaped into tablets, blocks, or powder according to specific customer requirements.',
  },
  {
    number: '05',
    title: 'Quality Check',
    description: 'Every batch undergoes rigorous lab testing to ensure consistent aroma, purity, and burn properties.',
  },
  {
    number: '06',
    title: 'Packing',
    description: 'Products are sealed in moisture-proof, premium packaging to preserve their essence and extend shelf life.',
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="process" className="process section-padding" ref={sectionRef}>
      <div className="container">
        <div className="process-header reveal">
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">The Art of Distillation</h2>
          <p className="process-subtitle">
            Combining traditional wisdom with modern industrial precision to deliver 
            excellence in every grain of camphor we produce.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step reveal delay-${index + 1}`}
              data-cursor-hover
            >
              <div className="step-number-wrapper">
                <span className="step-number">{step.number}</span>
                <div className="step-line" />
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
