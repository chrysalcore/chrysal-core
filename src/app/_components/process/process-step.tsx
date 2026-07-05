import { type ProcessStep } from '../../_lib/data/process'

export default function Step({ step, name, desc, days }: ProcessStep) {
    return (
        <div className="animate-[fade-step_10s_linear_both] flex flex-col items-center gap-4 p-4 min-w-[min(20rem,100%)] bg-dark rounded-lg shadow-card">
            <strong className="flex justify-center items-center w-12 h-12 text-domain text-2xl bg-primary rounded-full">{step}</strong>
            <div>
                <h3 className="text-primary">{name}</h3>
                <p className="text-sm">{desc}</p>
            </div>
            <h4 className="text-cta">Day/s {days}</h4>
        </div>
    );
}