export default defineEventHandler(async (event) => {

    const { githubToken } = useRuntimeConfig(event);

    const result: any[] = await $fetch('https://api.github.com/users/nickypangers/repos', {
        headers: {
            Authorization: 'Bearer ' + githubToken
        }
    })

    // let projects = result.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);
    let projects = result.filter(({ stargazers_count, archived }) => stargazers_count > 1 && !archived).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);

    let formattedProject = await Promise.all(projects.map(async (project) => {
        let stargazers: any[] = await $fetch(project.stargazers_url, {
            headers: {
                Authorization: 'Bearer ' + githubToken,
            }
        });

        let language_url: string | null = null;
        switch (project.language) {
            case 'TypeScript':
                language_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg';
                break;
            case 'Dart':
                language_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg';
                break;
            case 'Vue':
                language_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg';
                break;
            case 'JavaScript':
                language_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg';
                break;
            case 'Go':
                language_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg';
                break;
            default: break;
        }

        return { ...project, language_url, stargazers: stargazers.map(({ node_id, login, avatar_url }) => ({ node_id, login, avatar_url })) }
    }))

    return formattedProject;
})