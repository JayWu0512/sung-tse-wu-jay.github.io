// src/Pages/Technologies.js

import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    js,
    react,
    tailwind,
    python,
    mysql,
    postgresql,
    vscode,
    git,
    github,
    npm,
    pycharm,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={html} title="HTML" alt="HTML" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={js} title="JavaScript" alt="JavaScript" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={react} title="React" alt="React" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">React</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={python} title="Python" alt="Python" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={mysql} title="Mysql" alt="Mysql" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">MYSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={postgresql} title="Postgresql" alt="Postgresql" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">POSTGRESQL</p>
        </div>
      </section>
      
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Visual Studio Code</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={git} title="Git" alt="Git" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Git</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={github} title="Github" alt="Github" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Github</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={npm} title="NPM" alt="NPM" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">NPM</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={pycharm} title="Pycharm" alt="Pycharm" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Pycharm</p>
        </div>
      </section>
    </main>
  );
}

export default Technologies;

