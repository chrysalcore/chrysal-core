import Project from './project';
import data from '../_lib/data/projects';

function ProjectsList({ init = 0, end = data.length }: { init?: number; end?: number }) {
    return (
        <ul className="flex max-w-dvw snap-x snap-mandatory scrollbar-none gap-4 overflow-x-auto p-4 lg:flex-wrap lg:justify-center">
            {data.slice(init, end).map((item) => (
                <Project {...item} key={item.name} />
            ))}
        </ul>
    );
}

export default ProjectsList;
