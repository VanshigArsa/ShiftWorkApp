Тестовое задание: React Native приложение (CLI)
Создать небольшое приложение на React Native (CLI, без Expo), которое показывает список доступных смен для подработки, полученных по геолокации пользователя.

UI, организацию кода, структуру проекта и другие архитектурные решения кандидат выбирает самостоятельно.

Функциональные требования
При первом запуске запросить точную геолокацию пользователя.
Получить список смен в городе, передав координаты пользователя в запрос.
Пример запроса:
https://mobile.handswork.pro/api/shift...=38.987221
Отобразить список смен с краткой информацией.
По нажатию на элемент списка открыть экран с подробными данными выбранной смены.
Данные для экрана деталей брать из ранее полученного списка (без повторного запроса, если нет необходимости обновления).
Весь процесс разработки разбить на коммиты и опубликовать в публичном репозитории GitHub.
Ограничения
Не использовать Expo и аналогичные инструменты — только React Native CLI.
Допустимая реализация навигации, состояния, верстки — на усмотрение кандидата.
Для состояния предпочтительно использовать MobX.
Вёрстка должна демонстрировать оптимизацию и понимание работы с React.
Описание данных (поля возвращаемого объекта смены)
logo – ссылка на логотип нанимателя
address – адрес проведения смены
companyName – имя компании нанимателя
dateStartByCity – дата начала смены
timeStartByCity – время начала
timeEndByCity – время окончания
currentWorkers – сколько людей уже набрано (может быть больше требуемого)
planWorkers – сколько людей требуется
workTypes – наименование типа услуги
priceWorker – сумма выплаты за смену (в рублях)
customerFeedbacksCount – количество отзывов о клиенте
customerRating – рейтинг нанимателя (максимум 5)
Требования к репозиторию
История коммитов должна отражать поэтапную реализацию.
Репозиторий открыт (public) на GitHub.
В корне репозитория файл README.md с описанием задания (можно использовать этот текст).

cat > README.md << 'EOF'
# ShiftWork App

A React Native application that displays available work shifts based on user's geolocation.

## Features

- Geolocation-based shift discovery
- List of available shifts with key details
- Detailed shift information
- Employer ratings and reviews
- Shift pricing information
- Worker capacity tracking

## Tech Stack

- **Framework**: React Native (CLI)
- **Language**: TypeScript
- **State Management**: MobX
- **Navigation**: React Navigation
- **HTTP Client**: Axios
- **Geolocation**: react-native-geolocation-service

## Project Requirements

### Functional Requirements
- Request precise geolocation on first launch
- Fetch shifts list using user coordinates
- Display shifts list with brief information
- Show detailed shift information on tap
- Use previously fetched data (no additional API calls)

### Technical Stack
- React Native CLI (no Expo)
- MobX for state management
- TypeScript for type safety
- Optimized React components

### Data Fields Displayed
- Company logo and name
- Shift address
- Date and time
- Worker capacity (current/required)
- Work type
- Price per shift
- Employer rating and review count

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/ShiftWorkApp.git
   cd ShiftWorkApp

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> Note: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run Metro, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.
B
## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
B
