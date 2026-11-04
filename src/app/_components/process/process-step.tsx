import { type ProcessStep } from '../../_lib/data/process'

export default function Step({ step, name, desc, days }: ProcessStep) {
    return (
        <div className="animate-[fade-step_10s_linear_both] flex flex-col items-start gap-4 p-6 min-w-[min(20rem,100%)] bg-surface/50 backdrop-blur-sm rounded-lg shadow-card">
            <strong className="flex justify-center items-center w-12 h-12 text-on-accent text-2xl bg-accent rounded-full">{step}</strong>
            <div className="flex flex-col gap-2">
                <h3 className="text-accent text-lg font-medium">{name}</h3>
                <p>{desc}</p>
            </div>
            <p className="text-highlight text-sm uppercase tracking-widest">Day/s {days}</p>
        </div>
    );
}
