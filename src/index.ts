import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import color from 'picocolors';

const main = async () => {
  console.clear();

  p.intro(`${color.blue('Hello, welcome to the luk-modules CLI!')}`);

  const projectType = await p.select({
    message: `${color.green(
      color.bold('What type of project are you currently developing?')
    )}`,
    options: [
      { value: 'frontend', label: 'Frontend (React)' },
      { value: 'backend', label: 'Backend (Express)' },
    ],
  });

  console.log(projectType);
};

main();
