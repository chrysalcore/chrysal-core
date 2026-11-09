import { type ProcessStep } from '../../_lib/data/process';

export default function Step({ step, name, desc, days }: ProcessStep) {
    return (
        <div className="shadow-card flex min-w-[min(20rem,100%)] animate-[fade-step_10s_linear_both] flex-col items-start gap-4 rounded-lg bg-surface/50 p-6 backdrop-blur-sm">
            <strong className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl text-on-accent">
                {step}
            </strong>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-accent">{name}</h3>
                <p>{desc}</p>
            </div>
            <p className="text-sm tracking-widest text-highlight uppercase">Day/s {days}</p>
        </div>
    );
}
