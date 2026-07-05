import Project from './project';
import data from '../_lib/data/projects';

function ProjectsList({ init = 0, end = data.length }: { init?: number; end?: number }) {
    return (
        <ul className="projects-list">
            {data.slice(init, end).map((item) => (
                <Project {...item} key={item.name} />
            ))}
        </ul>
    );
}

export default ProjectsList;