import Project from './project';
import data, { type Project as ProjectData } from '../_lib/data/projects';

function ProjectsList({ kinds }: { kinds: ProjectData['kind'][] }) {
    return (
        <ul className="flex max-w-dvw snap-x snap-mandatory scrollbar-none gap-4 overflow-x-auto p-4 lg:flex-wrap lg:justify-center">
            {data
                .filter((item) => kinds.includes(item.kind))
                .map((item) => (
                    <Project {...item} key={item.name} />
                ))}
        </ul>
    );
}

export default ProjectsList;
