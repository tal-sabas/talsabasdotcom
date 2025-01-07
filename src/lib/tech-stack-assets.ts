export const getTechStacks = () => {
    // return an array with each element being a filepath from the public directory
    // The filepaths will be used to display images of the tech stacks
    // TODO: One for Docker and Kubernetes
    // https://devicon.dev/
    return [
        '/NodeJs.svg',
        '/AWS.png',
        '/Spring_Boot.png',
        '/next.svg',
        // '/lambda.png',
        '/snowflake.png',
        // '/s3.svg',
        '/matillion.png',
        '/tableau.png',
        '/react.png',
        '/spark-logo.png',
        '/postgres.png'
    ];
}

/**
Could do interactive cards with high level groupings. Clicking on a card or hovering over it will flip the card,
and then I could provide some more context?

- Web Development
- Data & Analytics
- Cloud Infrastructure & Devops
 */