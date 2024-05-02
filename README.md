# Set Up Your Environment
## Install Node.js: If not already installed, download and install Node.js from nodejs.org.
Install Visual Studio Code: Download and install Visual Studio Code from code.visualstudio.com.
## Open Visual Studio Code:
Launch VS Code.
## Open a new folder where you will create your project.
## Initialize a New Node.js Project:
Open the terminal in VS Code (Terminal > New Terminal).
Run npm init -y to create a package.json file which manages your project dependencies.
## Install TypeScript:
In the VS Code terminal, run npm install --save-dev typescript.
## Install Node.js Types:
Still in the terminal, run npm install --save-dev @types/node.
## Create a TypeScript Configuration File:
Run npx tsc --init to create a tsconfig.json file.
## Open tsconfig.json and make sure the compilerOptions are set as follows:
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
}

# Compile and Run Your TypeScript Code
## Compile TypeScript to JavaScript:
Run npx tsc in the terminal. This compiles replaceKeys.ts to replaceKeys.js.
## Run the Compiled JavaScript:
Execute node replaceKeys.js in the terminal to run your script.
After these steps, your data.json file should be updated to have keys "Bar" where it previously had "Foo".
