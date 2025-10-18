export type Technique = {
  name: string;
  description: string;
};

export type TechniqueDomain = {
  name: string;
  techniques: Technique[];
};

export const techniquesData: TechniqueDomain[] = [
  {
    name: 'Prioritization and Planning',
    techniques: [
      {
        name: 'Eat the Frog',
        description: 'Tackle your most challenging task first thing in the morning.',
      },
      {
        name: 'The Eisenhower Matrix',
        description: 'Categorize tasks based on urgency and importance: Do, Decide, Delegate, Delete.',
      },
      {
        name: 'The Pareto Principle (80/20 Rule)',
        description: 'Focus on the 20% of tasks that will yield 80% of the results.',
      },
      {
        name: 'The Ivy Lee Method',
        description: 'At the end of each day, list the six most important tasks for the next day in order of priority.',
      },
      {
        name: 'SMART Goals',
        description: 'Set goals that are Specific, Measurable, Achievable, Relevant, and Time-bound.',
      },
      {
        name: 'The 1-3-5 Rule',
        description: 'Each day, plan to accomplish one big thing, three medium things, and five small things.',
      },
      {
        name: 'Planning the day in advance',
        description: 'Spend time the night before or first thing in the morning to plan your day.',
      },
      {
        name: 'The Commitment Inventory',
        description: 'Regularly review your commitments and eliminate those that aren’t aligned with your goals.',
      },
    ],
  },
  {
    name: 'Time and Task Management',
    techniques: [
      {
        name: 'The Pomodoro Technique',
        description: 'Work in focused 25-minute intervals, separated by short breaks.',
      },
      {
        name: 'Timeblocking',
        description: 'Schedule blocks of time for specific tasks or activities in your calendar.',
      },
      {
        name: 'Task Batching',
        description: 'Group similar tasks together and do them in one go.',
      },
      {
        name: 'The Two-Minute Rule',
        description: 'If a task takes less than two minutes to complete, do it immediately.',
      },
      {
        name: 'Getting Things Done (GTD)',
        description: 'A system to capture, clarify, organize, reflect, and engage with your tasks and commitments.',
      },
      {
        name: 'Inbox Zero',
        description: 'Process your email inbox down to zero messages at the end of each day.',
      },
      {
        name: 'Breaking tasks into smaller steps',
        description: 'Divide large, overwhelming tasks into smaller, more manageable sub-tasks.',
      },
      {
        name: 'Automating routine tasks',
        description: 'Use tools and technology to automate repetitive tasks.',
      },
      {
        name: 'Creating a "To-Don\'t" list',
        description: 'Identify and list things you should actively avoid doing to stay focused.',
      },
      {
        name: 'Using task management and project management software',
        description: 'Leverage digital tools to organize, track, and manage your work.',
      },
    ],
  },
  {
    name: 'Focus and Concentration',
    techniques: [
      {
        name: 'Single-tasking',
        description: 'Focus on one task at a time instead of multitasking.',
      },
      {
        name: 'Mindfulness and meditation',
        description: 'Practice mindfulness to improve your ability to focus and manage distractions.',
      },
      {
        name: 'Controlling devices and notifications',
        description: 'Turn off non-essential notifications and set specific times to check your phone.',
      },
      {
        name: 'Using website and app blockers',
        description: 'Use software to block distracting websites and applications during work periods.',
      },
      {
        name: 'Setting designated focus hours',
        description: 'Block out specific times in your day for deep, uninterrupted work.',
      },
      {
        name: 'Working in a flow state',
        description: 'Create an environment and mindset conducive to entering a state of deep focus and immersion.',
      },
      {
        name: 'Changing the work environment',
        description: 'Optimize your physical workspace to minimize distractions and enhance focus.',
      },
    ],
  },
  {
    name: 'Health and Wellness',
    techniques: [
      {
        name: 'Taking regular breaks',
        description: 'Step away from your work at regular intervals to rest and recharge.',
      },
      {
        name: 'Getting quality sleep',
        description: 'Prioritize getting enough high-quality sleep to improve cognitive function.',
      },
      {
        name: 'Regular exercise',
        description: 'Incorporate physical activity into your routine to boost energy and focus.',
      },
      {
        name: 'A healthy diet',
        description: 'Eat nutritious food to fuel your brain and body for optimal performance.',
      },
      {
        name: 'Working with your biological prime time',
        description: 'Identify your most productive hours of the day and schedule your most important tasks then.',
      },
    ],
  },
  {
    name: 'Habits and Mindset',
    techniques: [
      {
        name: 'Zen to Done (ZTD)',
        description: 'A simple, habit-based system to get organized and focused.',
      },
      {
        name: 'Don\'t Break the Chain',
        description: 'A method for building new habits by marking off each day you stick to your goal on a calendar.',
      },
      {
        name: 'Positive self-talk',
        description: 'Replace negative thoughts with positive and encouraging ones.',
      },
      {
        name: 'Practicing saying "No"',
        description: 'Learn to decline requests and commitments that don’t align with your priorities.',
      },
      {
        name: 'Learning to recover quickly from distractions',
        description: 'Develop strategies to refocus quickly after being interrupted.',
      },
      {
        name: 'Letting go of perfectionism',
        description: 'Focus on progress over perfection to avoid getting stuck.',
      },
    ],
  },
  {
    name: 'Environmental Adjustments',
    techniques: [
      {
        name: 'Decluttering the workspace',
        description: 'Keep your physical and digital workspaces clean and organized.',
      },
      {
        name: 'Adding natural light and plants',
        description: 'Improve your work environment with natural elements.',
      },
      {
        name: 'Using specific music for focus',
        description: 'Listen to ambient, classical, or instrumental music to enhance concentration.',
      },
    ],
  },
  {
    name: 'Team and Communication',
    techniques: [
      {
        name: 'Delegating tasks',
        description: 'Assign tasks to others to free up your time for more critical work.',
      },
      {
        name: 'Minimizing unnecessary meetings',
        description: 'Reduce time spent in meetings that are not productive.',
      },
      {
        name: 'Improving communication clarity',
        description: 'Communicate clearly and concisely to avoid misunderstandings and rework.',
      },
      {
        name: 'Providing supportive management',
        description: 'Foster a supportive and productive team environment.',
      },
    ],
  },
];
