import { type ProcessStep } from '../../_lib/data/process'

export default function Step({ step, name, desc, days }: ProcessStep) {
    return (
        <div className="step animate">
            <strong className="step__number">{step}</strong>
            <div className="step-info">
                <h3 className="step__name">{name}</h3>
                <p className="step__desc">{desc}</p>
            </div>
            <h4 className="step__days">Day/s {days}</h4>
        </div>
    );
}