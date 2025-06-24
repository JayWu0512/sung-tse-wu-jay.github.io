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
    pycharm,
    groovy,
    gitlab,
    katalon,
    postman,
    anaconda,
    markdown,
    typescript,
    golang,
    php,
    angular,
    sass,
    docker,
    podman,
    linux,
    powershell,
    llm,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
      </section>

      <section>
        <p className="text-content py-2 lg:max-w-3xl">
          <strong>Frontend Technologies:</strong>
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={js} title="JavaScript" alt="JavaScript" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={typescript} title="Typescript" alt="Typescript" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Typescript</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={html} title="HTML" alt="HTML" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-20 h-20">
            <img src={sass} title="Sass(Scss)" alt="Sass(Scss)" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Sass(Scss)</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={react} title="React" alt="React" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">React</p>
        </div>
        <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-20 h-20">
            <img src={angular} title="Angular" alt="Angular" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Angular</p>
        </div>
      </section>


      <section>
        <p className="text-content py-2 lg:max-w-3xl">
          <strong>Backend and Database Technologies:</strong>
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={python} title="Python" alt="Python" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={groovy} title="Groovy" alt="Groovy" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Groovy</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={golang} title="Golang" alt="Golang" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Golang</p>
        </div>
        <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-20 h-20">
            <img src={php} title="PHP" alt="PHP" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">PHP</p>
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
      

      
      {/* <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section>
        <p className="text-content py-2 lg:max-w-3xl">
          <strong>IDE & Environment:</strong>
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={pycharm} title="Pycharm" alt="Pycharm" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Pycharm</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={anaconda} title="Anaconda" alt="Anaconda" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Anaconda</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Visual Studio Code</p>
        </div>
      </section>

      <section>
        <p className="text-content py-2 lg:max-w-3xl">
          <strong>Version Control & CI/CD:</strong>
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
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
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">GitHub</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={gitlab} title="Gitlab" alt="Gitlab" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">GitLab(CI/CD)</p>
        </div>
      </section>


      <section>
        <p className="text-content py-2 lg:max-w-3xl">
          <strong>API & Testing:</strong>
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={katalon} title="Katalon" alt="Katalon" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Katalon</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={postman} title="Postman" alt="Postman" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Postman</p>
        </div>
      </section>


      <section>
        <p className="text-content py-2 lg:max-w-3xl">
          <strong>Containerization:</strong>
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={docker} title="Docker" alt="Docker" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Docker</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={podman} title="Podman" alt="Podman" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Podman</p>
        </div>
      </section>

      <section>
        <p className="text-content py-2 lg:max-w-3xl">
          <strong>Shell & OS:</strong>
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={linux} title="Linux" alt="Linux" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Linux</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={powershell} title="Powershell" alt="Powershell" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Powershell</p>
        </div>
      </section>


      <section>
        <p className="text-content py-2 lg:max-w-3xl">
          <strong>Others:</strong>
        </p>
      </section>      
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={llm} title="LLM" alt="LLM" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">LLM</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20">
            <img src={markdown} title="Markdown" alt="Markdown" className="max-h-full max-w-full" />
          </div>
          <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Markdown</p>
        </div>
      </section> */}


      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-6">
        {/* left Tools */}
        <div className="flex flex-col gap-10">
          {/* IDE & Environment */}
          <div>
            <p className="text-content py-2"><strong>IDE & Environment:</strong></p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={pycharm} title="Pycharm" alt="Pycharm" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Pycharm</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={anaconda} title="Anaconda" alt="Anaconda" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Anaconda</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Visual Studio Code</p>
              </div>
            </div>
          </div>

          {/* Version Control & CI/CD */}
          <div>
            <p className="text-content py-2"><strong>Version Control & CI/CD:</strong></p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-3">
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
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">GitHub</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={gitlab} title="Gitlab" alt="Gitlab" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">GitLab(CI/CD)</p>
              </div>
            </div>
          </div>

          {/* Shell & OS */}
          <div>
            <p className="text-content py-2"><strong>Shell & OS:</strong></p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={linux} title="Linux" alt="Linux" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Linux</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={powershell} title="Powershell" alt="Powershell" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Powershell</p>
              </div>
            </div>
          </div>
        </div>

        {/* right Tools */}
        <div className="flex flex-col gap-10">
          {/* API & Testing */}
          <div>
            <p className="text-content py-2"><strong>API & Testing:</strong></p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={katalon} title="Katalon" alt="Katalon" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Katalon</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={postman} title="Postman" alt="Postman" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Postman</p>
              </div>
            </div>
          </div>

          {/* Containerization */}
          <div>
            <p className="text-content py-2"><strong>Containerization:</strong></p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={docker} title="Docker" alt="Docker" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Docker</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={podman} title="Podman" alt="Podman" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Podman</p>
              </div>
            </div>
          </div>

          {/* Others */}
          <div>
            <p className="text-content py-2"><strong>Others:</strong></p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={llm} title="LLM" alt="LLM" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">LLM</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img src={markdown} title="Markdown" alt="Markdown" className="max-h-full max-w-full" />
                </div>
                <p className="text-center h-8 mt-3 text-dark-heading dark:text-light-heading">Markdown</p>
              </div>
            </div>
          </div>
        </div>
      </section>




    </main>
  );
}

export default Technologies;

