import color from 'picocolors';
import * as clack from '@clack/prompts';
import fs from 'fs';

const main = async () => {
  console.clear();

  clack.intro(`${color.bold(color.blue('Hello, welcome to the luk-modules CLI!'))}`);

  // project type question
  const projectType = await clack.select({
    message: `${color.green(
      color.bold('What type of project are you currently developing?')
    )}`,
    options: [
      { value: 'frontend', label: 'Frontend (React)' },
      { value: 'backend', label: 'Backend (Express)' },
    ],
  });

  // is using typescript question
  const usingTypeScript = await clack.select({
    message: `${color.green(color.bold('Are you using TypeScript?'))}`,
    options: [
      { value: true, label: 'Yes' },
      { value: false, label: 'No' },
    ],
  });

  // module name question
  const moduleName = await clack.text({
    message: `${color.green(color.bold('Type the name of the module:'))}`,
  });

  // module route question
  const moduleRoute = await clack.text({
    message: `${color.green(color.bold('Type the route to create the module'))}`,
    placeholder: 'The route must exist',
  });

  if (projectType === 'frontend') {
    await fs.mkdir(`${moduleRoute.toString()}/${moduleName.toString()}`, (err) => {
      if (err) throw err;
    });

    await fs.writeFile(
      usingTypeScript
        ? `${moduleRoute.toString()}/${moduleName.toString()}/${moduleName.toString()}.ts`
        : `${moduleRoute.toString()}/${moduleName.toString()}/${moduleName.toString()}.js`,
      '',
      (err) => {
        if (err) throw err;
      }
    );

    await fs.writeFile(
      usingTypeScript
        ? `${moduleRoute.toString()}/${moduleName.toString()}/index.ts`
        : `${moduleRoute.toString()}/${moduleName.toString()}/index.js`,
      '',
      (err) => {
        if (err) throw err;
      }
    );
  }

  if (projectType === 'backend') {
    await fs.mkdir(`${moduleRoute.toString()}/${moduleName.toString()}`, (err) => {
      if (err) throw err;
    });

    await fs.writeFile(
      usingTypeScript
        ? `${moduleRoute.toString()}/${moduleName.toString()}/${moduleName.toString()}.routes.ts`
        : `${moduleRoute.toString()}/${moduleName.toString()}/${moduleName.toString()}.routes.js`,
      '',
      (err) => {
        if (err) throw err;
      }
    );

    await fs.writeFile(
      usingTypeScript
        ? `${moduleRoute.toString()}/${moduleName.toString()}/index.ts`
        : `${moduleRoute.toString()}/${moduleName.toString()}/index.js`,
      '',
      (err) => {
        if (err) throw err;
      }
    );

    await fs.mkdir(
      `${moduleRoute.toString()}/${moduleName.toString()}/controllers`,
      (err) => {
        if (err) throw err;
      }
    );

    await fs.mkdir(
      `${moduleRoute.toString()}/${moduleName.toString()}/services`,
      (err) => {
        if (err) throw err;
      }
    );
  }
};

main();
