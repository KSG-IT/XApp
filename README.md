# XApp

## Dependencies

## Installation

Install and accept the license agreements for the Android SDK.

To be able to compile the application you have to define where you have installed your Android SDK either globally, or locally in the project. To do it locally you must define the property in a file called `local.properties` which should be created in the `android/` folder. The property to be defined is `sdk.dir`.

How this file should look like depends on which OS you are running:
1. in Windows `sdk.dir = C:/Users/USERNAME/AppData/Local/Android/sdk`
2. in macOS `sdk.dir = /Users/USERNAME/Library/Android/sdk`
3. in linux `sdk.dir = /home/USERNAME/Android/Sdk`

Where `USERNAME` is the username of your computer.

## Running

1. Start the development server by running `npm start`
2. Compile the application by running `react-native run-android`

The only time you need to recompile the project is when you add change the file structure of the project, add native code or add new dependencies.

### Virtual Device


#### Linux
Install [VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads)

Install [Genymotion](https://www.genymotion.com/download)

Create and start a virtual device through Genymoiton