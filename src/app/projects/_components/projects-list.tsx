import Project from './project';
import data from '../_lib/data/projects';

function ProjectsList({ init = 0, end = data.length }: { init?: number; end?: number }) {
    return (
        <ul className="flex gap-4 p-4 max-w-dvw overflow-x-auto snap-x snap-mandatory scrollbar-none lg:flex-wrap lg:justify-center">
            {data.slice(init, end).map((item) => (
                <Project {...item} key={item.name} />
            ))}
        </ul>
    );
}

export default ProjectsList;