# XApp

## Dependencies

| Name | Version | Usage |
| ------ | ------ | ------ |
| | | |


## Installation

1. Make sure you have the following installed, and added to PATH:
- [Android SDK](https://developer.android.com/studio/index.html)
- [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [NPM](https://www.npmjs.com/)
- [react-native-cli](https://www.npmjs.com/package/react-native-cli)

2. To be able to compile the application you have to define where you have installed your Android SDK either globally, or locally in the project. To do it locally you must define the property in a file called `local.properties` which should be created in the `android/` folder. The property to be defined is `sdk.dir`. How this file should look like depends on which OS you are running:

```
Windows: `sdk.dir = C:/Users/*USERNAME*/AppData/Local/Android/sdk`
MacOS: `sdk.dir = /Users/*USERNAME*/Library/Android/sdk`
Linux: `sdk.dir = /home/*USERNAME*/Android/Sdk`
```

Where `*USERNAME*` is the username of your computer.


3. Install project dependencies by running `npm install`

## Running

1. Start the development server by running `npm start`
2. Compile the application by running `react-native run-android`
3. Make sure the `Debug server host & port for device` setting is pointed to the development server under `Development Settings` on your phone.

The only time you need to recompile the project is when you either add/change native code, or add new dependencies.

### Virtual Device
You can use the following software to run the application virtually on your computer.

#### Linux
Install [VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads)

Install [Genymotion](https://www.genymotion.com/download)

Create and start a virtual device through Genymoiton

## Deploy
1. Make sure you have added the keystore in `./android/app`, and defined the keystore properties in `~/.gradle/gradle.properties`
2. Run `./gradlew assembleRelease` from `./android`
3. Deploy apk to device by `adb -s ce05171539f8d13405 install app/build/outputs/apk/app-release.apk`

## Tips
1. Reload from the terminal `adb shell input text "RR"`
2. With more devices connected you can specify device with `adb -s device-name`, `adb devices` lists names for all connected devices