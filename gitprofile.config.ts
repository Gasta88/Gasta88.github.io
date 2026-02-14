// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Gasta88', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 30, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['Gasta88/halloween-costume-qr'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Gasta88/lottery_udac', 'Gasta88/les-etl-pipeline', 'Gasta88/recommender-graph-db', 'Gasta88/glue-etl-pipeline'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
    },
  },
  seo: {
    title: 'Portfolio of Francesco Gastaldello',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'fgastaldello',
    email: 'gasta88@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://www.dropbox.com/scl/fi/7ei32ep4bja0397c2urve/FrancescoGastaldello_CV_short.pdf?rlkey=iru4cglg7kl12n28oap815icw&st=qwqu8ia1&dl=0', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'data management',
    'data architecture',
    'data integrity',
    'data validation',
    'data quality',
    'data modelling',
    'data warehouse',
    'data observability/monitoring',
    'data lake',
    'Jython',
    'Python',
    'R',
    'Jupyter Notebook',
    'scikit-learn',
    'Apache Spark/Pyspark',
    'Unix',
    'Excel VBA',
    'Docker',
    'Git',
    'AWS EMR',
    'AWS S3',
    'Gitlab CI/CD',
    'Apache Airflow',
    'Kibana',
    'AWS Glue',
    'DBT',
    'Oracle',
    'Postgres',
    'MS SQL Server',
    'Apache Cassandra',
    'MongoDB',
    'AWS Redshift',
    'Neo4j',
    'AWS Athena',
    'ElasticSearch',
    'Milvus',
    'AWS DynamoDB',
    'Terraform',
    'Kubernetes',
    'Looker',
    'Google Dataproc Serverless Batches',
    'Google BigQuery',
    'Google Dataform',
    'Google Cloud Run',
    'Google Cloud Functions'
  ],
  experiences: [
    {
      company: 'JustPlay GmbH',
      position: 'Senior Data Engineer',
      from: 'November 2023',
      to: 'Present',
      companyLink: 'https://justplayapps.com',
    },
    {
      company: 'Algoritmica GmbH',
      position: 'Principal Data Engineer',
      from: 'October 2022',
      to: 'December 2023',
      companyLink: 'https://algoritmica.ai',
    },
    {
      company: 'Docebo',
      position: 'AI Data Engineer',
      from: 'November 2021',
      to: 'November 2023',
      companyLink: 'https://www.docebo.com',
    },
    {
      company: 'Sysmex Inostics GmbH',
      position: 'Data Manager',
      from: 'May 2019',
      to: 'November 2021',
      companyLink: 'https://sysmex-inostics.com',
    },
    {
      company: 'University of Dundee - Drug Discovery Unit',
      position: 'Informatics Manager',
      from: 'June 2013',
      to: 'May 2019',
      companyLink: 'https://drugdiscovery.dundee.ac.uk',
    },
  ],
  certifications: [
    {
      name: 'Udacity Data Engineering Nanodegree',
      body: 'Certificate of Completion',
      year: 'November 2021',
      link: 'www.udacity.com/certificate/e/2f250496-99f3-11eb-a9fb-2333ce661749',
    },
  ],
  educations: [
    {
      institution: 'University of Surrey, UK',
      degree: 'MSc in Drug Discovery',
      from: '2011',
      to: '2012',
    },
    {
      institution: 'Università di Verona, Italy',
      degree: 'BSc in Bioinformatics',
      from: '2007',
      to: '2010',
    },
  ],
  // publications: [
  //   {
  //     title: '',
  //     conferenceName: '',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
