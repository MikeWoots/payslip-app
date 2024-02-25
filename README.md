# Payslip App

## Installation

```
npm install
npm run build
npx cap sync
```
Running web app locally
```
npm run dev
```
Running iOS app locally
```
npx cap run ios
```

Running Android app locally
```
npx cap run android
```

## General comments

### Further improvements

1. Empty states when there's no payslips available
2. Loading states while generating data
3. Router 404 error page
4. Unit tests for generating mock data

### Issues

1. Build issue on iOS

*Cannot code sign because the target does not have an Info.plist file and one is not being generated automatically.*

Fixed by: Pods -> Build Settings -> Packaging -> Generate Info.plist File = Yes
