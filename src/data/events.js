// /Users/montysharma/Documents/V10/simplified/src/data/events.js
/**
 * Game events data file
 * Contains all event definitions for the game
 */

export const events = [
  {
    id: 'freshman_party',
    title: 'Freshman Welcome Party',
    description: 'You\'re invited to the freshman welcome party. This is a great opportunity to make new friends and connections that might help you throughout your college years.',
    choices: [
      {
        id: 'attend',
        text: 'Attend and socialize',
        effects: {
          energy: -10,
          stress: 5,
          social: 15,
        },
      },
      {
        id: 'skip',
        text: 'Skip and study instead',
        effects: {
          knowledge: 10,
          social: -5,
        },
      },
    ],
    trigger: {
      type: 'time',
      day: 3,
    },
  },
  {
    id: 'study_group',
    title: 'Study Group Invitation',
    description: 'Some classmates are forming a study group for the upcoming midterms. They\'ve invited you to join them.',
    choices: [
      {
        id: 'join',
        text: 'Join the study group',
        effects: {
          energy: -5,
          knowledge: 15,
          social: 5,
        },
      },
      {
        id: 'decline',
        text: 'Study alone',
        effects: {
          energy: -3,
          knowledge: 8,
        },
      },
    ],
    trigger: {
      type: 'time',
      day: 7,
    },
  },
  {
    id: 'mysterious_flyer',
    title: 'Mysterious Flyer',
    description: 'You find a mysterious flyer about a secret campus society meeting. The flyer mentions "shaping the future" and has cryptic symbols on it.',
    choices: [
      {
        id: 'investigate',
        text: 'Investigate the meeting',
        effects: {
          energy: -10,
          stress: 10,
          social: -5,
        },
        unlocks: 'conspiracy_thread_1',
      },
      {
        id: 'ignore',
        text: 'Ignore it as nonsense',
        effects: {
          stress: -5,
        },
      },
    ],
    trigger: {
      type: 'time',
      day: 14,
    },
  },
  {
    id: 'part_time_job',
    title: 'Part-Time Job Opportunity',
    description: 'The campus bookstore is hiring part-time staff. It doesn\'t pay much, but it\'s convenient and could help with your expenses.',
    choices: [
      {
        id: 'accept_job',
        text: 'Accept the job',
        effects: {
          energy: -5,
          money: 50,
          social: 5,
        },
        ongoing: {
          type: 'work_bonus',
          value: 2, // Extra money per work allocation point
        }
      },
      {
        id: 'decline_job',
        text: 'Focus on studies instead',
        effects: {
          knowledge: 5,
        },
      },
    ],
    trigger: {
      type: 'time',
      day: 10,
    },
  },
  {
    id: 'midterm_preparation',
    title: 'Midterm Exams Approaching',
    description: 'Midterm exams are coming up in a week. You need to decide how to prepare for them.',
    choices: [
      {
        id: 'cram',
        text: 'Cram intensively',
        effects: {
          energy: -20,
          stress: 15,
          knowledge: 25,
        },
      },
      {
        id: 'balanced',
        text: 'Study with regular breaks',
        effects: {
          energy: -10,
          stress: 5,
          knowledge: 15,
        },
      },
      {
        id: 'minimal',
        text: 'Do minimal preparation',
        effects: {
          stress: -5,
          knowledge: 5,
        },
      },
    ],
    trigger: {
      type: 'time',
      day: 21,
    },
  },
];

// getAvailableEvents function has been removed as it's not used in the application
